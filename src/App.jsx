import { useState, useEffect, useCallback } from 'react';
import usePageSEO from './hooks/usePageSEO';
import Navbar from './components/common/Navbar';
import Hero from './components/sections/Hero';
import ConditionsCollage from './components/sections/ConditionsCollage';
import ServicesSection from './components/sections/ServicesSection';
import IRSection from './components/sections/IRSection';
import IRAdvantages from './components/sections/IRAdvantages';
import BeforeAfter from './components/sections/BeforeAfter';
import Testimonials from './components/sections/Testimonials';
import BlogSection from './components/sections/BlogSection';
import FAQSection from './components/sections/FAQSection';
import About from './components/sections/About';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/common/Footer';
import WAB from './components/common/WAB';
import ScrollTop from './components/common/ScrollTop';
import TreatmentPage from './components/pages/TreatmentPage';
import BlogPage from './components/pages/BlogPage';

/* ── Parse initial URL on load ── */
function parseURL(pathname) {
    const parts = pathname.replace(/^\/+|\/+$/g, '').split('/');
    if (parts[0] === 'treatment' && parts[1]) return { page: 'treatment', id: parts[1] };
    if (parts[0] === 'blog' && parts[1]) return { page: 'blog', id: parts[1] };
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

    /* ── Default SEO for home page ── */
    usePageSEO(page === 'home' ? { path: '/' } : undefined);

    return (
        <>
            <Navbar onNav={(p) => { if (p === "home") goHomeTop(); }} />
            {page === "home" ? (
                <main>
                    <Hero />
                    <ConditionsCollage onTreatment={goToTreatment} />
                    <ServicesSection onTreatment={goToTreatment} />
                    <IRSection />
                    <IRAdvantages />
                    <BeforeAfter />
                    <Testimonials />
                    <BlogSection onBlog={goToBlog} />
                    <FAQSection />
                    <About />
                    <ContactSection />
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
