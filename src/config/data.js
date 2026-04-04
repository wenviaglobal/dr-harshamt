import React from 'react';
import {
    Activity,
    HeartPulse,
    Droplet,
    Crosshair,
    Thermometer,
    Baby,
    ActivitySquare,
    AlertCircle,
    Syringe,
    Stethoscope,
    Microscope,
    ShieldAlert,
    ClipboardList,
    Search,
    Sparkles,
    Home,
    Trophy,
    FileText,
    GraduationCap,
    Medal,
    Building2,
    Globe,
    MapPin,
    BookOpen
} from 'lucide-react';

/* ─── DOCTOR INFORMATION ─── */
export const DOC = {
    name: "Dr. Harsha M T – Interventional Radiologist in Bengaluru",
    title: "Vascular & Interventional Radiologist | Vein Specialist | Endovascular Surgeon",
    tagline: "Minimally Invasive. Maximally Effective.",
    miniSub:"",
    sub: "Dr Harsha M T is a highly experienced Vascular and Interventional Radiologist in Bengaluru, known for performing advanced minimally invasive image-guided procedures that replace traditional open surgeries. With extensive international training and experience, Dr Harsha specializes in treating complex vascular and non-vascular conditions using advanced imaging technologies such as CT, Ultrasound, and Fluoroscopy.",
    quals: "MBBS, MD – Radio-Diagnosis (PGIMER Chandigarh), FVIR (AIIMS Rishikesh), FVIR (SNUH, South Korea), EBIR, EDiR, Dip. ICRI",
    qualsBadge: "MBBS, MD, FVIR (AIIMS), FVIR (SNUH), EBIR, EDiR, Dip. ICRI",
    director: "Dr Harsha M T is the Director of Venuva Vascular Center, a specialized center focused on minimally invasive vascular and interventional radiology treatments. The center offers advanced procedures designed to treat conditions through pinhole-sized access instead of large surgical incisions, allowing patients to return to normal life quickly.",
    shortBio: "His patient-focused approach combines the precision of radiology with the expertise of a surgeon to deliver effective treatments with minimal pain, faster recovery, and no large surgical scars. Dr Harsha has helped thousands of patients avoid major surgery by offering safe, minimally invasive alternatives.",
    h2: "Advanced Interventional Radiology Treatments in Bengaluru",
    exp: "8+",
    procs: "8500+",
    certs: "6",
    countries: "3",
    phone: "+91 7483749378",
    wa: "917483749378",
    loc: "SPARSH Hospital & Venuva Vascular Center, Bengaluru",
    time: "Mon – Sat",
    photo: "https://www.sparshhospital.com/wp-content/uploads/2024/05/Dr.-Harsha-M-T.jpg",
    // photoApron: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=800&fit=crop",
    // photoScrubs: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&h=800&fit=crop",
    // photoSuit: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=600&h=800&fit=crop",
};

/* ─── IMAGES ─── */
export const IMG = {
    hero: "https://images.unsplash.com/photo-1551190822-a9ce113ac100?w=1400&h=900&fit=crop",
    varicose: "/services/VARICOSE VEINS.webp",
    fibroid: "/services/UTERINE FIBROID EMBOLISATION.webp",
    thyroid: "/services/THYROID NODULE ABLATION.webp",
    vascular: "/services/PERIPHERAL VASCULAR DISEASE 1.webp",
    vascular2: "/services/PERIPHERAL VASCULAR DISEASE 2.webp",
    liver: "/services/LIVER CANCER INTERVENTION.webp",
    dialysis: "/services/DIALYSIS ACCESS CARE.webp",
    prostate: "/services/PROSTATE ARTERY EMBOLISATION.webp",
    varicocele: "/services/Varicocele Embolisation.webp",
    musculoskeletal: "/services/CHRONIC MUSCULOSKELETAL PAIN.webp",
    microembolisation: "/services/TRANSARTERIAL MICROEMBOLISATION.webp",
    dvt: "/services/DEEP VEIN THROMBOSIS.webp",
    gi: "/services/GI INTERVENTION.webp",
    emergency: "/services/EMERGENCY INTERVENTION.webp",
    about: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&h=600&fit=crop",
    ir: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&h=500&fit=crop",
    sparsh: "https://www.sparshhospital.com/wp-content/uploads/2025/06/new-logo.svg",
    gallery1: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
    // gallery2: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=400&h=300&fit=crop",
    // gallery3: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop",
    // gallery4: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&h=300&fit=crop",
    blog1: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=800&h=500&fit=crop",
    blog2: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&h=500&fit=crop",
    blog3: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop",
    blog4: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=500&fit=crop",
    blog5: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&h=500&fit=crop",
    blog6: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=500&fit=crop",
};

/* ─── NAVIGATION ─── */
export const NAV = [
    { label: "Services", href: "/services" },
    { label: "About Me", href: "/about" },
    { label: "Blogs", href: "#blog" },
    { label: "FAQs", href: "#faq" },
];

/* ─── CREDENTIALS ─── */
export const CREDS = [
    { inst: "PGIMER Chandigarh", desc: "MD Radio-Diagnosis" },
    { inst: "AIIMS Rishikesh", desc: "Fellowship in Vascular & IR" },
    { inst: "SNUH, South Korea", desc: "Advanced Vascular Interventions" },
    { inst: "IEO Milan, Italy", desc: "Thyroid Thermal Ablation" },
    { inst: "EBIR", desc: "European Board of IR" },
    { inst: "EDiR", desc: "European Diploma in Radiology" },
    { inst: "Dip. ICRI", desc: "Indian College of Radiology" },
];

/* ─── SERVICES ─── */
export const SERVICES = [
    {
        icon: Activity,
        t: "Varicose Veins Treatment",
        sub: "EVLA / Venaseal",
        img: IMG.varicose,
        hl: true,
        id: "varicose-veins",
        d: "A minimally invasive laser treatment for varicose veins in Bengaluru that eliminates painful, bulging veins in the legs. This walk-in, walk-out procedure requires no surgery or bed rest, and most patients resume normal activities the next day.",
    },
    {
        icon: Thermometer,
        t: "Thyroid Nodule Ablation",
        sub: "Radiofrequency / Thermal Ablation",
        img: IMG.thyroid,
        hl: false,
        id: "thyroid-nodule",
        d: "A scar-free treatment that shrinks thyroid nodules without removing the thyroid gland. The procedure uses heat energy delivered through a thin needle and is performed under local anaesthesia.",
    },
    {
        icon: Stethoscope,
        t: "Uterine Fibroid Embolisation",
        sub: "UFE — Uterus Preserved",
        img: IMG.fibroid,
        hl: false,
        id: "uterine-fibroid",
        d: "A highly effective uterine fibroid treatment in Bengaluru that blocks the blood supply to fibroids through a tiny catheter, causing them to shrink naturally while preserving the uterus.",
    },
    {
        icon: Baby,
        t: "Varicocele Embolisation",
        sub: "Male Infertility Treatment",
        img: IMG.varicocele,
        hl: false,
        id: "varicocele",
        d: "A minimally invasive procedure that treats varicocele through a small pinhole in the wrist or groin. This treatment improves blood circulation in the veins and may improve sperm count and fertility.",
    },
    {
        icon: HeartPulse,
        t: "Peripheral Vascular Disease",
        sub: "Angioplasty & Stenting",
        img: IMG.vascular,
        hl: false,
        id: "peripheral-vascular",
        d: "A modern treatment used to restore blood flow in blocked arteries of the legs using balloons and stents, avoiding major bypass surgery.",
    },
    {
        icon: Droplet,
        t: "Deep Vein Thrombosis (DVT)",
        sub: "DVT — Clot Treatment",
        img: IMG.dvt,
        hl: false,
        id: "deep-vein-thrombosis",
        d: "Minimally invasive techniques are used to remove dangerous blood clots from deep veins, helping prevent life-threatening complications such as pulmonary embolism.",
    },
    {
        icon: ActivitySquare,
        t: "Chronic Musculoskeletal Pain",
        sub: "Transarterial Microembolisation",
        img: IMG.musculoskeletal,
        hl: false,
        id: "musculoskeletal-pain",
        d: "A breakthrough treatment that reduces abnormal blood vessels responsible for chronic joint pain, offering long-lasting relief without surgery.",
    },
    {
        icon: Microscope,
        t: "Liver Cancer Interventions",
        sub: "TACE / TARE / Ablation",
        img: IMG.liver,
        hl: false,
        id: "liver-cancer",
        d: "Targeted therapies deliver medication or radiation directly to cancer cells through blood vessels, minimizing damage to surrounding healthy tissue.",
    },
    {
        icon: Crosshair,
        t: "Enlarged Prostate (BPH)",
        sub: "Prostate Artery Embolisation",
        img: IMG.prostate,
        hl: false,
        id: "prostate-embolisation",
        d: "A non-surgical treatment that shrinks the prostate gland through a tiny catheter, helping patients avoid traditional prostate surgery and catheter use.",
    },
    {
        icon: Syringe,
        t: "Dialysis Access Care",
        sub: "Fistuloplasty & Permacath",
        img: IMG.dialysis,
        hl: false,
        id: "dialysis-access",
        d: "These minimally invasive procedures help maintain and restore dialysis access for patients with kidney failure.",
    },
    {
        icon: AlertCircle,
        t: "Gastrointestinal (GI) Interventions",
        sub: "Gastrointestinal Procedures",
        img: IMG.gi,
        hl: false,
        id: "gi-intervention",
        d: "Advanced treatments for gastrointestinal bleeding, drainage, and feeding tube placement without complex abdominal surgery.",
    },
    {
        icon: ShieldAlert,
        t: "Emergency Vascular Procedures",
        sub: "Trauma & Haemorrhage Control",
        img: IMG.emergency,
        hl: false,
        id: "emergency-intervention",
        d: "Life-saving procedures performed to control internal bleeding and vascular emergencies quickly and effectively.",
    },
];

/* ─── LOCATIONS ─── */
export const LOCATIONS = [
    {
        name: "Venuva Vascular Centre",
        address: "Malleshwaram, Bengaluru",
        time: "5:00 PM – 8:00 PM",
        link: "https://maps.app.goo.gl/9c1a1a1a1a1a1a1a1"
    },
    {
        name: "Sparsh Hospital",
        address: "Infantry Road, Bengaluru",
        time: "10:00 AM – 4:00 PM",
        link: "https://maps.app.goo.gl/9c1a1a1a1a1a1a1a1"
    },
    {
        name: "Sparsh Hospital",
        address: "Yelahanka, Bengaluru",
        time: "By Appointment",
        link: "https://maps.app.goo.gl/9c1a1a1a1a1a1a1a1"
    }
];

/* ─── WHY CHOOSE DR. HARSHA ─── */
export const WHY_DR_HARSHA = [
    { t: "No large incisions", d: "Procedures performed through a tiny pinhole puncture." },
    { t: "Minimal pain and bleeding", d: "Reduced trauma to surrounding tissues compared to surgery." },
    { t: "No visible scars", d: "Leaves no stitches or permanent surgical marks." },
    { t: "Short hospital stay", d: "Often go home the same day or next morning." },
    { t: "Rapid recovery", d: "Return to normal activity within 24-48 hours." },
    { t: "Highly precise treatment", d: "Guided by real-time high-resolution imaging." },
];

/* ─── JOURNEY STEPS ─── */
export const STEPS = [
    { s: "01", t: "Consultation", d: "Discuss your condition and explore options", i: ClipboardList },
    { s: "02", t: "Diagnosis", d: "Advanced imaging for precise planning", i: Search },
    { s: "03", t: "Pinhole Procedure", d: "No cuts, no stitches, no general anaesthesia", i: Sparkles },
    { s: "04", t: "Go Home", d: "Same-day or next-morning discharge", i: Home },
];

/* ─── BEFORE/AFTER OUTCOMES ─── */
export const BEFORE_AFTER = [
    {
        condition: "Varicose Veins Treatment",
        desc: "Painful leg veins",
        before: "Visible bulging veins, heaviness, and difficulty standing for long periods.",
        after: "Patients with painful leg veins experience relief after laser EVLA procedures, allowing them to return to normal activity within a day."
    },
    {
        condition: "Uterine Fibroid Embolisation",
        desc: "Heavy bleeding and fibroids",
        before: "Severe bleeding and pain, facing potential hysterectomy surgery.",
        after: "Women suffering from heavy bleeding and fibroids can preserve their uterus and avoid hysterectomy through UFE treatment."
    },
    {
        condition: "Thyroid Nodule Ablation",
        desc: "Thyroid nodules",
        before: "Growing lump in the neck, fear of neck surgery and permanent scars.",
        after: "Patients with thyroid nodules can undergo scar-free treatment using radiofrequency ablation without thyroid surgery."
    },
    {
        condition: "Varicocele Embolisation",
        desc: "Varicocele treatment",
        before: "Low sperm count and scrotal pain, considering invasive surgery.",
        after: "Men facing infertility due to varicocele can improve sperm count through minimally invasive embolisation procedures."
    }
];

/* ─── TESTIMONIALS ─── */
export const TESTIMONIALS = [
    {
        q: "⭐ “The laser treatment for my varicose veins was quick and painless. I walked out of the hospital the same day.”",
        a: "Verified Patient",
        p: "",
        r: 5
    },
    {
        q: "⭐ “UFE helped me avoid hysterectomy and solved my fibroid problem without surgery.”",
        a: "Verified Patient",
        p: "",
        r: 5
    },
    {
        q: "⭐ “Thyroid nodule ablation reduced my swelling with no scar and no surgery.”",
        a: "Verified Patient",
        p: "",
        r: 5
    }
];

/* ─── FAQS ─── */
export const FAQS = [
    {
        q: "What is Interventional Radiology?",
        a: "Interventional radiology is a medical specialty that uses advanced imaging guidance to perform minimally invasive procedures through tiny needle punctures."
    },
    {
        q: "Is the procedure painful?",
        a: "Most procedures are performed under local anesthesia and involve minimal discomfort."
    },
    {
        q: "How long is recovery?",
        a: "Many patients can return home the same day and resume daily activities quickly."
    },
    {
        q: "Will there be scars?",
        a: "No. Most procedures require only a tiny pinhole puncture, leaving no visible scars."
    }
];

/* ─── TREATMENTS ─── */
export const TREATMENTS = {
    "varicose-veins": {
        icon: Activity,
        title: "Varicose Veins Treatment",
        sub: "EVLA / VenaSeal / MWA",
        hero: "/services/VARICOSE VEINS.webp",
        stats: [
            { v: "98%", l: "Success Rate" },
            { v: "30min", l: "Procedure Time" },
            { v: "Same Day", l: "Discharge" }
        ],
        overview: "Varicose veins are swollen, twisted veins that usually appear on the legs. They occur when the small valves in the veins stop working properly, allowing blood to flow backward and pool (venous reflux).",
        symptoms: [
            "Visible, bulging blue or dark purple veins.",
            "Aching, heavy legs, especially after standing for long periods.",
            "Swelling (Edema) in the ankles or feet.",
            "Skin changes, such as itching, thinning, or dark discoloration."
        ],
        risks: "Ignoring varicose veins is not just a cosmetic issue. Over time, the increased pressure can lead to spontaneous bleeding, painful blood clots, and chronic venous ulcers (open sores) that are difficult to heal.",
        why: "We offer advanced, image-guided thermal and non-thermal solutions that require no hospital stay and minimal downtime.",
        methods: [
            {
                title: "1. Thermal Ablation (EVLA / RFA / MWA)",
                description: "These methods use heat to seal the diseased vein from the inside. Once the vein is closed, the body naturally reroutes blood to healthy veins. EVLA uses targeted laser energy, RFA uses radiofrequency energy via a specialized catheter, and MWA uses microwave energy for even faster treatment times.",
                list: [
                    { name: "EVLA (Laser)", desc: "Endovenous Laser Ablation uses targeted light energy to close the vein." },
                    { name: "RFA (Radiofrequency)", desc: "Uses thermal energy delivered via a specialized catheter." },
                    { name: "MWA (Microwave)", desc: "The latest advancement using microwave energy for precision and speed." }
                ]
            },
            {
                title: "2. VenaSeal™ (Medical Glue)",
                description: "VenaSeal is a revolutionary 'non-thermal' and 'non-tumescent' treatment. A small amount of medical-grade adhesive is injected into the diseased vein via a catheter. The vein is held shut for a few seconds until it seals permanently.",
                list: [
                    { name: "No Heat Risk", desc: "No risk of nerve injury as no thermal energy is used." },
                    { name: "No Tumescent", desc: "Eliminates the need for multiple local anesthetic injections." },
                    { name: "Superior Comfort", desc: "Often removes the need for compression stockings after the procedure." }
                ]
            }
        ],
        how: [
            "A detailed Doppler ultrasound scan identifies the diseased veins.",
            "Under local anaesthesia, a thin catheter or fiber is inserted into the vein.",
            "The vein is sealed using either heat (Laser/RFA) or medical glue (VenaSeal).",
            "Blood flow is immediately redirected to healthy deep veins.",
            "Patients can walk immediately and return home the same day."
        ],
        comparison: {
            title: "Surgery vs Pinhole Treatment",
            headers: ["Traditional Surgery", "Pinhole IR Treatment"],
            rows: [
                ["Large incision (5–15 cm)", "Tiny puncture (2–3 mm)"],
                ["Requires stitches", "No stitches"],
                ["Hospital stay required", "Same day discharge"],
                ["Longer recovery", "Return to work in 1-2 days"]
            ]
        },
        recovery: "Patients are usually walking immediately after the procedure and return to work within 1–2 days. For VenaSeal, the recovery is even more comfortable, often without the need for compression stockings.",
        seoTitle: "Varicose Veins Treatment in Bengaluru | EVLA & VenaSeal | Dr Harsha M T",
        suitable: "Treatment is recommended for those experiencing discomfort or functional issues, including Pain, aching, or heaviness in the legs, especially after prolonged standing or sitting.",
        seoDescription: "Advanced varicose veins treatment in Bengaluru by Dr Harsha M T. Offering EVLA, RFA, and VenaSeal medical glue for a quick, pinhole recovery with no surgery."
    },
    "uterine-fibroid": {
        icon: Stethoscope,
        title: "Uterine Fibroid Embolisation",
        sub: "Non-Surgical Fibroid Treatment",
        hero: "/services/UTERINE FIBROID EMBOLISATION.webp",
        stats: [
            { v: "90%", l: "Success Rate" },
            { v: "45min", l: "Procedure Time" },
            { v: "Next Day", l: "Discharge" }
        ],
        overview: "Uterine fibroids are non-cancerous growths in the uterus that affect millions of women. While often benign, they can significantly impact your quality of life.",
        symptoms: [
            "Heavy or prolonged menstrual bleeding (leading to anemia).",
            "Pelvic pain or a feeling of 'bulk' and pressure.",
            "Frequent urination due to bladder compression.",
            "Pain during intercourse."
        ],
        risks: "Ignoring fibroids can lead to chronic fatigue from blood loss, severe pelvic pain, and complications during pregnancy. Over time, untreated fibroids may continue to grow, making less invasive treatments more difficult.",
        why: "Uterine Fibroid Embolization (UFE) is a breakthrough, minimally invasive procedure that treats fibroids without the need for a hysterectomy or major surgery.",
        methods: [
            {
                title: "Uterine Fibroid Embolization (UFE)",
                description: "A breakthrough, minimally invasive procedure that treats fibroids without the need for a hysterectomy or major surgery.",
                list: [
                    { name: "The Procedure", desc: "An interventional radiologist makes a tiny incision in the wrist or groin to thread a thin catheter toward the uterine arteries." },
                    { name: "The Mechanism", desc: "Tiny particles (embolic agents) are injected to block the blood supply to the fibroids. Deprived of oxygen and nutrients, the fibroids shrink and die." },
                    { name: "The Benefits", desc: "Because the uterus is preserved, UFE offers a much shorter recovery time (typically 1 week) than surgery, minimal scarring, and high success rates in symptom relief." }
                ]
            }
        ],
        how: [
            "Local anesthesia is applied (no general anesthesia required).",
            "A tiny 2mm puncture is made (usually at the wrist or groin).",
            "A catheter is guided to the uterine arteries under X-ray imaging.",
            "Embolic particles are released to block the fibroid's blood supply.",
            "The catheter is removed and the puncture site is covered with a small bandage."
        ],
        comparison: {
            title: "Surgery vs Pinhole UFE Treatment",
            headers: ["Traditional Fibroid Surgery", "UFE Pinhole Treatment"],
            rows: [
                ["Large abdominal incision", "Tiny 2–3 mm puncture"],
                ["General anaesthesia", "Local anaesthesia"],
                ["Hospital stay (3-5 days)", "Next day discharge"],
                ["Recovery (4-6 weeks)", "Recovery (typically 1 week)"],
                ["Possible uterus removal", "Uterus preserved"]
            ]
        },
        recovery: "UFE offers a significantly shorter recovery time—typically 1 week—compared to 4–6 weeks for traditional surgery. Most patients return to normal activities quickly with minimal scarring and high success in symptom relief.",
        suitable: "UFE is recommended for women with heavy bleeding, pelvic pain, or those who want to avoid hysterectomy. It's a gold-standard alternative to invasive surgery.",
        seoTitle: "Uterine Fibroid Embolisation in Bengaluru | UFE Treatment | Dr Harsha M T",
        seoDescription: "Advanced uterine fibroid treatment in Bengaluru with Uterine Fibroid Embolisation (UFE) by Dr Harsha M T. Pinhole procedure with no surgery and 1-week recovery."
    },
    "thyroid-nodule": {
        icon: Thermometer,
        title: "Thyroid Nodule Ablation",
        sub: "RFA / MWA / Scarless",
        hero: "/services/THYROID NODULE ABLATION.webp",
        stats: [
            { v: "90%", l: "Benign Rate" },
            { v: "20min", l: "Procedure Time" },
            { v: "Same Day", l: "Discharge" }
        ],
        overview: "Thyroid nodule is a growth of cells within your thyroid gland. While the discovery of a lump in the neck can be concerning, the vast majority—over 90%—are benign (non-cancerous). However, even benign nodules can cause physical and aesthetic issues as they enlarge.",
        symptoms: [
            "Difficulty swallowing or a persistent 'globus' sensation (feeling of a lump in the throat).",
            "A visible bulge or goiter in the lower neck.",
            "Mild hoarseness or voice changes if the nodule presses against nerves.",
            "Frequent cough or tracheal compression."
        ],
        risks: "Ignoring a growing benign nodule can lead to worsening tracheal compression, making breathing uncomfortable, or 'toxic' transformation where the nodule begins overproducing thyroid hormones (hyperthyroidism).",
        why: "Historically, large nodules required a thyroidectomy (surgical removal), involving general anesthesia and permanent neck scars. At Venuva Vascular Center, we offer Thyroid Ablation, a specialized 'pinhole' treatment that preserves your natural thyroid function with no scars.",
        methods: [
            {
                title: "1. Radiofrequency Ablation (RFA)",
                description: "Under local anesthesia and continuous ultrasound guidance, a very fine needle-electrode is inserted into the nodule. Radiofrequency energy generates localized heat at the needle tip, destroying the tissue.",
                list: [
                    { name: "Pinhole Precision", desc: "Destroys nodule tissue while leaving surrounding healthy thyroid intact." },
                    { name: "Natural Absorption", desc: "Over several months, the body’s immune system naturally absorbs the treated tissue." },
                    { name: "Significant Shrinkage", desc: "Results in a visible reduction of the nodule size over time." }
                ]
            },
            {
                title: "2. Microwave Ablation (MWA)",
                description: "Similar to RFA, but utilizes microwave energy to create a highly predictable and consistent heat zone.",
                list: [
                    { name: "Faster Treatment", desc: "MWA is often faster, especially for very large nodules." },
                    { name: "Cystic Nodule Success", desc: "Particularly effective for nodules containing a high amount of fluid." },
                    { name: "Consistent Heat", desc: "Provides a very predictable heat zone for larger treatment areas." }
                ]
            }
        ],
        how: [
            "Local anesthesia is applied to the neck area.",
            "A fine needle is inserted under continuous ultrasound guidance.",
            "Thermal energy (RFA/MWA) is applied to the nodule internally.",
            "The procedure takes 15-30 minutes with no general anesthesia.",
            "Patients recover in 1 hour and leave with only a tiny needle-point mark."
        ],
        comparison: {
            title: "Surgery vs Scarless Ablation",
            headers: ["Traditional Surgery", "Thyroid Ablation (RFA/MWA)"],
            rows: [
                ["Permanent neck scar", "No scars (needle point)"],
                ["General anesthesia", "Local anesthesia"],
                ["Lifelong medication often needed", "Preserves natural thyroid function"],
                ["1-2 days hospital stay", "Same day discharge"]
            ]
        },
        recovery: "Recovery is remarkably fast. Most patients return to normal activities the next day. Because the healthy thyroid is saved, most patients do NOT need to take daily thyroid tablets after the procedure. The nodule continues to shrink over 3–6 months.",
        suitable: "Thyroid ablation is recommended for benign thyroid nodules confirmed by biopsy that cause neck swelling, discomfort, or cosmetic concerns.",
        seoTitle: "Thyroid Nodule Ablation in Bengaluru | Scarless RFA & MWA | Dr Harsha M T",
        seoDescription: "Advanced scarless thyroid nodule treatment in Bengaluru by Dr Harsha M T. Offering RFA and MWA to shrink nodules without surgery, preserving your thyroid function."
    },
    "varicocele": {
        icon: Baby,
        title: "Varicocele Embolisation",
        sub: "Non-Surgical Male Fertility Treatment",
        hero: "/services/Varicocele Embolisation.webp",
        stats: [
            { v: "95%", l: "Success Rate" },
            { v: "30min", l: "Procedure Time" },
            { v: "Same Day", l: "Discharge" }
        ],
        overview: "A varicocele is an enlargement of the veins within the scrotum, similar to a varicose vein in the leg. It occurs when valves inside the veins fail to flow blood properly, causing it to pool and swell.",
        symptoms: [
            "A dull, aching pain or heaviness in the scrotum.",
            "Visible 'bag of worms' appearance.",
            "Testicular atrophy (shrinking)."
        ],
        risks: "Ignoring a varicocele can lead to long-term complications, most notably male infertility and decreased testosterone production, as the pooled blood raises the temperature around the testes, damaging sperm quality.",
        why: "Varicocele Embolization is a modern, minimally invasive solution that avoids the large incisions and longer recovery of traditional surgery. At Venuva Vascular Center, we offer this 'walk-in, walk-out' procedure to restore health and fertility with maximum comfort.",
        methods: [
            {
                title: "Varicocele Embolization",
                description: "A minimally invasive, image-guided procedure performed by an Interventional Radiologist to block abnormal blood flow.",
                list: [
                    { name: "The Process", desc: "A tiny catheter is inserted through a small nick (groin or neck). Using X-ray guidance, the doctor positions it at the affected vein." },
                    { name: "The Mechanism", desc: "Small coils or sclerosant agents are placed to block the abnormal vein. Blood is then naturally rerouted to healthy veins." },
                    { name: "The Results", desc: "Relieves pressure and pain instantly, with a much lower risk of infection or recurrence compared to surgical ligation." }
                ]
            }
        ],
        how: [
            "Local anesthesia is applied to the small entry point (groin or neck).",
            "A tiny catheter is guided to the testicular vein using high-resolution X-ray.",
            "Small medical coils or sclerosants are used to close the abnormal vein.",
            "Normal blood flow is restored to the surrounding healthy veins.",
            "The procedure is completed in 30–45 minutes with no stitches required."
        ],
        comparison: {
            title: "Traditional Surgery vs Pinhole Embolisation",
            headers: ["Surgical Ligation", "Varicocele Embolisation"],
            rows: [
                ["Large groin/abdominal incision", "Tiny 2mm puncture (no stitches)"],
                ["General anesthesia often required", "Local anesthesia only"],
                ["Risk of infection & hydrocele", "Minimal risk of complications"],
                ["Recovery (1–2 weeks)", "Back to work next day"],
                ["Requires hospital stay", "Same-day 'Walk-in, Walk-out'"]
            ]
        },
        recovery: "Varicocele embolization is a true 'walk-in, walk-out' procedure. Most patients return to normal activities the very next day with minimal pain and no surgical scars. It offers a much faster recovery and less discomfort than traditional surgery.",
        suitable: "Embolization is the gold-standard for men experiencing testicular pain, visible varicoceles, or those seeking to improve fertility and testosterone levels.",
        seoTitle: "Varicocele Treatment in Bengaluru | Varicocele Embolisation | Dr Harsha M T",
        seoDescription: "Advanced varicocele treatment in Bengaluru with minimally invasive embolisation by Dr Harsha M T. Fix infertility and pain without surgery. Walk-in, walk-out recovery."
    },
    "peripheral-vascular": {
        icon: Activity,
        title: "Peripheral Vascular / Arterial Disease",
        sub: "Angioplasty, Stenting & Thrombolysis",
        hero: "/services/PERIPHERAL VASCULAR DISEASE 1.webp",
        stats: [
            { v: "90%", l: "Success Rate" },
            { v: "45-90m", l: "Procedure Time" },
            { v: "Fast", l: "Recovery" }
        ],
        overview: "Peripheral vascular disease (PVD) is a progressive circulation disorder characterised by narrowing, blockage or spasms in blood vessels. Arteries are most commonly involved, so it is also called peripheral arterial disease (PAD).",
        causes: [
            "Buildup of fatty, cholesterol containing deposits (plaques) on artery walls known as atherosclerosis, which reduces blood flow to the limbs.",
            "Blood vessel inflammation.",
            "Injury to the arms or legs.",
            "Changes in the muscles or ligaments.",
            "Radiation exposure.",
            "Infection."
        ],
        symptoms: [
            "Intermittent claudication: Pain after walking a certain distance.",
            "Hair loss on your legs and feet.",
            "Numbness or weakness in the legs.",
            "Brittle, slow-growing toenails.",
            "Ulcers (open sores) on your feet and legs, which do not heal.",
            "Changing skin colour on your legs, such as turning paler than usual or blue.",
            "Shiny skin.",
            "Wasting (shrinking) of leg muscles."
        ],
        risks: "PVD risk factors include smoking, diabetes, family history, high blood pressure, high cholesterol, obesity (BMI over 30), and high levels of the amino acid homocysteine. Risk increases with age, especially over 65 (or over 50 if other risks are present).",
        methods: [
            {
                title: "1. Lifestyle Modifications",
                description: "Critical habits to slow the progression of atherosclerosis and improve circulation.",
                list: [
                    { name: "Smoking Cessation", desc: "Stopping smoking is the most important step in managing PVD." },
                    { name: "Diet & Weight", desc: "Eating a healthy diet low in fats and maintaining a BMI under 30." },
                    { name: "Regular Exercise", desc: "Walking regimens to improve muscle oxygenation and collateral flow." },
                    { name: "Condition Management", desc: "Controlling underlying conditions like diabetes and high blood pressure." }
                ]
            },
            {
                title: "2. Medication Therapy",
                description: "Pharmacological interventions to prevent clot formation and manage systemic risk factors.",
                list: [
                    { name: "Systemic Care", desc: "Cholesterol tablets, anti-hypertensives, and anti-diabetic medications." },
                    { name: "Vascular Care", desc: "Blood thinners to prevent arterial blockages and meds for pain management." }
                ]
            },
            {
                title: "3. Minimally Invasive Procedures",
                description: "Advanced Interventional Radiology techniques to physically restore blood flow.",
                list: [
                    { name: "Angioplasty", desc: "Using a balloon to open narrowed or blocked arteries." },
                    { name: "Stenting", desc: "Placing a metal mesh tube to keep the artery open long-term." },
                    { name: "Thrombolysis", desc: "Delivering clot-dissolving medication directly to the site of an acute blockage." }
                ]
            }
        ],
        how: [
            "A tiny puncture is made (usually at the wrist or groin).",
            "A thin catheter is guided to the blocked artery using real-time X-ray.",
            "A balloon is inflated (Angioplasty) and/or a metal mesh tube (Stent) is placed.",
            "In acute cases, thrombolytic drugs are infused to dissolve blood clots.",
            "The procedure is completed in 45–90 minutes with zero surgical incisions."
        ],
        comparison: {
            title: "Traditional Care vs Pinhole PVD Therapy",
            headers: ["Traditional Bypass Surgery", "Angioplasty & Stenting"],
            rows: [
                ["Large surgical incisions", "Tiny 2–3 mm puncture (no stitches)"],
                ["Hospital stay (5–7 days)", "Next day discharge"],
                ["Longer recovery (6–8 weeks)", "Fast recovery (1 week)"],
                ["Higher surgical risk", "Minimally invasive & safer"]
            ]
        },
        recovery: "Recovery after angioplasty or stenting is usually quick. Most patients stay in the hospital overnight and return to normal activity within one week. It is a gold-standard alternative to invasive bypass surgery.",
        suitable: "PVD treatment is recommended for patients with leg pain while walking (claudication), non-healing ulcers, or those at risk of limb loss due to poor circulation.",
        seoTitle: "Peripheral Vascular Disease Treatment in Bengaluru | PAD Specialist | Dr Harsha M T",
        seoDescription: "Advanced PVD/PAD treatment in Bengaluru by Dr Harsha M T. Offering angioplasty, stenting, and thrombolysis to restore blood flow without major surgery."
    },
    "deep-vein-thrombosis": {
        icon: Droplet,
        title: "Deep Vein Thrombosis Treatment",
        sub: "Catheter Directed Thrombolysis",
        hero: "/services/DEEP VEIN THROMBOSIS.webp",
        stats: [
            { v: "95%", l: "Clot Resolution" },
            { v: "Low", l: "PTS Risk" },
            { v: "2-4h", l: "Procedure Time" }
        ],
        overview: "Deep vein thrombosis (DVT) is a medical condition in which a blood clot forms in one or more of the deep veins in the body, typically in the legs. DVT can cause serious health problems because the blood clots can break loose, travel through the bloodstream, and lodge in the lungs, causing a pulmonary embolism (PE).",
        symptoms: [
            "Swelling in one leg (rarely both legs).",
            "Pain or tenderness in the leg, often starting in the calf.",
            "Red or discolored skin on the leg.",
            "A feeling of warmth in the affected leg.",
            "Sometimes, DVT can occur without noticeable symptoms."
        ],
        risks: "DVT risk factors include prolonged immobility (long flights/bed rest), injury or surgery, medical conditions (cancer/heart disease), genetics, hormone therapy, pregnancy, obesity, smoking, and age (especially over 60).",
        causes: [
            "Prolonged immobility: Long periods of sitting or lying down.",
            "Injury or surgery: Damage to veins increases clot risk.",
            "Medical conditions: Cancer, heart disease, inflammatory diseases.",
            "Genetics: Inherited blood clotting disorders.",
            "Hormone therapy/birth control pills.",
            "Pregnancy: Increases pressure in leg and pelvic veins.",
            "Obesity: Excess weight increases vein pressure.",
            "Smoking: Affects blood clotting and circulation.",
            "Age: Risk increases, especially over 60."
        ],
        methods: [
            {
                title: "1. Anticoagulation Therapy",
                description: "Blood thinners to prevent the clot from growing and reduce the risk of new clots forming.",
                list: [
                    { name: "Medications", desc: "Clot-growth prevention using heparin, LMWH, warfarin, or DOACs." },
                    { name: "Monitoring", desc: "Regular blood tests to monitor effectiveness and adjust dosages." }
                ]
            },
            {
                title: "2. Thrombolytic Therapy",
                description: "Clot-dissolving medications delivered directly to the site of the blockage.",
                list: [
                    { name: "Catheter-Directed Thrombolysis", desc: "A catheter delivers clot-dissolving drugs directly to the clot's site." },
                    { name: "Systemic Thrombolysis", desc: "Drugs administered through an IV line to dissolve clots (less common)." }
                ]
            },
            {
                title: "3. Mechanical Thrombectomy",
                description: "Physical removal of the blood clot using specialized catheter-based tools.",
                list: [
                    { name: "Catheter-Based Thrombectomy", desc: "Catheter is used to physically remove the clot, often combined with thrombolytics." }
                ]
            },
            {
                title: "4. Inferior Vena Cava (IVC) Filter",
                description: "A small metal device placed to catch and prevent clots from traveling to the lungs (PE prevention).",
                list: [
                    { name: "IVC Filter Placement", desc: "Used for patients who cannot take anticoagulants or have recurrent clots." }
                ]
            },
            {
                title: "5. Compression Therapy",
                description: "Using graduated compression to improve blood flow and reduce complications.",
                list: [
                    { name: "Compression Stockings", desc: "Reduces swelling and decreases the risk of post-thrombotic syndrome." }
                ]
            },
            {
                title: "6. Endovenous Techniques",
                description: "Minimally invasive heat-based procedures to manage vein sources of DVT.",
                list: [
                    { name: "Laser / Radiofrequency Ablation", desc: "Uses energy to close off veins that are the source of the DVT." }
                ]
            },
            {
                title: "7. Lifestyle & Supportive Care",
                description: "Daily habits to improve circulation and reduce vein pressure.",
                list: [
                    { name: "Active Care", desc: "Includes regular exercise, weight management, and leg elevation." },
                    { name: "Activity", desc: "Avoiding prolonged immobility and encouraging movement." }
                ]
            },
            {
                title: "8. Follow-Up & Monitoring",
                description: "Regular check-ups and imaging to ensure treatment effectiveness and long-term safety.",
                list: [
                    { name: "Imaging", desc: "Ultrasounds to monitor the clot status and check for new formations." }
                ]
            }
        ],
        how: [
            "Local anesthesia and a tiny puncture (wrist/knee/groin).",
            "Catheter insertion guided by ultrasound/X-ray to the clot site.",
            "Clot-dissolving medication infusion or mechanical removal.",
            "Optional IVC filter placement to prevent PE (Pulmonary Embolism)."
        ],
        comparison: {
            title: "Traditional Care vs Pinhole DVT Therapy",
            headers: ["Traditional Bed Rest/Thinners", "Advanced IR Treatment"],
            rows: [
                ["Slow clot resolution", "Rapid clot removal"],
                ["High risk of long-term PTS", "Lowers PTS risk significantly"],
                ["Monitoring-only approach", "Active clot-dissolving treatment"],
                ["Higher risk of PE", "IVC Filter protection available"]
            ]
        },
        prevention: [
            "Regular exercise: Leg exercises to improve circulation.",
            "Frequent movement: Avoid long periods of immobility.",
            "Healthy weight: Reduces pressure on veins.",
            "Compression stockings: Wear them if at high risk.",
            "Hydration: Stay hydrated to reduce clotting risk.",
            "Medication: Preventive medications if prescribed by a specialist."
        ],
        recovery: "Recovery involves monitoring in the hospital for 2–3 days, followed by compression stockings and anticoagulants for 3–6 months. Normal activity typically resumes within 1–2 weeks.",
        suitable: "Treatment is recommended for extensive DVT of the thigh or pelvis, severe leg swelling, or those at high risk of post-thrombotic syndrome.",
        seoTitle: "Deep Vein Thrombosis Treatment in Bengaluru | DVT Specialist | Dr Harsha M T",
        seoDescription: "Comprehensive Deep Vein Thrombosis (DVT) treatment in Bengaluru with Dr Harsha M T. Offering thrombolysis, thrombectomy, and IVC filters to prevent PE."
    },
    "musculoskeletal-pain": {
        icon: ActivitySquare,
        title: "Chronic Musculoskeletal Pain Treatment",
        sub: "Transarterial Microembolisation",
        hero: "/services/CHRONIC MUSCULOSKELETAL PAIN.webp",
        stats: [
            { v: "Same Day", l: "Discharge" },
            { v: "30-60m", l: "Procedure Time" },
            { v: "Long", l: "Pain Relief" }
        ],
        overview: "Chronic musculoskeletal pain affects millions of people and commonly involves conditions such as knee osteoarthritis, frozen shoulder, tennis elbow, and plantar fasciitis. Recent research shows that this pain is often caused by abnormal blood vessel growth (neovascularisation) that triggers persistent inflammation.",
        why: "Unlike traditional treatments like pain medications or steroid injections that offer temporary relief, transarterial microembolisation targets the underlying cause of inflammation by blocking abnormal blood vessels. Benefits include no surgery, no long-term steroids, same-day discharge, and long-lasting relief.",
        how: [
            "A microcatheter is inserted through a small puncture in the wrist under local anaesthesia.",
            "Using real-time imaging guidance, the catheter is navigated to abnormal blood vessels near the painful joint.",
            "Tiny particles called microspheres are injected into these abnormal vessels.",
            "These particles block the abnormal blood supply responsible for inflammation.",
            "The procedure usually takes 30–60 minutes."
        ],
        comparison: {
            title: "Surgery vs Pinhole Microembolisation",
            headers: ["Traditional Surgery", "Microembolisation"],
            rows: [
                ["Large incision", "Tiny 2–3 mm puncture"],
                ["Stitches required", "No stitches"],
                ["Longer hospital stay", "Same-day discharge"],
                ["Longer recovery", "Faster recovery"]
            ]
        },
        recovery: "Patients usually go home the same day. Pain relief develops gradually over 4–12 weeks. Most patients return to daily activities within a few days, with follow-up evaluations to ensure effectiveness.",
        suitable: "Microembolisation is recommended for patients with chronic joint or tendon pain that has not improved with conservative treatments like physiotherapy.",
        seoTitle: "Chronic joint pain Treatment in Bengaluru | TAME Procedure | Dr Harsha M T",
        seoDescription: "Get advanced treatment for chronic knee, shoulder, and tendon pain in Bengaluru with transarterial microembolisation (TAME) by Dr Harsha M T."
    },
    "liver-cancer": {
        icon: Microscope,
        title: "Liver Cancer Intervention",
        sub: "Interventional Oncology (HCC & Metastases)",
        hero: "/services/LIVER CANCER INTERVENTION.webp",
        stats: [
            { v: "Targeted", l: "Therapy" },
            { v: "60min", l: "Procedure Time" },
            { v: "Min", l: "Stay" }
        ],
        overview: "Liver cancer can either start in the liver (Primary HCC) or spread there from other organs like the colon or breast (Metastases). Because the liver is a highly vascular organ, it is a common site for tumor growth.",
        symptoms: [
            "Unexplained weight loss and loss of appetite.",
            "Pain or swelling in the upper right abdomen.",
            "Jaundice: Yellowing of the skin and the whites of the eyes.",
            "Persistent fatigue and nausea."
        ],
        risks: "Ignoring liver tumors can lead to liver failure, internal bleeding due to portal hypertension, and the spread of cancer to other vital organs, making curative treatment impossible.",
        why: "For patients who are not candidates for traditional surgery or transplant, Interventional Radiology offers 'targeted' therapies that attack the tumor directly while sparing healthy liver tissue. These methods provide a critical lifeline with fewer systemic side effects.",
        methods: [
            {
                title: "1. Tumor Ablation (RFA / MWA)",
                description: "Best suited for smaller, localized tumors, ablation 'burns' the cancer cells from the inside.",
                list: [
                    { name: "The Process", desc: "Under ultrasound or CT guidance, a needle-probe is inserted directly into the tumor." },
                    { name: "The Mechanism", desc: "Heat (Radiofrequency or Microwave energy) is applied, destroying the cancer cells instantly." },
                    { name: "The Benefit", desc: "Highly effective, 'pinhole' alternative to surgery with a very short recovery time." }
                ]
            },
            {
                title: "2. TACE (Chemo-Embolization)",
                description: "Trans-Arterial Chemo-Embolization delivers concentrated chemo directly to the tumor.",
                list: [
                    { name: "The Process", desc: "A micro-catheter is navigated through the hepatic artery to the vessels feeding the tumor." },
                    { name: "The Mechanism", desc: "Concentrated chemotherapy is injected, followed by embolic particles to 'trap' the drug and cut off blood supply." },
                    { name: "The Result", desc: "The tumor is starved of nutrients and attacked by chemo, leading to significant shrinkage." }
                ]
            },
            {
                title: "3. TARE (Radioembolization)",
                description: "Delivers millions of microscopic radioactive beads (Yttrium-90) to the tumor site.",
                list: [
                    { name: "The Process", desc: "Similar to TACE, but instead of chemo, radioactive Y-90 beads are delivered to the tumor." },
                    { name: "The Mechanism", desc: "Beads emit high-energy radiation over a short distance, destroying the tumor from within its own supply." },
                    { name: "The Advantage", desc: "Better tolerated than systemic chemo and can treat larger or more complex tumors." }
                ]
            }
        ],
        how: [
            "Imaging guidance (Ultrasound/CT) is used to locate the tumor precisely.",
            "A thin needle or catheter is guided to the tumor site through a small entry point.",
            "Targeted energy (Heat), Chemotherapy, or Radiation is delivered directly to the cancer.",
            "Blood vessels feeding the tumor are often blocked (Embolized) to starve the cancer.",
            "The entry point is covered with a bandage; no major surgical incisions are made."
        ],
        comparison: {
            title: "Traditional Surgery vs Targeted IR Oncology",
            headers: ["Traditional Liver Surgery", "Targeted IR Intervention"],
            rows: [
                ["Large abdominal incision", "Tiny 2–3 mm puncture"],
                ["Removal of healthy liver tissue", "Spares healthy liver tissue"],
                ["Longer hospital stay (7–10 days)", "Next day/Short discharge"],
                ["Higher systemic side effects", "Localized side effects only"]
            ]
        },
        recovery: "Patients are monitored for 24–48 hours depending on the treatment type. Recovery is significantly faster than traditional surgery, and most patients can return to normal activities within a few days.",
        suitable: "Targeted oncology is recommended for patients with Primary Liver Cancer (HCC) or Liver Metastases who are not surgical candidates or seek to shrink tumors before surgery.",
        seoTitle: "Liver Cancer Treatment in Bengaluru | TACE, TARE & Ablation | Dr Harsha M T",
        seoDescription: "Advanced liver cancer treatment in Bengaluru by Dr Harsha M T. Offering targeted therapies like TACE, TARE, RFA, and MWA for HCC and Liver Metastases."
    },
    "prostate-embolisation": {
        icon: Crosshair,
        title: "Prostate Artery Embolisation (PAE)",
        sub: "Non-surgical BPH Treatment",
        hero: "/services/PROSTATE EMBOLISATION.webp",
        stats: [
            { v: "Same Day", l: "Discharge" },
            { v: "No", l: "Catheter" },
            { v: "Min", l: "Invasive" }
        ],
        overview: "Benign Prostatic Hyperplasia (BPH) is an enlargement of the prostate gland that causes urinary symptoms. Traditional TURP surgery is invasive and requires general anaesthesia and catheterization.",
        why: "PAE is a non-surgical alternative that shrinks the prostate through a tiny wrist puncture. Benefits include local anaesthesia, no catheter, same-day discharge, and gradual relief of urinary symptoms.",
        how: [
            "A catheter is inserted through a small wrist puncture.",
            "Using X-ray guidance, the catheter reaches the prostate arteries.",
            "Tiny particles are injected to block blood flow to the prostate.",
            "The prostate gradually shrinks over 3–6 months.",
            "Procedure duration: 60–90 minutes."
        ],
        comparison: {
            title: "Surgery vs Pinhole IR Procedure",
            headers: ["Traditional Surgery (TURP)", "Pinhole PAE"],
            rows: [
                ["Large incision / catheter", "Tiny 2–3 mm wrist puncture"],
                ["Requires anaesthesia", "Local anaesthesia"],
                ["Hospital stay required", "Same-day discharge"],
                ["Longer recovery", "Gradual improvement, faster return"]
            ]
        },
        recovery: "Patients go home the same day. Improvement in urination is gradual over 3–6 months, and normal daily activities can be resumed immediately.",
        suitable: "PAE is suitable for men with moderate to severe BPH symptoms who wish to avoid surgical procedures.",
        seoTitle: "Prostate Artery Embolisation in Bengaluru | BPH Treatment | Dr Harsha M T",
        seoDescription: "Get advanced non-surgical BPH treatment in Bengaluru with Prostate Artery Embolisation (PAE) by Dr Harsha M T. Shrink the prostate without surgery."
    },
    "dialysis-access": {
        icon: Syringe,
        title: "Dialysis Access Care",
        sub: "Fistuloplasty & Permacath",
        hero: "/services/DIALYSIS ACCESS.webp",
        stats: [
            { v: "Same Day", l: "Discharge" },
            { v: "30-60m", l: "Duration" },
            { v: "Pinhole", l: "Access" }
        ],
        overview: "For dialysis patients, vascular access is a critical lifeline. AV fistulas and grafts may narrow or clot over time, leading to inadequate dialysis. Dr Harsha MT provides minimally invasive solutions to restore and maintain access.",
        why: "Traditional surgery for fistula revision can be complex and may compromise existing access. IR procedures offer the advantage of a tiny 2-3 mm puncture, local anaesthesia, and same-day discharge while preserving existing access.",
        how: [
            "Access site is punctured under ultrasound guidance with local anaesthesia.",
            "A fistulogram maps the access circuit to identify stenosis or clots.",
            "Fistuloplasty: Balloon catheter dilates the narrowed segment.",
            "Thrombectomy: Clot is removed using drugs or mechanical devices.",
            "Permacath Placement: Tunnelled catheter is inserted if immediate dialysis is needed."
        ],
        comparison: {
            title: "Surgery vs Pinhole IR Procedure",
            headers: ["Traditional Surgery", "Pinhole IR Procedure"],
            rows: [
                ["Large incision", "Tiny 2–3 mm puncture"],
                ["General anaesthesia", "Local anaesthesia"],
                ["Hospital stay required", "Same-day discharge"],
                ["Longer recovery", "Minimal downtime"],
                ["Risk of losing access", "Preserves existing access"]
            ]
        },
        recovery: "Immediate or next-day dialysis using the treated access. Minimal downtime, with regular Doppler ultrasound follows-up to detect future problems.",
        suitable: "Suitable for all dialysis patients with malfunctioning fistula, graft, or catheter issues like poor flow or swelling.",
        seoTitle: "Dialysis Access Care in Bengaluru | Fistuloplasty Specialist | Dr Harsha M T",
        seoDescription: "Maintain and restore your dialysis access with minimally invasive fistuloplasty and permacath placement by Dr Harsha M T in Bengaluru."
    },
    "gi-intervention": {
        icon: AlertCircle,
        title: "Gastrointestinal (GI) Intervention",
        sub: "Image-Guided Procedures",
        hero: "/services/GI INTERVENTION.webp",
        stats: [
            { v: "Min", l: "Trauma" },
            { v: "30-60m", l: "Duration" },
            { v: "Fast", l: "Recovery" }
        ],
        overview: "GI conditions such as bleeding, biliary obstruction, and portal hypertension can often be managed without open surgery through precise image-guided treatments.",
        why: "Pinhole GI intervention offers minimal trauma, faster recovery, and is safe even for high-risk patients. Short hospital stays and local anaesthesia are major advantages.",
        how: [
            "A catheter is inserted through a small puncture under imaging guidance.",
            "GI Bleeding: Vessel is located and embolised with coils or particles.",
            "Biliary Obstruction: Stent or drainage catheter is placed to relieve jaundice.",
            "Portal Hypertension: TIPS shunt reduces pressure in liver veins.",
            "Feeding Access: Gastrostomy tubes are placed under fluoroscopic guidance."
        ],
        comparison: {
            title: "Surgery vs Pinhole IR Procedure",
            headers: ["Traditional Surgery", "Pinhole IR Procedure"],
            rows: [
                ["Large incision", "Tiny 2–3 mm puncture"],
                ["General anaesthesia", "Local anaesthesia / mild sedation"],
                ["Long recovery", "Short hospital stay"],
                ["High risk for unstable", "Safe and minimally invasive"]
            ]
        },
        recovery: "Short hospital stay (1–5 days depending on procedure). Normal diet and activities resume as advised, with follow-up imaging for effectiveness.",
        suitable: "Recommended for patients with acute GI bleeding, obstructive jaundice, or those needing feeding access who are not suitable for surgery.",
        seoTitle: "Gastrointestinal Interventions in Bengaluru | TIPS & Biliary Stenting | Dr Harsha M T",
        seoDescription: "Get advanced minimally invasive GI treatments in Bengaluru for bleeding, jaundice, and more, performed by Dr Harsha M T."
    }
};

export const TREATMENT_QA = {
    "varicose-veins": [
        { q: "Will varicose veins come back after treatment?", a: "Treated veins are permanently sealed. However, new veins may develop in the future due to genetics or lifestyle factors." },
        { q: "Is the EVLA procedure painful?", a: "The procedure is performed under local anaesthesia, so most patients feel minimal discomfort." },
        { q: "Can I walk immediately after treatment?", a: "Yes. Patients are encouraged to walk immediately after the procedure to improve blood circulation." },
        { q: "How long should compression stockings be worn?", a: "Most patients are advised to wear compression stockings for 1–2 weeks after treatment." },
    ],
    "thyroid-nodule": [
        { q: "Will my thyroid function be affected?", a: "No. RFA targets only the nodule and preserves the healthy thyroid gland, so thyroid function usually remains normal." },
        { q: "How much will the nodule shrink?", a: "Most nodules shrink by 50–90% within 6–12 months after treatment." },
        { q: "Is this safe for benign nodules without symptoms?", a: "Yes. Some patients choose RFA for cosmetic reasons even if the nodule is not causing symptoms." },
        { q: "Will I need repeat treatment?", a: "In most cases, a single treatment is sufficient. Larger nodules may occasionally require an additional session." },
    ],
    "uterine-fibroid": [
        { q: "Can I still get pregnant after UFE?", a: "Some women can conceive after UFE, but the procedure is usually recommended for women who are not planning immediate pregnancy. Your doctor will discuss the best treatment option based on your fertility plans." },
        { q: "How soon will heavy bleeding improve?", a: "Many patients notice improvement in bleeding symptoms within one to three months as the fibroids begin to shrink." },
        { q: "Is UFE covered by insurance?", a: "In many cases, UFE is covered by health insurance when fibroids cause medical symptoms. Coverage depends on the insurance provider." },
        { q: "What is recovery like at home?", a: "Patients may experience mild cramps and fatigue for a few days, but most return to normal activities within 1–2 weeks." },
    ],
    "varicocele": [
        { q: "How long before I see improvement in sperm count?", a: "Improvement in sperm quality may be seen within 3–6 months after treatment." },
        { q: "Is embolisation better than surgery for varicocele?", a: "Both treatments are effective, but embolisation offers the advantage of no surgical incision and faster recovery." },
        { q: "Can varicocele cause infertility in all men?", a: "Not all men with varicocele experience infertility, but it is one of the most common treatable causes of male infertility." },
        { q: "Will I feel the coils used during treatment?", a: "No. The coils are placed inside the vein and cannot be felt after the procedure." },
    ],
    "peripheral-vascular": [
        { q: "What happens if I don't treat peripheral vascular disease?", a: "Untreated PVD can worsen over time and may lead to severe pain, ulcers, infections, or even risk of limb loss in advanced cases." },
        { q: "Will I need stents, and are they permanent?", a: "Stents are used when necessary to keep the artery open. They are designed to remain permanently in the artery." },
        { q: "Can PVD return after angioplasty?", a: "While angioplasty restores blood flow, new blockages may develop over time. Lifestyle changes and medications help reduce this risk." },
        { q: "Is this safe for diabetic patients?", a: "Yes. Many diabetic patients undergo angioplasty to improve blood circulation and help heal foot ulcers." },
    ],
    "deep-vein-thrombosis": [
        { q: "What are the signs of Deep Vein Thrombosis?", a: "Common symptoms include leg swelling, pain, warmth, redness, and visible vein enlargement in the affected leg." },
        { q: "Can DVT resolve on its own with blood thinners?", a: "Blood thinners prevent the clot from growing but may not completely remove the clot. Catheter-directed treatment actively dissolves the clot." },
        { q: "What is post-thrombotic syndrome?", a: "It is a long-term complication of DVT causing chronic leg pain, swelling, skin changes, and ulcers due to damage to vein valves." },
        { q: "How soon after diagnosis should I seek treatment?", a: "Early treatment is important to prevent complications such as pulmonary embolism or permanent vein damage." },
    ],
    "musculoskeletal-pain": [
        { q: "What conditions does transarterial microembolisation treat?", a: "It is used to treat chronic pain conditions such as knee osteoarthritis, frozen shoulder, tennis elbow, and plantar fasciitis." },
        { q: "How does embolisation relieve joint pain?", a: "The procedure blocks abnormal blood vessels that carry inflammatory cells, reducing inflammation and pain." },
        { q: "How many sessions are required?", a: "Most patients require a single treatment session, although some may benefit from additional therapy depending on the condition." },
        { q: "Is this an alternative to knee replacement surgery?", a: "For some patients with moderate knee osteoarthritis, microembolisation may reduce pain and delay the need for joint replacement surgery." },
    ],
    "liver-cancer": [
        { q: "Is TACE a cure for liver cancer?", a: "TACE can control the tumour, shrink it, and improve survival. Complete cure depends on tumour size, stage, and liver function." },
        { q: "What is the difference between TACE and TARE?", a: "TACE delivers chemotherapy directly to the tumour, while TARE uses radioactive microspheres for targeted radiation therapy." },
        { q: "How many TACE sessions are usually required?", a: "Typically 1–3 sessions, depending on tumour size and response." },
        { q: "Are there side effects after TACE?", a: "Mild post-embolisation symptoms such as fever, fatigue, and abdominal discomfort may occur and usually resolve in a few days." },
    ],
    "prostate-embolisation": [
        { q: "How is PAE different from TURP surgery?", a: "PAE avoids large incisions, catheterization, and hospital stay. Recovery is faster, and sexual function is usually preserved." },
        { q: "When will I notice improvement in urination?", a: "Gradual improvement typically occurs within 3–6 months as the prostate shrinks." },
        { q: "Is PAE suitable for all men with BPH?", a: "Not all patients are candidates. Pre-procedure assessment including MRI and flow study is required." },
        { q: "Will this affect my sexual function?", a: "PAE preserves sexual function in most patients and has a lower risk of complications compared to TURP." },
    ],
    "dialysis-access": [
        { q: "My fistula is not working — what are my options?", a: "Image-guided procedures like fistuloplasty or thrombectomy can restore the existing access without surgery." },
        { q: "What is a permacath and when is it needed?", a: "A permacath is a tunnelled catheter placed in the neck for immediate dialysis when fistula function fails." },
        { q: "How long does fistuloplasty last?", a: "Durability depends on vessel quality and patient factors, but most patients benefit for months to years with regular monitoring." },
        { q: "Is this procedure done under general anaesthesia?", a: "No. All procedures are done under local anaesthesia through a tiny pinhole puncture." },
    ],
    "gi-intervention": [
        { q: "What GI conditions can be treated without surgery?", a: "Acute bleeding, biliary obstruction, portal hypertension complications, and feeding access needs can often be addressed with image-guided procedures." },
        { q: "What is a TIPS procedure?", a: "Transjugular Intrahepatic Portosystemic Shunt (TIPS) reduces high pressure in liver veins to manage complications of portal hypertension." },
        { q: "Can GI bleeding be stopped without surgery?", a: "Yes. Embolisation of the bleeding vessel using minimally invasive techniques can control bleeding in most cases." },
        { q: "How is a feeding tube placed interventionally?", a: "A catheter is guided under fluoroscopy to place gastrostomy or jejunostomy tubes safely through a small abdominal puncture." },
    ],
};
