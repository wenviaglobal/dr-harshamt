import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES } from '../../config/data';
import { ArrowRight } from 'lucide-react';

const hexClip = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

/* Honeycomb diamond layout: 3-4-3-2 = 12 conditions
   Centering different-count rows naturally creates honeycomb offset */
const ROWS = [
    { start: 0, count: 3 },
    { start: 3, count: 4 },
    { start: 7, count: 3 },
    { start: 10, count: 2 },
];

export default function ConditionsCollage({ onTreatment }) {
    const [hovered, setHovered] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    const HEX_W = isMobile ? 105 : 175;
    const HEX_H = Math.round(HEX_W * 1.1547);
    const OVERLAP = Math.round(HEX_H * 0.25);

    return (
        <section id="services" style={{
            background: "linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 50%, #F8FAFC 100%)",
            padding: "clamp(28px, 5vw, 56px) 0",
            position: "relative",
            overflow: "hidden"
        }}>
            {/* Medical cross background pattern */}
            <div style={{
                position: "absolute", inset: 0,
                backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
                    '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60">' +
                    '<rect x="27" y="18" width="6" height="24" fill="rgba(37,99,235,0.04)"/>' +
                    '<rect x="18" y="27" width="24" height="6" fill="rgba(37,99,235,0.04)"/>' +
                    '</svg>'
                )}")`,
                backgroundSize: "60px 60px"
            }} />

            <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>

                {/* Section heading */}
                <div style={{ textAlign: "center", marginBottom: 32 }}>
                    <h2 style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "clamp(26px, 3.5vw, 38px)",
                        fontWeight: 700,
                        color: "#1F2937",
                        marginBottom: 12,
                        lineHeight: 1.15
                    }}>12 Conditions.<br />One Pinhole Solution.</h2>

                    <p style={{
                        fontFamily: "'Roboto', sans-serif",
                        fontSize: 16,
                        color: "#6B7280",
                        maxWidth: 520,
                        margin: "0 auto",
                        lineHeight: 1.7
                    }}>
                        Advanced image-guided procedures replacing complex surgeries — no large incisions, no long hospital stays.
                    </p>
                </div>

                {/* ── Honeycomb Grid ── */}
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    {ROWS.map((row, rowIdx) => {
                        const items = SERVICES.slice(row.start, row.start + row.count);
                        return (
                            <div
                                key={rowIdx}
                                className="hex-row"
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    gap: 10,
                                    marginTop: rowIdx === 0 ? 0 : -OVERLAP + 4
                                }}
                            >
                                {items.map((s, i) => {
                                    const idx = row.start + i;
                                    const isHovered = hovered === idx;

                                    return (
                                        <motion.div
                                            key={idx}
                                            className="hex-item"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true, margin: "-40px" }}
                                            transition={{ delay: idx * 0.04, duration: 0.4, ease: "easeOut" }}
                                            onMouseEnter={() => setHovered(idx)}
                                            onMouseLeave={() => setHovered(null)}
                                            onClick={() => s.id && onTreatment?.(s.id)}
                                            style={{
                                                width: HEX_W,
                                                height: HEX_H,
                                                clipPath: hexClip,
                                                background: isHovered ? "#2563EB" : "#E5E7EB",
                                                position: "relative",
                                                cursor: "pointer",
                                                transition: "background 0.3s ease",
                                                flexShrink: 0
                                            }}
                                        >
                                            {/* Inner hex (image + border effect) */}
                                            <div style={{
                                                position: "absolute",
                                                top: 3, left: 3, right: 3, bottom: 3,
                                                clipPath: hexClip,
                                                overflow: "hidden"
                                            }}>
                                                <img
                                                    src={s.img}
                                                    alt={s.t}
                                                    loading="lazy"
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",
                                                        objectFit: "cover",
                                                        transition: "transform 0.5s ease",
                                                        transform: isHovered ? "scale(1.15)" : "scale(1)"
                                                    }}
                                                />

                                                {/* Hover overlay tooltip */}
                                                <AnimatePresence>
                                                    {isHovered && (
                                                        <motion.div
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            exit={{ opacity: 0 }}
                                                            transition={{ duration: 0.2 }}
                                                            style={{
                                                                position: "absolute",
                                                                inset: 0,
                                                                background: "rgba(7,20,38,0.85)",
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                padding: 14,
                                                                textAlign: "center"
                                                            }}
                                                        >
                                                            <div style={{ marginBottom: 4 }}><s.icon size={28} strokeWidth={1.5} color="#fff" /></div>
                                                            <div style={{
                                                                fontSize: 13,
                                                                fontWeight: 600,
                                                                color: "#fff",
                                                                fontFamily: "'Poppins', sans-serif",
                                                                lineHeight: 1.3,
                                                                marginBottom: 3
                                                            }}>{s.t}</div>
                                                            <div style={{
                                                                fontSize: 10,
                                                                color: "rgba(255,255,255,0.55)",
                                                                fontFamily: "'Roboto', sans-serif",
                                                                marginBottom: 6,
                                                                lineHeight: 1.3
                                                            }}>{s.sub}</div>
                                                            <div style={{
                                                                fontSize: 11,
                                                                color: "#5EEAD4",
                                                                fontWeight: 600,
                                                                fontFamily: "'Poppins', sans-serif",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: 4
                                                            }}>Learn More <ArrowRight size={12} /></div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>

                {/* Bottom note */}
                <div style={{
                    textAlign: "center",
                    marginTop: 40,
                    fontSize: 14,
                    color: "#9CA3AF",
                    fontFamily: "'Roboto', sans-serif"
                }}>
                    All procedures performed under image guidance — CT, Ultrasound & Fluoroscopy
                </div>
            </div>
        </section>
    );
}
