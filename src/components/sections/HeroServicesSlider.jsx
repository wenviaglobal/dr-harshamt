
import React from 'react';
import { SERVICES } from '../../config/data';
import { ArrowRight } from 'lucide-react';
import '../../styles/HeroServicesSlider.css';

/**
 * HeroServicesSlider
 * 
 * Implements an infinite auto-scrolling spotlight slider with:
 * - CSS-driven marquee animation (3 sets of items for seamless loop)
 * - Glassmorphism card styling
 * - Focus-on-hover effect (spotlight blur on siblings)
 * - Pause on hover logic
 */
const HeroServicesSlider = ({ onTreatment }) => {
    // We triple the items to ensure the marquee always has enough content to scroll seamlessly
    const tripledServices = [...SERVICES, ...SERVICES, ...SERVICES];

    return (
        <section id="services-slider" className="hero-services-slider">
            <div className="slider-title-wrap">
                <h2 className="slider-title">Expert Minimally Invasive Services</h2>
                <p className="slider-subtitle">
                    Advanced interventional radiology treatments designed for faster recovery, minimal pain, and no large surgical scars.
                </p>
            </div>

            {/* Marquee area handles auto-scroll and hover interactions */}
            <div className="marquee-container">
                <div className="marquee-content">
                    {tripledServices.map((service, index) => (
                        <div 
                            key={`service-${service.id}-${index}`} 
                            className="service-card-wrapper"
                            onClick={() => onTreatment(service.id)}
                        >
                            <div className="service-card-v2">
                                {/* Large segment image */}
                                <div className="card-img-v2">
                                    <img src={service.img} alt={service.t} loading="lazy" />
                                    {service.hl && (
                                        <div className="card-badge-v2">Featured</div>
                                    )}
                                </div>

                                <div className="card-info-v2">
                                    {/* Bold title below image */}
                                    <h3 className="card-title-v2">{service.t}</h3>
                                    
                                    {/* Stats/Subtext at bottom */}
                                    <div className="card-sub-v2">
                                        <span>Minimally Invasive</span>
                                        <span>•</span>
                                        <span>{service.sub}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroServicesSlider;
