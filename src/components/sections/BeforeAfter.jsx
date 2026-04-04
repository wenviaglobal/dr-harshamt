import FadeIn from '../common/FadeIn';
import SectionHead from '../common/SectionHead';
import { BEFORE_AFTER } from '../../config/data';
import { Sparkles } from 'lucide-react';

export default function BeforeAfter() {
    return (
        <section style={{ 
            background: "#FAFBFC", 
            padding: "clamp(48px, 8vw, 84px) 0",
            overflow: "hidden" 
        }}>
            <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 24px" }}>
                <SectionHead
                    light
                    sup="Results"
                    title="Real Patient Outcomes"
                    desc="See the difference minimally invasive procedures can make"
                />

                <div className="results-scroll-container" style={{
                    display: "flex",
                    gap: 24,
                    overflowX: "auto",
                    padding: "20px 0 40px 0",
                    scrollBehavior: "smooth",
                    WebkitOverflowScrolling: "touch",
                    paddingBottom: "32px"
                }}>
                    {BEFORE_AFTER.map((item, i) => (
                        <FadeIn key={i} delay={i * 0.1} style={{ flex: "0 0 min(320px, 85vw)" }}>
                            <div style={{
                                width: "100%",
                                background: "#fff",
                                borderRadius: 24,
                                padding: 32,
                                border: "1px solid rgba(37,99,235,0.06)",
                                boxShadow: "0 10px 30px -10px rgba(0,0,0,0.04)",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                transition: "all 0.3s ease",
                            }}>
                                <div style={{
                                    marginBottom: 16,
                                    display: "flex",
                                    justifyContent: "center",
                                    background: "rgba(37,99,235,0.05)",
                                    width: 48,
                                    height: 48,
                                    borderRadius: "50%",
                                    alignItems: "center",
                                    margin: "0 auto 16px auto"
                                }}><Sparkles size={24} color="#2563EB" /></div>
                                
                                <div style={{
                                    fontSize: 17,
                                    fontWeight: 800,
                                    color: "#071426",
                                    fontFamily: "'Roboto Slab', serif",
                                    marginBottom: 6,
                                    textAlign: "center"
                                }}>{item.condition}</div>
                                
                                <div style={{
                                    fontSize: 13,
                                    color: "rgba(7,20,38,0.5)",
                                    fontFamily: "'Roboto', sans-serif",
                                    marginBottom: 20,
                                    textAlign: "center",
                                    lineHeight: 1.5,
                                    fontWeight: 500,
                                    minHeight: 40
                                }}>{item.desc}</div>

                                {/* Before */}
                                <div style={{
                                    background: "rgba(239,68,68,0.03)",
                                    border: "1px solid rgba(239,68,68,0.08)",
                                    borderRadius: 14,
                                    padding: 16,
                                    marginBottom: 12,
                                    flex: 1
                                }}>
                                    <div style={{
                                        fontSize: 10,
                                        fontWeight: 800,
                                        color: "#EF4444",
                                        fontFamily: "'Roboto', sans-serif",
                                        marginBottom: 6,
                                        letterSpacing: "0.08em",
                                        textTransform: "uppercase"
                                    }}>Before</div>
                                    <div style={{
                                        fontSize: 13,
                                        color: "rgba(7,20,38,0.7)",
                                        fontFamily: "'Roboto', sans-serif",
                                        lineHeight: 1.6
                                    }}>{item.before}</div>
                                </div>

                                {/* After */}
                                <div style={{
                                    background: "rgba(13,148,136,0.04)",
                                    border: "1px solid rgba(13,148,136,0.12)",
                                    borderRadius: 14,
                                    padding: 16,
                                    flex: 1
                                }}>
                                    <div style={{
                                        fontSize: 10,
                                        fontWeight: 800,
                                        color: "#0D9488",
                                        fontFamily: "'Roboto', sans-serif",
                                        marginBottom: 6,
                                        letterSpacing: "0.08em",
                                        textTransform: "uppercase"
                                    }}>After</div>
                                    <div style={{
                                        fontSize: 13,
                                        color: "rgba(7,20,38,0.7)",
                                        fontFamily: "'Roboto', sans-serif",
                                        lineHeight: 1.6
                                    }}>{item.after}</div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
            
            <style dangerouslySetInnerHTML={{ __html: `
                .results-scroll-container::-webkit-scrollbar {
                    height: 6px;
                }
                .results-scroll-container::-webkit-scrollbar-track {
                    background: rgba(37,99,235,0.03);
                    border-radius: 10px;
                }
                .results-scroll-container::-webkit-scrollbar-thumb {
                    background: rgba(37,99,235,0.15);
                    border-radius: 10px;
                }
                .results-scroll-container::-webkit-scrollbar-thumb:hover {
                    background: rgba(37,99,235,0.25);
                }
            ` }} />
        </section>
    );
}

