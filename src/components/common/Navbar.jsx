import { useState, useEffect } from 'react';
import { NAV } from '../../config/data';

export default function Navbar({ onNav }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navigate = (href) => {
        setMobileOpen(false);
        if (href.startsWith("#")) {
            // If we're on a sub-page, go home first then scroll
            if (window.location.pathname !== '/') {
                window.history.pushState({}, '', '/' + href);
            }
            onNav("home");
            setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }), 100);
        }
    };

    return (
        <nav style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            background: "rgba(255,255,255,0.98)",
            backdropFilter: "blur(16px)",
            borderBottom: "1px solid rgba(229,231,235,0.8)",
            boxShadow: scrolled ? "0 2px 8px rgba(0,0,0,0.06)" : "0 1px 3px rgba(0,0,0,0.03)",
            transition: "all 0.4s",
            padding: scrolled ? "10px 0" : "14px 0"
        }}>
            <div style={{
                maxWidth: 1200,
                margin: "0 auto",
                padding: "0 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                {/* Logo */}
                <div
                    style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}
                    onClick={() => { window.history.pushState({}, '', '/'); onNav("home"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                >
                    <div style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #2563EB, #3B82F6)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 15,
                        fontWeight: 700,
                        color: "#fff",
                        fontFamily: "'Roboto Slab', serif"
                    }}>H</div>
                    <div style={{
                        color: "#1F2937",
                        fontSize: 16,
                        fontWeight: 700,
                        fontFamily: "'Poppins', sans-serif",
                        lineHeight: 1.2
                    }}>DR. HARSHA M T</div>
                </div>

                {/* Desktop Navigation */}
                <div className="desk-nav" style={{ display: "flex", alignItems: "center", gap: 28 }}>
                    {NAV.map(n => (
                        <button
                            key={n.href}
                            onClick={() => navigate(n.href)}
                            style={{
                                background: "none",
                                border: "none",
                                color: "#4B5563",
                                fontSize: 15,
                                fontFamily: "'Poppins', sans-serif",
                                cursor: "pointer",
                                fontWeight: 500,
                                transition: "color 0.2s ease"
                            }}
                            onMouseEnter={e => e.target.style.color = "#2563EB"}
                            onMouseLeave={e => e.target.style.color = "#4B5563"}
                        >{n.label}</button>
                    ))}
                    <button
                        onClick={() => navigate("#contact")}
                        style={{
                            background: "#2563EB",
                            border: "none",
                            color: "#fff",
                            padding: "12px 28px",
                            borderRadius: 10,
                            fontSize: 15,
                            fontWeight: 600,
                            cursor: "pointer",
                            fontFamily: "'Poppins', sans-serif",
                            boxShadow: "0 2px 8px rgba(37,99,235,0.25)",
                            transition: "all 0.2s ease"
                        }}
                        onMouseEnter={e => {
                            e.target.style.background = "#1D4ED8";
                            e.target.style.transform = "translateY(-1px)";
                            e.target.style.boxShadow = "0 4px 12px rgba(37,99,235,0.35)";
                        }}
                        onMouseLeave={e => {
                            e.target.style.background = "#2563EB";
                            e.target.style.transform = "translateY(0)";
                            e.target.style.boxShadow = "0 2px 8px rgba(37,99,235,0.25)";
                        }}
                    >Book Appointment</button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="mob-btn"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    style={{
                        display: "none",
                        background: "none",
                        border: "none",
                        color: "#1F2937",
                        fontSize: 24,
                        cursor: "pointer",
                        padding: 10,
                        minWidth: 44,
                        minHeight: 44
                    }}
                >{mobileOpen ? "✕" : "☰"}</button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    right: 0,
                    background: "rgba(7,20,38,0.98)",
                    backdropFilter: "blur(20px)",
                    padding: "16px 24px",
                    borderBottom: "1px solid rgba(255,255,255,0.06)"
                }}>
                    {NAV.map(n => (
                        <button
                            key={n.href}
                            onClick={() => navigate(n.href)}
                            style={{
                                display: "block",
                                width: "100%",
                                textAlign: "left",
                                background: "none",
                                border: "none",
                                color: "rgba(255,255,255,0.8)",
                                fontSize: 15,
                                padding: "12px 0",
                                fontFamily: "'Roboto', sans-serif",
                                cursor: "pointer",
                                borderBottom: "1px solid rgba(255,255,255,0.05)"
                            }}
                        >{n.label}</button>
                    ))}
                    <button
                        onClick={() => navigate("#contact")}
                        style={{
                            marginTop: 12,
                            width: "100%",
                            background: "#2563EB",
                            border: "none",
                            color: "#fff",
                            padding: "14px",
                            borderRadius: 8,
                            fontSize: 15,
                            fontWeight: 600,
                            cursor: "pointer",
                            fontFamily: "'Roboto', sans-serif"
                        }}
                    >Book Appointment</button>
                </div>
            )}
        </nav>
    );
}
