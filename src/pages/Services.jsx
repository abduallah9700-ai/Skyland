import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-bg">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB356aQJFCTwEh2k1I4k_7tMbT_ScH1Ni16Fjrv9pFp55J69lBDWw_SNh9Dz732r9vDnt0BOv272q2Y4cmpsZPGe3SEAyP_3r3PvFjGeh52BffjOQcg0lqdizYyqxa9Ob2mbqIdhLDnluBfz02iKLM_CUzg1CIaIH4Vrv1xoNr6TYGtyo3d6cDhgLGzFYKop801XM2D-ZdnLZThQrkgoj3NLGFr3TjXO4hMm4TkIhwRWwWKIeekcqmVAr4QfREG1iUtCDvvjExaqTJ" 
            alt="Refrigerated Truck" 
            className="hero-image"
          />
        </div>
        <div className="container hero-content text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="font-display-lg text-on-primary mb-md">
              Our Refrigerated Transport Services
            </h1>
            <p className="font-body-lg text-on-primary-container">
              Delivering excellence in temperature-controlled logistics across the nation with precision, reliability, and modern fleet technology.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-list-section py-section">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-lg">
          {/* Service 1 */}
          <div className="service-detail-card flex-col">
            <div>
              <div className="service-icon-box bg-secondary-container">
                <span className="material-symbols-outlined text-on-secondary-container text-4xl">ac_unit</span>
              </div>
              <h3 className="font-headline-md text-primary mb-md">Refrigerated (Reefer) Freight</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                We specialize in precise temperature control for sensitive cargo. From pharmaceuticals to fresh produce, our late-model reefer units maintain exact climate conditions throughout the entire journey.
              </p>
            </div>
            <div className="service-detail-footer flex items-center">
              <span className="mr-2">State-of-the-art monitoring</span>
              <span className="material-symbols-outlined text-sm">check_circle</span>
            </div>
          </div>

          {/* Service 2 */}
          <div className="service-detail-card flex-col">
            <div>
              <div className="service-icon-box bg-secondary-container">
                <span className="material-symbols-outlined text-on-secondary-container text-4xl">distance</span>
              </div>
              <h3 className="font-headline-md text-primary mb-md">Long-Haul Trucking</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Reliable interstate transportation across the Midwest and beyond. Our experienced drivers and optimized routing ensure your freight crosses state lines safely and on schedule every time.
              </p>
            </div>
            <div className="service-detail-footer flex items-center">
              <span className="mr-2">Nationwide Network</span>
              <span className="material-symbols-outlined text-sm">public</span>
            </div>
          </div>

          {/* Service 3 */}
          <div className="service-detail-card flex-col">
            <div>
              <div className="service-icon-box bg-secondary-container">
                <span className="material-symbols-outlined text-on-secondary-container text-4xl">inventory_2</span>
              </div>
              <h3 className="font-headline-md text-primary mb-md">Cold Chain Logistics</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Seamless management of the entire temperature-controlled supply chain. We provide end-to-end visibility and handling procedures that guarantee the integrity of your perishables from pickup to final drop-off.
              </p>
            </div>
            <div className="service-detail-footer flex items-center">
              <span className="mr-2">End-to-end Integrity</span>
              <span className="material-symbols-outlined text-sm">security</span>
            </div>
          </div>

          {/* Service 4 */}
          <div className="service-detail-card flex-col">
            <div>
              <div className="service-icon-box bg-secondary-container">
                <span className="material-symbols-outlined text-on-secondary-container text-4xl">schedule</span>
              </div>
              <h3 className="font-headline-md text-primary mb-md">Time-Sensitive Loads</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Expedited delivery for perishables that can't wait. When time is critical, Skyland Express prioritizes your load with dual-driver teams or dedicated routing to meet even the tightest windows.
              </p>
            </div>
            <div className="service-detail-footer flex items-center">
              <span className="mr-2">Expedited Solutions</span>
              <span className="material-symbols-outlined text-sm">bolt</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta py-section text-center">
        <div className="container">
          <h2 className="font-headline-lg text-primary mb-lg">Ready to Move Your Cargo?</h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-xl">
            Get in touch with our dispatch team today for a custom quote tailored to your specific temperature requirements and timeline.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-md">
            <Link to="/contact" className="btn btn-primary shadow-lg">
              Get a Quote for Your Freight
            </Link>
            <a href="tel:920-530-5147" className="btn btn-outline">
              Contact Dispatch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
