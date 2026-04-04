import { useEffect } from 'react';
import BLOGS from '../../config/blogs';
import usePageSEO from '../../hooks/usePageSEO';
import { ArrowLeft } from 'lucide-react';

export default function BlogPage({ id, onBack }) {
    const blog = BLOGS.find(b => b.id === id);

    /* ── Dynamic SEO per blog ── */
    usePageSEO(blog ? {
        title: `${blog.title} | Dr. Harsha M T — Health Blog`,
        description: blog.excerpt,
        path: `/blog/${id}`,
        image: blog.hero,
        type: 'article',
    } : undefined);

    /* ── JSON-LD: Article schema ── */
    useEffect(() => {
        if (!blog) return;
        const schema = {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": blog.title,
            "description": blog.excerpt,
            "image": blog.hero,
            "datePublished": blog.date,
            "url": `https://drharshamt.com/blog/${blog.id}`,
            "author": {
                "@type": "Physician",
                "name": "Dr. Harsha M T",
                "url": "https://drharshamt.com"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Dr. Harsha M T — Interventional Radiologist"
            },
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://drharshamt.com/blog/${blog.id}`
            },
            "articleSection": blog.cat
        };
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = 'blog-schema';
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
        return () => document.getElementById('blog-schema')?.remove();
    }, [id, blog]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!blog) {
        return (
            <div style={{
                padding: 100,
                textAlign: "center",
                color: "#fff",
                background: "#071426",
                minHeight: "100vh"
            }}>
                Blog not found.
            </div>
        );
    }

    return (
        <div style={{ background: "#FAFBFC", minHeight: "100vh" }}>

            {/* Hero */}
            <div style={{ position: "relative", height: 380, overflow: "hidden" }}>
                <img src={blog.hero} alt={`${blog.title} — Dr. Harsha M T health blog`} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, rgba(7,20,38,0.3) 0%, rgba(7,20,38,0.85) 100%)"
                }} />
                <div style={{
                    position: "absolute",
                    bottom: 40,
                    left: 0,
                    right: 0,
                    maxWidth: 760,
                    margin: "0 auto",
                    padding: "0 24px"
                }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                        <span style={{
                            fontSize: 10,
                            fontWeight: 600,
                            color: "#5EEAD4",
                            fontFamily: "'Roboto', sans-serif",
                            background: "rgba(13,148,136,0.2)",
                            padding: "4px 12px",
                            borderRadius: 100,
                            letterSpacing: "0.03em",
                            textTransform: "uppercase"
                        }}>{blog.cat}</span>
                        <span style={{
                            fontSize: 12,
                            color: "rgba(255,255,255,0.5)",
                            fontFamily: "'Roboto', sans-serif"
                        }}>{blog.read}</span>
                        <span style={{
                            fontSize: 12,
                            color: "rgba(255,255,255,0.4)",
                            fontFamily: "'Roboto', sans-serif"
                        }}>•</span>
                        <span style={{
                            fontSize: 12,
                            color: "rgba(255,255,255,0.5)",
                            fontFamily: "'Roboto', sans-serif"
                        }}>{blog.date}</span>
                    </div>
                    <h1 style={{
                        fontFamily: "'Roboto Slab', serif",
                        fontSize: "clamp(24px, 4vw, 38px)",
                        fontWeight: 700,
                        color: "#fff",
                        lineHeight: 1.2
                    }}>{blog.title}</h1>
                </div>
            </div>

            {/* Content */}
            <div style={{ maxWidth: 760, margin: "0 auto", padding: "50px 24px 80px" }}>
                <button
                    onClick={onBack}
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        background: "none",
                        border: "1px solid rgba(0,0,0,0.1)",
                        color: "rgba(7,20,38,0.6)",
                        padding: "8px 16px",
                        borderRadius: 8,
                        fontSize: 13,
                        fontFamily: "'Roboto', sans-serif",
                        cursor: "pointer",
                        marginBottom: 36,
                        fontWeight: 500
                    }}
                > <ArrowLeft size={14} /> Back to Blog</button>

                <article>
                    {blog.content.map((section, i) => {
                        if (section.type === "intro") {
                            return (
                                <p
                                    key={i}
                                    style={{
                                        fontFamily: "'Roboto', sans-serif",
                                        fontSize: 17,
                                        color: "rgba(7,20,38,0.75)",
                                        lineHeight: 1.8,
                                        marginBottom: 32,
                                        fontStyle: "italic"
                                    }}
                                >{section.text}</p>
                            );
                        }

                        if (section.type === "heading") {
                            return (
                                <h2
                                    key={i}
                                    style={{
                                        fontFamily: "'Roboto Slab', serif",
                                        fontSize: 24,
                                        fontWeight: 700,
                                        color: "#071426",
                                        marginTop: 36,
                                        marginBottom: 16
                                    }}
                                >{section.text}</h2>
                            );
                        }

                        if (section.type === "paragraph") {
                            return (
                                <p
                                    key={i}
                                    style={{
                                        fontFamily: "'Roboto', sans-serif",
                                        fontSize: 15,
                                        color: "rgba(7,20,38,0.7)",
                                        lineHeight: 1.8,
                                        marginBottom: 20
                                    }}
                                >{section.text}</p>
                            );
                        }

                        if (section.type === "list") {
                            return (
                                <ul
                                    key={i}
                                    style={{
                                        fontFamily: "'Roboto', sans-serif",
                                        fontSize: 15,
                                        color: "rgba(7,20,38,0.7)",
                                        lineHeight: 1.8,
                                        marginBottom: 20,
                                        paddingLeft: 24
                                    }}
                                >
                                    {section.items.map((item, j) => (
                                        <li key={j} style={{ marginBottom: 8 }}>{item}</li>
                                    ))}
                                </ul>
                            );
                        }

                        return null;
                    })}
                </article>

                {/* Author */}
                <div style={{
                    marginTop: 48,
                    padding: 24,
                    background: "#fff",
                    border: "1px solid rgba(0,0,0,0.06)",
                    borderRadius: 14,
                    display: "flex",
                    gap: 16,
                    alignItems: "center"
                }}>
                    <div style={{
                        width: 60,
                        height: 60,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #0D9488, #14B8A6)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 24,
                        fontWeight: 700,
                        color: "#fff",
                        fontFamily: "'Roboto Slab', serif",
                        flexShrink: 0
                    }}>H</div>
                    <div>
                        <div style={{
                            fontSize: 16,
                            fontWeight: 700,
                            color: "#071426",
                            fontFamily: "'Roboto', sans-serif",
                            marginBottom: 4
                        }}>Dr. Harsha M T</div>
                        <div style={{
                            fontSize: 13,
                            color: "rgba(7,20,38,0.5)",
                            fontFamily: "'Roboto', sans-serif",
                            lineHeight: 1.5
                        }}>Consultant Vascular & Interventional Radiologist<br />MBBS • MD (PGIMER) • FVIR (AIIMS Rishikesh) • EBIR • EDiR</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
