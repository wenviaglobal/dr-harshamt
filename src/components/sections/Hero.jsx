import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../common/FadeIn';
import { DOC } from '../../config/data';

const HERO_PHOTOS = [
    { img: DOC.photo, label: "Dr. Harsha M T" },
    { img: DOC.photoApron, label: "In Consultation" },
    { img: DOC.photoScrubs, label: "In the Cath Lab" },
    { img: DOC.photoSuit, label: "Professional" },
];

export default function Hero() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const t = setInterval(() => setActive(p => (p + 1) % HERO_PHOTOS.length), 3500);
        return () => clearInterval(t);
    }, []);

    return (
        <section style={{
            position: "relative",
            overflow: "hidden",
            padding: 0,
            background: "linear-gradient(135deg, #FFFFFF 0%, #EFF6FF 50%, #DBEAFE 100%)"
        }}>
            {/* Decorative orb */}
            <div style={{
                position: "absolute", top: "-15%", right: "-8%",
                width: "50vw", height: "50vw", borderRadius: "50%",
                background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)",
                pointerEvents: "none"
            }} />

            <div style={{
                maxWidth: 1200, margin: "0 auto",
                padding: "76px 24px 40px",
                width: "100%", position: "relative", zIndex: 1
            }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(24px, 4vw, 48px)" }}>

                    {/* ── LEFT: Content ── */}
                    <div style={{ flex: "1 1 480px", minWidth: 280 }}>
                        <FadeIn>
                            <div style={{
                                display: "inline-flex", alignItems: "center", gap: 8,
                                background: "rgba(37,99,235,0.08)",
                                border: "1px solid rgba(37,99,235,0.15)",
                                borderRadius: 100, padding: "8px 18px", marginBottom: 24
                            }}>
                                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#10B981" }} />
                                <span style={{
                                    color: "#2563EB", fontSize: 14,
                                    fontFamily: "'Poppins', sans-serif",
                                    fontWeight: 600, letterSpacing: "0.02em"
                                }}>Available for Appointments in Bengaluru</span>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.08}>
                            <h1 style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "clamp(42px, 6vw, 72px)",
                                fontWeight: 800, color: "#1F2937",
                                lineHeight: 1.1, marginBottom: 12,
                                letterSpacing: "-0.03em"
                            }}>{DOC.name}</h1>
                        </FadeIn>

                        <FadeIn delay={0.12}>
                            <p style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "clamp(15px, 1.6vw, 18px)",
                                color: "#2563EB", marginBottom: 8,
                                fontWeight: 600, letterSpacing: "0.01em",
                                textTransform: "uppercase"
                            }}>{DOC.titleFull}</p>
                        </FadeIn>

                        <FadeIn delay={0.14}>
                            <p style={{
                                fontFamily: "'Roboto', sans-serif",
                                fontSize: 13, color: "#6B7280",
                                lineHeight: 1.7, marginBottom: 6, maxWidth: 520
                            }}>{DOC.qualsBadge}</p>
                            <p style={{
                                fontFamily: "'Roboto', sans-serif",
                                fontSize: 13, color: "#0D9488",
                                fontWeight: 600, marginBottom: 4
                            }}>{DOC.training}</p>
                            <p style={{
                                fontFamily: "'Roboto', sans-serif",
                                fontSize: 13, color: "#0D9488",
                                fontWeight: 600, marginBottom: 6
                            }}>{DOC.training2}</p>
                            <p style={{
                                fontFamily: "'Roboto', sans-serif",
                                fontSize: 14, color: "#1F2937",
                                fontWeight: 700, marginBottom: 20
                            }}>{DOC.director}</p>
                        </FadeIn>

                        <FadeIn delay={0.18}>
                            <p style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "clamp(22px, 2.6vw, 30px)",
                                color: "#374151", lineHeight: 1.35,
                                marginBottom: 14, fontWeight: 700
                            }}>{DOC.tagline}</p>
                        </FadeIn>

                        <FadeIn delay={0.22}>
                            <p style={{
                                fontFamily: "'Roboto', sans-serif",
                                fontSize: "clamp(15px, 1.5vw, 17px)",
                                color: "#6B7280", lineHeight: 1.75,
                                marginBottom: 32, maxWidth: 520
                            }}>{DOC.sub}</p>
                        </FadeIn>

                        <FadeIn delay={0.26}>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
                                <button
                                    onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                                    style={{
                                        background: "#2563EB", border: "none", color: "#FFFFFF",
                                        padding: "16px 36px", borderRadius: 12,
                                        fontSize: 16, fontWeight: 600, cursor: "pointer",
                                        fontFamily: "'Poppins', sans-serif",
                                        boxShadow: "0 4px 14px rgba(37,99,235,0.25)",
                                        transition: "all 0.2s ease"
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.background = "#1D4ED8";
                                        e.target.style.transform = "translateY(-2px)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.background = "#2563EB";
                                        e.target.style.transform = "translateY(0)";
                                    }}
                                >Book Appointment</button>
                                <button
                                    onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
                                    style={{
                                        background: "#FFFFFF", border: "2px solid #2563EB",
                                        color: "#2563EB", padding: "14px 30px",
                                        borderRadius: 12, fontSize: 15, fontWeight: 600,
                                        cursor: "pointer", fontFamily: "'Poppins', sans-serif",
                                        transition: "all 0.2s ease"
                                    }}
                                    onMouseEnter={(e) => e.target.style.background = "#EFF6FF"}
                                    onMouseLeave={(e) => e.target.style.background = "#FFFFFF"}
                                >View Treatments</button>
                                <a
                                    href={`tel:${DOC.phone.replace(/\s/g, '')}`}
                                    style={{
                                        display: "inline-flex", alignItems: "center", gap: 8,
                                        color: "#374151", fontSize: 15, fontWeight: 600,
                                        fontFamily: "'Poppins', sans-serif",
                                        textDecoration: "none", padding: "14px 20px",
                                        borderRadius: 12, transition: "all 0.2s ease"
                                    }}
                                >📞 {DOC.phone}</a>
                            </div>
                        </FadeIn>

                        {/* Stats */}
                        <FadeIn delay={0.32}>
                            <div style={{ marginTop: 40, display: "flex", flexWrap: "wrap", gap: 32 }}>
                                {[
                                    { v: DOC.exp, l: "Years Experience" },
                                    { v: DOC.procs, l: "Procedures" },
                                    { v: DOC.certs, l: "Certifications" }
                                ].map((s, i) => (
                                    <div key={i} style={{ textAlign: "left" }}>
                                        <div style={{
                                            fontFamily: "'Poppins', sans-serif",
                                            fontSize: "clamp(24px, 4vw, 34px)", fontWeight: 800,
                                            color: "#2563EB", lineHeight: 1, marginBottom: 4
                                        }}>{s.v}</div>
                                        <div style={{
                                            fontFamily: "'Roboto', sans-serif",
                                            fontSize: 13, fontWeight: 500,
                                            color: "#6B7280"
                                        }}>{s.l}</div>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>

                    {/* ── RIGHT: Photo Carousel ── */}
                    <FadeIn delay={0.15} className="hero-img-wrap">
                        <div style={{ flex: "0 1 380px", position: "relative" }}>
                            {/* Main carousel image */}
                            <div style={{
                                width: "100%", aspectRatio: "3/3.8",
                                borderRadius: 24, overflow: "hidden",
                                border: "3px solid #2563EB",
                                boxShadow: "0 24px 50px rgba(37,99,235,0.18)",
                                position: "relative"
                            }}>
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={active}
                                        src={HERO_PHOTOS[active].img}
                                        alt={HERO_PHOTOS[active].label}
                                        initial={{ opacity: 0, scale: 1.05 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.7, ease: "easeInOut" }}
                                        style={{
                                            width: "100%", height: "100%",
                                            objectFit: "cover", objectPosition: "top"
                                        }}
                                    />
                                </AnimatePresence>

                                {/* Gradient overlay at bottom */}
                                <div style={{
                                    position: "absolute", bottom: 0, left: 0, right: 0,
                                    height: 100,
                                    background: "linear-gradient(180deg, transparent 0%, rgba(7,20,38,0.7) 100%)"
                                }} />

                                {/* Photo label */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={active}
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        style={{
                                            position: "absolute", bottom: 20, left: 20,
                                            fontSize: 14, fontWeight: 600,
                                            color: "#fff", fontFamily: "'Roboto', sans-serif"
                                        }}
                                    >{HERO_PHOTOS[active].label}</motion.div>
                                </AnimatePresence>

                                {/* Carousel dots */}
                                <div style={{
                                    position: "absolute", bottom: 20, right: 20,
                                    display: "flex", gap: 6
                                }}>
                                    {HERO_PHOTOS.map((_, i) => (
                                        <button key={i} onClick={() => setActive(i)} style={{
                                            width: i === active ? 22 : 8, height: 8,
                                            borderRadius: 4,
                                            background: i === active ? "#2563EB" : "rgba(255,255,255,0.5)",
                                            border: "none", cursor: "pointer",
                                            transition: "all 0.3s ease", padding: 0
                                        }} />
                                    ))}
                                </div>
                            </div>

                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
