import { motion } from 'framer-motion';
import SectionHead from '../common/SectionHead';
import { AnimatedCard } from '../common/Animated';
import { SERVICES } from '../../config/data';
import { ArrowRight } from 'lucide-react';

export default function ServicesSection({ onTreatment }) {

    return (
        <section id="services" style={{ background: "#FAFBFC", padding: "clamp(28px, 5vw, 56px) 0", scrollMarginTop: 70 }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
                <div style={{ textAlign: "center", marginBottom: 48 }}>
                    <h2 style={{
                        fontFamily: "'Roboto Slab', serif",
                        fontSize: "clamp(28px, 5vw, 36px)",
                        fontWeight: 700,
                        color: "#071426",
                        marginBottom: 20
                    }}>
                        Conditions Treated with Pinhole Procedures
                    </h2>
                    <div style={{
                        fontFamily: "'Roboto', sans-serif",
                        fontSize: 16,
                        color: "rgba(7,20,38,0.7)",
                        lineHeight: 1.8,
                        maxWidth: 900,
                        margin: "0 auto",
                        textAlign: "center"
                    }}>
                        <p style={{ marginBottom: 16 }}>Dr. Harsha M T treats a wide range of conditions using advanced interventional radiology techniques.</p>

                        <div style={{
                            textAlign: "center",
                            marginBottom: 24,
                            fontWeight: 700,
                            color: "#071426",
                            fontSize: 18
                        }}>Vascular & Interventional Treatments</div>
                        <p>These treatments provide effective results while avoiding traditional surgery.</p>
                    </div>
                </div>

                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        initial: {},
                        animate: {
                            transition: {
                                staggerChildren: 0.08
                            }
                        }
                    }}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
                        gap: 14
                    }}
                >
                    {SERVICES.map((s, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                initial: { opacity: 0, y: 30 },
                                animate: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
                                }
                            }}
                            whileHover={s.id ? {
                                y: -8,
                                boxShadow: "0 12px 40px rgba(13, 148, 136, 0.15)",
                                transition: { duration: 0.3 }
                            } : {}}
                            whileTap={s.id ? { scale: 0.98 } : {}}
                            onClick={() => s.id && onTreatment?.(s.id)}
                            style={{
                                background: "#fff",
                                borderRadius: 14,
                                overflow: "hidden",
                                height: "100%",
                                border: s.hl ? "1px solid rgba(13,148,136,0.2)" : "1px solid rgba(0,0,0,0.04)",
                                boxShadow: s.hl ? "0 4px 20px rgba(13,148,136,0.06)" : "0 1px 3px rgba(0,0,0,0.02)",
                                cursor: s.id ? "pointer" : "default",
                                position: "relative"
                            }}
                        >
                            {/* Image */}
                            <div style={{ height: 140, overflow: "hidden", position: "relative"}}>
                                <motion.img
                                    src={s.img}
                                    alt={`${s.t} treatment in Bengaluru — Dr. Harsha M T`}
                                    loading="lazy"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    whileHover={s.id ? { scale: 1.05 } : {}}
                                    transition={{ duration: 0.4 }}
                                />
                                {s.hl && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.3 + (i * 0.08) }}
                                        style={{
                                            position: "absolute",
                                            top: 10,
                                            right: 10,
                                            background: "rgba(13,148,136,0.9)",
                                            color: "#fff",
                                            fontSize: 10,
                                            fontWeight: 600,
                                            padding: "3px 10px",
                                            borderRadius: 100,
                                            fontFamily: "'Roboto', sans-serif",
                                            letterSpacing: "0.03em",
                                            textTransform: "uppercase"
                                        }}
                                    >Most Common</motion.div>
                                )}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2 + (i * 0.08), type: "spring", stiffness: 200 }}
                                    whileHover={{ rotate: 5, scale: 1.1 }}
                                    style={{
                                        position: "absolute",
                                        bottom: 10,
                                        left: 10,
                                        fontSize: 28,
                                        background: "rgba(255,255,255,0.9)",
                                        borderRadius: 10,
                                        width: 44,
                                        height: 44,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backdropFilter: "blur(8px)",
                                        color: "#0D9488",
                                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                                    }}
                                ><s.icon size={32} strokeWidth={1.5} /></motion.div>
                            </div>

                            {/* Content */}
                            <div style={{ padding: "18px 20px 22px" }}>
                                <div style={{
                                    fontSize: 16,
                                    fontWeight: 700,
                                    color: "#071426",
                                    fontFamily: "'Roboto', sans-serif",
                                    marginBottom: 3,
                                    lineHeight: 1.3
                                }}>{s.t}</div>
                                <div style={{
                                    fontSize: 11,
                                    color: "#0D9488",
                                    fontFamily: "'Roboto', sans-serif",
                                    fontWeight: 500,
                                    marginBottom: 10,
                                    letterSpacing: "0.02em"
                                }}>{s.sub}</div>
                                <div style={{
                                    fontSize: 13,
                                    color: "rgba(7,20,38,0.55)",
                                    fontFamily: "'Roboto', sans-serif",
                                    lineHeight: 1.65
                                }}>{s.d}</div>
                                {s.id && (
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        style={{
                                            marginTop: 12,
                                            fontSize: 13,
                                            fontWeight: 600,
                                            color: "#0D9488",
                                            fontFamily: "'Roboto', sans-serif",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 4
                                        }}
                                    >Learn More <ArrowRight size={14} /></motion.div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
