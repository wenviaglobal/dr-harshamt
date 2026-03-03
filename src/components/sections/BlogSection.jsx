import FadeIn from '../common/FadeIn';
import SectionHead from '../common/SectionHead';
import BLOGS from '../../config/blogs';

export default function BlogSection({ onBlog }) {
    return (
        <section id="blog" style={{
            background: "#F8FAFC",
            padding: "clamp(28px, 5vw, 56px) 0"
        }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
                <SectionHead
                    sup="Health Blog"
                    title="Learn About Your Condition"
                    desc="Expert articles on vascular health, treatments, and patient education"
                />
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(min(300px, 100%), 1fr))",
                    gap: 18
                }}>
                    {BLOGS.map((b, i) => (
                        <FadeIn key={i} delay={i * 0.05}>
                            <div
                                onClick={() => onBlog?.(b.id)}
                                style={{
                                    background: "#FFFFFF",
                                    border: "1px solid #E5E7EB",
                                    borderRadius: 14,
                                    overflow: "hidden",
                                    cursor: "pointer",
                                    transition: "border-color 0.3s, transform 0.3s",
                                    height: "100%"
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.borderColor = "rgba(37,99,235,0.3)";
                                    e.currentTarget.style.transform = "translateY(-3px)";
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.borderColor = "#E5E7EB";
                                    e.currentTarget.style.transform = "translateY(0)";
                                }}
                            >
                                <div style={{ height: 180, overflow: "hidden" }}>
                                    <img
                                        src={b.img}
                                        alt={`${b.title} — Dr. Harsha M T health blog`}
                                        loading="lazy"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            transition: "transform 0.4s"
                                        }}
                                    />
                                </div>
                                <div style={{ padding: "18px 20px 22px" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                                        <span style={{
                                            fontSize: 11,
                                            fontWeight: 600,
                                            color: "#2563EB",
                                            fontFamily: "'Roboto', sans-serif",
                                            background: "rgba(37,99,235,0.08)",
                                            padding: "3px 10px",
                                            borderRadius: 100,
                                            letterSpacing: "0.03em",
                                            textTransform: "uppercase"
                                        }}>{b.cat}</span>
                                        <span style={{
                                            fontSize: 11,
                                            color: "#9CA3AF",
                                            fontFamily: "'Roboto', sans-serif"
                                        }}>{b.read}</span>
                                    </div>
                                    <div style={{
                                        fontSize: 16,
                                        fontWeight: 700,
                                        color: "#1F2937",
                                        fontFamily: "'Roboto', sans-serif",
                                        lineHeight: 1.35,
                                        marginBottom: 8
                                    }}>{b.title}</div>
                                    <div style={{
                                        fontSize: 14,
                                        color: "#6B7280",
                                        fontFamily: "'Roboto', sans-serif",
                                        lineHeight: 1.6
                                    }}>{b.excerpt}</div>
                                    <div style={{
                                        marginTop: 14,
                                        fontSize: 14,
                                        fontWeight: 600,
                                        color: "#2563EB",
                                        fontFamily: "'Roboto', sans-serif"
                                    }}>Read Article →</div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
