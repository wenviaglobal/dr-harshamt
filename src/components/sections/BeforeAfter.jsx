import FadeIn from '../common/FadeIn';
import SectionHead from '../common/SectionHead';
import { BEFORE_AFTER } from '../../config/data';

export default function BeforeAfter() {
    return (
        <section style={{ background: "#FAFBFC", padding: "clamp(28px, 5vw, 56px) 0" }}>
            <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
                <SectionHead
                    light
                    sup="Results"
                    title="Real Patient Outcomes"
                    desc="See the difference minimally invasive procedures can make"
                />
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: 16
                }}>
                    {BEFORE_AFTER.map((item, i) => (
                        <FadeIn key={i} delay={i * 0.08}>
                            <div style={{
                                background: "#fff",
                                borderRadius: 14,
                                padding: 24,
                                border: "1px solid rgba(0,0,0,0.04)",
                                height: "100%"
                            }}>
                                <div style={{
                                    fontSize: 24,
                                    marginBottom: 12,
                                    textAlign: "center"
                                }}>✨</div>
                                <div style={{
                                    fontSize: 15,
                                    fontWeight: 700,
                                    color: "#071426",
                                    fontFamily: "'Roboto', sans-serif",
                                    marginBottom: 6,
                                    textAlign: "center"
                                }}>{item.condition}</div>
                                <div style={{
                                    fontSize: 12,
                                    color: "rgba(7,20,38,0.5)",
                                    fontFamily: "'Roboto', sans-serif",
                                    marginBottom: 16,
                                    textAlign: "center",
                                    lineHeight: 1.5
                                }}>{item.desc}</div>

                                {/* Before */}
                                <div style={{
                                    background: "rgba(239,68,68,0.04)",
                                    border: "1px solid rgba(239,68,68,0.1)",
                                    borderRadius: 10,
                                    padding: 12,
                                    marginBottom: 10
                                }}>
                                    <div style={{
                                        fontSize: 10,
                                        fontWeight: 600,
                                        color: "#EF4444",
                                        fontFamily: "'Roboto', sans-serif",
                                        marginBottom: 4,
                                        letterSpacing: "0.04em",
                                        textTransform: "uppercase"
                                    }}>Before</div>
                                    <div style={{
                                        fontSize: 12,
                                        color: "rgba(7,20,38,0.6)",
                                        fontFamily: "'Roboto', sans-serif",
                                        lineHeight: 1.5
                                    }}>{item.before}</div>
                                </div>

                                {/* After */}
                                <div style={{
                                    background: "rgba(13,148,136,0.04)",
                                    border: "1px solid rgba(13,148,136,0.15)",
                                    borderRadius: 10,
                                    padding: 12
                                }}>
                                    <div style={{
                                        fontSize: 10,
                                        fontWeight: 600,
                                        color: "#0D9488",
                                        fontFamily: "'Roboto', sans-serif",
                                        marginBottom: 4,
                                        letterSpacing: "0.04em",
                                        textTransform: "uppercase"
                                    }}>After</div>
                                    <div style={{
                                        fontSize: 12,
                                        color: "rgba(7,20,38,0.6)",
                                        fontFamily: "'Roboto', sans-serif",
                                        lineHeight: 1.5
                                    }}>{item.after}</div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
