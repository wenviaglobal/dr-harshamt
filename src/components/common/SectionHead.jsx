export default function SectionHead({ sup, title, desc }) {
    return (
        <div style={{ textAlign: "center", marginBottom: 36 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                <div style={{ width: 24, height: 1, background: "rgba(13,148,136,0.4)" }} />
                <span style={{
                    fontSize: 11,
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#2563EB"
                }}>{sup}</span>
                <div style={{ width: 24, height: 1, background: "rgba(13,148,136,0.4)" }} />
            </div>
            <h2 style={{
                fontFamily: "'Roboto Slab', serif",
                fontSize: "clamp(26px, 3.8vw, 40px)",
                fontWeight: 700,
                color: "#071426",
                lineHeight: 1.2,
                marginBottom: 10,
                letterSpacing: "-0.02em"
            }}>{title}</h2>
            {desc && (
                <p style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: 15,
                    color: "rgba(7,20,38,0.5)",
                    maxWidth: 640,
                    margin: "0 auto",
                    lineHeight: 1.6
                }}>{desc}</p>
            )}
        </div>
    );
}
