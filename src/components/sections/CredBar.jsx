import FadeIn from '../common/FadeIn';
import Counter from '../common/Counter';
import { CREDS, DOC } from '../../config/data';
import '../../styles/Hero.css';

export default function CredBar() {
    return (
        <section style={{
            background: "#F8FAFC",
            borderTop: "1px solid rgba(0,0,0,0.06)",
            borderBottom: "1px solid rgba(0,0,0,0.06)"
        }}>
            <FadeIn delay={0.1}>
                <div className="hero-stats">
                    {[
                        { v: DOC.exp, l: "Years Experience" },
                        { v: DOC.procs, l: "Procedures" },
                        { v: DOC.certs, l: "Certifications" }
                    ].map((s, i) => (
                        <div key={i} className="hero-stat-item">
                            <div className="hero-stat-val">
                                <Counter value={s.v} />
                            </div>
                            <div className="hero-stat-lbl">{s.l}</div>
                        </div>
                    ))}
                </div>
            </FadeIn>


            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "36px 24px" }}>
                <FadeIn>
                    <div style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: 10
                    }}>
                        {CREDS.map((c, i) => (
                            <div
                                key={i}
                                style={{
                                    flex: "1 1 240px",
                                    minHeight: 110,
                                    maxWidth: 350,
                                    padding: "16px 20px",
                                    borderRadius: 12,
                                    background: "#FFFFFF",
                                    border: "1px solid #E5E7EB",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 14
                                }}
                            >
                                <div style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 10,
                                    flexShrink: 0,
                                    background: "linear-gradient(135deg, rgba(37,99,235,0.1), rgba(37,99,235,0.04))",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: 13,
                                    fontWeight: 700,
                                    color: "#2563EB",
                                    fontFamily: "'Roboto', sans-serif"
                                }}><span style={{ textTransform: "uppercase" }}>{c.inst.slice(0, 2)}</span></div>
                                <div>
                                    <div style={{
                                        color: "#1F2937",
                                        fontSize: 14,
                                        fontWeight: 600,
                                        fontFamily: "'Roboto', sans-serif"
                                    }}>{c.inst}</div>
                                    <div style={{
                                        color: "#6B7280",
                                        fontSize: 13,
                                        fontFamily: "'Roboto', sans-serif"
                                    }}>{c.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
