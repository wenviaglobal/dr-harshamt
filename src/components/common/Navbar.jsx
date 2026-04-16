import { useState, useEffect, useRef } from 'react';
import { NAV, SERVICES } from '../../config/data';
import { Menu, X, Calendar, ChevronRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LogoImg from '../../assets/dr-harsha-hospital logo.png';

export default function Navbar({ onNav }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [showMegaMenu, setShowMegaMenu] = useState(false);
    const [activeService, setActiveService] = useState(SERVICES[0]);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
    const timeoutRef = useRef(null);

    const isMobile = windowWidth < 700;

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (window.innerWidth > 768) {
                setMobileOpen(false);
                setMobileServicesOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Disable body scroll when mobile menu is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [mobileOpen]);

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setShowMegaMenu(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => setShowMegaMenu(false), 200);
    };

    const navigate = (href, keepMobile = false) => {
        if (!keepMobile) {
            setMobileOpen(false);
            setMobileServicesOpen(false);
        }

        if (href.startsWith("/")) {
            const p = href.substring(1);
            const isTargetPage = window.location.pathname === href;

            if (!isTargetPage) {
                window.history.pushState({}, '', href);
                onNav(p);
                // Force scroll after state update in App.jsx
            } else {
                // Already on the page, just scroll
                const el = document.querySelector("#" + p);
                if (el) el.scrollIntoView({ behavior: "smooth" });
            }
        } else if (href.startsWith("#")) {
            const isHomePage = window.location.pathname === '/' || window.location.pathname === '/about' || window.location.pathname === '/services';
            if (!isHomePage) {
                window.history.pushState({}, '', '/' + href);
                onNav("home");
                setTimeout(() => {
                    const el = document.querySelector(href);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                }, 150);
            } else {
                const el = document.querySelector(href);
                if (el) el.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <nav style={{
            position: "fixed",
            top: scrolled ? "12px" : "24px",
            left: 0,
            right: 0,
            zIndex: 1000,
            transition: "all 0.5s cubic-bezier(0.19, 1, 0.22, 1)",
            padding: "0 24px"
        }}>

            <div style={{
                maxWidth: 1100,
                margin: "0 auto",
                height: 84,
                background: "#f8f6f1",
                borderRadius: 20,
                border: "1px solid rgba(0,0,0,0.04)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 12px",
                boxShadow: "0 12px 30px -10px rgba(0,0,0,0.08)",
            }}>


                {/* Center: Logo */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: isMobile ? 8 : 12,
                        cursor: "pointer",
                        padding: isMobile ? "0 10px" : "0 20px"
                    }}
                    onClick={() => {
                        window.history.pushState({}, '', '/');
                        onNav("home");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        setMobileOpen(false);
                        setMobileServicesOpen(false);
                    }}
                >
                    <img src={LogoImg} alt="Dr. Harsha Logo" style={{ height: isMobile ? 48 : 70, objectFit: "contain" }} />
                    <div style={{
                        color: "#071426",
                        fontSize: isMobile ? 15 : 20,
                        fontWeight: 800,
                        fontFamily: "'Roboto Slab', serif",
                        // letterSpacing: "-0.01em",
                        whiteSpace: "nowrap",
                        minWidth: 0,
                        overflow: "hidden"
                    }}>DR. HARSHA M T
                        <p style={{
                            fontSize: isMobile ? 10 : 13,
                            fontFamily: "'Roboto', sans-serif",
                            color: "#1668dbff",
                            lineHeight: 1,
                            maxWidth: isMobile ? 140 : 260,
                            letterSpacing: isMobile ? 0.2 : 0.5,
                            margin: 0,
                            fontWeight: 900,

                        }}>
                            {/* {DOC.tagline} */}
                            Interventional Radiologist
                        </p>
                    </div>
                </div>

                {/* Left: Navigation Links */}
                <div className="desk-nav" style={{
                    flex: 1,
                    display: isMobile ? "none" : "flex",
                    alignItems: "center",
                    gap: 8,
                    paddingLeft: 50,
                    overflow: "hidden"
                }}>
                    {NAV.map(n => {
                        const isServices = n.label === "Services";
                        return (
                            <div
                                key={n.href}
                                onMouseEnter={isServices ? handleMouseEnter : undefined}
                                onMouseLeave={isServices ? handleMouseLeave : undefined}
                                style={{ position: "static" }}
                            >
                                <button
                                    onClick={() => navigate(n.href)}
                                    style={{
                                        background: isServices && showMegaMenu ? "#fff" : "none",
                                        border: "none",
                                        color: isServices && showMegaMenu ? "#071426" : "#4B5563",
                                        fontSize: 14,
                                        fontFamily: "'Roboto', sans-serif",
                                        cursor: "pointer",
                                        fontWeight: 500,
                                        padding: "8px 16px",
                                        borderRadius: 12,
                                        transition: "all 0.2s ease",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 4,

                                    }}
                                >
                                    {n.label}
                                    {isServices && <ChevronRight size={14} style={{ rotate: showMegaMenu ? "90deg" : "0deg", transition: "0.3s" }} />}
                                </button>
                            </div>
                        );
                    })}
                </div>


                <div style={{
                    flex: 1,
                    display: isMobile ? "none" : "flex",
                    justifyContent: "flex-end",
                    paddingRight: 6
                }} className="desk-nav">
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(2, 132, 199, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate("#contact")}
                        style={{
                            background: "linear-gradient(135deg, #0F172A 0%, #1E3A8A 50%, #0284C7 100%)",
                            border: "none",
                            color: "#fff",
                            padding: "12px 24px",
                            borderRadius: 100,
                            fontSize: 14,
                            fontWeight: 700,
                            cursor: "pointer",
                            fontFamily: "'Roboto', sans-serif",
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                        }}
                    >
                        <Calendar size={18} color="#ffffff" strokeWidth={2} />
                        Book Appointment
                    </motion.button>
                </div>

                <button
                    className="mob-btn"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    style={{
                        display: isMobile ? "flex" : "none",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 40,
                        width: 40,
                        background: "#081c47ff",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "#fff",
                        borderRadius: 14,
                        cursor: "pointer",
                        marginLeft: "auto",
                        padding: 0,
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                    }}
                >{mobileOpen ? <X size={24} /> : <Menu size={24} />}</button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="mob-menu-container" style={{
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "calc(100% - 48px)",
                    background: "rgba(248, 246, 241, 1)",
                    backdropFilter: "blur(24px)",
                    padding: "16px 24px",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                    maxHeight: "75vh",
                    overflowY: "auto",
                    boxShadow: "0 30px 60px -12px rgba(0,0,0,0.2)",
                    borderRadius: 28,
                    marginTop: 12,
                    zIndex: 1001
                }}>
                    {NAV.map(n => {
                        const isServices = n.label === "Services";
                        return (
                            <div key={n.href}>
                                <button
                                    onClick={() => {
                                        if (isServices) {
                                            const toggle = !mobileServicesOpen;
                                            setMobileServicesOpen(toggle);
                                            // Only navigate if opening
                                            if (toggle) {
                                                navigate(n.href, true);
                                                setMobileOpen(true);
                                            }
                                        } else {
                                            navigate(n.href);
                                        }
                                    }}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        width: "100%",
                                        background: "none",
                                        border: "none",
                                        color: isServices && mobileServicesOpen ? "#2563EB" : "#374151",
                                        fontSize: 18,
                                        fontWeight: isServices && mobileServicesOpen ? 700 : 500,
                                        padding: "14px 0",
                                        fontFamily: "'Poppins', sans-serif",
                                        cursor: "pointer",
                                        borderBottom: isServices && mobileServicesOpen ? "none" : "1px solid rgba(0, 0, 0, 0.06)"
                                    }}
                                >
                                    {n.label}
                                    {isServices && <ChevronRight size={18} style={{
                                        rotate: mobileServicesOpen ? "90deg" : "0deg",
                                        transition: "0.3s ease",
                                        color: "#2563EB",
                                        opacity: mobileServicesOpen ? 1 : 0.4
                                    }} />}
                                </button>

                                {isServices && (
                                    <AnimatePresence>
                                        {mobileServicesOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                style={{ overflow: "hidden" }}
                                            >
                                                <div style={{
                                                    padding: "16px",
                                                    display: "grid",
                                                    gap: 8,
                                                    background: "#ffffff",
                                                    border: "1px solid rgba(0, 0, 0, 0.04)",
                                                    boxShadow: "inset 0 4px 12px rgba(0,0,0,0.02), 0 4px 12px rgba(0,0,0,0.03)",
                                                    borderRadius: 20,
                                                    marginBottom: 16,
                                                    marginTop: 8
                                                }}>
                                                    {SERVICES.map(s => (
                                                        <motion.button
                                                            whileHover={{ x: 4, backgroundColor: "rgba(37, 99, 235, 0.04)" }}
                                                            whileTap={{ scale: 0.98 }}
                                                            key={s.id}
                                                            onClick={() => navigate(`/treatment/${s.id}`)}
                                                            style={{
                                                                width: "100%",
                                                                textAlign: "left",
                                                                padding: "10px 14px",
                                                                background: "transparent",
                                                                border: "none",
                                                                color: "#1E293B",
                                                                fontSize: 14,
                                                                fontWeight: 600,
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: 14,
                                                                fontFamily: "'Roboto', sans-serif",
                                                                cursor: "pointer",
                                                                borderRadius: 12,
                                                                transition: "all 0.2s ease"
                                                            }}
                                                        >
                                                            <div style={{
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                width: 34,
                                                                height: 34,
                                                                borderRadius: 10,
                                                                background: "rgba(37, 99, 235, 0.08)",
                                                                flexShrink: 0
                                                            }}>
                                                                <s.icon size={18} color="#2563EB" strokeWidth={2.2} />
                                                            </div>
                                                            <span style={{ lineHeight: 1.3 }}>{s.t}</span>
                                                        </motion.button>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        );
                    })}
                    <button
                        onClick={() => navigate("#contact")}
                        style={{
                            marginTop: 12,
                            width: "100%",
                            background: "linear-gradient(360deg, #0F172A 0%, #1E3A8A 50%, #0284C7 100%)",
                            border: "none",
                            color: "#fff",
                            padding: "14px",
                            borderRadius: 12,
                            fontSize: 16,
                            fontWeight: 700,
                            cursor: "pointer",
                            fontFamily: "'Roboto', sans-serif",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 10
                        }}
                    >
                        <Calendar size={18} color="#ffffff" strokeWidth={2} />
                        Book Appointment
                    </button>
                </div>
            )}

            <AnimatePresence>
                {showMegaMenu && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, x: "-50%", scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
                        exit={{ opacity: 0, y: 10, x: "-50%", scale: 0.98 }}
                        transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            position: "absolute",
                            top: "100%",
                            left: "50%",
                            width: "calc(100% - 48px)",
                            maxWidth: 1000,
                            background: "#f8f6f1",
                            marginTop: 12,
                            borderRadius: 24,
                            border: "1px solid rgba(0,0,0,0.05)",
                            boxShadow: "0 30px 60px -15px rgba(0,0,0,0.15)",
                            display: "flex",
                            overflow: "hidden",
                            zIndex: 999
                        }}
                    >
                        <div style={{ flex: 1.8, padding: 32, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                            {SERVICES.slice(0, 8).map(s => (
                                <div
                                    key={s.id}
                                    onClick={() => { navigate(`/treatment/${s.id}`); setShowMegaMenu(false); }}
                                    style={{
                                        padding: 16,
                                        borderRadius: 16,
                                        cursor: "pointer",
                                        transition: "all 0.2s ease",
                                        display: "flex",
                                        gap: 16,
                                        background: activeService?.id === s.id ? "#fff" : "none"
                                    }}
                                    onMouseEnter={() => setActiveService(s)}
                                >
                                    <div style={{
                                        width: 44,
                                        height: 44,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#0D9488"
                                    }}>
                                        <s.icon size={22} />
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 700, fontSize: 14, color: "#071426", marginBottom: 2 }}>{s.t}</div>
                                        <div style={{ fontSize: 12, color: "#6B7280", lineHeight: 1.4, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{s.d}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div style={{ flex: 1, background: "rgba(0,0,0,0.02)", padding: 32, borderLeft: "1px solid rgba(0,0,0,0.03)" }}>
                            <div style={{ textTransform: "uppercase", fontSize: 11, fontWeight: 800, color: "#9CA3AF", letterSpacing: "0.1em", marginBottom: 20 }}>Featured Treatment</div>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeService?.id}
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ duration: 0.2 }}
                                    style={{
                                        borderRadius: 16,
                                        overflow: "hidden",
                                        background: "#fff",
                                        boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
                                    }}>
                                    <img src={activeService?.img} alt="Featured" style={{ width: "100%", height: 160, objectFit: "cover" }} />
                                    <div style={{ padding: 20 }}>
                                        <div style={{ fontWeight: 800, fontSize: 16, color: "#071426", marginBottom: 8 }}>{activeService?.t}</div>
                                        <p style={{ fontSize: 13, color: "#6B7280", marginBottom: 16, lineHeight: 1.6, minHeight: 64 }}>{activeService?.d.split(".")[0] + "."}</p>
                                        <button
                                            onClick={() => { navigate(`/treatment/${activeService?.id}`); setShowMegaMenu(false); }}
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 8,
                                                padding: "8px 16px",
                                                background: "#071426",
                                                color: "#fff",
                                                borderRadius: 99,
                                                fontSize: 12,
                                                fontWeight: 600,
                                                border: "none",
                                                cursor: "pointer"
                                            }}
                                        >Learn More <ArrowRight size={14} /></button>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
