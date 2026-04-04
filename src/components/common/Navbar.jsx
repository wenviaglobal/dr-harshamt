import { useState, useEffect, useRef } from 'react';
import { NAV, SERVICES } from '../../config/data';
import { Menu, X, Calendar, ChevronRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ onNav }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [showMegaMenu, setShowMegaMenu] = useState(false);
    const [activeService, setActiveService] = useState(SERVICES[0]);
    const timeoutRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
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

    const navigate = (href) => {
        setMobileOpen(false);
        setMobileServicesOpen(false);
        if (href.startsWith("/")) {
            const p = href.substring(1); 
            const isTargetPage = window.location.pathname === href;

            if (!isTargetPage) {
                window.history.pushState({}, '', href);
                onNav(p);
            } else {
                document.querySelector("#" + p)?.scrollIntoView({ behavior: "smooth" });
            }
        } else if (href.startsWith("#")) {
            const isHomePage = window.location.pathname === '/' || window.location.pathname === '/about' || window.location.pathname === '/services';
            if (!isHomePage) {
                window.history.pushState({}, '', '/' + href);
                onNav("home");
            }
            setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }), 100);
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
                height: 68,
                background: "#f8f6f1",
                borderRadius: 20,
                border: "1px solid rgba(0,0,0,0.04)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 12px",
                boxShadow: "0 12px 30px -10px rgba(0,0,0,0.08)",
            }}>
                {/* Left: Navigation Links */}
                <div className="desk-nav" style={{ 
                    flex: 1, 
                    display: "flex", 
                    alignItems: "center", 
                    gap: 8,
                    paddingLeft: 12
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
                                        fontSize: 13,
                                        fontFamily: "'Roboto', sans-serif",
                                        cursor: "pointer",
                                        fontWeight: 500,
                                        padding: "8px 16px",
                                        borderRadius: 12,
                                        transition: "all 0.2s ease",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 4
                                    }}
                                >
                                    {n.label}
                                    {isServices && <ChevronRight size={14} style={{ rotate: showMegaMenu ? "90deg" : "0deg", transition: "0.3s" }} />}
                                </button>
                            </div>
                        );
                    })}
                </div>

                {/* Center: Logo */}
                <div
                    style={{ 
                        display: "flex", 
                        alignItems: "center", 
                        gap: 12, 
                        cursor: "pointer",
                        padding: "0 20px"
                    }}
                    onClick={() => { 
                        window.history.pushState({}, '', '/'); 
                        onNav("home"); 
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        setMobileOpen(false);
                        setMobileServicesOpen(false);
                    }}
                >
                    <div style={{
                        width: 32,
                        height: 32,
                        borderRadius: 10,
                        background: "#071426",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 14,
                        fontWeight: 700,
                        color: "#fff",
                        fontFamily: "'Roboto Slab', serif"
                    }}>H</div>
                    <div style={{
                        color: "#071426",
                        fontSize: 15,
                        fontWeight: 800,
                        fontFamily: "'Roboto Slab', serif",
                        letterSpacing: "-0.01em",
                        whiteSpace: "nowrap"
                    }}>DR. HARSHA M T</div>
                </div>

                <div style={{ 
                    flex: 1, 
                    display: "flex", 
                    justifyContent: "flex-end", 
                    paddingRight: 6 
                }} className="desk-nav">
                    <button
                        onClick={() => navigate("#contact")}
                        style={{
                            background: "#6B7280",
                            border: "none",
                            color: "#fff",
                            padding: "10px 20px",
                            borderRadius: 16,
                            fontSize: 13,
                            fontWeight: 600,
                            cursor: "pointer",
                            fontFamily: "'Roboto', sans-serif",
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            transition: "all 0.3s ease"
                        }}
                    >
                        <Calendar size={16} color='orange' />
                        Book Treatment
                    </button>
                </div>

                <button
                    className="mob-btn"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    style={{
                        display: "none",
                        background: "#fff",
                        border: "1px solid rgba(0,0,0,0.05)",
                        color: "#1F2937",
                        borderRadius: 12,
                        cursor: "pointer",
                        padding: 8,
                        marginLeft: "auto"
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
                    maxHeight: "80vh",
                    overflowY: "auto",
                    boxShadow: "0 30px 60px -12px rgba(0,0,0,0.2)",
                    borderRadius: 28,
                    marginTop: 12,
                    overflow: "hidden",
                    zIndex: 1001
                }}>
                    {NAV.map(n => {
                        const isServices = n.label === "Services";
                        return (
                            <div key={n.href}>
                                <button
                                    onClick={() => isServices ? setMobileServicesOpen(!mobileServicesOpen) : navigate(n.href)}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        width: "100%",
                                        background: "none",
                                        border: "none",
                                        color: isServices && mobileServicesOpen ? "#2563EB" : "#374151",
                                        fontSize: 16,
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
                                                    padding: "4px 0 16px 12px", 
                                                    display: "grid", 
                                                    gap: 4,
                                                    borderLeft: "2px solid #E5E7EB",
                                                    marginLeft: 4,
                                                    marginBottom: 12,
                                                    background: "rgba(37, 99, 235, 0.03)",
                                                    borderRadius: "0 0 12px 12px"
                                                }}>
                                                    {SERVICES.map(s => (
                                                        <button
                                                            key={s.id}
                                                            onClick={() => navigate(`/treatment/${s.id}`)}
                                                            style={{
                                                                width: "100%",
                                                                textAlign: "left",
                                                                padding: "10px 12px",
                                                                background: "none",
                                                                border: "none",
                                                                color: "#4B5563",
                                                                fontSize: 14,
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: 12,
                                                                fontFamily: "'Roboto', sans-serif",
                                                                cursor: "pointer",
                                                                borderRadius: 8
                                                            }}
                                                        >
                                                            <s.icon size={16} color="#0D9488" strokeWidth={2.5} />
                                                            {s.t}
                                                        </button>
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
