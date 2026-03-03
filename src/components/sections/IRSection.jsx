import FadeIn from '../common/FadeIn';

export default function IRSection() {
    return (
        <section style={{
            background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)",
            padding: "clamp(28px, 5vw, 56px) 0",
            position: "relative",
            overflow: "hidden"
        }}>
            {/* Decorative orb */}
            <div style={{
                position: "absolute", top: "-20%", right: "-10%",
                width: "50vw", height: "50vw", borderRadius: "50%",
                background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)",
                pointerEvents: "none"
            }} />

            <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
                {/* ── Revolution Quote ── */}
                <FadeIn>
                    <div style={{ textAlign: "center" }}>
                        <div style={{
                            fontSize: 80, lineHeight: 0.8,
                            color: "rgba(37,99,235,0.15)",
                            fontFamily: "Georgia, serif", marginBottom: 16
                        }}>"</div>
                        <h2 style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "clamp(22px, 3.5vw, 40px)",
                            fontWeight: 800, color: "#1F2937",
                            lineHeight: 1.25, marginBottom: 24,
                            maxWidth: 780, margin: "0 auto 24px",
                            letterSpacing: "-0.02em"
                        }}>
                            Interventional radiology is the{" "}
                            <span style={{ color: "#2563EB" }}>quiet revolution</span>{" "}
                            of the medical world.
                        </h2>
                        <p style={{
                            fontFamily: "'Roboto', sans-serif",
                            fontSize: "clamp(15px, 1.8vw, 18px)",
                            color: "#6B7280", lineHeight: 1.8,
                            maxWidth: 680, margin: "0 auto 36px"
                        }}>
                            Often referred to as{" "}
                            <strong style={{ color: "#1F2937" }}>Surgery 2.0</strong>,
                            it is a specialised field that uses advanced medical imaging (CT, Ultrasound)
                            to perform complex procedures that once required open surgery — through just a pinhole.
                        </p>
                        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10 }}>
                            {["No Large Incisions", "Local Anaesthesia", "Same Day Home", "No Scars", "Faster Recovery"].map((tag, i) => (
                                <span key={i} style={{
                                    background: "rgba(37,99,235,0.08)",
                                    border: "1px solid rgba(37,99,235,0.15)",
                                    color: "#2563EB", padding: "6px 16px",
                                    borderRadius: 100, fontSize: 13, fontWeight: 600,
                                    fontFamily: "'Roboto', sans-serif"
                                }}>{tag}</span>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
