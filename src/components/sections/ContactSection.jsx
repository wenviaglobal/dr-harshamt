import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import FadeIn from '../common/FadeIn';
import { DOC, SERVICES } from '../../config/data';
import { CheckCircle2, AlertTriangle } from 'lucide-react';

const inputStyle = {
    width: "100%",
    padding: "12px 14px",
    borderRadius: 10,
    border: "1px solid #D1D5DB",
    fontSize: 14,
    fontFamily: "'Roboto', sans-serif",
    background: "#F9FAFB",
    color: "#1F2937",
    boxSizing: "border-box",
    outline: "none",
    transition: "border-color 0.2s ease"
};

const labelStyle = {
    display: "block",
    fontSize: 11,
    fontWeight: 600,
    color: "#6B7280",
    fontFamily: "'Roboto', sans-serif",
    marginBottom: 6,
    letterSpacing: "0.04em",
    textTransform: "uppercase"
};

export default function ContactSection() {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        condition: "",
        message: ""
    });
    // idle | submitting | sent | error
    const [status, setStatus] = useState("idle");

    const handleChange = (field, value) => {
        setForm(prev => ({ ...prev, [field]: value }));
    };

const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
        const res = await axios.post("/api/contact", {
            name: form.name,
            phone: form.phone,
            condition: form.condition || "General Inquiry",
            message: form.message || "",
        });

        if (res.status === 200 && res.data.success) {
            setStatus("sent");
            setForm({ name: "", phone: "", condition: "", message: "" });
            setTimeout(() => setStatus("idle"), 6000);
        } else {
            console.error("Server returned success: false");
            setStatus("error");
            setTimeout(() => setStatus("idle"), 4000);
        }
    } catch (err) {
        console.error("Network/System Error:", err);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
    }
};

    return (
        <section id="contact" style={{
            background: "linear-gradient(180deg, #EFF6FF, #DBEAFE)",
            padding: "clamp(28px, 5vw, 56px) 0"
        }}>
            <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 24px" }}>
                {/* Section heading */}
                <FadeIn>
                    <div style={{ textAlign: "center", marginBottom: 36 }}>
                        <span style={{
                            display: "inline-block", fontSize: 11, fontWeight: 700,
                            letterSpacing: "0.12em", textTransform: "uppercase",
                            color: "#2563EB", background: "rgba(37,99,235,0.08)",
                            padding: "6px 16px", borderRadius: 100, marginBottom: 14,
                            fontFamily: "'Roboto', sans-serif",
                            border: "1px solid rgba(37,99,235,0.15)"
                        }}>Book Appointment</span>
                        <h2 style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "clamp(24px, 3.5vw, 38px)",
                            fontWeight: 800, color: "#1F2937",
                            lineHeight: 1.15, letterSpacing: "-0.02em",
                            marginBottom: 10
                        }}>Book Appointment</h2>
                        <p style={{
                            fontFamily: "'Roboto', sans-serif",
                            fontSize: 15, color: "#6B7280",
                            maxWidth: 500, margin: "0 auto"
                        }}>Consult Dr. Harsha M T – Interventional Radiologist in Bengaluru for advanced minimally invasive treatments.</p>
                    </div>
                </FadeIn>

                {/* Booking Form */}
                <FadeIn delay={0.1}>
                    <div style={{
                        background: "#FFFFFF",
                        border: "1px solid #E5E7EB",
                        borderRadius: 18, padding: 32
                    }}>
                        {status === "sent" ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                style={{
                                    textAlign: "center", padding: "48px 24px",
                                    background: "rgba(13,148,136,0.06)",
                                    border: "1px solid rgba(13,148,136,0.15)",
                                    borderRadius: 14
                                }}
                            >
                                <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'center' }}><CheckCircle2 size={48} color="#0D9488" /></div>
                                <div style={{
                                    fontSize: 18, fontWeight: 700, color: "#0D9488",
                                    fontFamily: "'Poppins', sans-serif", marginBottom: 8
                                }}>Appointment Request Sent!</div>
                                <div style={{
                                    fontSize: 14, color: "#6B7280",
                                    fontFamily: "'Roboto', sans-serif", lineHeight: 1.6
                                }}>
                                    Dr. Harsha's team will confirm your appointment shortly.
                                </div>
                            </motion.div>
                        ) : status === "error" ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                style={{
                                    textAlign: "center", padding: "48px 24px",
                                    background: "rgba(239,68,68,0.06)",
                                    border: "1px solid rgba(239,68,68,0.15)",
                                    borderRadius: 14
                                }}
                            >
                                <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'center' }}><AlertTriangle size={48} color="#EF4444" /></div>
                                <div style={{
                                    fontSize: 18, fontWeight: 700, color: "#EF4444",
                                    fontFamily: "'Poppins', sans-serif", marginBottom: 8
                                }}>Something went wrong</div>
                                <div style={{
                                    fontSize: 14, color: "#6B7280",
                                    fontFamily: "'Roboto', sans-serif", lineHeight: 1.6
                                }}>
                                    Please try again or call us directly at{" "}
                                    <a href={`tel:${DOC.phone}`} style={{ color: "#2563EB", fontWeight: 600 }}>{DOC.phone}</a>
                                </div>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                {/* Name */}
                                <div style={{ marginBottom: 16 }}>
                                    <label style={labelStyle}>Name *</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        required
                                        value={form.name}
                                        onChange={e => handleChange("name", e.target.value)}
                                        style={inputStyle}
                                        onFocus={e => e.target.style.borderColor = "#2563EB"}
                                        onBlur={e => e.target.style.borderColor = "#D1D5DB"}
                                    />
                                </div>

                                {/* Phone */}
                                <div style={{ marginBottom: 16 }}>
                                    <label style={labelStyle}>Phone Number *</label>
                                    <input
                                        type="tel"
                                        placeholder="+91 XXXXX XXXXX"
                                        required
                                        value={form.phone}
                                        onChange={e => handleChange("phone", e.target.value)}
                                        style={inputStyle}
                                        onFocus={e => e.target.style.borderColor = "#2563EB"}
                                        onBlur={e => e.target.style.borderColor = "#D1D5DB"}
                                    />
                                </div>

                                {/* Condition / Treatment */}
                                <div style={{ marginBottom: 16 }}>
                                    <label style={labelStyle}>Condition / Treatment</label>
                                    <select
                                        value={form.condition}
                                        onChange={e => handleChange("condition", e.target.value)}
                                        style={{
                                            ...inputStyle,
                                            color: form.condition ? "#1F2937" : "#9CA3AF",
                                            cursor: "pointer"
                                        }}
                                    >
                                        <option value="">Select a condition</option>
                                        <option value="General consultation/ Other options">General consultation / Other Options</option>
                                        {SERVICES.map(s => (
                                            <option key={s.t} value={s.t}>{s.t}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Message */}
                                <div style={{ marginBottom: 24 }}>
                                    <label style={labelStyle}>Message (Optional)</label>
                                    <textarea
                                        placeholder="Briefly describe your condition or any questions..."
                                        rows={3}
                                        value={form.message}
                                        onChange={e => handleChange("message", e.target.value)}
                                        style={{
                                            ...inputStyle,
                                            resize: "vertical",
                                            minHeight: 70
                                        }}
                                        onFocus={e => e.target.style.borderColor = "#2563EB"}
                                        onBlur={e => e.target.style.borderColor = "#D1D5DB"}
                                    />
                                </div>

                                {/* Submit button */}
                                <motion.button
                                    type="submit"
                                    disabled={status === "submitting"}
                                    whileHover={status !== "submitting" ? { scale: 1.02 } : {}}
                                    whileTap={status !== "submitting" ? { scale: 0.98 } : {}}
                                    style={{
                                        width: "100%", padding: "15px",
                                        borderRadius: 12, border: "none",
                                        background: status === "submitting" ? "#93C5FD" : "#2563EB",
                                        color: "#fff", fontSize: 15, fontWeight: 700,
                                        cursor: status === "submitting" ? "not-allowed" : "pointer",
                                        fontFamily: "'Poppins', sans-serif",
                                        boxShadow: "0 4px 20px rgba(37,99,235,0.3)",
                                        display: "flex", alignItems: "center",
                                        justifyContent: "center", gap: 10,
                                        transition: "background 0.2s ease"
                                    }}
                                >{status === "submitting" ? "Sending..." : "Book Appointment"}</motion.button>

                                <div style={{
                                    marginTop: 14, textAlign: "center",
                                    fontSize: 12, color: "#9CA3AF",
                                    fontFamily: "'Roboto', sans-serif", lineHeight: 1.5
                                }}>
                                    Your details are sent securely. We'll confirm your appointment soon.
                                </div>
                            </form>
                        )}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
