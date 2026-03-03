import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHead from '../common/SectionHead';
import { FAQS } from '../../config/data';

/* ── FAQ Schema (FAQPage) for Google Rich Results ── */
function useFAQSchema() {
    useEffect(() => {
        const schema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": FAQS.map(f => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": f.a
                }
            }))
        };
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = 'faq-schema';
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
        return () => document.getElementById('faq-schema')?.remove();
    }, []);
}

export default function FAQSection() {
    const [open, setOpen] = useState(null);
    useFAQSchema();

    return (
        <section id="faq" style={{ background: "#FAFBFC", padding: "clamp(28px, 5vw, 56px) 0" }}>
            <div style={{ maxWidth: 740, margin: "0 auto", padding: "0 24px" }}>
                <SectionHead
                    light
                    sup="FAQ"
                    title="Frequently Asked Questions"
                />

                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        initial: {},
                        animate: {
                            transition: {
                                staggerChildren: 0.06
                            }
                        }
                    }}
                    style={{ display: "flex", flexDirection: "column", gap: 8 }}
                >
                    {FAQS.map((f, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                initial: { opacity: 0, y: 20 },
                                animate: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
                                }
                            }}
                            style={{
                                background: "#fff",
                                border: open === i ? "1px solid rgba(13,148,136,0.2)" : "1px solid rgba(0,0,0,0.05)",
                                borderRadius: 12,
                                overflow: "hidden",
                                transition: "border-color 0.3s"
                            }}
                        >
                            <motion.button
                                onClick={() => setOpen(open === i ? null : i)}
                                whileHover={{ backgroundColor: "rgba(13,148,136,0.02)" }}
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "18px 22px",
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    textAlign: "left"
                                }}
                            >
                                <span style={{
                                    fontSize: 14,
                                    fontWeight: 600,
                                    color: open === i ? "#0D9488" : "#071426",
                                    fontFamily: "'Roboto', sans-serif",
                                    transition: "color 0.3s",
                                    paddingRight: 16
                                }}>{f.q}</span>

                                <motion.span
                                    animate={{ rotate: open === i ? 45 : 0 }}
                                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                    style={{
                                        fontSize: 18,
                                        color: open === i ? "#0D9488" : "rgba(0,0,0,0.25)",
                                        transition: "color 0.3s",
                                        flexShrink: 0,
                                        fontWeight: 300
                                    }}
                                >+</motion.span>
                            </motion.button>

                            <AnimatePresence initial={false}>
                                {open === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{
                                            height: "auto",
                                            opacity: 1,
                                            transition: {
                                                height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                                                opacity: { duration: 0.3, delay: 0.1 }
                                            }
                                        }}
                                        exit={{
                                            height: 0,
                                            opacity: 0,
                                            transition: {
                                                height: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                                                opacity: { duration: 0.2 }
                                            }
                                        }}
                                        style={{ overflow: "hidden" }}
                                    >
                                        <motion.div
                                            initial={{ y: -10 }}
                                            animate={{ y: 0 }}
                                            exit={{ y: -10 }}
                                            transition={{ duration: 0.3 }}
                                            style={{
                                                padding: "0 22px 18px",
                                                fontSize: 13,
                                                color: "rgba(7,20,38,0.6)",
                                                fontFamily: "'Roboto', sans-serif",
                                                lineHeight: 1.7
                                            }}
                                        >
                                            {f.a}
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
