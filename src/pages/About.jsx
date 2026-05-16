import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-bg">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlYHTIEFX8zQHwP8MCcxwdM-rjQRkadFcbMfAiuNFrHTy_NXMFjO5N37PeE0IF_nKHoVvjk8aVqjwDgFiaUo7xpN87X_VDPfaTVGt0aw8X0snk02JgDuliTd0TkQzBYFkeE9VRgbFPgL9_VjBtud4AXOia7h2BVkRwBuERAKIo6BYiXrNcq81C3wY0xjvf98grEAfZklKUqUZPhyv-YDK2ywqInbmiz8eNdImdbhoq0rg1SmxECLAwRCB1EjV6SCPQqzcm8_3ecZuk" 
            alt="Logistics and Transport" 
            className="hero-image brightness-50"
          />
        </div>
        <div className="container hero-content text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display-lg text-on-primary mb-md">About Skyland Express LLC</h1>
            <p className="font-body-lg text-secondary-fixed">Excellence in Temperature-Controlled Logistics</p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="about-content-section py-section">
        <div className="container grid lg:grid-cols-12 gap-xl items-start">
          {/* Left: Foundational Info */}
          <div className="lg:col-span-7 flex-col gap-xl">
            <div className="journey-card bg-surface-container-low border border-outline-variant p-xl shadow-sm">
              <h2 className="font-headline-lg text-primary mb-md">Our Journey</h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                Founded in 2024 in Green Bay, Wisconsin, Skyland Express LLC was born from a vision of precision and unshakable trust on the open road. We recognize that in the cold chain industry, every minute and every degree matters.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-lg mt-xl">
              <div className="feature-card bg-primary-container p-lg text-on-primary-container border-primary">
                <span className="material-symbols-outlined text-secondary-fixed text-4xl mb-sm">ac_unit</span>
                <h3 className="font-headline-md text-on-primary mb-xs">Freshness Guaranteed</h3>
                <p className="font-body-md opacity-80">State-of-the-art refrigerated units keeping cargo at precise temperatures.</p>
              </div>
              <div className="feature-card bg-surface-container-highest p-lg border-outline-variant">
                <span className="material-symbols-outlined text-primary text-4xl mb-sm">location_on</span>
                <h3 className="font-headline-md text-primary mb-xs">Green Bay Roots</h3>
                <p className="font-body-md text-on-surface-variant">Deeply rooted in the Wisconsin logistics hub, serving the nation.</p>
              </div>
            </div>
          </div>

          {/* Right: Mission & Identity */}
          <div className="lg:col-span-5 h-full">
            <div className="mission-card bg-surface-container-lowest border border-outline-variant p-xl shadow-sm h-full">
              <div className="flex items-center gap-md mb-lg">
                <div className="mission-line bg-secondary"></div>
                <span className="font-label-md text-secondary tracking-widest uppercase">Our Mission</span>
              </div>
              <p className="font-headline-md text-primary italic leading-relaxed mb-xl">
                "To provide the most reliable and professional refrigerated trucking services, ensuring every load arrives fresh and on time."
              </p>
              <div className="core-values">
                <h4 className="font-label-md text-primary mb-md">Core Values</h4>
                <ul className="flex-col gap-sm">
                  <li className="flex items-center gap-sm">
                    <span className="material-symbols-outlined text-secondary">check_circle</span>
                    <span className="font-body-md">Reliability in every mile</span>
                  </li>
                  <li className="flex items-center gap-sm">
                    <span className="material-symbols-outlined text-secondary">check_circle</span>
                    <span className="font-body-md">Professionalism at every dock</span>
                  </li>
                  <li className="flex items-center gap-sm">
                    <span className="material-symbols-outlined text-secondary">check_circle</span>
                    <span className="font-body-md">Long-term Partnerships built on trust</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="expertise-section py-section bg-primary-container text-on-primary-container">
        <div className="container flex-col lg:flex-row items-center gap-xl">
          <div className="lg:w-half w-full">
            <h2 className="font-headline-lg text-on-primary mb-md">Cold-Chain Expertise & Safety</h2>
            <p className="font-body-lg opacity-80 mb-lg">
              Safety is not just a policy; it's our culture. Our fleet is equipped with advanced telematics and temperature monitoring systems that provide real-time data to our dispatchers and clients alike.
            </p>
            <div className="grid grid-cols-2 gap-md">
              <div className="flex-col">
                <span className="font-display-lg text-secondary-fixed">100%</span>
                <span className="font-label-md">On-Time Performance</span>
              </div>
              <div className="flex-col">
                <span className="font-display-lg text-secondary-fixed">24/7</span>
                <span className="font-label-md">Active Monitoring</span>
              </div>
            </div>
          </div>
          <div className="lg:w-half w-full">
            <div className="expertise-image-wrapper">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC60VxKc152Y_5Wz5zvNUAFNqpKMGdQoJWpKgtEwBIit_aAGNrFg2FE6Q36HqKKFk6RUoTfiPf1RN6gNb6a8hXZWCWLTv7P2DWUAZDUnPUX535k5x71_qK4pgc0mt2oHvKzayHa5ZalZl2mncJTFknKczkR28hPECMI0sPu8xwykKDbF6bmaFjOrDhsgnSpMJhItmcwVux3tdChQMYTCAiRvGcpKsFz3oBzO9cUDc_0So-Xc67NQBVFRNlV4ADXUZcCTy6JecrzJnFb" 
                alt="Warehouse Logistics" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section text-center">
        <div className="container">
          <h2 className="font-headline-lg text-primary mb-md">Partner with Excellence</h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-xl">
            Looking for a logistics partner that values your cargo as much as you do? Let's discuss your shipping needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-md">
            <Link to="/contact" className="btn btn-primary shadow-lg">Get a Quote</Link>
            <Link to="/services" className="btn btn-outline">Our Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
