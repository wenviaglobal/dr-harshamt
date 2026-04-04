import { useEffect } from 'react';

const SITE_NAME = "Dr. Harsha M T | Interventional Radiologist";
const DEFAULT_TITLE = "Dr. Harsha M T | Interventional Radiologist | Varicose Veins, Thyroid, Fibroid Treatment | Bengaluru";
const DEFAULT_DESC = "Dr. Harsha M T — Consultant Vascular & Interventional Radiologist in Bengaluru. Minimally invasive pinhole procedures for varicose veins, thyroid nodules, uterine fibroids, varicocele, enlarged prostate & more at SPARSH Hospital & Venuva Vascular Center.";
const DEFAULT_IMAGE = "https://www.sparshhospital.com/wp-content/uploads/2024/05/Dr.-Harsha-M-T.jpg";
const BASE_URL = "https://drharshamt.com";

function setMeta(name, content) {
    let el = document.querySelector(`meta[name="${name}"]`);
    if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
    }
    el.setAttribute('content', content);
}

function setProperty(property, content) {
    let el = document.querySelector(`meta[property="${property}"]`);
    if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
    }
    el.setAttribute('content', content);
}

function setCanonical(url) {
    let el = document.querySelector('link[rel="canonical"]');
    if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', 'canonical');
        document.head.appendChild(el);
    }
    el.setAttribute('href', url);
}

function setSchema(schema) {
    let el = document.querySelector('script[type="application/ld+json"]');
    if (el) el.remove();
    if (schema) {
        el = document.createElement('script');
        el.setAttribute('type', 'application/ld+json');
        el.text = JSON.stringify(schema);
        document.head.appendChild(el);
    }
}

function setPreload(url) {
    let el = document.querySelector('link[rel="preload"][as="image"]');
    if (el) el.remove();
    if (url) {
        el = document.createElement('link');
        el.setAttribute('rel', 'preload');
        el.setAttribute('as', 'image');
        el.setAttribute('href', url);
        el.setAttribute('fetchpriority', 'high');
        document.head.appendChild(el);
    }
}

export default function usePageSEO({
    title,
    description,
    path = '/',
    image,
    preload,
    type = 'website',
    schema,
} = {}) {
    useEffect(() => {
        const pageTitle = title || DEFAULT_TITLE;
        const pageDesc = description || DEFAULT_DESC;
        const pageImage = image || DEFAULT_IMAGE;
        const pageUrl = BASE_URL + path;

        // Title
        document.title = pageTitle;

        // Standard meta
        setMeta('description', pageDesc);

        // Open Graph
        setProperty('og:title', pageTitle);
        setProperty('og:description', pageDesc);
        setProperty('og:image', pageImage);
        setProperty('og:url', pageUrl);
        setProperty('og:type', type);
        setProperty('og:site_name', SITE_NAME);
        setProperty('og:locale', 'en_IN');

        // Twitter Card
        setMeta('twitter:card', 'summary_large_image');
        setMeta('twitter:title', pageTitle);
        setMeta('twitter:description', pageDesc);
        setMeta('twitter:image', pageImage);

        // Canonical
        setCanonical(pageUrl);

        // JSON-LD Schema
        setSchema(schema);

        // Preload Image
        setPreload(preload);

        return () => {
            setSchema(null);
            setPreload(null);
        };
    }, [title, description, path, image, preload, type, schema]);
}
