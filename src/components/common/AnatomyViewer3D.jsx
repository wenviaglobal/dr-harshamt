import { useState, useEffect, useRef } from "react";
import { 
  Activity, 
  Thermometer, 
  Stethoscope, 
  HeartPulse, 
  Baby, 
  Microscope, 
  Crosshair, 
  Play, 
  Move, 
  MousePointerClick, 
  BookOpen, 
  Lightbulb,
  X
} from "lucide-react";

/* ─── 3D ANATOMY VIEWER WITH INTERACTIVE HOTSPOTS ─── */

// Anatomical data for cardiovascular system with treatment areas
const ANATOMY_HOTSPOTS = {
  varicoseVeins: {
    id: "varicose-veins",
    position: { x: 45, y: 72 }, // leg area
    label: "Varicose Veins",
    color: "#7C3AED",
    icon: Activity,
    description: "Enlarged, twisted veins in the legs",
    procedure: "EVLA / Venaseal",
    steps: [
      { title: "Access Point", desc: "Tiny needle puncture below the knee", duration: 0.5 },
      { title: "Catheter Insertion", desc: "Laser fiber guided into damaged vein using ultrasound", duration: 1 },
      { title: "Laser Ablation", desc: "Laser energy seals the vein shut from inside", duration: 1.5 },
      { title: "Blood Rerouting", desc: "Blood naturally flows through healthy veins", duration: 2 },
      { title: "Recovery", desc: "Walk immediately, return to work in 1-2 days", duration: 2.5 }
    ],
    animation: "vein-ablation"
  },
  thyroid: {
    id: "thyroid",
    position: { x: 50, y: 18 }, // neck area
    label: "Thyroid Nodules",
    color: "#14B8A6",
    icon: Thermometer,
    description: "Lumps in the thyroid gland",
    procedure: "Radiofrequency Ablation",
    steps: [
      { title: "Ultrasound Mapping", desc: "Precise nodule location identified", duration: 0.5 },
      { title: "Local Anesthesia", desc: "Neck area numbed completely", duration: 1 },
      { title: "RFA Needle Insertion", desc: "Thin electrode inserted into nodule", duration: 1.5 },
      { title: "Tissue Ablation", desc: "Radiofrequency energy destroys nodule tissue", duration: 2 },
      { title: "Natural Absorption", desc: "Body absorbs treated tissue over weeks", duration: 2.5 }
    ],
    animation: "thyroid-ablation"
  },
  uterineFibroids: {
    id: "uterine-fibroids",
    position: { x: 50, y: 58 }, // pelvic area
    label: "Uterine Fibroids",
    color: "#F59E0B",
    icon: Stethoscope,
    description: "Non-cancerous growths in the uterus",
    procedure: "Uterine Fibroid Embolisation",
    steps: [
      { title: "Wrist Access", desc: "Small puncture made at the wrist", duration: 0.5 },
      { title: "Catheter Navigation", desc: "Guided to uterine arteries using X-ray", duration: 1 },
      { title: "Microsphere Injection", desc: "Tiny particles block blood supply to fibroids", duration: 1.5 },
      { title: "Fibroid Shrinkage", desc: "Fibroids shrink by 40-60% over 3-6 months", duration: 2 },
      { title: "Symptom Relief", desc: "Heavy bleeding and pain significantly reduced", duration: 2.5 }
    ],
    animation: "embolisation"
  },
  peripheralVascular: {
    id: "peripheral-vascular",
    position: { x: 55, y: 80 }, // lower leg
    label: "Peripheral Artery Disease",
    color: "#EF4444",
    icon: HeartPulse,
    description: "Blocked arteries in the legs",
    procedure: "Angioplasty & Stenting",
    steps: [
      { title: "Arterial Access", desc: "Puncture at wrist or groin", duration: 0.5 },
      { title: "Angiography", desc: "X-ray mapping of blockage location", duration: 1 },
      { title: "Balloon Inflation", desc: "Balloon expands to open narrowed artery", duration: 1.5 },
      { title: "Stent Placement", desc: "Metal mesh tube keeps artery open", duration: 2 },
      { title: "Blood Flow Restored", desc: "Immediate improvement in circulation", duration: 2.5 }
    ],
    animation: "angioplasty"
  },
  varicocele: {
    id: "varicocele",
    position: { x: 48, y: 62 }, // groin area
    label: "Varicocele",
    color: "#8B5CF6",
    icon: Baby,
    description: "Enlarged veins in the scrotum",
    procedure: "Varicocele Embolisation",
    steps: [
      { title: "Wrist/Neck Access", desc: "No incision in groin area", duration: 0.5 },
      { title: "Venography", desc: "Testicular vein visualized with contrast", duration: 1 },
      { title: "Coil Deployment", desc: "Tiny coils block faulty vein from inside", duration: 1.5 },
      { title: "Blood Rerouting", desc: "Blood flows through healthy veins", duration: 2 },
      { title: "Fertility Improvement", desc: "Sperm parameters improve in 3-6 months", duration: 2.5 }
    ],
    animation: "embolisation"
  },
  prostate: {
    id: "prostate",
    position: { x: 50, y: 60 }, // lower pelvic
    label: "Enlarged Prostate",
    color: "#06B6D4",
    icon: Microscope,
    description: "Benign prostatic hyperplasia (BPH)",
    procedure: "Prostate Artery Embolisation",
    steps: [
      { title: "Wrist Puncture", desc: "Radial artery access point", duration: 0.5 },
      { title: "Micro-catheter", desc: "Navigated to prostate arteries", duration: 1 },
      { title: "Microsphere Delivery", desc: "Blood supply to prostate blocked", duration: 1.5 },
      { title: "Prostate Shrinkage", desc: "Gland reduces in size over months", duration: 2 },
      { title: "Symptom Relief", desc: "Urinary flow improves significantly", duration: 2.5 }
    ],
    animation: "embolisation"
  }
};

// 3D Anatomy Viewer Component
export function AnatomyViewer3D() {
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [animationStep, setAnimationStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const viewerRef = useRef(null);

  // Auto-rotate when not interacting
  useEffect(() => {
    if (!isDragging && !activeHotspot) {
      const interval = setInterval(() => {
        setRotation(prev => ({ ...prev, y: (prev.y + 0.3) % 360 }));
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isDragging, activeHotspot]);

  // Animation playback
  useEffect(() => {
    if (isPlaying && activeHotspot) {
      const steps = ANATOMY_HOTSPOTS[activeHotspot].steps;
      if (animationStep < steps.length - 1) {
        const timer = setTimeout(() => {
          setAnimationStep(prev => prev + 1);
        }, 2000);
        return () => clearTimeout(timer);
      } else {
        setIsPlaying(false);
      }
    }
  }, [isPlaying, animationStep, activeHotspot]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const deltaX = e.clientX - dragStart.x;
      const deltaY = e.clientY - dragStart.y;
      setRotation(prev => ({
        x: Math.max(-30, Math.min(30, prev.x + deltaY * 0.3)),
        y: (prev.y + deltaX * 0.5) % 360
      }));
      setDragStart({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleHotspotClick = (hotspotKey) => {
    setActiveHotspot(activeHotspot === hotspotKey ? null : hotspotKey);
    setAnimationStep(0);
    setIsPlaying(false);
  };

  const playAnimation = () => {
    setAnimationStep(0);
    setIsPlaying(true);
  };

  return (
    <section style={{ 
      background: "linear-gradient(180deg, #071426, #0A1E3D)", 
      padding: "90px 0", 
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Background effects */}
      <div style={{
        position: "absolute",
        top: "-20%",
        left: "-10%",
        width: "60vw",
        height: "60vw",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(13,148,136,0.08) 0%, transparent 70%)",
        pointerEvents: "none"
      }} />

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
            <div style={{ width: 24, height: 1, background: "rgba(13,148,136,0.4)" }} />
            <span style={{ 
              fontSize: 11, 
              fontFamily: "'DM Sans', sans-serif", 
              fontWeight: 600, 
              letterSpacing: "0.12em", 
              textTransform: "uppercase", 
              color: "#5EEAD4" 
            }}>Interactive Anatomy</span>
            <div style={{ width: 24, height: 1, background: "rgba(13,148,136,0.4)" }} />
          </div>
          <h2 style={{ 
            fontFamily: "'Playfair Display', serif", 
            fontSize: "clamp(26px, 3.8vw, 40px)", 
            fontWeight: 700, 
            color: "#fff", 
            lineHeight: 1.2, 
            marginBottom: 10, 
            letterSpacing: "-0.02em" 
          }}>3D Cardiovascular System</h2>
          <p style={{ 
            fontFamily: "'DM Sans', sans-serif", 
            fontSize: 15, 
            color: "rgba(255,255,255,0.5)", 
            maxWidth: 640, 
            margin: "0 auto", 
            lineHeight: 1.6 
          }}>
            Explore the human body and discover how minimally invasive procedures treat each condition. 
            Click on highlighted areas to see animated procedure explanations.
          </p>
        </div>

        {/* Main 3D Viewer Container */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 32, alignItems: "flex-start" }}>
          
          {/* 3D Body Viewer */}
          <div style={{ flex: "1 1 500px", minWidth: 300 }}>
            <div 
              ref={viewerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              style={{
                position: "relative",
                width: "100%",
                height: "clamp(500px, 80vh, 700px)",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 20,
                overflow: "hidden",
                cursor: isDragging ? "grabbing" : "grab",
                perspective: "1200px"
              }}
            >
              {/* 3D Transform Container */}
              <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                height: "90%", 
                width: "auto",
                maxWidth: "90%",
                filter: "drop-shadow(0 0 40px rgba(37,99,235,0.15))",
                transform: `translate(-50%, -50%) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                transformStyle: "preserve-3d",
                transition: isDragging ? "none" : "transform 0.1s ease-out"
              }}>
                {/* High-Quality 3D Human Body Image */}
                <img 
                  src="/body-3d.png" 
                  alt="3D Human Anatomy" 
                  style={{
                    height: "100%",
                    width: "auto",
                    objectFit: "contain",
                    filter: "drop-shadow(0 0 20px rgba(13,148,136,0.3))",
                    display: "block",
                    userSelect: "none",
                    pointerEvents: "none"
                  }}
                />

                {/* Interactive Hotspots */}
                {Object.entries(ANATOMY_HOTSPOTS).map(([key, hotspot]) => (
                  <div
                    key={key}
                    onClick={() => handleHotspotClick(key)}
                    style={{
                      position: "absolute",
                      left: `${hotspot.position.x}%`,
                      top: `${hotspot.position.y}%`,
                      transform: `translate(-50%, -50%) rotateY(${-rotation.y}deg) rotateX(${-rotation.x}deg)`,
                      transformStyle: "preserve-3d",
                      cursor: "pointer",
                      zIndex: activeHotspot === key ? 100 : 10,
                      transition: isDragging ? "none" : "transform 0.1s ease-out"
                    }}
                  >
                    {/* Pulsing Hotspot */}
                    <div style={{
                      position: "relative",
                      width: "clamp(24px, 4vw, 40px)",
                      height: "clamp(24px, 4vw, 40px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}>
                      {/* Pulse rings */}
                      <div style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        background: hotspot.color,
                        opacity: 0.3,
                        animation: `pulse-ring 2s ease-out infinite`
                      }} />
                      <div style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        background: hotspot.color,
                        opacity: 0.3,
                        animation: `pulse-ring 2s ease-out 1s infinite`
                      }} />
                      
                      {/* Main hotspot */}
                      <div style={{
                        width: "clamp(20px, 3.2vw, 32px)",
                        height: "clamp(20px, 3.2vw, 32px)",
                        borderRadius: "50%",
                        background: activeHotspot === key 
                          ? `linear-gradient(135deg, ${hotspot.color}, ${hotspot.color}dd)` 
                          : `${hotspot.color}88`,
                        border: `2px solid ${hotspot.color}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 16,
                        boxShadow: `0 4px 20px ${hotspot.color}66`,
                        transition: "all 0.3s ease",
                        transform: activeHotspot === key ? "scale(1.3)" : "scale(1)"
                      }}>
                        <hotspot.icon size="clamp(12px, 2vw, 18px)" color="#fff" strokeWidth={2} />
                      </div>
                    </div>

                    {/* Label */}
                    <div style={{
                      position: "absolute",
                      top: "115%",
                      left: "50%",
                      transform: "translateX(-50%)",
                      padding: "4px 10px",
                      background: "rgba(7,20,38,0.95)",
                      backdropFilter: "blur(8px)",
                      border: `1px solid ${hotspot.color}44`,
                      borderRadius: 6,
                      fontSize: "clamp(9px, 1.5vw, 11px)",
                      fontWeight: 600,
                      color: "#fff",
                      fontFamily: "'DM Sans', sans-serif",
                      whiteSpace: "nowrap",
                      opacity: activeHotspot === key ? 1 : 0,
                      pointerEvents: activeHotspot === key ? "auto" : "none",
                      transition: "opacity 0.3s",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                      zIndex: 110
                    }}>
                      {hotspot.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Controls Hint */}
              <div style={{
                position: "absolute",
                bottom: 16,
                left: "50%",
                transform: "translateX(-50%)",
                padding: "8px 16px",
                background: "rgba(7,20,38,0.8)",
                backdropFilter: "blur(8px)",
                borderRadius: 8,
                fontSize: 11,
                color: "rgba(255,255,255,0.5)",
                fontFamily: "'DM Sans', sans-serif",
                display: "flex",
                alignItems: "center",
                gap: 8
              }}>
                <Move size={12} />
                <span>Drag to rotate • Click hotspots to explore</span>
              </div>
            </div>
          </div>

          {/* Procedure Details Panel */}
          <div style={{ flex: "1 1 400px", minWidth: 300 }}>
            {activeHotspot ? (
              <ProcedurePanel 
                hotspot={ANATOMY_HOTSPOTS[activeHotspot]}
                animationStep={animationStep}
                isPlaying={isPlaying}
                onPlay={playAnimation}
                onClose={() => setActiveHotspot(null)}
              />
            ) : (
              <InstructionsPanel />
            )}
          </div>
        </div>
      </div>

      {/* Keyframe animations */}
      <style>{`
        @keyframes pulse-ring {
          0% {
            transform: scale(0.8);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.5);
            opacity: 0;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}

// Procedure Panel Component
function ProcedurePanel({ hotspot, animationStep, isPlaying, onPlay, onClose }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: 20,
      padding: 32,
      height: "100%",
      maxHeight: 700,
      overflowY: "auto"
    }}>
      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ 
              width: 50, 
              height: 50, 
              borderRadius: 14, 
              background: `${hotspot.color}22`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: `1px solid ${hotspot.color}44`
            }}>
              <hotspot.icon size={28} color={hotspot.color} />
            </div>
            <div>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 24,
                fontWeight: 700,
                color: "#fff",
                marginBottom: 4
              }}>{hotspot.label}</h3>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                color: hotspot.color,
                fontWeight: 600
              }}>{hotspot.procedure}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 10,
              width: 32,
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "rgba(255,255,255,0.5)",
              cursor: "pointer",
              transition: "all 0.2s"
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(255,255,255,0.2)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              e.currentTarget.style.color = "rgba(255,255,255,0.5)";
            }}
          >
            <X size={18} />
          </button>
        </div>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 14,
          color: "rgba(255,255,255,0.6)",
          lineHeight: 1.6
        }}>{hotspot.description}</p>
      </div>

      {/* Animation Control */}
      <div style={{ marginBottom: 24 }}>
        <button
          onClick={onPlay}
          disabled={isPlaying}
          style={{
            width: "100%",
            padding: "14px 24px",
            background: isPlaying 
              ? "rgba(255,255,255,0.05)" 
              : `linear-gradient(135deg, ${hotspot.color}, ${hotspot.color}dd)`,
            border: "none",
            borderRadius: 12,
            color: "#fff",
            fontSize: 14,
            fontWeight: 600,
            fontFamily: "'DM Sans', sans-serif",
            cursor: isPlaying ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            transition: "all 0.3s",
            opacity: isPlaying ? 0.6 : 1
          }}
        >
          <Play size={16} fill={isPlaying ? "none" : "currentColor"} />
          {isPlaying ? "Playing Animation..." : "Play Procedure Animation"}
        </button>
      </div>

      {/* Procedure Steps */}
      <div style={{ marginBottom: 24 }}>
        <h4 style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 12,
          fontWeight: 600,
          color: "rgba(255,255,255,0.4)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: 16
        }}>Procedure Steps</h4>
        
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {hotspot.steps.map((step, index) => (
            <div
              key={index}
              style={{
                padding: 16,
                background: index <= animationStep && isPlaying
                  ? `${hotspot.color}22`
                  : "rgba(255,255,255,0.02)",
                border: index === animationStep && isPlaying
                  ? `2px solid ${hotspot.color}`
                  : "1px solid rgba(255,255,255,0.06)",
                borderRadius: 12,
                transition: "all 0.4s ease",
                transform: index === animationStep && isPlaying ? "scale(1.02)" : "scale(1)"
              }}
            >
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: index <= animationStep && isPlaying
                    ? `linear-gradient(135deg, ${hotspot.color}, ${hotspot.color}dd)`
                    : "rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#fff",
                  fontFamily: "'DM Sans', sans-serif",
                  flexShrink: 0,
                  transition: "all 0.3s"
                }}>
                  {index + 1}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 14,
                    fontWeight: 600,
                    color: index <= animationStep && isPlaying ? "#fff" : "rgba(255,255,255,0.8)",
                    marginBottom: 4,
                    transition: "color 0.3s"
                  }}>{step.title}</div>
                  <div style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 12,
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.5
                  }}>{step.desc}</div>
                </div>
                {index === animationStep && isPlaying && (
                  <div style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: hotspot.color,
                    animation: "pulse-dot 1s ease-in-out infinite"
                  }} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Medical Illustration */}
      <div style={{
        padding: 20,
        background: "rgba(7,20,38,0.5)",
        borderRadius: 12,
        border: "1px solid rgba(255,255,255,0.06)"
      }}>
        <MedicalIllustration type={hotspot.animation} color={hotspot.color} isAnimating={isPlaying} />
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.5); }
        }
      `}</style>
    </div>
  );
}

// Instructions Panel
function InstructionsPanel() {
  return (
    <div style={{
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: 20,
      padding: 32,
      height: "100%"
    }}>
      <h3 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 24,
        fontWeight: 700,
        color: "#fff",
        marginBottom: 16
      }}>How to Use</h3>
      
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {[
          { icon: Move, title: "Rotate the Model", desc: "Click and drag to rotate the 3D body model in any direction" },
          { icon: MousePointerClick, title: "Click Hotspots", desc: "Click on the pulsing colored circles to explore different conditions" },
          { icon: Play, title: "Watch Animations", desc: "Play step-by-step animated explanations of each procedure" },
          { icon: BookOpen, title: "Learn Details", desc: "Read about each minimally invasive treatment approach" }
        ].map((item, i) => (
          <div key={i} style={{
            padding: 20,
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 12
          }}>
            <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <item.icon size={28} color="#5EEAD4" style={{ flexShrink: 0 }} />
              <div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#fff",
                  marginBottom: 6
                }}>{item.title}</div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.6
                }}>{item.desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: 24,
        padding: 16,
        background: "rgba(13,148,136,0.1)",
        border: "1px solid rgba(13,148,136,0.2)",
        borderRadius: 12
      }}>
        <div style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 12,
          color: "#5EEAD4",
          textAlign: "center",
          lineHeight: 1.6
        }}>
          <Lightbulb size={14} style={{ marginBottom: -2, marginRight: 4 }} /> <strong>Tip:</strong> Each procedure is performed through a tiny pinhole — 
          no large incisions, faster recovery, and no visible scars!
        </div>
      </div>
    </div>
  );
}

// Medical Illustration Component
function MedicalIllustration({ type, color, isAnimating }) {
  if (type === "vein-ablation") {
    return (
      <svg viewBox="0 0 300 200" style={{ width: "100%", height: "auto" }}>
        <text x="150" y="20" textAnchor="middle" fill={color} fontSize="11" fontFamily="DM Sans" fontWeight="600">
          LASER VEIN ABLATION
        </text>
        
        {/* Vein */}
        <path 
          d="M 50 100 Q 100 90 150 100 Q 200 110 250 100" 
          fill="none" 
          stroke={isAnimating ? color : "rgba(255,255,255,0.2)"} 
          strokeWidth="12"
          style={{ transition: "all 0.5s" }}
        />
        
        {/* Laser fiber */}
        <line 
          x1="50" 
          y1="100" 
          x2={isAnimating ? "250" : "100"} 
          y2="100" 
          stroke="#F59E0B" 
          strokeWidth="2" 
          strokeDasharray="4 2"
          style={{ transition: "all 2s ease-in-out" }}
        />
        
        {/* Catheter tip */}
        <circle 
          cx={isAnimating ? "250" : "100"} 
          cy="100" 
          r="4" 
          fill="#F59E0B"
          style={{ transition: "all 2s ease-in-out" }}
        />
        
        {/* Energy waves */}
        {isAnimating && (
          <>
            <circle cx="250" cy="100" r="8" fill="none" stroke="#F59E0B" strokeWidth="1" opacity="0.6">
              <animate attributeName="r" from="8" to="20" dur="1s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.6" to="0" dur="1s" repeatCount="indefinite" />
            </circle>
            <circle cx="250" cy="100" r="8" fill="none" stroke="#F59E0B" strokeWidth="1" opacity="0.6">
              <animate attributeName="r" from="8" to="20" dur="1s" begin="0.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.6" to="0" dur="1s" begin="0.5s" repeatCount="indefinite" />
            </circle>
          </>
        )}
        
        <text x="150" y="180" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="DM Sans">
          Laser energy seals the vein from inside
        </text>
      </svg>
    );
  }

  if (type === "thyroid-ablation") {
    return (
      <svg viewBox="0 0 300 200" style={{ width: "100%", height: "auto" }}>
        <text x="150" y="20" textAnchor="middle" fill={color} fontSize="11" fontFamily="DM Sans" fontWeight="600">
          THYROID RADIOFREQUENCY ABLATION
        </text>
        
        {/* Thyroid nodule */}
        <circle 
          cx="150" 
          cy="100" 
          r={isAnimating ? "20" : "30"} 
          fill="rgba(239,68,68,0.3)" 
          stroke="#EF4444" 
          strokeWidth="2"
          style={{ transition: "all 2s ease-in-out" }}
        />
        
        {/* RFA needle */}
        <line 
          x1="150" 
          y1="40" 
          x2="150" 
          y2={isAnimating ? "100" : "70"} 
          stroke={color} 
          strokeWidth="3"
          style={{ transition: "all 1s ease-in-out" }}
        />
        
        {/* Electrode tip */}
        <circle 
          cx="150" 
          cy={isAnimating ? "100" : "70"} 
          r="3" 
          fill={color}
          style={{ transition: "all 1s ease-in-out" }}
        />
        
        {/* RF energy */}
        {isAnimating && (
          <>
            <circle cx="150" cy="100" r="15" fill="none" stroke={color} strokeWidth="1" opacity="0.6">
              <animate attributeName="r" from="15" to="35" dur="1.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.6" to="0" dur="1.5s" repeatCount="indefinite" />
            </circle>
          </>
        )}
        
        <text x="150" y="180" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="DM Sans">
          RF energy destroys nodule tissue without surgery
        </text>
      </svg>
    );
  }

  if (type === "embolisation") {
    return (
      <svg viewBox="0 0 300 200" style={{ width: "100%", height: "auto" }}>
        <text x="150" y="20" textAnchor="middle" fill={color} fontSize="11" fontFamily="DM Sans" fontWeight="600">
          EMBOLISATION PROCEDURE
        </text>
        
        {/* Main artery */}
        <path 
          d="M 30 100 L 270 100" 
          fill="none" 
          stroke="rgba(239,68,68,0.5)" 
          strokeWidth="14"
        />
        
        {/* Branch to target */}
        <path 
          d="M 150 100 L 150 50" 
          fill="none" 
          stroke={isAnimating ? "rgba(239,68,68,0.3)" : "rgba(239,68,68,0.5)"} 
          strokeWidth="10"
          style={{ transition: "all 1s" }}
        />
        
        {/* Target organ */}
        <circle 
          cx="150" 
          cy="40" 
          r="18" 
          fill="rgba(239,68,68,0.2)" 
          stroke="#EF4444" 
          strokeWidth="1.5"
        />
        
        {/* Catheter */}
        <line 
          x1="30" 
          y1="100" 
          x2={isAnimating ? "150" : "80"} 
          y2="100" 
          stroke={color} 
          strokeWidth="2.5"
          strokeDasharray="5 3"
          style={{ transition: "all 2s ease-in-out" }}
        />
        
        {/* Microspheres */}
        {isAnimating && (
          <>
            <circle cx="145" cy="85" r="2.5" fill="#F59E0B" opacity="0.8" />
            <circle cx="150" cy="75" r="3" fill="#F59E0B" opacity="0.7" />
            <circle cx="155" cy="80" r="2" fill="#F59E0B" opacity="0.6" />
            <circle cx="148" cy="70" r="2.5" fill="#F59E0B" opacity="0.9" />
          </>
        )}
        
        <text x="150" y="180" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="DM Sans">
          Tiny particles block blood supply to target tissue
        </text>
      </svg>
    );
  }

  if (type === "angioplasty") {
    return (
      <svg viewBox="0 0 300 200" style={{ width: "100%", height: "auto" }}>
        <text x="150" y="20" textAnchor="middle" fill={color} fontSize="11" fontFamily="DM Sans" fontWeight="600">
          BALLOON ANGIOPLASTY & STENTING
        </text>
        
        {/* Artery with blockage */}
        <rect 
          x="50" 
          y="90" 
          width="200" 
          height="20" 
          rx="10" 
          fill="rgba(239,68,68,0.2)" 
          stroke="#EF4444" 
          strokeWidth="1.5"
        />
        
        {/* Blockage */}
        <rect 
          x="130" 
          y="90" 
          width={isAnimating ? "10" : "40"} 
          height="20" 
          rx="5" 
          fill="rgba(239,68,68,0.5)"
          style={{ transition: "all 2s ease-in-out" }}
        />
        
        {/* Balloon */}
        {isAnimating && (
          <ellipse 
            cx="150" 
            cy="100" 
            rx="20" 
            ry="12" 
            fill="rgba(245,158,11,0.3)" 
            stroke="#F59E0B" 
            strokeWidth="1.5"
          />
        )}
        
        {/* Stent */}
        {isAnimating && (
          <rect 
            x="130" 
            y="92" 
            width="40" 
            height="16" 
            rx="8" 
            fill="none" 
            stroke={color} 
            strokeWidth="1.5" 
            strokeDasharray="3 2"
          />
        )}
        
        <text x="150" y="180" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="DM Sans">
          Balloon opens artery, stent keeps it open
        </text>
      </svg>
    );
  }

  return null;
}

export default AnatomyViewer3D;
