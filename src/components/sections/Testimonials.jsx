import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../common/FadeIn';
import { TESTIMONIALS } from '../../config/data';

export default function Testimonials() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const t = setInterval(() => setActive(p => (p + 1) % TESTIMONIALS.length), 5000);
        return () => clearInterval(t);
    }, []);

    // Show 3 cards on desktop, 1 on mobile — we render all and use CSS-like logic
    const getVisibleIndices = () => {
        const len = TESTIMONIALS.length;
        return [
            active,
            (active + 1) % len,
            (active + 2) % len,
        ];
    };

    const visible = getVisibleIndices();

    return (
        <section style={{
            background: "#FFFFFF",
            padding: "clamp(28px, 5vw, 56px) 0",
            position: "relative",
            overflow: "hidden"
        }}>
            {/* Decorative orbs */}
            <div style={{
                position: "absolute", top: "-15%", left: "-10%",
                width: "40vw", height: "40vw", borderRadius: "50%",
                background: "radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 70%)",
                pointerEvents: "none"
            }} />

            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
                {/* Section heading */}
                <FadeIn>
                    <div style={{ textAlign: "center", marginBottom: 32 }}>
                        <span style={{
                            display: "inline-block", fontSize: 11, fontWeight: 700,
                            letterSpacing: "0.12em", textTransform: "uppercase",
                            color: "#2563EB", background: "rgba(37,99,235,0.08)",
                            padding: "6px 16px", borderRadius: 100, marginBottom: 14,
                            fontFamily: "'Roboto', sans-serif",
                            border: "1px solid rgba(37,99,235,0.15)"
                        }}>Patient Stories</span>
                        <h2 style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "clamp(24px, 3.5vw, 38px)",
                            fontWeight: 800, color: "#1F2937",
                            lineHeight: 1.15, letterSpacing: "-0.02em",
                            marginBottom: 10
                        }}>What Our Patients Say</h2>
                        <p style={{
                            fontFamily: "'Roboto', sans-serif",
                            fontSize: 15, color: "#6B7280",
                            maxWidth: 500, margin: "0 auto"
                        }}>Real experiences from patients treated by Dr. Harsha</p>
                    </div>
                </FadeIn>

                {/* ── Featured Testimonial (large card) ── */}
                <FadeIn delay={0.08}>
                    <div style={{ marginBottom: 32 }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                style={{
                                    background: "linear-gradient(135deg, rgba(37,99,235,0.04), rgba(37,99,235,0.02))",
                                    border: "1px solid rgba(37,99,235,0.15)",
                                    borderRadius: 20,
                                    padding: "clamp(20px, 4vw, 36px) clamp(20px, 4vw, 40px)",
                                    position: "relative",
                                    overflow: "hidden"
                                }}
                            >
                                {/* Large quote mark */}
                                <div style={{
                                    position: "absolute", top: 16, right: 28,
                                    fontSize: 100, lineHeight: 0.8,
                                    color: "rgba(37,99,235,0.06)",
                                    fontFamily: "Georgia, serif",
                                    pointerEvents: "none"
                                }}>"</div>

                                {/* Stars */}
                                <div style={{ display: "flex", gap: 3, marginBottom: 16 }}>
                                    {[...Array(TESTIMONIALS[active].rating)].map((_, i) => (
                                        <span key={i} style={{ color: "#F59E0B", fontSize: 16 }}>★</span>
                                    ))}
                                </div>

                                {/* Testimonial text */}
                                <p style={{
                                    fontFamily: "'Roboto', sans-serif",
                                    fontSize: "clamp(16px, 1.8vw, 19px)",
                                    color: "#374151",
                                    lineHeight: 1.8, marginBottom: 28,
                                    fontStyle: "italic", maxWidth: 800,
                                    position: "relative", zIndex: 1
                                }}>
                                    "{TESTIMONIALS[active].text}"
                                </p>

                                {/* Author row */}
                                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                                    <div style={{
                                        width: 48, height: 48, borderRadius: "50%",
                                        background: "linear-gradient(135deg, #0D9488, #14B8A6)",
                                        display: "flex", alignItems: "center",
                                        justifyContent: "center", fontSize: 20,
                                        fontWeight: 700, color: "#fff",
                                        fontFamily: "'Roboto', sans-serif"
                                    }}>
                                        {TESTIMONIALS[active].name.charAt(0)}
                                    </div>
                                    <div>
                                        <div style={{
                                            fontSize: 16, fontWeight: 700,
                                            color: "#1F2937", fontFamily: "'Roboto', sans-serif"
                                        }}>{TESTIMONIALS[active].name}</div>
                                        <div style={{
                                            fontSize: 13, color: "#6B7280",
                                            fontFamily: "'Roboto', sans-serif"
                                        }}>Age {TESTIMONIALS[active].age} • {TESTIMONIALS[active].condition}</div>
                                    </div>
                                    <div style={{
                                        marginLeft: "auto",
                                        background: "rgba(13,148,136,0.08)",
                                        border: "1px solid rgba(13,148,136,0.2)",
                                        padding: "6px 14px", borderRadius: 100,
                                        fontSize: 12, fontWeight: 600,
                                        color: "#0D9488", fontFamily: "'Roboto', sans-serif"
                                    }}>Verified Patient</div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </FadeIn>

                {/* ── Grid of smaller cards ── */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(min(280px, 100%), 1fr))",
                    gap: 14
                }}>
                    {TESTIMONIALS.map((t, i) => (
                        <motion.div
                            key={i}
                            onClick={() => setActive(i)}
                            whileHover={{ y: -4, scale: 1.01 }}
                            whileTap={{ scale: 0.98 }}
                            style={{
                                background: i === active
                                    ? "rgba(37,99,235,0.06)"
                                    : "#F9FAFB",
                                border: i === active
                                    ? "1px solid rgba(37,99,235,0.2)"
                                    : "1px solid #E5E7EB",
                                borderRadius: 14,
                                padding: "20px 22px",
                                cursor: "pointer",
                                transition: "all 0.3s ease"
                            }}
                        >
                            {/* Stars */}
                            <div style={{ display: "flex", gap: 2, marginBottom: 10 }}>
                                {[...Array(t.rating)].map((_, j) => (
                                    <span key={j} style={{ color: "#F59E0B", fontSize: 12 }}>★</span>
                                ))}
                            </div>

                            {/* Text preview */}
                            <p style={{
                                fontFamily: "'Roboto', sans-serif",
                                fontSize: 14,
                                color: i === active ? "#374151" : "#6B7280",
                                lineHeight: 1.6, marginBottom: 14,
                                display: "-webkit-box",
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden"
                            }}>
                                "{t.text}"
                            </p>

                            {/* Author */}
                            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                <div style={{
                                    width: 32, height: 32, borderRadius: "50%",
                                    background: i === active
                                        ? "linear-gradient(135deg, #0D9488, #14B8A6)"
                                        : "#E5E7EB",
                                    display: "flex", alignItems: "center",
                                    justifyContent: "center", fontSize: 13,
                                    fontWeight: 700,
                                    color: i === active ? "#fff" : "#9CA3AF",
                                    fontFamily: "'Roboto', sans-serif"
                                }}>
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <div style={{
                                        fontSize: 13, fontWeight: 600,
                                        color: i === active ? "#2563EB" : "#4B5563",
                                        fontFamily: "'Roboto', sans-serif"
                                    }}>{t.name}</div>
                                    <div style={{
                                        fontSize: 12,
                                        color: "#9CA3AF",
                                        fontFamily: "'Roboto', sans-serif"
                                    }}>{t.condition}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Navigation dots */}
                <div style={{
                    display: "flex", justifyContent: "center",
                    gap: 8, marginTop: 28
                }}>
                    {TESTIMONIALS.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            style={{
                                width: i === active ? 24 : 8,
                                height: 8, borderRadius: 4,
                                background: i === active ? "#2563EB" : "#D1D5DB",
                                border: "none", cursor: "pointer",
                                transition: "all 0.3s ease", padding: 0
                            }}
                        />
                    ))}
                </div>

                {/* Trust bar */}
                <FadeIn delay={0.15}>
                    <div style={{
                        marginTop: 40, textAlign: "center",
                        padding: "24px 0",
                        borderTop: "1px solid rgba(0,0,0,0.06)"
                    }}>
                        <div style={{
                            display: "flex", flexWrap: "wrap",
                            justifyContent: "center", gap: 32
                        }}>
                            {[
                                { v: "8500+", l: "Procedures Done" },
                                { v: "98%", l: "Patient Satisfaction" },
                                { v: "4.9★", l: "Average Rating" },
                                { v: "6+", l: "Conditions Treated" },
                            ].map((s, i) => (
                                <div key={i}>
                                    <div style={{
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: 22, fontWeight: 800,
                                        color: "#2563EB", marginBottom: 2
                                    }}>{s.v}</div>
                                    <div style={{
                                        fontFamily: "'Roboto', sans-serif",
                                        fontSize: 11, color: "#6B7280",
                                        letterSpacing: "0.04em", textTransform: "uppercase"
                                    }}>{s.l}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
