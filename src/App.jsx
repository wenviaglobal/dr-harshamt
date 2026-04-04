import { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import usePageSEO from './hooks/usePageSEO';
import Navbar from './components/common/Navbar';
import Hero from './components/sections/Hero';
import ConditionsCollage from './components/sections/ConditionsCollage';
import HeroServicesSlider from './components/sections/HeroServicesSlider';
import IRSection from './components/sections/IRSection';
import CredBar from './components/sections/CredBar';
import IRAdvantages from './components/sections/IRAdvantages';
const BeforeAfter = lazy(() => import('./components/sections/BeforeAfter'));
const AnatomyViewer3D = lazy(() => import('./components/common/AnatomyViewer3D'));
const Testimonials = lazy(() => import('./components/sections/Testimonials'));
const BlogSection = lazy(() => import('./components/sections/BlogSection'));
const FAQSection = lazy(() => import('./components/sections/FAQSection'));
const About = lazy(() => import('./components/sections/About'));
const ContactSection = lazy(() => import('./components/sections/ContactSection'));
import Footer from './components/common/Footer';
import WAB from './components/common/WAB';
import ScrollTop from './components/common/ScrollTop';
import TreatmentPage from './components/pages/TreatmentPage';
import BlogPage from './components/pages/BlogPage';
import { DOC, SERVICES } from './config/data';

/* ── Schema Markup ── */
const medicalSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": DOC.name,
    "image": DOC.photo,
    "description": DOC.sub,
    "url": "https://drharshamt.com",
    "telephone": DOC.phone,
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "SPARSH Hospital & Venuva Vascular Center",
        "addressLocality": "Bengaluru",
        "addressRegion": "KA",
        "postalCode": "560001",
        "addressCountry": "IN"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "12.9716",
        "longitude": "77.5946"
    },
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "20:00"
    },
    "sameAs": [
        "https://www.facebook.com/drharshamt",
        "https://www.instagram.com/drharshamt",
        "https://www.linkedin.com/in/drharshamt"
    ]
};

/* ── Parse initial URL on load ── */
function parseURL(pathname) {
    const parts = pathname.replace(/^\/+|\/+$/g, '').split('/');
    if (parts[0] === 'treatment' && parts[1]) return { page: 'treatment', id: parts[1] };
    if (parts[0] === 'blog' && parts[1]) return { page: 'blog', id: parts[1] };
    if (parts[0] === 'about') return { page: 'about', id: null };
    if (parts[0] === 'services') return { page: 'services', id: null };
    return { page: 'home', id: null };
}

function App() {
    const initial = parseURL(window.location.pathname);
    const [page, setPage] = useState(initial.page);
    const [blogId, setBlogId] = useState(initial.page === 'blog' ? initial.id : null);
    const [treatmentId, setTreatmentId] = useState(initial.page === 'treatment' ? initial.id : null);

    /* ── Handle browser back / forward ── */
    useEffect(() => {
        const onPopState = () => {
            const { page: p, id } = parseURL(window.location.pathname);
            setPage(p);
            setBlogId(p === 'blog' ? id : null);
            setTreatmentId(p === 'treatment' ? id : null);
        };
        window.addEventListener('popstate', onPopState);
        return () => window.removeEventListener('popstate', onPopState);
    }, []);

    /* ── Navigation helpers (update state + URL) ── */
    const goToBlog = useCallback((id) => {
        setBlogId(id);
        setTreatmentId(null);
        setPage("blog");
        window.history.pushState({}, '', `/blog/${id}`);
    }, []);

    const goToTreatment = useCallback((id) => {
        setTreatmentId(id);
        setBlogId(null);
        setPage("treatment");
        window.history.pushState({}, '', `/treatment/${id}`);
    }, []);

    const goHome = useCallback(() => {
        setPage("home");
        setBlogId(null);
        setTreatmentId(null);
        window.history.pushState({}, '', '/');
        setTimeout(() => document.querySelector("#blog")?.scrollIntoView({ behavior: "smooth" }), 100);
    }, []);

    const goHomeTop = useCallback(() => {
        setPage("home");
        setBlogId(null);
        setTreatmentId(null);
        window.history.pushState({}, '', '/');
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const goHomeServices = useCallback(() => {
        setPage("home");
        setBlogId(null);
        setTreatmentId(null);
        window.history.pushState({}, '', '/');
        setTimeout(() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" }), 100);
    }, []);

    const goContact = useCallback(() => {
        setPage("home");
        setBlogId(null);
        setTreatmentId(null);
        window.history.pushState({}, '', '/');
        setTimeout(() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }), 100);
    }, []);

    /* ── Dynamic SEO ── */
    const seoConfig = page === 'home' ? {
        title: DOC.name,
        description: DOC.sub,
        path: '/',
        preload: DOC.photo,
        schema: medicalSchema
    } : page === 'about' ? {
        title: "Dr Harsha M T | Interventional Radiologist in Bengaluru | Venuva Vascular Center",
        description: "Learn about Dr Harsha M T, a leading Interventional Radiologist in Bengaluru specializing in minimally invasive treatments for varicose veins, thyroid nodules, fibroids, and vascular conditions.",
        path: '/about'
    } : page === 'services' ? {
        title: "Interventional Radiology Treatments in Bengaluru | Dr Harsha M T",
        description: "Explore minimally invasive treatments offered by Dr Harsha M T in Bengaluru including varicose veins treatment, thyroid nodule ablation, uterine fibroid embolisation, and more.",
        path: '/services'
    } : undefined;

    usePageSEO(seoConfig);

    useEffect(() => {
        if (page === 'about') {
            setTimeout(() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }), 100);
        } else if (page === 'services') {
            setTimeout(() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" }), 100);
        }
    }, [page]);

    return (
        <>
            <Navbar onNav={(p) => {
                const { page: newPage, id } = parseURL("/" + p);
                setPage(newPage);
                setBlogId(newPage === 'blog' ? id : null);
                setTreatmentId(newPage === 'treatment' ? id : null);
                if (p === "home") window.scrollTo({ top: 0, behavior: "smooth" });
            }} />
            {page === "home" || page === "about" || page === "services" ? (
                <main>
                    <Hero />
                    <CredBar />
                    <ConditionsCollage onTreatment={goToTreatment} />
                    <HeroServicesSlider onTreatment={goToTreatment} />
                    <IRSection />
                    <IRAdvantages />
                    <Suspense fallback={<div style={{ height: 400, background: "#071426" }} />}>
                        <AnatomyViewer3D />
                    </Suspense>
                    <Suspense fallback={<div style={{ height: 600 }} />}>
                        <BeforeAfter />
                    </Suspense>
                    <Suspense fallback={<div style={{ height: 500 }} />}>
                        <Testimonials />
                    </Suspense>
                    <Suspense fallback={<div style={{ height: 600 }} />}>
                        <BlogSection onBlog={goToBlog} />
                    </Suspense>
                    <Suspense fallback={<div style={{ height: 400 }} />}>
                        <FAQSection />
                    </Suspense>
                    <Suspense fallback={<div style={{ height: 500 }} />}>
                        <About />
                    </Suspense>
                    <Suspense fallback={<div style={{ height: 400 }} />}>
                        <ContactSection />
                    </Suspense>
                    <Footer />
                </main>
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

export default App;
