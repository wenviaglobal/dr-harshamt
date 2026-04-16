import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../common/FadeIn';
import Counter from '../common/Counter';
import { DOC, IMG, galleryImages } from '../../config/data';
import { Building2, GraduationCap, Globe, MapPin } from 'lucide-react';

const rawGallery = Object.values(galleryImages[0]);
const GALLERY = rawGallery.map((img, idx) => ({
    img: img,
}));

const TRAINING = [
    { inst: "PGIMER", loc: "Chandigarh", icon: <Building2 size={32} strokeWidth={1.5} color="#2563EB" />, degree: "MD Radio-diagnosis & IR" },
    { inst: "AIIMS", loc: "", icon: <GraduationCap size={32} strokeWidth={1.5} color="#2563EB" />, degree: "Fellowship VIR" },
    { inst: "SNUH", loc: "South Korea", icon: <Globe size={32} strokeWidth={1.5} color="#2563EB" />, degree: "Fellowship VIR" },
    { inst: "IEO", loc: "Milan, Italy", icon: <MapPin size={32} strokeWidth={1.5} color="#2563EB" />, degree: "Thyroid Thermal Ablation" },
];

const shieldClip = "polygon(0% 0%, 100% 0%, 100% 75%, 50% 100%, 0% 75%)";

function ShieldBadge({ item, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            style={{
                flex: "1 1 140px",
                maxWidth: 180,
                cursor: "default"
            }}
        >
            <div style={{
                clipPath: shieldClip,
                background: "linear-gradient(180deg, #1E3A5F, #0B1D33)",
                padding: 3,
            }}>
                <div style={{
                    clipPath: shieldClip,
                    background: "linear-gradient(180deg, #EFF6FF, #DBEAFE)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "28px 12px 36px",
                    textAlign: "center",
                    minHeight: 150,
                }}>
                    <div style={{ fontSize: 32, marginBottom: 8 }}>{item.icon}</div>
                    <div style={{
                        fontSize: 16, fontWeight: 800, color: "#1E3A5F",
                        fontFamily: "'Poppins', sans-serif",
                        letterSpacing: "0.02em", marginBottom: 2
                    }}>{item.inst}</div>
                    <div style={{
                        fontSize: 11, color: "#2563EB", fontWeight: 600,
                        fontFamily: "'Roboto', sans-serif", marginBottom: 6
                    }}>{item.loc}</div>
                    <div style={{
                        fontSize: 10, color: "#6B7280",
                        fontFamily: "'Roboto', sans-serif",
                        lineHeight: 1.4
                    }}>{item.degree}</div>
                </div>
            </div>
        </motion.div>
    );
}

export default function About() {
    const [galleryIdx, setGalleryIdx] = useState(0);

    // Completely eliminates image loading lag by caching gallery images in background
    useEffect(() => {
        GALLERY.forEach((item) => {
            if (item.img) {
                const img = new Image();
                img.src = item.img;
            }
        });
    }, []);

    return (
        <section id="about" style={{ background: "#FAFBFC", padding: "clamp(28px, 5vw, 56px) 0", scrollMarginTop: 80 }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

                {/* ── Section title ── */}
                <FadeIn>
                    <div style={{ textAlign: "center", marginBottom: 32 }}>
                        <span style={{
                            display: "inline-block",
                            fontSize: 11, fontWeight: 700,
                            letterSpacing: "0.12em", textTransform: "uppercase",
                            color: "#2563EB",
                            background: "rgba(37,99,235,0.08)",
                            padding: "6px 16px", borderRadius: 100, marginBottom: 14,
                            fontFamily: "'Roboto', sans-serif"
                        }}>Know Your Doctor</span>
                        <h2 style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "clamp(26px, 3.5vw, 38px)",
                            fontWeight: 800, color: "#071426",
                            lineHeight: 1.15, letterSpacing: "-0.02em"
                        }}>About Dr. Harsha M T</h2>
                    </div>
                </FadeIn>

                {/* ── Photo + Bio side-by-side ── */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 32, marginBottom: 40 }}>
                    {/* Photo */}
                    <FadeIn delay={0.1} style={{ flex: "1 1 320px", minWidth: 260, maxWidth: 420 }}>
                        <div style={{
                            borderRadius: 20, overflow: "hidden",
                            position: "relative",
                            border: "3px solid #2563EB",
                            boxShadow: "0 12px 40px rgba(37,99,235,0.12)"
                        }}>
                            <img
                                src={DOC.photo}
                                alt={`${DOC.name} — Interventional Radiologist in Bengaluru`}
                                loading="lazy"
                                style={{ width: "100%", height: "clamp(280px, 50vw, 400px)", objectFit: "cover", objectPosition: "top" }}
                            />
                            <div style={{
                                position: "absolute", bottom: 0, left: 0, right: 0,
                                background: "linear-gradient(180deg, transparent 30%, rgba(7,20,38,0.92) 100%)",
                                padding: "30px 20px 20px"
                            }}>
                                <div style={{ color: "#fff", fontSize: 16, fontWeight: 700, fontFamily: "'Roboto', sans-serif" }}>{DOC.name}</div>
                                <div style={{ color: "#5EEAD4", fontSize: 12, fontFamily: "'Roboto', sans-serif", marginTop: 2 }}>{DOC.qualsBadge}</div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Bio text */}
                    <FadeIn delay={0.2} style={{ flex: "1 1 400px", minWidth: 280 }}>
                        <div style={{
                            fontFamily: "'Roboto', sans-serif",
                            fontSize: 16, color: "rgba(7,20,38,0.7)",
                            lineHeight: 1.8, marginBottom: 24
                        }}>
                            <p style={{ marginBottom: 16 }}>
                                Dr Harsha M T is a highly experienced <strong>Vascular and Interventional Radiologist in Bengaluru</strong>, known for performing advanced minimally invasive image-guided procedures that replace traditional open surgeries.
                            </p>
                            <p style={{ marginBottom: 16 }}>
                                With extensive international training and experience, Dr Harsha specializes in treating complex vascular and non-vascular conditions using advanced imaging technologies such as CT, Ultrasound, and Fluoroscopy.
                            </p>
                            <p>
                                His patient-focused approach combines the precision of radiology with the expertise of a surgeon to deliver effective treatments with minimal pain, faster recovery, and no large surgical scars.
                            </p>
                        </div>

                        {/* Director card */}
                        <div style={{
                            background: "linear-gradient(135deg, #2563EB, #1E40AF)", 
                            borderRadius: 16,
                            padding: "24px", color: "#fff",
                            boxShadow: "0 10px 30px rgba(37,99,235,0.2)"
                        }}>
                            {/* <div style={{ fontSize: 18, fontWeight: 800, fontFamily: "'Poppins', sans-serif", marginBottom: 8 }}>Director – Venuva Vascular Center</div>  */}
                             <div style={{ fontSize: 14, color: "rgba(255,255,255,0.9)", fontFamily: "'Roboto', sans-serif", lineHeight: 1.7 }}>
                                Dr Harsha M T practices at Venuva Vascular Center, Malleshwaram, Bengaluru and Sparsh Hospital(Infantry Road and Yelahanka, Bengaluru).
                            </div>
                        </div>
                    </FadeIn>
                </div>

                {/* ── Areas of Expertise ── */}
                <FadeIn>
                    <div style={{ 
                        background: "#fff", 
                        borderRadius: 20, 
                        padding: "40px", 
                        marginBottom: 56,
                        boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                        border: "1px solid #F1F5F9"
                    }}>
                        <h3 style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: 24, fontWeight: 800, color: "#071426",
                            marginBottom: 24, textAlign: "center"
                        }}>Areas of Expertise</h3>
                        <div style={{ 
                            display: "grid", 
                            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", 
                            gap: "16px 32px" 
                        }}>
                            {[
                                "Varicose Veins Treatment", "Thyroid Nodule Ablation", 
                                "Uterine Fibroid Embolisation", "Varicocele Embolisation",
                                "Prostate Artery Embolisation", "Peripheral Vascular Disease Treatment",
                                "Deep Vein Thrombosis Treatment", "Liver Cancer Interventions",
                                "Dialysis Access Procedures"
                            ].map((item, i) => (
                                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#2563EB" }} />
                                    <span style={{ fontSize: 15, color: "#4B5563", fontFamily: "'Roboto', sans-serif" }}>{item}</span>
                                </div>
                            ))}
                        </div>
                        <p style={{ 
                            marginTop: 32, textAlign: "center", fontStyle: "italic", 
                            color: "#6B7280", fontSize: 14, fontFamily: "'Roboto', sans-serif" 
                        }}>
                            Dr Harsha has helped thousands of patients avoid major surgery by offering safe, minimally invasive alternatives.
                        </p>
                    </div>
                </FadeIn>

                {/* ── World-Class Qualifications & Training — Shield Badges ── */}
                <FadeIn>
                    <h3 style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "clamp(18px, 2.5vw, 22px)", fontWeight: 700, color: "#1F2937",
                        textAlign: "center", marginBottom: 32
                    }}>His international training includes:</h3>
                </FadeIn>

                <div style={{
                    display: "flex", flexWrap: "wrap", gap: 20,
                    justifyContent: "center", marginBottom: 36
                }}>
                    {TRAINING.map((t, i) => (
                        <ShieldBadge key={i} item={t} delay={i * 0.1} />
                    ))}
                </div>



                {/* ── Global Board Certifications ── */}
                <FadeIn>
                    <h3 style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "clamp(18px, 2.5vw, 22px)", fontWeight: 700, color: "#1F2937",
                        textAlign: "center", marginBottom: 24
                    }}>Global Board Certifications</h3>
                </FadeIn>

                <div style={{
                    display: "flex", flexWrap: "wrap", gap: 14,
                    justifyContent: "center", marginBottom: 64
                }}>
                    {[
                        { abbr: "EBIR", full: "European Board of Interventional Radiology" },
                        { abbr: "EDiR", full: "European Diploma in Radiology" },
                        { abbr: "Dip. ICRI", full: "Indian College of Radiology & Imaging" },
                    ].map((c, i) => (
                        <FadeIn key={i} delay={i * 0.08}>
                            <div style={{
                                background: "#fff", border: "2px solid #2563EB",
                                borderRadius: 14, padding: "20px 24px",
                                textAlign: "center", minWidth: 200,
                                boxShadow: "0 2px 12px rgba(37,99,235,0.08)"
                            }}>
                                <div style={{
                                    fontSize: 22, fontWeight: 800, color: "#2563EB",
                                    fontFamily: "'Poppins', sans-serif", marginBottom: 6,
                                    letterSpacing: "0.04em"
                                }}>{c.abbr}</div>
                                <div style={{
                                    fontSize: 12, color: "#6B7280",
                                    fontFamily: "'Roboto', sans-serif", lineHeight: 1.5
                                }}>{c.full}</div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                {/* ── Commitment to Patient Care ── */}
                <FadeIn>
                    <div style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 64px" }}>
                        <h3 style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: 24, fontWeight: 800, color: "#071426",
                            marginBottom: 20
                        }}>Commitment to Patient Care</h3>
                        <p style={{
                            fontFamily: "'Roboto', sans-serif",
                            fontSize: 16, color: "#4B5563",
                            lineHeight: 1.8, marginBottom: 16
                        }}>
                            Dr Harsha believes in providing treatments that are effective, safe, and patient-friendly. By combining modern medical technology with a compassionate approach, he ensures every patient receives the highest standard of care.
                        </p>
                        <p style={{
                            fontFamily: "'Roboto', sans-serif",
                            fontSize: 16, color: "#4B5563",
                            lineHeight: 1.8
                        }}>
                            His mission is to make advanced interventional radiology treatments accessible to patients in Bengaluru who are looking for alternatives to traditional surgery.
                        </p>
                    </div>
                </FadeIn>
            </div>



            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

                {/* ── Gallery ── */}
                <FadeIn>
                    <div>
                        <h3 style={{
                            fontFamily: "'Poppins', sans-serif", fontSize: 22,
                            fontWeight: 700, color: "#071426", marginBottom: 24,
                            textAlign: "center"
                        }}>Gallery</h3>

                        {/* Main large image */}
                        <div style={{ position: "relative", maxWidth: 800, margin: "0 auto" }}>
                            <motion.div layout style={{
                                borderRadius: 16, overflow: "hidden",
                                position: "relative",
                                width: "fit-content",
                                margin: "0 auto",
                                boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                                background: "#071426"
                            }}>
                                {/* Invisible Anchor prevents sudden layout collapse & triggers smooth resizing */}
                                <motion.img
                                    layout
                                    src={GALLERY[galleryIdx].img}
                                    alt="anchor"
                                    style={{ maxWidth: "100%", maxHeight: "75vh", display: "block", visibility: "hidden" }}
                                />
                                <AnimatePresence>
                                    <motion.img
                                        layout
                                        key={galleryIdx}
                                        src={GALLERY[galleryIdx].img}
                                        alt={`${GALLERY[galleryIdx].label} — Dr. Harsha M T, Interventional Radiologist Bengaluru`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, maxWidth: "100%", maxHeight: "75vh", display: "block", margin: "auto" }}
                                    />
                                </AnimatePresence>
                                <div style={{
                                    position: "absolute", bottom: 0, left: 0, right: 0,
                                    background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.6) 100%)",
                                    padding: "30px 20px 16px"
                                }}>
                                </div>
                                {/* Prev / Next buttons */}
                                <button
                                    onClick={() => setGalleryIdx(p => p === 0 ? GALLERY.length - 1 : p - 1)}
                                    style={{
                                        position: "absolute", top: "50%", left: 16,
                                        transform: "translateY(-50%)",
                                        width: 44, height: 44, borderRadius: "50%",
                                        background: "rgba(255,255,255,0.9)", border: "1px solid #E5E7EB",
                                        boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        cursor: "pointer", fontSize: 20, color: "#1F2937",
                                        zIndex: 10
                                    }}
                                >&lsaquo;</button>
                                <button
                                    onClick={() => setGalleryIdx(p => (p + 1) % GALLERY.length)}
                                    style={{
                                        position: "absolute", top: "50%", right: 16,
                                        transform: "translateY(-50%)",
                                        width: 44, height: 44, borderRadius: "50%",
                                        background: "rgba(255,255,255,0.9)", border: "1px solid #E5E7EB",
                                        boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        cursor: "pointer", fontSize: 20, color: "#1F2937",
                                        zIndex: 10
                                    }}
                                >&rsaquo;</button>
                            </motion.div>
                        </div>

                        {/* Dot indicators */}
                        <div style={{
                            display: "flex", justifyContent: "center",
                            gap: 8, marginTop: 20
                        }}>
                            {GALLERY.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setGalleryIdx(i)}
                                    style={{
                                        width: galleryIdx === i ? 24 : 10,
                                        height: 10, borderRadius: 5, border: "none",
                                        background: galleryIdx === i ? "#2563EB" : "#D1D5DB",
                                        cursor: "pointer", transition: "all 0.3s ease", padding: 0
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </FadeIn>

            </div>
        </section>
    );
}
