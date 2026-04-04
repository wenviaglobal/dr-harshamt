import { useState, useEffect, useRef } from "react";
import { AnatomyViewer3D } from "./3d-anatomy-viewer.jsx";

/* ─── CONFIG ─── */
const DOC = {
  name: "Dr. Harsha M T",
  title: "Consultant Vascular & Interventional Radiologist",
  tagline: "Minimally Invasive. Maximally Effective.",
  sub: "Pinhole procedures that replace complex surgeries — so you heal faster, with no scars and no stitches.",
  quals: "MBBS • MD (PGIMER) • FVIR (AIIMS) • EBIR • EDiR • DICRI",
  exp: "8+", procs: "1000+", certs: "6",
  phone: "+91 98765 43210", wa: "919876543210",
  email: "dr.harsha.mt@email.com",
  loc: "SPARSH Hospital, Infantry Road & Yelahanka, Bengaluru",
  time: "Mon – Sat, 10:00 AM – 7:00 PM",
  reg: "KMC 120648",
  photo: "https://www.sparshhospital.com/wp-content/uploads/2024/05/Dr.-Harsha-M-T.jpg",
};

const IMG = {
  hero: "https://images.unsplash.com/photo-1551190822-a9ce113ac100?w=1400&h=900&fit=crop",
  varicose: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&h=400&fit=crop",
  fibroid: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop",
  thyroid: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop",
  vascular: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=600&h=400&fit=crop",
  liver: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
  dialysis: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&h=400&fit=crop",
  prostate: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=600&h=400&fit=crop",
  varicocele: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=400&fit=crop",
  about: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&h=600&fit=crop",
  ir: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&h=500&fit=crop",
  blog1: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=800&h=500&fit=crop",
  blog2: "https://images.unsplash.com/photo-1551190822-a9ce113ac100?w=800&h=500&fit=crop",
  blog3: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop",
  blog4: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=500&fit=crop",
  blog5: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&h=500&fit=crop",
  blog6: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=500&fit=crop",
  sparsh: "https://www.sparshhospital.com/wp-content/uploads/2025/06/new-logo.svg",
  gallery1: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
  // gallery2: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=400&h=300&fit=crop",
  // gallery3: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop",
  // gallery4: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&h=300&fit=crop",
};

const AFFILIATIONS = [
  { name: "PGIMER Chandigarh", short: "PGI", color: "#1E40AF" },
  { name: "AIIMS", short: "AIIMS", color: "#DC2626" },
  { name: "EBIR Certified", short: "EBIR", color: "#7C3AED" },
  { name: "SPARSH Hospital", short: "SPARSH", color: "#0D9488" },
  { name: "Karnataka Medical Council", short: "KMC", color: "#EA580C" },
];

const NAV = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Choose", href: "#why" },
  { label: "Blog", href: "#blog" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const CREDS = [
  { inst: "PGIMER", desc: "MD Radiodiagnosis", loc: "Chandigarh" },
  { inst: "AIIMS", desc: "Fellowship VIR", loc: "Rishikesh" },
  { inst: "EBIR", desc: "European Board IR", loc: "Certified" },
  { inst: "EDiR", desc: "European Diploma", loc: "Radiology" },
];

const SERVICES = [
  {
    icon: "🦵", t: "Varicose Veins", sub: "EVLA / Venaseal", img: IMG.varicose, hl: true,
    d: "Walk-in, walk-out laser treatment for painful, bulging leg veins. No surgery, no bed rest — most patients resume normal activities the next day."
  },
  {
    icon: "🩺", t: "Uterine Fibroid Embolisation", sub: "UFE", img: IMG.fibroid, hl: false,
    d: "A surgery-free solution for fibroids. Through a tiny wrist puncture, blood supply to the fibroid is blocked, causing it to shrink naturally."
  },
  {
    icon: "🦋", t: "Thyroid Nodule Ablation", sub: "Radiofrequency Ablation", img: IMG.thyroid, hl: false,
    d: "Shrink thyroid nodules without surgery or scars. A needle-based procedure done under local anaesthesia with no visible marks."
  },
  {
    icon: "👶", t: "Varicocele Embolisation", sub: "Non-surgical", img: IMG.varicocele, hl: false,
    d: "A fertility-preserving treatment for varicocele. Done through a pinhole in the wrist — no incision in the groin, faster recovery."
  },
  {
    icon: "🫀", t: "Peripheral Vascular Disease", sub: "Angioplasty & Stenting", img: IMG.vascular, hl: false,
    d: "Restore blood flow in blocked leg arteries through minimally invasive balloon and stent procedures, avoiding bypass surgery."
  },
  {
    icon: "🔬", t: "Prostate Artery Embolisation", sub: "PAE", img: IMG.prostate, hl: false,
    d: "A non-surgical option for enlarged prostate (BPH). Shrinks the prostate through a pinhole — no catheter, no hospital stay."
  },
  {
    icon: "💉", t: "Dialysis Access Care", sub: "Fistuloplasty & Permacath", img: IMG.dialysis, hl: false,
    d: "Keep your dialysis lifeline working. Minimally invasive procedures to maintain and restore fistula and catheter function."
  },
  {
    icon: "🫁", t: "Liver & Cancer Interventions", sub: "TACE / TARE", img: IMG.liver, hl: false,
    d: "Targeted tumour treatment delivered directly to cancer cells through blood vessels, minimising damage to healthy tissue."
  },
];

const BLOGS = [
  { id: "varicose-veins-guide", title: "Varicose Veins: Everything You Need to Know", excerpt: "Understand the causes, symptoms, and modern treatment options for varicose veins — including surgery-free laser procedures.", img: IMG.blog1, date: "Jan 15, 2026", read: "8 min", cat: "Vascular Health" },
  { id: "what-is-interventional-radiology", title: "What is Interventional Radiology? A Patient's Guide", excerpt: "Learn how interventional radiology is transforming medicine by replacing complex surgeries with minimally invasive pinhole procedures.", img: IMG.blog2, date: "Jan 8, 2026", read: "6 min", cat: "Patient Education" },
  { id: "uterine-fibroid-treatment", title: "Uterine Fibroids: Non-Surgical Treatment Options", excerpt: "Explore how uterine fibroid embolisation (UFE) offers women a surgery-free path to relief from fibroid symptoms.", img: IMG.blog3, date: "Dec 28, 2025", read: "7 min", cat: "Women's Health" },
  { id: "thyroid-nodule-rfa", title: "Thyroid Nodule Treatment Without Surgery", excerpt: "Radiofrequency ablation is changing how thyroid nodules are treated — no surgery, no scars, and preservation of thyroid function.", img: IMG.blog4, date: "Dec 18, 2025", read: "6 min", cat: "Thyroid Health" },
  { id: "dvt-peripheral-vascular", title: "Deep Vein Thrombosis & Peripheral Artery Disease", excerpt: "Warning signs, risk factors, and minimally invasive treatments for DVT and peripheral artery disease you should know about.", img: IMG.blog5, date: "Dec 10, 2025", read: "9 min", cat: "Vascular Health" },
  { id: "varicocele-male-fertility", title: "Varicocele & Male Fertility: What Men Should Know", excerpt: "How varicocele embolisation — a non-surgical, pinhole procedure — can improve fertility and relieve discomfort.", img: IMG.blog6, date: "Dec 1, 2025", read: "5 min", cat: "Men's Health" },
];

const BLOG_CONTENT = {
  "varicose-veins-guide": {
    title: "Varicose Veins: Everything You Need to Know",
    hero: IMG.blog1, cat: "Vascular Health", date: "January 15, 2026", read: "8 min read",
    sections: [
      {
        heading: "What Are Varicose Veins?", img: IMG.varicose,
        text: `Varicose veins are enlarged, twisted veins that usually appear on the legs and feet. They occur when the valves inside veins stop working properly, causing blood to pool and the veins to swell. While they are extremely common — affecting up to 30% of adults — they are more than just a cosmetic concern.\n\nLeft untreated, varicose veins can lead to pain, heaviness, skin changes, swelling, and in severe cases, ulcers and blood clots. They are particularly common in people who stand for long hours, women (especially during pregnancy), and those with a family history of the condition.`
      },
      {
        heading: "Recognising the Symptoms", img: null,
        text: `The most visible sign is bulging, rope-like veins on the legs. But many patients first notice other symptoms before the veins become prominent. These include a heavy or aching feeling in the legs (especially after standing), swelling in the ankles and feet by evening, itching or burning around the affected veins, skin discolouration near the ankle turning dark or brownish, restless legs at night, and muscle cramps in the calves.\n\nIf you experience any of these symptoms regularly, it's worth getting an evaluation — even if you don't see obvious varicose veins on the surface.`
      },
      {
        heading: "What Causes Varicose Veins?", img: null,
        text: `Veins carry blood back to the heart, and they have one-way valves to prevent backflow. When these valves weaken or fail, blood flows backward and pools in the vein, causing it to stretch and become varicose.\n\nSeveral factors increase your risk: prolonged standing or sitting (common in IT professionals, teachers, and security guards), family history of varicose veins, pregnancy (hormonal changes relax vein walls), obesity (extra weight puts pressure on leg veins), age (vein elasticity decreases over time), and female gender (hormonal factors play a role).`
      },
      {
        heading: "Modern Treatment: EVLA & Venaseal", img: IMG.ir,
        text: `The good news is that varicose vein treatment has been revolutionised by interventional radiology. Gone are the days of painful stripping surgery with weeks of recovery.\n\nEndovenous Laser Ablation (EVLA) uses laser energy delivered through a thin fibre inserted into the affected vein under ultrasound guidance. The laser heats and seals the vein shut, and blood is naturally rerouted to healthy veins. The procedure takes 30-45 minutes, uses only local anaesthesia, and patients walk out the same day.\n\nVenaseal (medical glue) is an even newer option where a special adhesive is injected into the vein to seal it permanently. It requires no tumescent anaesthesia and has virtually zero downtime.\n\nBoth procedures are done through a single needle puncture — no cuts, no stitches, no scars.`
      },
      {
        heading: "Recovery & Results", img: null,
        text: `Most patients return to normal activities within 1-2 days. You can walk immediately after the procedure — in fact, walking is encouraged. Compression stockings are typically worn for 1-2 weeks after EVLA. Heavy exercise and prolonged standing should be avoided for about a week.\n\nSuccess rates exceed 95%, and recurrence rates are very low compared to traditional surgery. Most patients report significant improvement in symptoms within the first week itself.`
      },
      {
        heading: "When Should You See a Doctor?", img: null,
        text: `Don't wait for varicose veins to become a serious problem. Consult a vascular specialist if you notice visible bulging veins, persistent leg pain or heaviness, ankle swelling, skin changes near the ankle, or if you have a family history and are noticing early symptoms.\n\nEarly treatment is simpler, faster, and prevents complications like venous ulcers and deep vein thrombosis.`
      },
    ]
  },
  "what-is-interventional-radiology": {
    title: "What is Interventional Radiology? A Patient's Guide",
    hero: IMG.blog2, cat: "Patient Education", date: "January 8, 2026", read: "6 min read",
    sections: [
      {
        heading: "The Pinhole Revolution in Medicine", img: IMG.ir,
        text: `Imagine being told you need surgery — a large incision, general anaesthesia, days in the hospital, weeks of recovery. Now imagine the same problem being fixed through a tiny needle puncture in your wrist or groin, under local anaesthesia, and you go home the same day. That's interventional radiology (IR).\n\nInterventional radiology is a medical specialty where doctors use advanced imaging technology — like X-rays, ultrasound, and CT scans — to guide tiny instruments through blood vessels and treat diseases from the inside, without open surgery.`
      },
      {
        heading: "How Does It Work?", img: null,
        text: `An interventional radiologist makes a small puncture (2-3mm) in the skin, usually at the wrist or groin. Through this puncture, a thin tube called a catheter is guided through blood vessels to reach the exact location of the problem — whether it's in the leg, liver, uterus, or thyroid.\n\nThe doctor watches the entire procedure on a screen in real-time using X-ray or ultrasound imaging. This allows incredible precision — treating only the affected area while leaving surrounding healthy tissue untouched.\n\nThink of it like a GPS-guided delivery system inside your body.`
      },
      {
        heading: "What Can IR Treat?", img: IMG.vascular,
        text: `The range of conditions treatable by interventional radiology is vast and growing. Vascular conditions include varicose veins (laser ablation or glue), deep vein thrombosis or DVT (clot removal), peripheral artery disease (balloon and stent), and dialysis access problems.\n\nOrgan-specific treatments include uterine fibroids (embolisation), enlarged prostate or BPH (prostate artery embolisation), thyroid nodules (radiofrequency ablation), liver tumours (chemoembolisation), and kidney tumours (ablation).\n\nGeneral interventions include image-guided biopsies, abscess drainage, bleeding control, and central line placement.`
      },
      {
        heading: "Benefits Over Traditional Surgery", img: null,
        text: `The advantages are significant for patients. There is no large incision — just a needle puncture. Local anaesthesia is used instead of general, so you're awake but comfortable. Hospital stay is minimal — same-day or next-day discharge in most cases. Recovery takes days instead of weeks. There are no visible scars, and the risk of complications is significantly lower.\n\nFor many conditions, IR procedures achieve results comparable to or better than open surgery, with a fraction of the trauma to the body.`
      },
      {
        heading: "Is IR Right for You?", img: null,
        text: `If you've been told you need surgery for varicose veins, fibroids, thyroid nodules, prostate enlargement, or vascular blockages — ask about interventional radiology alternatives. Not every condition is suitable for IR, but many patients are surprised to learn they have a minimally invasive option.\n\nA consultation with an interventional radiologist can help you understand whether a pinhole procedure is right for your specific situation.`
      },
    ]
  },
  "uterine-fibroid-treatment": {
    title: "Uterine Fibroids: Non-Surgical Treatment Options",
    hero: IMG.blog3, cat: "Women's Health", date: "December 28, 2025", read: "7 min read",
    sections: [
      {
        heading: "Understanding Uterine Fibroids", img: IMG.fibroid,
        text: `Uterine fibroids are non-cancerous growths in the uterus that affect up to 70% of women by age 50. While many fibroids are small and cause no symptoms, others can grow large and cause heavy menstrual bleeding, pelvic pain, frequent urination, and difficulty conceiving.\n\nFibroids are the leading cause of hysterectomy (uterus removal) in India. But what many women don't know is that there are now effective non-surgical alternatives that preserve the uterus completely.`
      },
      {
        heading: "Symptoms That Shouldn't Be Ignored", img: null,
        text: `Many women normalise their symptoms, thinking heavy periods or pelvic discomfort are just part of life. But fibroids can significantly impact quality of life. Watch for these warning signs: periods lasting more than 7 days, needing to change pads every 1-2 hours, passing large blood clots, anaemia or chronic fatigue from blood loss, pelvic pressure or bloating, frequent urination especially at night, pain during intercourse, and difficulty getting pregnant.\n\nIf you recognise these symptoms, an ultrasound can quickly confirm whether fibroids are the cause.`
      },
      {
        heading: "Traditional Treatment vs UFE", img: null,
        text: `Traditionally, fibroids have been treated with medications (temporary relief), myomectomy (surgical removal of fibroids), or hysterectomy (complete uterus removal). While these are effective, they involve significant surgery, general anaesthesia, and weeks of recovery.\n\nUterine Fibroid Embolisation (UFE) offers a completely different approach. Through a tiny puncture in the wrist, a catheter is guided to the arteries feeding the fibroids. Tiny particles are injected to block the blood supply, causing the fibroids to shrink over the following months. The uterus is completely preserved.`
      },
      {
        heading: "The UFE Procedure", img: IMG.ir,
        text: `UFE is performed by an interventional radiologist and typically takes 60-90 minutes. You receive local anaesthesia and mild sedation — no general anaesthesia needed. A small puncture is made at the wrist (or groin), and using X-ray guidance, the doctor navigates to the uterine arteries.\n\nTiny microspheres are injected to block the blood supply specifically to the fibroids. Since fibroids depend heavily on blood supply to grow, cutting off this supply causes them to soften and shrink. Normal uterine tissue has alternative blood supply and is not affected.\n\nMost patients stay overnight for pain management and go home the next morning.`
      },
      {
        heading: "Recovery & Results", img: null,
        text: `Recovery from UFE is dramatically faster than surgery. Most women return to normal activities within 1-2 weeks, compared to 6-8 weeks after hysterectomy. Within 3-6 months, fibroids typically shrink by 40-60%, and symptoms improve significantly.\n\nStudies show that over 90% of women experience significant improvement in heavy bleeding and pelvic symptoms after UFE. The procedure also preserves fertility potential, making it an excellent option for women who want to have children in the future.`
      },
    ]
  },
  "thyroid-nodule-rfa": {
    title: "Thyroid Nodule Treatment Without Surgery",
    hero: IMG.blog4, cat: "Thyroid Health", date: "December 18, 2025", read: "6 min read",
    sections: [
      {
        heading: "Thyroid Nodules: How Common Are They?", img: IMG.thyroid,
        text: `Thyroid nodules are lumps that form within the thyroid gland in the neck. They are extremely common — ultrasound studies show that up to 50-60% of adults have thyroid nodules, though most are small and go unnoticed. The vast majority (over 95%) are benign (non-cancerous).\n\nHowever, some nodules grow large enough to cause visible swelling in the neck, difficulty swallowing, a sensation of pressure, or cosmetic concerns. Traditionally, these symptomatic nodules required surgical removal — often taking out half or all of the thyroid gland.`
      },
      {
        heading: "Radiofrequency Ablation: The Non-Surgical Solution", img: null,
        text: `Radiofrequency Ablation (RFA) is a revolutionary treatment that shrinks thyroid nodules without surgery. Under ultrasound guidance, a special needle electrode is inserted directly into the nodule through the skin. Radiofrequency energy heats and destroys the nodule tissue, which is then gradually absorbed by the body over weeks to months.\n\nThe procedure takes 20-40 minutes, uses only local anaesthesia, and patients go home within a few hours. There is no surgical scar on the neck, and — crucially — the rest of the thyroid gland is completely preserved, meaning most patients don't need lifelong thyroid medication.`
      },
      {
        heading: "Who Is a Good Candidate?", img: null,
        text: `RFA is ideal for patients with benign thyroid nodules that are causing symptoms like neck pressure, swallowing difficulty, or cosmetic concerns. It's also suitable for nodules that are growing over time, patients who prefer to avoid surgery, those with surgical risks due to other health conditions, and recurrent thyroid cysts.\n\nA fine needle aspiration (FNAC) biopsy must confirm the nodule is benign before RFA can be considered. If there is any suspicion of cancer, surgery remains the appropriate treatment.`
      },
      {
        heading: "Results & Follow-Up", img: null,
        text: `After RFA, nodules typically shrink by 50-80% within 6-12 months. Symptoms improve progressively as the nodule reduces in size. Multiple sessions may be needed for very large nodules.\n\nFollow-up involves periodic ultrasound scans to monitor the shrinkage. Long-term studies show sustained results with very low recurrence rates. Thyroid function is preserved in the vast majority of patients, avoiding the need for daily hormone replacement that comes with surgical removal.`
      },
    ]
  },
  "dvt-peripheral-vascular": {
    title: "Deep Vein Thrombosis & Peripheral Artery Disease",
    hero: IMG.blog5, cat: "Vascular Health", date: "December 10, 2025", read: "9 min read",
    sections: [
      {
        heading: "Understanding DVT", img: IMG.vascular,
        text: `Deep Vein Thrombosis (DVT) occurs when a blood clot forms in a deep vein, usually in the legs. It's a serious condition because the clot can break loose and travel to the lungs, causing a potentially life-threatening pulmonary embolism.\n\nDVT affects an estimated 1 in 1000 people annually. Risk factors include prolonged immobility (long flights, bed rest after surgery), recent surgery, cancer, pregnancy, obesity, smoking, and certain genetic conditions. With increasing sedentary lifestyles, DVT is being seen in younger populations as well.`
      },
      {
        heading: "DVT Warning Signs", img: null,
        text: `DVT symptoms often affect one leg and include swelling that comes on suddenly, pain or tenderness (especially in the calf), warmth in the affected area, redness or discolouration of the skin, and visible surface veins.\n\nHowever, about half of DVT cases have no obvious symptoms. If you experience sudden leg swelling or calf pain — especially after prolonged sitting or recent surgery — seek medical attention immediately. An ultrasound can diagnose DVT quickly and accurately.`
      },
      {
        heading: "Peripheral Artery Disease", img: null,
        text: `Peripheral Artery Disease (PAD) is a condition where arteries supplying blood to the legs become narrowed or blocked by fatty deposits (atherosclerosis). This reduces blood flow, causing symptoms like leg pain while walking (claudication), numbness or weakness, cold feet, slow-healing wounds, and in severe cases, gangrene.\n\nPAD is particularly common in diabetics, smokers, and those with high blood pressure or cholesterol. It affects around 20% of people over 60 in India. PAD is also a warning sign of heart disease — if leg arteries are blocked, coronary arteries may be too.`
      },
      {
        heading: "Minimally Invasive Treatments", img: IMG.ir,
        text: `Interventional radiology offers effective treatments for both conditions. For DVT, catheter-directed thrombolysis involves threading a catheter to the clot and delivering clot-dissolving medication directly. Mechanical thrombectomy uses specialised devices to physically remove the clot. IVC filters can be placed to prevent clots from reaching the lungs.\n\nFor PAD, balloon angioplasty expands narrowed arteries using an inflatable balloon. Stenting places a small metal mesh tube to keep the artery open. Atherectomy removes plaque buildup from inside the artery.\n\nAll these procedures are performed through a small puncture, avoiding the need for bypass surgery.`
      },
      {
        heading: "Prevention Matters", img: null,
        text: `Both DVT and PAD are significantly preventable. Stay active — even simple calf exercises during long periods of sitting can help prevent DVT. Walk regularly to maintain healthy leg circulation. Manage diabetes, blood pressure, and cholesterol. Quit smoking — it's the single most important step for vascular health. Maintain a healthy weight, and stay hydrated during long travel.\n\nIf you have risk factors, discuss preventive strategies with your doctor. Early detection through simple tests like ankle-brachial index (ABI) for PAD or doppler ultrasound for DVT can catch these conditions before they become serious.`
      },
    ]
  },
  "varicocele-male-fertility": {
    title: "Varicocele & Male Fertility: What Men Should Know",
    hero: IMG.blog6, cat: "Men's Health", date: "December 1, 2025", read: "5 min read",
    sections: [
      {
        heading: "What is a Varicocele?", img: IMG.varicocele,
        text: `A varicocele is an enlargement of veins within the scrotum — similar to varicose veins in the legs. They are extremely common, affecting about 15-20% of all men and up to 40% of men being evaluated for infertility.\n\nVaricoceles develop when valves inside the testicular veins fail, causing blood to pool and the veins to enlarge. They are most common on the left side (about 85% of cases) and typically develop during puberty.`
      },
      {
        heading: "How Varicoceles Affect Fertility", img: null,
        text: `The pooling of warm blood around the testicles raises their temperature. Sperm production requires a temperature 1-2°C below body temperature — which is why the testes are located outside the body. When varicoceles raise scrotal temperature, it can reduce sperm count, damage sperm motility (movement), cause abnormal sperm shape (morphology), and reduce testosterone production.\n\nVaricoceles are the most common identifiable and correctable cause of male infertility. After treatment, sperm parameters improve in 60-70% of men, and natural pregnancy rates improve significantly.`
      },
      {
        heading: "Varicocele Embolisation: The Pinhole Solution", img: null,
        text: `Varicocele embolisation is a minimally invasive alternative to surgical repair. An interventional radiologist accesses the testicular vein through a small puncture in the wrist or neck. Using X-ray guidance, a catheter is navigated to the faulty vein, and tiny coils or a sclerosing agent is used to block the vein from the inside.\n\nBlood is then naturally rerouted through healthy veins. The entire procedure takes about 30-45 minutes under local anaesthesia. There is no incision in the groin or scrotum, and patients typically go home the same day.`
      },
      {
        heading: "Embolisation vs Surgery", img: null,
        text: `Compared to surgical varicocelectomy, embolisation offers several advantages. There is no groin incision — just a needle puncture in the wrist. Recovery is faster — most men return to work in 1-2 days versus 1-2 weeks after surgery. General anaesthesia is not needed. There is very low risk of hydrocele (fluid collection), which can occur in up to 10% of surgical cases. And both testicles can be treated in a single sitting if needed.\n\nSuccess rates are comparable between embolisation and surgery, with both achieving over 90% technical success.`
      },
      {
        heading: "When to Seek Treatment", img: null,
        text: `Not all varicoceles need treatment. You should consider treatment if you are experiencing infertility and semen analysis shows abnormal parameters, if there is testicular pain or heaviness, if the affected testicle is smaller than the other (testicular atrophy), or if you are an adolescent with a large varicocele and difference in testicular size.\n\nA simple physical examination and ultrasound can diagnose a varicocele. If you're struggling with fertility, getting evaluated for varicocele is an important step — it's one of the most treatable causes of male infertility.`
      },
    ]
  },
};

const TREATMENTS = {
  "varicose-veins": {
    title: "Varicose Veins Treatment", sub: "EVLA / Venaseal — Walk In, Walk Out",
    hero: IMG.varicose, icon: "🦵",
    overview: "Varicose veins are swollen, twisted veins visible just under the skin surface, most commonly in the legs. They occur when vein valves weaken, causing blood to pool. Left untreated, they can cause pain, skin changes, ulcers, and blood clots.",
    why: "Dr. Harsha uses Endovenous Laser Ablation (EVLA) and Venaseal (medical glue) — both pinhole procedures done under local anaesthesia. No cuts, no stitches, no general anaesthesia. Walk in, get treated, walk out the same day.",
    how: [
      "A tiny needle puncture is made, usually below the knee",
      "A thin laser fibre or glue catheter is guided into the damaged vein using ultrasound",
      "Laser energy seals the vein (EVLA) or medical adhesive closes it (Venaseal)",
      "Blood naturally reroutes through healthy veins",
      "The sealed vein is gradually absorbed by the body",
    ],
    recovery: "Walk immediately after. Return to work in 1-2 days. Compression stockings for 1-2 weeks (EVLA only). No stockings needed with Venaseal. Avoid heavy exercise for 1 week.",
    stats: [{ v: "95%+", l: "Success Rate" }, { v: "30 min", l: "Procedure Time" }, { v: "1-2 days", l: "Recovery" }],
    suitable: "People with visible bulging veins, leg pain or heaviness, ankle swelling, skin discolouration, or venous ulcers. Also suitable for cosmetic concerns.",
  },
  "uterine-fibroid": {
    title: "Uterine Fibroid Embolisation", sub: "UFE — Preserve Your Uterus Without Surgery",
    hero: IMG.fibroid, icon: "🩺",
    overview: "Uterine fibroids are non-cancerous growths in the uterus affecting up to 70% of women. They can cause heavy bleeding, pelvic pain, frequent urination, and fertility issues. UFE is a proven non-surgical alternative to hysterectomy.",
    why: "Through a tiny wrist puncture, Dr. Harsha blocks the blood supply feeding the fibroids, causing them to shrink naturally over months. The uterus is completely preserved — no surgery, no organ removal.",
    how: [
      "A small puncture is made at the wrist (radial access)",
      "A catheter is navigated to the uterine arteries using X-ray guidance",
      "Tiny microspheres are injected to block blood flow to fibroids",
      "Fibroids shrink by 40-60% over 3-6 months",
      "Normal uterine tissue is unaffected due to alternative blood supply",
    ],
    recovery: "Overnight stay for pain management. Return to normal activities in 1-2 weeks (vs 6-8 weeks after hysterectomy). Symptom improvement within weeks. Full shrinkage over 3-6 months.",
    stats: [{ v: "90%+", l: "Symptom Relief" }, { v: "60-90 min", l: "Procedure Time" }, { v: "1-2 weeks", l: "Recovery" }],
    suitable: "Women with symptomatic fibroids causing heavy bleeding, pain, or pressure. Especially those wanting to avoid hysterectomy or preserve fertility.",
  },
  "thyroid-nodule": {
    title: "Thyroid Nodule Ablation", sub: "Radiofrequency Ablation — No Surgery, No Scar",
    hero: IMG.thyroid, icon: "🦋",
    overview: "Thyroid nodules are lumps in the thyroid gland, present in up to 50% of adults. While most are benign, some grow large enough to cause neck swelling, difficulty swallowing, or cosmetic concerns. RFA shrinks them without surgery.",
    why: "Dr. Harsha uses Radiofrequency Ablation (RFA) to heat and destroy nodule tissue through a needle inserted under ultrasound guidance. No surgical scar on the neck, and thyroid function is preserved — avoiding lifelong medication.",
    how: [
      "Ultrasound mapping of the nodule for precise planning",
      "Local anaesthesia is administered to the neck",
      "A thin RFA needle electrode is inserted into the nodule",
      "Radiofrequency energy heats and destroys the nodule tissue",
      "The treated tissue is gradually absorbed over weeks to months",
    ],
    recovery: "Go home within hours. Mild neck discomfort for 1-2 days. No visible scar. Resume normal activities next day. Nodule shrinks 50-80% over 6-12 months.",
    stats: [{ v: "50-80%", l: "Volume Reduction" }, { v: "20-40 min", l: "Procedure Time" }, { v: "1 day", l: "Recovery" }],
    suitable: "Patients with benign thyroid nodules causing symptoms or cosmetic concerns. Also suitable for recurrent thyroid cysts and patients who prefer to avoid surgery.",
  },
  "varicocele": {
    title: "Varicocele Embolisation", sub: "Non-Surgical Fertility-Preserving Treatment",
    hero: IMG.varicocele, icon: "👶",
    overview: "A varicocele is enlargement of veins within the scrotum, affecting 15-20% of men and up to 40% of infertile men. The raised scrotal temperature impairs sperm production, making it the most common treatable cause of male infertility.",
    why: "Dr. Harsha performs varicocele embolisation through a pinhole in the wrist — no groin incision. Tiny coils block the faulty vein from inside, and blood reroutes through healthy pathways. Faster recovery than surgery with comparable results.",
    how: [
      "A small puncture is made at the wrist or neck",
      "A catheter is guided to the testicular vein using X-ray",
      "Venography confirms the varicocele location",
      "Tiny coils or sclerosing agent block the faulty vein",
      "Blood naturally reroutes through healthy veins",
    ],
    recovery: "Go home same day. Return to desk work next day. Light exercise in 3-5 days. Full activity in 1 week. Sperm parameters improve in 3-6 months.",
    stats: [{ v: "90%+", l: "Success Rate" }, { v: "30-45 min", l: "Procedure Time" }, { v: "1-2 days", l: "Recovery" }],
    suitable: "Men with infertility and abnormal semen analysis, testicular pain, testicular size difference, or adolescents with large varicoceles.",
  },
  "peripheral-vascular": {
    title: "Peripheral Vascular Disease", sub: "Angioplasty & Stenting — Restore Blood Flow",
    hero: IMG.vascular, icon: "🫀",
    overview: "Peripheral Artery Disease (PAD) occurs when leg arteries narrow due to fatty deposits, reducing blood flow. It causes leg pain while walking, numbness, cold feet, and in severe cases, non-healing wounds and gangrene. It's a warning sign of heart disease.",
    why: "Dr. Harsha uses balloon angioplasty and stenting to open blocked leg arteries from the inside — avoiding bypass surgery. A small puncture gives access to treat blockages anywhere in the leg's arterial system.",
    how: [
      "A small puncture is made at the wrist or groin",
      "A catheter is navigated to the blocked artery",
      "Angiography maps the exact location and severity of blockage",
      "A balloon inflates to open the narrowed artery",
      "A stent (metal mesh) may be placed to keep the artery open",
    ],
    recovery: "Same-day or next-day discharge. Walk with improvement immediately. Gradual increase in walking distance over weeks. Regular follow-up with duplex ultrasound.",
    stats: [{ v: "85-95%", l: "Technical Success" }, { v: "1-2 hrs", l: "Procedure Time" }, { v: "1-2 days", l: "Recovery" }],
    suitable: "Patients with leg pain while walking (claudication), rest pain, non-healing foot wounds, or diabetic foot with poor circulation.",
  },
  "prostate-embolisation": {
    title: "Prostate Artery Embolisation", sub: "PAE — Shrink Your Prostate Without Surgery",
    hero: IMG.prostate, icon: "🔬",
    overview: "Benign Prostatic Hyperplasia (BPH) — an enlarged prostate — affects over 50% of men above 50. It causes frequent urination, weak stream, nighttime waking, and incomplete emptying. PAE offers a non-surgical alternative to TURP surgery.",
    why: "Through a tiny wrist puncture, Dr. Harsha blocks the small arteries feeding the prostate, causing it to shrink. No catheter placement, no hospital stay, no sexual side effects — which are common concerns with surgical options.",
    how: [
      "A small puncture is made at the wrist",
      "A micro-catheter is navigated to the prostate arteries",
      "Tiny microspheres block blood supply to the enlarged prostate",
      "Both sides are treated in a single sitting",
      "The prostate gradually shrinks over 3-6 months",
    ],
    recovery: "Go home same day or next morning. Resume normal activities in 2-3 days. Urinary symptoms improve within weeks. Full effect over 3-6 months.",
    stats: [{ v: "80-90%", l: "Symptom Relief" }, { v: "1-2 hrs", l: "Procedure Time" }, { v: "2-3 days", l: "Recovery" }],
    suitable: "Men with moderate-to-severe BPH symptoms not responding to medication. Those wanting to avoid TURP surgery or concerned about sexual side effects of surgery.",
  },
};



const PUBLICATIONS = [
  { title: "Neurointerventional Radiology Research", journal: "PGIMER, Chandigarh", year: "2022", type: "Research" },
  { title: "Vascular Interventional Radiology Procedures — Clinical Outcomes", journal: "AIIMS, Rishikesh", year: "2023", type: "Fellowship" },
  { title: "Awareness on Interventional Radiology — PinHole® Treatment", journal: "International Radiology Day (IDoR)", year: "2025", type: "Publication" },
  { title: "Complex Aortic Disease Management — Case Series", journal: "Sheffield Teaching Hospitals NHS", year: "2025", type: "Case Study" },
  { title: "Thyroid Artery Embolisation for Symptomatic Thyroid Swelling", journal: "Clinical Case Report", year: "2025", type: "Case Report" },
];

const MEDIA_LINKS = [
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/dr-harsha-m-t-35a225241/", icon: "in" },
  { platform: "SPARSH Profile", url: "https://www.sparshhospital.com/doctors/dr-harsha-m-t/", icon: "🏥" },
];

const TESTIMONIALS = [
  {
    name: "Ramesh K.", age: 58, condition: "Varicose Veins", rating: 5,
    text: "I had been suffering from painful varicose veins for 5 years. Dr. Harsha explained the laser procedure clearly and did it in just 30 minutes. I walked out of the hospital the same day. Highly recommend!"
  },
  {
    name: "Priya S.", age: 42, condition: "Uterine Fibroids", rating: 5,
    text: "I was told I needed a hysterectomy. Then I found Dr. Harsha who suggested UFE. The procedure saved my uterus and my heavy bleeding stopped within weeks. I am so grateful."
  },
  {
    name: "Vikram M.", age: 29, condition: "Varicocele", rating: 5,
    text: "We were struggling with fertility for 2 years. After varicocele embolisation by Dr. Harsha, my sperm count improved significantly in 3 months. The procedure was painless — just a small puncture on my wrist."
  },
  {
    name: "Suresh N.", age: 65, condition: "Enlarged Prostate", rating: 5,
    text: "Waking up 5-6 times at night was ruining my life. After PAE, I sleep through the night. No surgery, no catheter. Dr. Harsha is extremely skilled and patient in explaining everything."
  },
  {
    name: "Lakshmi R.", age: 48, condition: "Thyroid Nodule", rating: 5,
    text: "I had a visible lump in my neck that was growing. Dr. Harsha treated it with RFA — no surgery, no scar. The swelling has reduced significantly in just 3 months. Thank you, doctor!"
  },
  {
    name: "Anil P.", age: 52, condition: "Leg Artery Blockage", rating: 4,
    text: "I could barely walk 100 meters without severe calf pain. Dr. Harsha performed angioplasty through my wrist. Now I walk 2 km daily without any pain. Life-changing procedure."
  },
];

const LOCATIONS = [
  {
    name: "SPARSH Hospital, Infantry Road", address: "No. 29, Infantry Road, Tasker Town, Bengaluru - 560001", phone: "080 4969 4969", primary: true,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8252551!2d77.6069!3d12.9833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU5JzAwLjAiTiA3N8KwMzYnMjUuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
  },
  {
    name: "SPARSH Hospital, Yelahanka", address: "No. 146/1, Bellary Road, Yelahanka, Bengaluru - 560064", phone: "080 4969 4969", primary: false,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5!2d77.5969!3d13.1033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA2JzEyLjAiTiA3N8KwMzUnNDguMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
  },
];







const INSURANCE = [
  "Star Health", "HDFC Ergo", "ICICI Lombard", "Bajaj Allianz", "New India Assurance",
  "Max Bupa", "Religare", "Apollo Munich", "Tata AIG", "Care Health",
  "United India", "National Insurance", "Oriental Insurance", "Niva Bupa", "ManipalCigna"
];

const GALLERY = [
  { img: IMG.ir, caption: "State-of-the-art Cath Lab" },
  { img: IMG.about, caption: "Modern Facilities" },
  { img: IMG.vascular, caption: "Vascular Procedures" },
  { img: IMG.liver, caption: "Interventional Oncology" },
];

const AWARDS = [
  { icon: "🏆", title: "EBIR Certified", desc: "European Board of Interventional Radiology — International gold standard certification" },
  { icon: "🥇", title: "AIR #1 — AIIMS Fellowship", desc: "Topped the All India entrance exam for Vascular & Interventional Radiology fellowship" },
  { icon: "🎓", title: "PGIMER Top Rank", desc: "Secured top rank in MD Radiodiagnosis entrance at PGIMER Chandigarh" },
  { icon: "📜", title: "EDiR Certified", desc: "European Diploma in Radiology — demonstrating comprehensive diagnostic expertise" },
  { icon: "🏥", title: "AIIMS & PGIMER Trained", desc: "Fellowship and residency at India's two most prestigious medical institutions" },
  { icon: "📚", title: "Research Publications", desc: "Contributed to multiple peer-reviewed publications in interventional radiology" },
];

const BEFORE_AFTER = [
  { condition: "Varicose Veins", desc: "Bulging, painful veins resolved with laser ablation", before: "Visible twisted veins, leg heaviness, skin discolouration", after: "Smooth legs, no pain, normal skin colour restored" },
  { condition: "Thyroid Nodule", desc: "Large neck swelling reduced with RFA", before: "Visible 4cm nodule causing neck bulge and discomfort", after: "70% volume reduction, no visible swelling, thyroid preserved" },
  { condition: "Uterine Fibroids", desc: "Heavy bleeding stopped after UFE", before: "10cm fibroid, severe bleeding, anaemia requiring transfusions", after: "Fibroid shrunk 60%, normal periods, haemoglobin normalized" },
];

const FAQS = [
  { q: "What is Interventional Radiology?", a: "Interventional Radiology (IR) is a medical specialty that uses advanced imaging (X-ray, ultrasound, CT) to guide minimally invasive treatments. Instead of open surgery, IR doctors treat conditions through pinhole-sized punctures — meaning less pain, faster recovery, and no scars." },
  { q: "Is the procedure painful?", a: "Most IR procedures are done under local anaesthesia with mild sedation. Patients typically feel minimal discomfort — far less than traditional surgery. Many patients describe it as similar to getting a blood test." },
  { q: "How long is the recovery?", a: "Recovery is significantly faster than surgery. For most procedures like varicose vein treatment or varicocele embolisation, patients can walk the same day and return to normal activities within 1-3 days." },
  { q: "Will there be any scars?", a: "No visible scars. IR procedures are done through a needle puncture (2-3mm) — smaller than a pen tip. There are no surgical cuts and no stitches needed." },
  { q: "Is this covered by insurance?", a: "Yes, most IR procedures are covered under health insurance policies. We recommend checking with your insurance provider. Our team can help you with documentation." },
  { q: "How is this different from regular surgery?", a: "Traditional surgery requires large incisions, general anaesthesia, and several days of hospital stay. IR procedures use a pinhole entry point, local anaesthesia, and most patients go home the same day." },
];

const WHY = [
  { n: "01", t: "Elite Training", d: "Trained at India's top institutions — PGIMER Chandigarh and AIIMS — and topped the national VIR fellowship exam" },
  { n: "02", t: "European Board Certified", d: "One of few Indian IR specialists with EBIR certification — the gold standard in interventional radiology worldwide" },
  { n: "03", t: "Pinhole Expertise", d: "Specialises in replacing complex surgeries with minimally invasive pinhole procedures across all vascular conditions" },
  { n: "04", t: "Comprehensive Care", d: "Handles the full spectrum — from varicose veins and fibroids to liver tumours and peripheral vascular disease" },
];

const STEPS = [
  { s: "01", t: "Consultation", d: "Discuss your condition and explore options", i: "📋" },
  { s: "02", t: "Diagnosis", d: "Advanced imaging for precise planning", i: "🔍" },
  { s: "03", t: "Pinhole Procedure", d: "No cuts, no stitches, no general anaesthesia", i: "✨" },
  { s: "04", t: "Go Home", d: "Same-day or next-morning discharge", i: "🏠" },
];

/* ─── LOADING SCREEN ─── */
function LoadingScreen() {
  const [show, setShow] = useState(true);
  useEffect(() => { const t = setTimeout(() => setShow(false), 1800); return () => clearTimeout(t); }, []);
  if (!show) return null;
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999, background: "#071426",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      transition: "opacity 0.5s", opacity: show ? 1 : 0, pointerEvents: show ? "all" : "none",
    }}>
      <div style={{
        width: 60, height: 60, borderRadius: "50%",
        background: "linear-gradient(135deg, #0D9488, #14B8A6)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 26, fontWeight: 700, color: "#fff", fontFamily: "'Playfair Display', serif",
        animation: "pulse-load 1.5s ease-in-out infinite",
      }}>H</div>
      <div style={{ color: "#fff", fontSize: 16, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, marginTop: 16 }}>Dr. Harsha M T</div>
      <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, fontFamily: "'DM Sans', sans-serif", marginTop: 4 }}>Interventional Radiologist</div>
      <div style={{ marginTop: 24, width: 120, height: 2, background: "rgba(255,255,255,0.06)", borderRadius: 2, overflow: "hidden" }}>
        <div style={{ width: "100%", height: "100%", background: "linear-gradient(90deg, #0D9488, #14B8A6)", animation: "load-bar 1.5s ease-in-out", transformOrigin: "left" }} />
      </div>
    </div>
  );
}

/* ─── ADDITIONAL SVG ILLUSTRATIONS ─── */
function AngioplastyIllustration() {
  return (
    <svg viewBox="0 0 400 140" style={{ width: "100%", maxWidth: 400, margin: "0 auto", display: "block" }}>
      <text x="200" y="16" textAnchor="middle" fill="#5EEAD4" fontSize="10" fontFamily="DM Sans" fontWeight="600">BALLOON ANGIOPLASTY & STENTING</text>
      {/* Step 1: Blocked artery */}
      <rect x="10" y="40" width="110" height="70" rx="8" fill="rgba(239,68,68,0.06)" stroke="rgba(239,68,68,0.15)" />
      <text x="65" y="55" textAnchor="middle" fill="#EF4444" fontSize="8" fontFamily="DM Sans" fontWeight="600">BLOCKED</text>
      <rect x="25" y="62" width="80" height="16" rx="8" fill="rgba(239,68,68,0.15)" />
      <rect x="25" y="62" width="80" height="16" rx="8" fill="none" stroke="#EF4444" strokeWidth="1" />
      <rect x="50" y="62" width="30" height="16" rx="3" fill="rgba(239,68,68,0.4)" />
      <text x="65" y="95" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="DM Sans">Plaque buildup</text>

      {/* Arrow */}
      <text x="145" y="78" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="16">→</text>

      {/* Step 2: Balloon */}
      <rect x="155" y="40" width="110" height="70" rx="8" fill="rgba(245,158,11,0.06)" stroke="rgba(245,158,11,0.15)" />
      <text x="210" y="55" textAnchor="middle" fill="#F59E0B" fontSize="8" fontFamily="DM Sans" fontWeight="600">BALLOON</text>
      <rect x="170" y="62" width="80" height="16" rx="8" fill="rgba(245,158,11,0.1)" />
      <ellipse cx="210" cy="70" rx="18" ry="10" fill="rgba(245,158,11,0.25)" stroke="#F59E0B" strokeWidth="1" />
      <line x1="210" y1="60" x2="210" y2="80" stroke="#F59E0B" strokeWidth="1" strokeDasharray="2 2" />
      <text x="210" y="95" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="DM Sans">Inflating balloon</text>

      {/* Arrow */}
      <text x="290" y="78" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="16">→</text>

      {/* Step 3: Stented */}
      <rect x="300" y="40" width="95" height="70" rx="8" fill="rgba(13,148,136,0.06)" stroke="rgba(13,148,136,0.15)" />
      <text x="348" y="55" textAnchor="middle" fill="#14B8A6" fontSize="8" fontFamily="DM Sans" fontWeight="600">STENTED</text>
      <rect x="315" y="62" width="65" height="16" rx="8" fill="rgba(13,148,136,0.1)" />
      <rect x="315" y="62" width="65" height="16" rx="8" fill="none" stroke="#14B8A6" strokeWidth="1" strokeDasharray="3 2" />
      <text x="348" y="95" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="DM Sans">Open & supported</text>

      <text x="200" y="132" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="8" fontFamily="DM Sans">Blood flow fully restored through the stented artery</text>
    </svg>
  );
}

function DVTIllustration() {
  return (
    <svg viewBox="0 0 360 150" style={{ width: "100%", maxWidth: 360, margin: "0 auto", display: "block" }}>
      <text x="180" y="16" textAnchor="middle" fill="#5EEAD4" fontSize="10" fontFamily="DM Sans" fontWeight="600">DVT — CATHETER-DIRECTED TREATMENT</text>
      {/* Leg outline */}
      <path d="M80 35 L80 130" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="40" strokeLinecap="round" />
      <text x="80" y="140" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="8" fontFamily="DM Sans">LEG</text>
      {/* Deep vein */}
      <path d="M80 40 L80 125" fill="none" stroke="rgba(99,102,241,0.3)" strokeWidth="10" strokeLinecap="round" />
      {/* Clot */}
      <rect x="72" y="65" width="16" height="22" rx="4" fill="rgba(239,68,68,0.5)" stroke="#EF4444" strokeWidth="1" />
      <text x="80" y="60" textAnchor="middle" fill="#EF4444" fontSize="8" fontFamily="DM Sans" fontWeight="600">CLOT</text>

      {/* Arrow */}
      <text x="140" y="80" fill="rgba(255,255,255,0.2)" fontSize="20" fontFamily="DM Sans">→</text>

      {/* Treatment */}
      <path d="M220 40 L220 125" fill="none" stroke="rgba(99,102,241,0.3)" strokeWidth="10" strokeLinecap="round" />
      <path d="M220 40 L220 125" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="40" strokeLinecap="round" />
      {/* Catheter */}
      <line x1="220" y1="120" x2="220" y2="70" stroke="#14B8A6" strokeWidth="2" strokeDasharray="4 3" />
      <circle cx="220" cy="70" r="3" fill="#14B8A6" />
      {/* Dissolving clot */}
      <rect x="214" y="65" width="12" height="18" rx="3" fill="rgba(239,68,68,0.2)" stroke="rgba(239,68,68,0.3)" strokeWidth="1" strokeDasharray="2 2" />
      <text x="220" y="57" textAnchor="middle" fill="#14B8A6" fontSize="7" fontFamily="DM Sans" fontWeight="600">DISSOLVING</text>

      {/* Arrow */}
      <text x="275" y="80" fill="rgba(255,255,255,0.2)" fontSize="20" fontFamily="DM Sans">→</text>

      {/* Result */}
      <path d="M330 40 L330 125" fill="none" stroke="rgba(13,148,136,0.3)" strokeWidth="10" strokeLinecap="round" />
      <path d="M330 40 L330 125" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="40" strokeLinecap="round" />
      {/* Flow arrows */}
      <path d="M330 115 L330 50" fill="none" stroke="#14B8A6" strokeWidth="1.5" strokeDasharray="5 3" />
      <polygon points="326,55 330,45 334,55" fill="#14B8A6" />
      <text x="330" y="135" textAnchor="middle" fill="#14B8A6" fontSize="8" fontFamily="DM Sans" fontWeight="600">CLEAR</text>
    </svg>
  );
}

/* ─── SOCIAL PROOF BAR ─── */
function SocialProof() {
  return (
    <section style={{ background: "#FAFBFC", padding: "40px 0", borderBottom: "1px solid rgba(0,0,0,0.04)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: 32 }}>
          {[
            { icon: "⭐", val: "4.9/5", label: "Patient Rating" },
            { icon: "👥", val: "97%", label: "Recommended" },
            { icon: "🏥", val: "SPARSH", label: "Hospital Affiliation" },
            { icon: "🌍", val: "EBIR", label: "European Certified" },
          ].map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 22 }}>{s.icon}</span>
              <div>
                <div style={{ fontSize: 17, fontWeight: 700, color: "#071426", fontFamily: "'DM Sans', sans-serif", lineHeight: 1 }}>{s.val}</div>
                <div style={{ fontSize: 11, color: "rgba(7,20,38,0.45)", fontFamily: "'DM Sans', sans-serif" }}>{s.label}</div>
              </div>
              {i < 3 && <div style={{ width: 1, height: 32, background: "rgba(0,0,0,0.06)", marginLeft: 20 }} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── BEFORE / AFTER SECTION ─── */
function BeforeAfter() {
  return (
    <section style={{ background: "#FAFBFC", padding: "90px 0" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px" }}>
        <SectionHead light label="Results" title="Pinhole Treatment Outcomes" sub="What patients can expect from minimally invasive procedures" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {[
            { condition: "Varicose Veins", before: ["Bulging, painful veins", "Leg heaviness & swelling", "Skin discolouration", "Risk of venous ulcers"], after: ["Smooth, vein-free legs", "No pain or heaviness", "Normal skin colour returns", "Ulcer risk eliminated"], time: "Results visible in 2-4 weeks", icon: "🦵" },
            { condition: "Uterine Fibroids", before: ["Heavy, prolonged periods", "Pelvic pain & pressure", "Frequent urination", "Bloated abdomen"], after: ["Normal menstrual flow", "Pain-free daily life", "Normal bladder function", "Reduced abdominal size"], time: "Full effect over 3-6 months", icon: "🩺" },
            { condition: "Thyroid Nodule", before: ["Visible neck swelling", "Difficulty swallowing", "Cosmetic concern", "Growing nodule size"], after: ["Flat, normal neck", "Easy swallowing", "No scar whatsoever", "50-80% size reduction"], time: "Shrinkage over 6-12 months", icon: "🦋" },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div style={{ background: "#fff", borderRadius: 16, overflow: "hidden", border: "1px solid rgba(0,0,0,0.05)", boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}>
                <div style={{ padding: "20px 24px 16px", display: "flex", alignItems: "center", gap: 10, borderBottom: "1px solid rgba(0,0,0,0.04)" }}>
                  <span style={{ fontSize: 24 }}>{item.icon}</span>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "#071426", fontFamily: "'DM Sans', sans-serif" }}>{item.condition}</div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                  <div style={{ padding: "16px 18px", borderRight: "1px solid rgba(0,0,0,0.04)" }}>
                    <div style={{ fontSize: 10, fontWeight: 600, color: "#EF4444", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>Before</div>
                    {item.before.map((b, j) => (
                      <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 6, marginBottom: 6 }}>
                        <span style={{ color: "#EF4444", fontSize: 11, marginTop: 2, flexShrink: 0 }}>✕</span>
                        <span style={{ fontSize: 12, color: "rgba(7,20,38,0.55)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.4 }}>{b}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: "16px 18px" }}>
                    <div style={{ fontSize: 10, fontWeight: 600, color: "#0D9488", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>After</div>
                    {item.after.map((a, j) => (
                      <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 6, marginBottom: 6 }}>
                        <span style={{ color: "#0D9488", fontSize: 11, marginTop: 2, flexShrink: 0 }}>✓</span>
                        <span style={{ fontSize: 12, color: "rgba(7,20,38,0.6)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.4 }}>{a}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ padding: "10px 18px 14px", background: "rgba(13,148,136,0.03)", borderTop: "1px solid rgba(0,0,0,0.04)" }}>
                  <div style={{ fontSize: 11, color: "#0D9488", fontFamily: "'DM Sans', sans-serif", fontWeight: 500, textAlign: "center" }}>⏱ {item.time}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PUBLICATIONS & ACHIEVEMENTS ─── */
function Publications() {
  return (
    <section style={{ background: "linear-gradient(180deg, #071426, #0A1E3D)", padding: "80px 0" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
        <SectionHead label="Research" title="Achievements & Recognition" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 14 }}>
          {[
            { icon: "🏆", title: "National Rank #1", desc: "Topped the All-India AIIMS VIR Fellowship Entrance Examination" },
            { icon: "🏆", title: "PGIMER Top Rank", desc: "Secured top rank in the All-India entrance for MD Radiodiagnosis at PGIMER Chandigarh" },
            { icon: "🎓", title: "EBIR Certified", desc: "European Board of Interventional Radiology — internationally recognised gold standard" },
            { icon: "📄", title: "Peer-Reviewed Publications", desc: "Contributed to multiple peer-reviewed research publications in neurointerventional and vascular radiology" },
            { icon: "🌐", title: "International Experience", desc: "Trained and practiced across PGIMER, AIIMS, SPARSH Hospital, and Sheffield Teaching Hospitals NHS Trust (UK)" },
            { icon: "📢", title: "IR Awareness Advocate", desc: "Published educational content on International Radiology Day to build awareness of PinHole® treatments" },
          ].map((a, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: "22px 24px", display: "flex", gap: 14 }}>
                <span style={{ fontSize: 24, flexShrink: 0 }}>{a.icon}</span>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", fontFamily: "'DM Sans', sans-serif", marginBottom: 4 }}>{a.title}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6 }}>{a.desc}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── MEDICAL SVG ILLUSTRATIONS ─── */
function VeinIllustration({ type = "normal" }) {
  if (type === "varicose-comparison") {
    return (
      <svg viewBox="0 0 400 200" style={{ width: "100%", maxWidth: 400, margin: "0 auto", display: "block" }}>
        <defs>
          <linearGradient id="healthyVein" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="varicoseVein" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#581C87" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        {/* Healthy side */}
        <text x="100" y="20" textAnchor="middle" fill="#0D9488" fontSize="11" fontFamily="DM Sans" fontWeight="600">HEALTHY VEIN</text>
        <rect x="85" y="30" width="30" height="140" rx="15" fill="url(#healthyVein)" opacity="0.3" />
        <rect x="92" y="30" width="16" height="140" rx="8" fill="url(#healthyVein)" />
        {/* Valve arrows - healthy */}
        <path d="M92 70 L100 60 L108 70" fill="none" stroke="#fff" strokeWidth="2" />
        <path d="M92 110 L100 100 L108 110" fill="none" stroke="#fff" strokeWidth="2" />
        {/* Blood flow arrows */}
        <path d="M100 150 L100 40" fill="none" stroke="#10B981" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#arrowGreen)" />
        <text x="100" y="185" textAnchor="middle" fill="#10B981" fontSize="9" fontFamily="DM Sans">Normal Flow ↑</text>

        {/* Varicose side */}
        <text x="300" y="20" textAnchor="middle" fill="#EF4444" fontSize="11" fontFamily="DM Sans" fontWeight="600">VARICOSE VEIN</text>
        <path d="M300 30 Q290 55 305 80 Q315 105 295 130 Q285 155 300 170" fill="none" stroke="url(#varicoseVein)" strokeWidth="22" strokeLinecap="round" opacity="0.3" />
        <path d="M300 30 Q293 55 303 80 Q313 105 297 130 Q288 155 300 170" fill="none" stroke="url(#varicoseVein)" strokeWidth="10" strokeLinecap="round" />
        {/* Broken valves */}
        <line x1="293" y1="68" x2="307" y2="78" stroke="#EF4444" strokeWidth="2" />
        <line x1="293" y1="78" x2="307" y2="68" stroke="#EF4444" strokeWidth="2" />
        <line x1="296" y1="118" x2="310" y2="128" stroke="#EF4444" strokeWidth="2" />
        <line x1="296" y1="128" x2="310" y2="118" stroke="#EF4444" strokeWidth="2" />
        <text x="300" y="185" textAnchor="middle" fill="#EF4444" fontSize="9" fontFamily="DM Sans">Blood Pools ↓</text>

        {/* Center divider */}
        <line x1="200" y1="15" x2="200" y2="190" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />
        <text x="200" y="198" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="DM Sans">VS</text>
      </svg>
    );
  }
  if (type === "pinhole") {
    return (
      <svg viewBox="0 0 400 120" style={{ width: "100%", maxWidth: 400, margin: "0 auto", display: "block" }}>
        {/* Surgery incision */}
        <text x="100" y="16" textAnchor="middle" fill="#EF4444" fontSize="10" fontFamily="DM Sans" fontWeight="600">SURGERY: 5-15cm CUT</text>
        <rect x="40" y="30" width="120" height="50" rx="8" fill="rgba(239,68,68,0.08)" stroke="rgba(239,68,68,0.2)" />
        <line x1="55" y1="55" x2="145" y2="55" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
        <text x="100" y="100" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="DM Sans">Stitches Required</text>

        {/* VS */}
        <text x="200" y="58" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="11" fontFamily="DM Sans" fontWeight="700">VS</text>

        {/* Pinhole */}
        <text x="300" y="16" textAnchor="middle" fill="#14B8A6" fontSize="10" fontFamily="DM Sans" fontWeight="600">PINHOLE: 2-3mm</text>
        <rect x="240" y="30" width="120" height="50" rx="8" fill="rgba(13,148,136,0.08)" stroke="rgba(13,148,136,0.2)" />
        <circle cx="300" cy="55" r="3" fill="#14B8A6" />
        <text x="300" y="100" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="DM Sans">No Stitches Needed</text>
      </svg>
    );
  }
  if (type === "embolisation") {
    return (
      <svg viewBox="0 0 300 160" style={{ width: "100%", maxWidth: 300, margin: "0 auto", display: "block" }}>
        <defs>
          <linearGradient id="artery" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#EF4444" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#DC2626" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        <text x="150" y="16" textAnchor="middle" fill="#5EEAD4" fontSize="10" fontFamily="DM Sans" fontWeight="600">EMBOLISATION PROCEDURE</text>
        {/* Main artery */}
        <path d="M30 80 L270 80" fill="none" stroke="url(#artery)" strokeWidth="16" strokeLinecap="round" />
        {/* Branch to fibroid/tumor */}
        <path d="M150 80 L150 40" fill="none" stroke="#EF4444" strokeWidth="8" strokeLinecap="round" opacity="0.5" />
        {/* Tumor/fibroid circle */}
        <circle cx="150" cy="30" r="18" fill="rgba(239,68,68,0.15)" stroke="#EF4444" strokeWidth="1" />
        <text x="150" y="34" textAnchor="middle" fill="#EF4444" fontSize="8" fontFamily="DM Sans">Fibroid</text>
        {/* Catheter */}
        <path d="M30 80 L130 80" fill="none" stroke="#14B8A6" strokeWidth="2" strokeDasharray="5 3" />
        <circle cx="130" cy="80" r="4" fill="#14B8A6" />
        {/* Blocking particles */}
        <circle cx="150" cy="70" r="3" fill="#F59E0B" opacity="0.8" />
        <circle cx="145" cy="65" r="2.5" fill="#F59E0B" opacity="0.7" />
        <circle cx="155" cy="67" r="2" fill="#F59E0B" opacity="0.6" />
        {/* Labels */}
        <text x="60" y="105" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="DM Sans">← Catheter</text>
        <text x="150" y="120" textAnchor="middle" fill="#F59E0B" fontSize="8" fontFamily="DM Sans">Blocking particles</text>
        <text x="150" y="135" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="8" fontFamily="DM Sans">Blood supply cut off → fibroid shrinks</text>
      </svg>
    );
  }
  return null;
}

/* ─── HOOKS ─── */
function useInView(th = 0.12) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: th });
    o.observe(el);
    return () => o.disconnect();
  }, [th]);
  return [ref, v];
}

function useCounter(end, duration = 2000, start = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    const num = parseInt(end) || 0;
    if (num === 0) { setVal(end); return; }
    let startTime;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.floor(eased * num));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, end, duration]);
  return val;
}

function AnimatedStat({ value, label }) {
  const [ref, visible] = useInView(0.3);
  const numericPart = parseInt(value) || 0;
  const suffix = value.toString().replace(/[0-9]/g, "");
  const count = useCounter(numericPart, 2000, visible);
  return (
    <div ref={ref}>
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, fontWeight: 700, color: "#14B8A6", lineHeight: 1 }}>
        {numericPart > 0 ? count : value}{suffix}
      </div>
      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 4, letterSpacing: "0.05em", textTransform: "uppercase" }}>{label}</div>
    </div>
  );
}

/* ─── COMPONENTS ─── */
function FadeIn({ children, delay = 0, className = "", style = {} }) {
  const [ref, v] = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`, ...style,
    }}>{children}</div>
  );
}

function Navbar({ onNav }) {
  const [sc, setSc] = useState(false);
  const [mob, setMob] = useState(false);
  useEffect(() => {
    const h = () => setSc(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const go = (href) => { setMob(false); if (href.startsWith("#")) { onNav("home"); setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }), 100); } };
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, background: sc ? "rgba(7,20,38,0.95)" : "transparent", backdropFilter: sc ? "blur(16px)" : "none", borderBottom: sc ? "1px solid rgba(255,255,255,0.06)" : "none", transition: "all 0.4s", padding: sc ? "10px 0" : "18px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => { onNav("home"); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #0D9488, #14B8A6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 700, color: "#fff", fontFamily: "'Playfair Display', serif" }}>H</div>
          <div>
            <div style={{ color: "#fff", fontSize: 14, fontWeight: 600, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.2 }}>Dr. Harsha M T</div>
            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 9.5, fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.08em", textTransform: "uppercase" }}>Interventional Radiologist</div>
          </div>
        </div>
        <div className="desk-nav" style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {NAV.map(n => (<button key={n.href} onClick={() => go(n.href)} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.65)", fontSize: 13, fontFamily: "'DM Sans', sans-serif", cursor: "pointer", fontWeight: 500 }} onMouseEnter={e => e.target.style.color = "#14B8A6"} onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.65)"}>{n.label}</button>))}
          <button onClick={() => go("#contact")} style={{ background: "linear-gradient(135deg, #0D9488, #0F766E)", border: "none", color: "#fff", padding: "9px 20px", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>Book Appointment</button>
        </div>
        <button className="mob-btn" onClick={() => setMob(!mob)} style={{ display: "none", background: "none", border: "none", color: "#fff", fontSize: 24, cursor: "pointer" }}>{mob ? "✕" : "☰"}</button>
      </div>
      {mob && (
        <div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "rgba(7,20,38,0.98)", backdropFilter: "blur(20px)", padding: "16px 24px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          {NAV.map(n => (<button key={n.href} onClick={() => go(n.href)} style={{ display: "block", width: "100%", textAlign: "left", background: "none", border: "none", color: "rgba(255,255,255,0.8)", fontSize: 15, padding: "12px 0", fontFamily: "'DM Sans', sans-serif", cursor: "pointer", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>{n.label}</button>))}
          <button onClick={() => go("#contact")} style={{ marginTop: 12, width: "100%", background: "linear-gradient(135deg, #0D9488, #0F766E)", border: "none", color: "#fff", padding: "14px", borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>Book Appointment</button>
        </div>
      )}
    </nav>
  );
}

function SectionHead({ label, title, sub, light = false }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 52 }}>
      <FadeIn><div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 14 }}><div style={{ width: 24, height: 1, background: light ? "rgba(0,0,0,0.12)" : "rgba(13,148,136,0.4)" }} /><span style={{ fontSize: 11, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: light ? "#0D9488" : "#5EEAD4" }}>{label}</span><div style={{ width: 24, height: 1, background: light ? "rgba(0,0,0,0.12)" : "rgba(13,148,136,0.4)" }} /></div></FadeIn>
      <FadeIn delay={0.05}><h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3.8vw, 40px)", fontWeight: 700, color: light ? "#071426" : "#fff", lineHeight: 1.2, marginBottom: 10, letterSpacing: "-0.02em" }}>{title}</h2></FadeIn>
      {sub && <FadeIn delay={0.1}><p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: light ? "rgba(7,20,38,0.5)" : "rgba(255,255,255,0.5)", maxWidth: 540, margin: "0 auto", lineHeight: 1.6 }}>{sub}</p></FadeIn>}
    </div>
  );
}

function Hero() {
  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", background: "linear-gradient(165deg, #071426 0%, #0A1E3D 40%, #0C2440 70%, #071426 100%)" }}>
      <div style={{ position: "absolute", inset: 0, background: `url(${IMG.hero}) center/cover`, opacity: 0.06, pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "-20%", right: "-10%", width: "60vw", height: "60vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(13,148,136,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "120px 24px 80px", width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 48 }}>
          <div style={{ flex: "1 1 480px", minWidth: 280 }}>
            <FadeIn>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(13,148,136,0.1)", border: "1px solid rgba(13,148,136,0.2)", borderRadius: 100, padding: "6px 16px", marginBottom: 24 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#14B8A6" }} />
                <span style={{ color: "#5EEAD4", fontSize: 12, fontFamily: "'DM Sans', sans-serif", fontWeight: 500, letterSpacing: "0.04em" }}>Available for Appointments in Bengaluru</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.08}><h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(38px, 5vw, 64px)", fontWeight: 700, color: "#fff", lineHeight: 1.1, marginBottom: 6, letterSpacing: "-0.02em" }}>{DOC.name}</h1></FadeIn>
            <FadeIn delay={0.12}><p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(14px, 1.6vw, 16px)", color: "rgba(255,255,255,0.45)", marginBottom: 24, letterSpacing: "0.02em" }}>{DOC.title}</p></FadeIn>
            <FadeIn delay={0.16}><p style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(19px, 2.3vw, 26px)", color: "#5EEAD4", lineHeight: 1.3, marginBottom: 14, fontStyle: "italic" }}>{DOC.tagline}</p></FadeIn>
            <FadeIn delay={0.2}><p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(14px, 1.4vw, 15px)", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: 36, maxWidth: 500 }}>{DOC.sub}</p></FadeIn>
            <FadeIn delay={0.24}><div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <button onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })} style={{ background: "linear-gradient(135deg, #0D9488, #0F766E)", border: "none", color: "#fff", padding: "14px 32px", borderRadius: 10, fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", boxShadow: "0 4px 20px rgba(13,148,136,0.3)" }}>Book Appointment</button>
              <button onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.8)", padding: "14px 32px", borderRadius: 10, fontSize: 15, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>View Treatments</button>
            </div></FadeIn>
            <FadeIn delay={0.32}><div style={{ marginTop: 44, display: "flex", flexWrap: "wrap", gap: 32 }}>
              {[{ v: DOC.exp, l: "Years Experience" }, { v: DOC.procs, l: "Procedures" }, { v: DOC.certs, l: "Certifications" }].map((s, i) => (
                <AnimatedStat key={i} value={s.v} label={s.l} />
              ))}
            </div></FadeIn>
          </div>
          <FadeIn delay={0.15} className="hero-img-wrap">
            <div style={{ flex: "0 1 360px", position: "relative" }}>
              <div style={{ width: "100%", aspectRatio: "3/4", borderRadius: 20, overflow: "hidden", border: "1px solid rgba(13,148,136,0.15)" }}>
                <img src={DOC.photo} alt="Dr. Harsha M T" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ position: "absolute", bottom: -14, left: -14, right: -14, background: "rgba(7,20,38,0.92)", backdropFilter: "blur(12px)", border: "1px solid rgba(13,148,136,0.12)", borderRadius: 14, padding: "12px 18px" }}>
                <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 10, fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 5 }}>Qualifications</div>
                <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 12, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5 }}>{DOC.quals}</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function CredBar() {
  return (
    <section style={{ background: "#060F1F", borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "36px 24px" }}>
        <FadeIn><div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10 }}>
          {CREDS.map((c, i) => (
            <div key={i} style={{ flex: "1 1 200px", maxWidth: 270, padding: "16px 20px", borderRadius: 12, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, flexShrink: 0, background: "linear-gradient(135deg, rgba(13,148,136,0.15), rgba(13,148,136,0.05))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "#14B8A6", fontFamily: "'DM Sans', sans-serif" }}>{c.inst.slice(0, 2)}</div>
              <div><div style={{ color: "#fff", fontSize: 13, fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>{c.inst}</div><div style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, fontFamily: "'DM Sans', sans-serif" }}>{c.desc}</div></div>
            </div>
          ))}
        </div></FadeIn>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" style={{ background: "#FAFBFC", padding: "90px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <SectionHead light label="About" title="A Journey of Excellence" sub="From India's premier institutions to European board certification" />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 40 }}>
          <FadeIn delay={0.1} style={{ flex: "1 1 480px", minWidth: 280 }}>
            <div style={{ borderRadius: 16, overflow: "hidden", marginBottom: 20, maxHeight: 300, position: "relative" }}>
              <img src={IMG.about} alt="Medical facility" style={{ width: "100%", height: 300, objectFit: "cover", borderRadius: 16 }} />
              <div style={{ position: "absolute", bottom: 12, left: 12, display: "flex", alignItems: "center", gap: 8, background: "rgba(7,20,38,0.85)", backdropFilter: "blur(8px)", borderRadius: 10, padding: "8px 14px" }}>
                <img src={DOC.photo} alt={DOC.name} style={{ width: 36, height: 36, borderRadius: "50%", objectFit: "cover", border: "2px solid rgba(13,148,136,0.4)" }} />
                <div>
                  <div style={{ color: "#fff", fontSize: 12, fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>{DOC.name}</div>
                  <div style={{ color: "#5EEAD4", fontSize: 10, fontFamily: "'DM Sans', sans-serif" }}>SPARSH Hospital, Bengaluru</div>
                </div>
              </div>
            </div>
            {[
              "Dr. Harsha M T is a highly trained Vascular and Interventional Radiologist who specialises in replacing complex surgeries with minimally invasive, image-guided pinhole procedures. His approach means less pain, faster recovery, and no scars for patients.",
              "After completing his MBBS, Dr. Harsha pursued his MD in Radiodiagnosis at PGIMER Chandigarh — one of India's most prestigious medical institutions — where he secured a top rank in the national entrance exam. He then earned his Fellowship in Vascular and Interventional Radiology from AIIMS, topping the fellowship examination nationally.",
              "What sets Dr. Harsha apart is his international certification — the EBIR (European Board of Interventional Radiology) — making him one of the select few Indian interventional radiologists recognised at a European board level.",
            ].map((p, i) => <p key={i} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "rgba(7,20,38,0.65)", lineHeight: 1.8, marginBottom: 16 }}>{p}</p>)}
          </FadeIn>
          <FadeIn delay={0.2} style={{ flex: "1 1 320px", minWidth: 280 }}>
            <div style={{ background: "#fff", borderRadius: 16, padding: 28, boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 28px rgba(0,0,0,0.04)", border: "1px solid rgba(0,0,0,0.04)" }}>
              <div style={{ fontSize: 12, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0D9488", marginBottom: 22 }}>Education & Training</div>
              {[
                { y: "2018", t: "MBBS", p: "RGUHS" },
                { y: "2022", t: "MD Radiodiagnosis", p: "PGIMER, Chandigarh" },
                { y: "2023", t: "Fellowship VIR", p: "AIIMS, Rishikesh" },
                { y: "2024", t: "EBIR Certified", p: "European Board IR" },
                { y: "—", t: "EDiR", p: "European Diploma" },
                { y: "—", t: "DICRI", p: "Diplomate of ICRI" },
              ].map((it, i) => (
                <div key={i} style={{ display: "flex", gap: 14, marginBottom: i < 5 ? 16 : 0, paddingBottom: i < 5 ? 16 : 0, borderBottom: i < 5 ? "1px solid rgba(0,0,0,0.05)" : "none" }}>
                  <div style={{ width: 44, flexShrink: 0, fontSize: 12, fontWeight: 600, color: "#0D9488", fontFamily: "'DM Sans', sans-serif" }}>{it.y}</div>
                  <div><div style={{ fontSize: 13, fontWeight: 600, color: "#071426", fontFamily: "'DM Sans', sans-serif", marginBottom: 2 }}>{it.t}</div><div style={{ fontSize: 12, color: "rgba(7,20,38,0.45)", fontFamily: "'DM Sans', sans-serif" }}>{it.p}</div></div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 14, background: "linear-gradient(135deg, #071426, #0A1E3D)", borderRadius: 14, padding: "20px 24px", display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ fontSize: 28 }}>🏆</span>
              <div><div style={{ color: "#5EEAD4", fontSize: 13, fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>National Rank #1</div><div style={{ color: "rgba(255,255,255,0.45)", fontSize: 12, fontFamily: "'DM Sans', sans-serif" }}>AIIMS VIR Fellowship Exam</div></div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function IRSection() {
  return (
    <section style={{ background: "linear-gradient(180deg, #071426, #0A1E3D)", padding: "90px 0", overflow: "hidden", position: "relative" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        <SectionHead label="Understanding" title="What is Interventional Radiology?" sub="Treating diseases through pinhole-sized openings instead of surgery" />
        <FadeIn delay={0.1}>
          <div style={{ borderRadius: 16, overflow: "hidden", marginBottom: 24 }}>
            <img src={IMG.ir} alt="Interventional radiology procedure" style={{ width: "100%", height: 280, objectFit: "cover" }} />
          </div>
        </FadeIn>
        <FadeIn delay={0.12}>
          <div style={{ marginBottom: 28, padding: "24px 0" }}>
            <VeinIllustration type="pinhole" />
          </div>
        </FadeIn>
        <FadeIn delay={0.13}>
          <div style={{ marginBottom: 28, padding: "20px 0" }}>
            <VeinIllustration type="varicose-comparison" />
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 16 }}>
            <div style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.12)", borderRadius: 14, padding: 24 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#EF4444", fontFamily: "'DM Sans', sans-serif", marginBottom: 14, letterSpacing: "0.04em", textTransform: "uppercase" }}>Traditional Surgery</div>
              {["Large incisions (5-15 cm)", "General anaesthesia", "3-7 days hospital stay", "Weeks of recovery", "Visible scars"].map((t, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, color: "rgba(255,255,255,0.55)", fontSize: 13, fontFamily: "'DM Sans', sans-serif" }}><span style={{ color: "#EF4444", fontSize: 13 }}>✕</span> {t}</div>
              ))}
            </div>
            <div style={{ background: "rgba(13,148,136,0.08)", border: "1px solid rgba(13,148,136,0.2)", borderRadius: 14, padding: 24 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#14B8A6", fontFamily: "'DM Sans', sans-serif", marginBottom: 14, letterSpacing: "0.04em", textTransform: "uppercase" }}>Pinhole Procedure (IR)</div>
              {["Needle puncture (2-3 mm)", "Local anaesthesia", "Same-day discharge", "Days — not weeks", "No visible marks"].map((t, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, color: "rgba(255,255,255,0.7)", fontSize: 13, fontFamily: "'DM Sans', sans-serif" }}><span style={{ color: "#14B8A6", fontSize: 13 }}>✓</span> {t}</div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ServicesSection({ onTreatment }) {
  const treatmentIds = ["varicose-veins", "uterine-fibroid", "thyroid-nodule", "varicocele", "peripheral-vascular", "prostate-embolisation", null, null];
  return (
    <section id="services" style={{ background: "#FAFBFC", padding: "90px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <SectionHead light label="Treatments" title="Conditions & Procedures" sub="Modern, surgery-free treatments for a wide range of conditions" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: 14 }}>
          {SERVICES.map((s, i) => (
            <FadeIn key={i} delay={i * 0.04}>
              <div onClick={() => treatmentIds[i] && onTreatment?.(treatmentIds[i])} style={{ background: "#fff", borderRadius: 14, overflow: "hidden", height: "100%", border: s.hl ? "1px solid rgba(13,148,136,0.2)" : "1px solid rgba(0,0,0,0.04)", boxShadow: s.hl ? "0 4px 20px rgba(13,148,136,0.06)" : "0 1px 3px rgba(0,0,0,0.02)", transition: "transform 0.3s", cursor: treatmentIds[i] ? "pointer" : "default", position: "relative" }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"} onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
                <div style={{ height: 140, overflow: "hidden", position: "relative" }}>
                  <img src={s.img} alt={s.t} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  {s.hl && <div style={{ position: "absolute", top: 10, right: 10, background: "rgba(13,148,136,0.9)", color: "#fff", fontSize: 10, fontWeight: 600, padding: "3px 10px", borderRadius: 100, fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.03em", textTransform: "uppercase" }}>Most Common</div>}
                  <div style={{ position: "absolute", bottom: 10, left: 10, fontSize: 28, background: "rgba(7,20,38,0.6)", borderRadius: 10, width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(8px)" }}>{s.icon}</div>
                </div>
                <div style={{ padding: "18px 20px 22px" }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "#071426", fontFamily: "'DM Sans', sans-serif", marginBottom: 3, lineHeight: 1.3 }}>{s.t}</div>
                  <div style={{ fontSize: 11, color: "#0D9488", fontFamily: "'DM Sans', sans-serif", fontWeight: 500, marginBottom: 10, letterSpacing: "0.02em" }}>{s.sub}</div>
                  <div style={{ fontSize: 13, color: "rgba(7,20,38,0.55)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.65 }}>{s.d}</div>
                  {treatmentIds[i] && <div style={{ marginTop: 12, fontSize: 13, fontWeight: 600, color: "#0D9488", fontFamily: "'DM Sans', sans-serif" }}>Learn More →</div>}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <>
      {/* Procedure Visual Gallery Strip */}
      <section style={{ background: "#071426", padding: "48px 0", overflow: "hidden" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <span style={{ fontSize: 11, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#5EEAD4" }}>Our Procedures</span>
            </div>
            <div style={{ display: "flex", gap: 12, overflow: "hidden", justifyContent: "center", flexWrap: "wrap" }}>
              {[
                { img: IMG.varicose, label: "Varicose Veins" },
                { img: IMG.fibroid, label: "Fibroid Treatment" },
                { img: IMG.thyroid, label: "Thyroid Ablation" },
                { img: IMG.vascular, label: "Vascular Care" },
                { img: IMG.liver, label: "Liver Interventions" },
              ].map((p, i) => (
                <div key={i} style={{ position: "relative", borderRadius: 12, overflow: "hidden", flex: "0 0 200px", height: 130 }}>
                  <img src={p.img} alt={p.label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(7,20,38,0.85) 100%)" }} />
                  <div style={{ position: "absolute", bottom: 10, left: 12, right: 12, color: "#fff", fontSize: 11, fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>{p.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div style={{ marginTop: 32, padding: "20px 0" }}>
              <VeinIllustration type="embolisation" />
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="why" style={{ background: "linear-gradient(180deg, #071426, #0C2440)", padding: "90px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <SectionHead label="Differentiators" title="Why Choose Dr. Harsha?" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 14 }}>
            {WHY.map((w, i) => (
              <FadeIn key={i} delay={i * 0.06}><div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: 28, height: "100%" }}>
                <div style={{ fontSize: 32, fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "rgba(13,148,136,0.2)", marginBottom: 14, lineHeight: 1 }}>{w.n}</div>
                <div style={{ fontSize: 17, fontWeight: 700, color: "#fff", fontFamily: "'DM Sans', sans-serif", marginBottom: 8 }}>{w.t}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7 }}>{w.d}</div>
              </div></FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Journey() {
  return (
    <section style={{ background: "#FAFBFC", padding: "90px 0" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 24px" }}>
        <SectionHead light label="Your Visit" title="What to Expect" sub="A simple, patient-first process" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 14 }}>
          {STEPS.map((s, i) => (
            <FadeIn key={i} delay={i * 0.08}><div style={{ textAlign: "center", padding: "28px 16px", background: "#fff", borderRadius: 14, border: "1px solid rgba(0,0,0,0.04)" }}>
              <div style={{ fontSize: 32, marginBottom: 10 }}>{s.i}</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#0D9488", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.1em", marginBottom: 6 }}>STEP {s.s}</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#071426", fontFamily: "'DM Sans', sans-serif", marginBottom: 6 }}>{s.t}</div>
              <div style={{ fontSize: 12, color: "rgba(7,20,38,0.5)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5 }}>{s.d}</div>
            </div></FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogSection({ onBlog }) {
  return (
    <section id="blog" style={{ background: "linear-gradient(180deg, #071426, #0A1E3D)", padding: "90px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <SectionHead label="Health Blog" title="Learn About Your Condition" sub="Expert articles on vascular health, treatments, and patient education" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 18 }}>
          {BLOGS.map((b, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div onClick={() => onBlog(b.id)} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, overflow: "hidden", cursor: "pointer", transition: "border-color 0.3s, transform 0.3s", height: "100%" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(13,148,136,0.3)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                <div style={{ height: 180, overflow: "hidden" }}>
                  <img src={b.img} alt={b.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }} />
                </div>
                <div style={{ padding: "18px 20px 22px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                    <span style={{ fontSize: 10, fontWeight: 600, color: "#5EEAD4", fontFamily: "'DM Sans', sans-serif", background: "rgba(13,148,136,0.12)", padding: "3px 10px", borderRadius: 100, letterSpacing: "0.03em", textTransform: "uppercase" }}>{b.cat}</span>
                    <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif" }}>{b.read}</span>
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.35, marginBottom: 8 }}>{b.title}</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6 }}>{b.excerpt}</div>
                  <div style={{ marginTop: 14, fontSize: 13, fontWeight: 600, color: "#14B8A6", fontFamily: "'DM Sans', sans-serif" }}>Read Article →</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <section style={{ background: "linear-gradient(180deg, #0C2440, #071426)", padding: "90px 0" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
        <SectionHead label="Patient Stories" title="What Our Patients Say" sub="Real experiences from patients treated by Dr. Harsha" />
        <FadeIn>
          <div style={{ position: "relative" }}>
            {/* Active testimonial */}
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 18, padding: "36px 32px", minHeight: 200, transition: "all 0.4s" }}>
              <div style={{ display: "flex", marginBottom: 16 }}>
                {[...Array(TESTIMONIALS[active].rating)].map((_, i) => (
                  <span key={i} style={{ color: "#F59E0B", fontSize: 18 }}>★</span>
                ))}
              </div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: "rgba(255,255,255,0.75)", lineHeight: 1.8, marginBottom: 24, fontStyle: "italic" }}>
                "{TESTIMONIALS[active].text}"
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg, rgba(13,148,136,0.3), rgba(13,148,136,0.1))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 700, color: "#5EEAD4", fontFamily: "'DM Sans', sans-serif" }}>
                  {TESTIMONIALS[active].name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: "#fff", fontFamily: "'DM Sans', sans-serif" }}>{TESTIMONIALS[active].name}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif" }}>Age {TESTIMONIALS[active].age} • {TESTIMONIALS[active].condition}</div>
                </div>
              </div>
            </div>
            {/* Dots */}
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 24 }}>
              {TESTIMONIALS.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} style={{
                  width: active === i ? 24 : 8, height: 8, borderRadius: 4, border: "none", cursor: "pointer",
                  background: active === i ? "#14B8A6" : "rgba(255,255,255,0.15)", transition: "all 0.3s",
                }} />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" style={{ background: "#FAFBFC", padding: "90px 0" }}>
      <div style={{ maxWidth: 740, margin: "0 auto", padding: "0 24px" }}>
        <SectionHead light label="FAQ" title="Frequently Asked Questions" />
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {FAQS.map((f, i) => (
            <FadeIn key={i} delay={i * 0.04}><div style={{ background: "#fff", border: open === i ? "1px solid rgba(13,148,136,0.2)" : "1px solid rgba(0,0,0,0.05)", borderRadius: 12, overflow: "hidden", transition: "border-color 0.3s" }}>
              <button onClick={() => setOpen(open === i ? null : i)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 22px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: open === i ? "#0D9488" : "#071426", fontFamily: "'DM Sans', sans-serif", transition: "color 0.3s", paddingRight: 16 }}>{f.q}</span>
                <span style={{ fontSize: 18, color: "rgba(0,0,0,0.25)", transition: "transform 0.3s", transform: open === i ? "rotate(45deg)" : "rotate(0deg)", flexShrink: 0 }}>+</span>
              </button>
              <div style={{ maxHeight: open === i ? 260 : 0, overflow: "hidden", transition: "max-height 0.4s ease" }}>
                <div style={{ padding: "0 22px 18px", fontSize: 13, color: "rgba(7,20,38,0.6)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7 }}>{f.a}</div>
              </div>
            </div></FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" style={{ background: "linear-gradient(180deg, #071426, #0A1E3D)", padding: "90px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <SectionHead label="Get in Touch" title="Book a Consultation" sub="Take the first step towards a minimally invasive solution" />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
          <FadeIn delay={0.1} style={{ flex: "1 1 320px", minWidth: 260 }}>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 18, padding: 32, height: "100%" }}>
              <div style={{ fontSize: 11, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#5EEAD4", marginBottom: 24 }}>Contact Information</div>
              {[
                { i: "📍", l: "Location", v: DOC.loc },
                { i: "🕐", l: "Timings", v: DOC.time },
                { i: "📞", l: "Phone", v: DOC.phone },
                { i: "✉️", l: "Email", v: DOC.email },
                { i: "🏥", l: "Registration", v: `KMC — ${DOC.reg}` },
              ].map((c, i) => (
                <div key={i} style={{ display: "flex", gap: 12, marginBottom: 20 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, flexShrink: 0, background: "rgba(13,148,136,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>{c.i}</div>
                  <div><div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 3 }}>{c.l}</div><div style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5 }}>{c.v}</div></div>
                </div>
              ))}
              <a href={`https://wa.me/${DOC.wa}`} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "#25D366", color: "#fff", padding: "13px 20px", borderRadius: 10, textDecoration: "none", fontSize: 14, fontWeight: 600, fontFamily: "'DM Sans', sans-serif", marginTop: 8 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                Chat on WhatsApp
              </a>
              {/* Social Links */}
              <div style={{ marginTop: 16, display: "flex", gap: 10 }}>
                <a href="https://www.linkedin.com/in/dr-harsha-m-t-35a225241/" target="_blank" rel="noopener noreferrer" style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", transition: "background 0.2s" }} onMouseEnter={e => e.currentTarget.style.background = "rgba(13,148,136,0.15)"} onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.06)"}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(255,255,255,0.6)"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
                <a href="https://www.sparshhospital.com/doctors/dr-harsha-m-t/" target="_blank" rel="noopener noreferrer" style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", transition: "background 0.2s" }} onMouseEnter={e => e.currentTarget.style.background = "rgba(13,148,136,0.15)"} onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.06)"}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(255,255,255,0.6)"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" /></svg>
                </a>
              </div>
              {/* Google Maps */}
              <div style={{ marginTop: 16, borderRadius: 12, overflow: "hidden", border: "1px solid rgba(255,255,255,0.06)" }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9!2d77.59!3d12.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sSPARSH%20Hospital%20-%20Infantry%20Road!5e0!3m2!1sen!2sin!4v1706000000000!5m2!1sen!2sin" width="100%" height="160" style={{ border: 0, filter: "brightness(0.7) contrast(1.1) saturate(0.3)", borderRadius: 12 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="SPARSH Hospital Location" />
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} style={{ flex: "1 1 380px", minWidth: 280 }}>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 18, padding: 32 }}>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", fontFamily: "'DM Sans', sans-serif", marginBottom: 4 }}>Request an Appointment</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif", marginBottom: 24 }}>We'll get back to you shortly</div>
              <form onSubmit={e => { e.preventDefault(); alert("Thank you! We will contact you shortly."); }}>
                {[{ l: "Full Name", t: "text", p: "Enter your full name" }, { l: "Phone Number", t: "tel", p: "+91 XXXXX XXXXX" }, { l: "Email (optional)", t: "email", p: "your@email.com" }].map((f, i) => (
                  <div key={i} style={{ marginBottom: 16 }}><label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif", marginBottom: 5, letterSpacing: "0.03em" }}>{f.l}</label><input type={f.t} placeholder={f.p} required={i < 2} style={{ width: "100%", padding: "11px 14px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)", fontSize: 13, fontFamily: "'DM Sans', sans-serif", background: "rgba(255,255,255,0.04)", color: "#fff", boxSizing: "border-box", outline: "none" }} onFocus={e => e.target.style.borderColor = "#0D9488"} onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} /></div>
                ))}
                <div style={{ marginBottom: 16 }}><label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif", marginBottom: 5 }}>Condition</label><select style={{ width: "100%", padding: "11px 14px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)", fontSize: 13, fontFamily: "'DM Sans', sans-serif", background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.7)", boxSizing: "border-box" }}><option>Select a condition</option>{SERVICES.map(s => <option key={s.t}>{s.t}</option>)}<option>Other</option></select></div>
                <button type="submit" style={{ width: "100%", padding: "14px", borderRadius: 10, border: "none", background: "linear-gradient(135deg, #0D9488, #0F766E)", color: "#fff", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", boxShadow: "0 4px 16px rgba(13,148,136,0.3)" }}>Request Appointment</button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#050D1A", borderTop: "1px solid rgba(255,255,255,0.04)", padding: "44px 0 20px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 28, marginBottom: 36 }}>
          <div><div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}><div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, #0D9488, #14B8A6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: "#fff", fontFamily: "'Playfair Display', serif" }}>H</div><div style={{ color: "#fff", fontSize: 14, fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>Dr. Harsha M T</div></div><p style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, fontFamily: "'DM Sans', sans-serif", maxWidth: 300, lineHeight: 1.6 }}>Consultant Vascular & Interventional Radiologist. Minimally invasive pinhole procedures.</p></div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 40 }}>
            <div><div style={{ color: "rgba(255,255,255,0.25)", fontSize: 10, fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12, fontWeight: 600 }}>Quick Links</div>{NAV.map(n => <div key={n.href} style={{ color: "rgba(255,255,255,0.45)", fontSize: 12, fontFamily: "'DM Sans', sans-serif", marginBottom: 7, cursor: "pointer" }}>{n.label}</div>)}</div>
            <div><div style={{ color: "rgba(255,255,255,0.25)", fontSize: 10, fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12, fontWeight: 600 }}>Treatments</div>{["Varicose Veins", "Uterine Fibroids", "Thyroid Nodules", "Varicocele"].map(t => <div key={t} style={{ color: "rgba(255,255,255,0.45)", fontSize: 12, fontFamily: "'DM Sans', sans-serif", marginBottom: 7 }}>{t}</div>)}</div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.04)", paddingTop: 20, display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 10 }}>
          <div style={{ color: "rgba(255,255,255,0.2)", fontSize: 11, fontFamily: "'DM Sans', sans-serif" }}>© {new Date().getFullYear()} Dr. Harsha M T. All rights reserved.</div>
          <div style={{ color: "rgba(255,255,255,0.15)", fontSize: 10, fontFamily: "'DM Sans', sans-serif", maxWidth: 480, lineHeight: 1.5 }}>Disclaimer: Information on this website is for educational purposes only and does not constitute medical advice.</div>
        </div>
      </div>
    </footer>
  );
}

/* ─── TREATMENT DETAIL PAGE ─── */
function TreatmentPage({ id, onBack, onContact }) {
  const t = TREATMENTS[id];
  useEffect(() => { window.scrollTo(0, 0); }, []);
  if (!t) return <div style={{ padding: 100, textAlign: "center", color: "#fff", background: "#071426", minHeight: "100vh" }}>Treatment not found.</div>;

  return (
    <div style={{ background: "#FAFBFC", minHeight: "100vh" }}>
      <div style={{ height: 60 }} />
      {/* Hero */}
      <div style={{ position: "relative", height: 340, overflow: "hidden" }}>
        <img src={t.hero} alt={t.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(7,20,38,0.2) 0%, rgba(7,20,38,0.88) 100%)" }} />
        <div style={{ position: "absolute", bottom: 36, left: 0, right: 0, maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
          <span style={{ fontSize: 36, marginBottom: 8, display: "block" }}>{t.icon}</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: 6 }}>{t.title}</h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "#5EEAD4", fontWeight: 500 }}>{t.sub}</p>
        </div>
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 24px 80px" }}>
        <button onClick={onBack} style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "none", border: "1px solid rgba(0,0,0,0.1)", color: "rgba(7,20,38,0.6)", padding: "8px 16px", borderRadius: 8, fontSize: 13, fontFamily: "'DM Sans', sans-serif", cursor: "pointer", marginBottom: 36, fontWeight: 500 }}>← Back to Home</button>

        {/* Stats */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 40 }}>
          {t.stats.map((s, i) => (
            <div key={i} style={{ flex: "1 1 140px", background: "linear-gradient(135deg, #071426, #0A1E3D)", borderRadius: 14, padding: "20px 24px", textAlign: "center" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: "#14B8A6", lineHeight: 1 }}>{s.v}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.45)", marginTop: 6, letterSpacing: "0.04em", textTransform: "uppercase" }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Overview */}
        <div style={{ marginBottom: 36 }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#071426", marginBottom: 14 }}>The Condition</h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "rgba(7,20,38,0.65)", lineHeight: 1.8 }}>{t.overview}</p>
        </div>

        {/* Why IR */}
        <div style={{ marginBottom: 36, background: "rgba(13,148,136,0.04)", border: "1px solid rgba(13,148,136,0.1)", borderRadius: 14, padding: 28 }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#071426", marginBottom: 14 }}>Why Pinhole Treatment?</h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "rgba(7,20,38,0.65)", lineHeight: 1.8 }}>{t.why}</p>
        </div>

        {/* SVG illustration for specific treatments */}
        {id === "varicose-veins" && (
          <div style={{ background: "linear-gradient(135deg, #071426, #0A1E3D)", borderRadius: 14, padding: "28px 20px", marginBottom: 36 }}>
            <VeinIllustration type="varicose-comparison" />
          </div>
        )}
        {(id === "uterine-fibroid" || id === "prostate-embolisation") && (
          <div style={{ background: "linear-gradient(135deg, #071426, #0A1E3D)", borderRadius: 14, padding: "28px 20px", marginBottom: 36 }}>
            <VeinIllustration type="embolisation" />
          </div>
        )}

        {/* How it works */}
        <div style={{ marginBottom: 36 }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#071426", marginBottom: 18 }}>How The Procedure Works</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {t.how.map((step, i) => (
              <div key={i} style={{ display: "flex", gap: 16, padding: "16px 0", borderBottom: i < t.how.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none" }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, #0D9488, #0F766E)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 13, fontWeight: 700, fontFamily: "'DM Sans', sans-serif", flexShrink: 0 }}>{i + 1}</div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(7,20,38,0.65)", lineHeight: 1.7, paddingTop: 5 }}>{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pinhole illustration */}
        <div style={{ background: "linear-gradient(135deg, #071426, #0A1E3D)", borderRadius: 14, padding: "28px 20px", marginBottom: 36 }}>
          <VeinIllustration type="pinhole" />
        </div>

        {/* Recovery */}
        <div style={{ marginBottom: 36 }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#071426", marginBottom: 14 }}>Recovery & Aftercare</h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "rgba(7,20,38,0.65)", lineHeight: 1.8 }}>{t.recovery}</p>
        </div>

        {/* Who is suitable */}
        <div style={{ marginBottom: 36, background: "#fff", border: "1px solid rgba(0,0,0,0.06)", borderRadius: 14, padding: 28, boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#071426", marginBottom: 14 }}>Who Is This For?</h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "rgba(7,20,38,0.65)", lineHeight: 1.8 }}>{t.suitable}</p>
        </div>

        {/* CTA */}
        <div style={{ background: "linear-gradient(135deg, #071426, #0A1E3D)", borderRadius: 16, padding: 32, textAlign: "center" }}>
          <div style={{ fontSize: 20, fontWeight: 700, color: "#fff", fontFamily: "'DM Sans', sans-serif", marginBottom: 8 }}>Ready to Explore This Treatment?</div>
          <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif", marginBottom: 20 }}>Book a consultation to find out if this procedure is right for you.</div>
          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            <button onClick={onContact} style={{ background: "linear-gradient(135deg, #0D9488, #0F766E)", border: "none", color: "#fff", padding: "13px 28px", borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>Book Appointment</button>
            <a href={`https://wa.me/${DOC.wa}`} target="_blank" rel="noopener noreferrer" style={{ background: "#25D366", color: "#fff", padding: "13px 28px", borderRadius: 10, fontSize: 14, fontWeight: 600, fontFamily: "'DM Sans', sans-serif", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── BLOG PAGE ─── */
function BlogPage({ id, onBack }) {
  const blog = BLOG_CONTENT[id];
  useEffect(() => { window.scrollTo(0, 0); }, []);
  if (!blog) return <div style={{ padding: 100, textAlign: "center", color: "#fff", background: "#071426", minHeight: "100vh" }}>Blog not found.</div>;

  return (
    <div style={{ background: "#FAFBFC", minHeight: "100vh" }}>
      <div style={{ height: 60 }} />
      <div style={{ position: "relative", height: 380, overflow: "hidden" }}>
        <img src={blog.hero} alt={blog.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(7,20,38,0.3) 0%, rgba(7,20,38,0.85) 100%)" }} />
        <div style={{ position: "absolute", bottom: 40, left: 0, right: 0, maxWidth: 760, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <span style={{ fontSize: 10, fontWeight: 600, color: "#5EEAD4", fontFamily: "'DM Sans', sans-serif", background: "rgba(13,148,136,0.2)", padding: "3px 10px", borderRadius: 100, letterSpacing: "0.03em", textTransform: "uppercase" }}>{blog.cat}</span>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif" }}>{blog.date}</span>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif" }}>• {blog.read}</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 700, color: "#fff", lineHeight: 1.2, letterSpacing: "-0.02em" }}>{blog.title}</h1>
        </div>
      </div>

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "48px 24px 80px" }}>
        <button onClick={onBack} style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "none", border: "1px solid rgba(0,0,0,0.1)", color: "rgba(7,20,38,0.6)", padding: "8px 16px", borderRadius: 8, fontSize: 13, fontFamily: "'DM Sans', sans-serif", cursor: "pointer", marginBottom: 40, fontWeight: 500 }}>← Back to Home</button>

        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 36, paddingBottom: 24, borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
          <img src={DOC.photo} alt={DOC.name} style={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover" }} />
          <div><div style={{ fontSize: 14, fontWeight: 600, color: "#071426", fontFamily: "'DM Sans', sans-serif" }}>{DOC.name}</div><div style={{ fontSize: 12, color: "rgba(7,20,38,0.45)", fontFamily: "'DM Sans', sans-serif" }}>{DOC.title}</div></div>
        </div>

        {blog.sections.map((sec, i) => (
          <div key={i} style={{ marginBottom: 40 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: "#071426", marginBottom: 16, lineHeight: 1.3 }}>{sec.heading}</h2>
            {sec.img && <div style={{ borderRadius: 14, overflow: "hidden", marginBottom: 20 }}><img src={sec.img} alt={sec.heading} style={{ width: "100%", height: 260, objectFit: "cover" }} /></div>}
            {/* Inline SVG medical illustrations for specific blog sections */}
            {id === "varicose-veins-guide" && i === 0 && (
              <div style={{ background: "linear-gradient(135deg, #071426, #0A1E3D)", borderRadius: 14, padding: "28px 20px", marginBottom: 20 }}>
                <VeinIllustration type="varicose-comparison" />
              </div>
            )}
            {id === "varicose-veins-guide" && sec.heading.includes("Modern Treatment") && (
              <div style={{ background: "linear-gradient(135deg, #071426, #0A1E3D)", borderRadius: 14, padding: "28px 20px", marginBottom: 20 }}>
                <VeinIllustration type="pinhole" />
              </div>
            )}
            {id === "uterine-fibroid-treatment" && sec.heading.includes("UFE Procedure") && (
              <div style={{ background: "linear-gradient(135deg, #071426, #0A1E3D)", borderRadius: 14, padding: "28px 20px", marginBottom: 20 }}>
                <VeinIllustration type="embolisation" />
              </div>
            )}
            {id === "what-is-interventional-radiology" && sec.heading.includes("How Does It Work") && (
              <div style={{ background: "linear-gradient(135deg, #071426, #0A1E3D)", borderRadius: 14, padding: "28px 20px", marginBottom: 20 }}>
                <VeinIllustration type="pinhole" />
              </div>
            )}
            {sec.text.split("\n\n").map((p, j) => (
              <p key={j} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "rgba(7,20,38,0.65)", lineHeight: 1.85, marginBottom: 16 }}>{p}</p>
            ))}
          </div>
        ))}

        <div style={{ background: "linear-gradient(135deg, #071426, #0A1E3D)", borderRadius: 16, padding: 32, marginTop: 48, textAlign: "center" }}>
          <div style={{ fontSize: 20, fontWeight: 700, color: "#fff", fontFamily: "'DM Sans', sans-serif", marginBottom: 8 }}>Have Questions About Your Condition?</div>
          <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif", marginBottom: 20 }}>Book a consultation with Dr. Harsha M T to discuss minimally invasive treatment options.</div>
          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            <button onClick={onBack} style={{ background: "linear-gradient(135deg, #0D9488, #0F766E)", border: "none", color: "#fff", padding: "13px 28px", borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>Book Appointment</button>
            <a href={`https://wa.me/${DOC.wa}`} target="_blank" rel="noopener noreferrer" style={{ background: "#25D366", border: "none", color: "#fff", padding: "13px 28px", borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>WhatsApp Us</a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── WHATSAPP FAB ─── */
function WAB() {
  return (
    <a href={`https://wa.me/${DOC.wa}`} target="_blank" rel="noopener noreferrer" style={{ position: "fixed", bottom: 24, right: 24, zIndex: 999, width: 54, height: 54, borderRadius: "50%", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 20px rgba(37,211,102,0.4)", textDecoration: "none" }}>
      <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
    </a>
  );
}

/* ─── SCROLL TO TOP ─── */
function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const h = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  if (!show) return null;
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{
      position: "fixed", bottom: 90, right: 28, zIndex: 998, width: 42, height: 42, borderRadius: "50%",
      background: "rgba(7,20,38,0.8)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.1)",
      color: "#fff", fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
      transition: "opacity 0.3s, transform 0.3s", boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
    }}>↑</button>
  );
}

/* ─── APP ─── */
export default function App() {
  const [page, setPage] = useState("home");
  const [blogId, setBlogId] = useState(null);
  const [treatmentId, setTreatmentId] = useState(null);

  const goToBlog = (id) => { setBlogId(id); setTreatmentId(null); setPage("blog"); };
  const goToTreatment = (id) => { setTreatmentId(id); setBlogId(null); setPage("treatment"); };
  const goHome = () => { setPage("home"); setBlogId(null); setTreatmentId(null); setTimeout(() => document.querySelector("#blog")?.scrollIntoView({ behavior: "smooth" }), 100); };
  const goHomeTop = () => { setPage("home"); setBlogId(null); setTreatmentId(null); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const goHomeServices = () => { setPage("home"); setBlogId(null); setTreatmentId(null); setTimeout(() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" }), 100); };
  const goContact = () => { setPage("home"); setBlogId(null); setTreatmentId(null); setTimeout(() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }), 100); };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
        html{scroll-behavior:smooth}
        body{font-family:'DM Sans',sans-serif;-webkit-font-smoothing:antialiased;overflow-x:hidden}
        ::selection{background:rgba(13,148,136,0.3);color:#fff}
        @media(max-width:768px){.desk-nav{display:none!important}.mob-btn{display:block!important}.hero-img-wrap{display:none!important}}
        @media(min-width:769px){.mob-btn{display:none!important}}
      `}</style>
      <Navbar onNav={(p) => { if (p === "home") goHomeTop(); }} />
      {page === "home" ? (
        <>
          <Hero />
          <SocialProof />
          <CredBar />
          <About />
          <IRSection />
          <ServicesSection onTreatment={goToTreatment} />
          <AnatomyViewer3D />
          <BeforeAfter />
          <WhySection />
          <Journey />
          <Testimonials />
          <Publications />
          <BlogSection onBlog={goToBlog} />
          <FAQSection />
          <ContactSection />
          <Footer />
        </>
      ) : page === "treatment" ? (
        <TreatmentPage id={treatmentId} onBack={goHomeServices} onContact={goContact} />
      ) : (
        <BlogPage id={blogId} onBack={goHome} />
      )}
      <WAB />
      <ScrollTop />
    </>
  );
}
