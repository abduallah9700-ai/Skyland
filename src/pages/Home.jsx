import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsz8i0WhN4SgX0WRF971qfvjhscUjKx6yb-8E1W591rHHiJ7JZRVP3vrQkBNJthTL7yfDZeDDf-ZiKFBsAvH7JIPWQTyULtr1lIWfbk3953gDhrkQkIxppmFpTVXuNsSmkqSgYJHe3PrqzPLOZFhkm_-MqGbeb_MSCL-8dnj1vCUrVz8tg5YpZIYEQluvdg8TkfFbBJ8bF8hkmOw2jhvkfalHN7xybFlU9l2Au0wj52uqIslRxMolFbAH5K5u8GnayMjyWxP9RH6o2" 
            alt="Hero Truck Image" 
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <div className="hero-text-wrapper">
            <h1 className="font-display-lg text-on-primary mb-md">
              Reliable Refrigerated Freight Solutions
            </h1>
            <p className="font-body-lg text-on-primary mb-xl opacity-90">
              Premium cold-chain transportation and logistics based in Green Bay, Wisconsin. Your cargo, our commitment.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary btn-hero">Contact Us</Link>
              <a href="tel:920-530-5147" className="btn btn-secondary btn-hero-alt">
                <span className="material-symbols-outlined">call</span>
                920-530-5147
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="about-section py-section">
        <div className="container grid md:grid-cols-2 gap-xl items-center">
          <div className="about-text">
            <span className="established-badge font-label-md">Established Excellence</span>
            <h2 className="font-headline-lg text-primary mb-md">Driven by Trust Since 2024</h2>
            <p className="font-body-lg text-on-surface-variant mb-lg">
              Founded in 2024, Skyland Express LLC is dedicated to excellence in refrigerated transport. We understand that temperature-sensitive cargo requires more than just a truck—it requires precision, monitoring, and an unwavering commitment to quality.
            </p>
            <div className="stats-row flex gap-lg">
              <div className="stat-item flex-col">
                <span className="font-headline-md text-primary">100%</span>
                <span className="font-label-md text-on-surface-variant">On-Time Delivery</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item flex-col">
                <span className="font-headline-md text-primary">24/7</span>
                <span className="font-label-md text-on-surface-variant">Real-time Monitoring</span>
              </div>
            </div>
          </div>
          <div className="about-image-wrapper relative">
            <div className="about-image-container">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB8Mtq9Pd10u4KwuaI4zYowSnQHTmW5Yec0JCDmHXX5q9k3u0RX6Hhtro0feko-14V2HSZkVztzS5SmZFhB4bXePRzN8S8qA6RyHU0jXZx8Cuc3W17ceXW55tdEwNHe4s7NekjVTqxBa8LzKyWAAXwB598R2MrGBZ67CsKsj9hFtnUQ4Jkctb4KyggIwdleZ7TidHFJK7cCZhzBFiH7o2xxAseExMU9_IihOtYnqSzyT3obH4uVFvZMab8RFOf2pZVdtDw8t9zjTXv" 
                alt="Logistics truck" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="about-badge absolute">
              <div className="flex items-center gap-sm">
                <div className="badge-icon bg-secondary-container">
                  <span className="material-symbols-outlined text-on-secondary-container">verified_user</span>
                </div>
                <div>
                  <p className="font-label-md text-primary">Certified Quality</p>
                  <p className="font-label-md text-on-surface-variant">Cold Chain Expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="services-section py-section">
        <div className="container">
          <div className="text-center mb-xl">
            <h2 className="font-headline-lg text-primary">Specialized Cold Chain Services</h2>
            <p className="font-body-md text-on-surface-variant mt-sm">Tailored logistics for your most sensitive shipments.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            {/* Reefer Freight */}
            <div className="service-card flex-col">
              <div className="service-icon-wrapper bg-secondary-fixed">
                <span className="material-symbols-outlined text-primary text-3xl">ac_unit</span>
              </div>
              <h3 className="font-headline-md text-primary mb-sm">Reefer Freight</h3>
              <p className="font-body-md text-on-surface-variant mb-md flex-grow">
                State-of-the-art temperature controlled trailers ensuring your perishable goods remain at the exact required temperature from dock to dock.
              </p>
              <Link to="/services" className="service-link font-label-md text-primary flex items-center">
                Learn More <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
              </Link>
            </div>
            {/* Long-Haul */}
            <div className="service-card flex-col">
              <div className="service-icon-wrapper bg-secondary-fixed">
                <span className="material-symbols-outlined text-primary text-3xl">distance</span>
              </div>
              <h3 className="font-headline-md text-primary mb-sm">Long-Haul</h3>
              <p className="font-body-md text-on-surface-variant mb-md flex-grow">
                Nationwide reach with a focus on transcontinental reliability. Our experienced drivers are specialized in maintaining cargo integrity over thousands of miles.
              </p>
              <Link to="/services" className="service-link font-label-md text-primary flex items-center">
                Learn More <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
              </Link>
            </div>
            {/* Cold Chain */}
            <div className="service-card flex-col">
              <div className="service-icon-wrapper bg-secondary-fixed">
                <span className="material-symbols-outlined text-primary text-3xl">hub</span>
              </div>
              <h3 className="font-headline-md text-primary mb-sm">Cold Chain</h3>
              <p className="font-body-md text-on-surface-variant mb-md flex-grow">
                Reliable refrigerated trucking based in Green Bay, WI. Delivering fresh freight safely and on time while growing to serve more customers nationwide.
              </p>
              <Link to="/services" className="service-link font-label-md text-primary flex items-center">
                Learn More <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Reliability */}
      <section className="trust-section py-section">
        <div className="container grid md:grid-cols-2 gap-xl items-center">
          <div className="trust-text">
            <h2 className="font-headline-lg mb-md">Unshakable Reliability</h2>
            <div className="trust-features flex-col gap-md">
              <div className="trust-feature flex gap-md">
                <span className="material-symbols-outlined text-secondary-fixed mt-1">shield</span>
                <div>
                  <h4 className="font-label-md mb-1">Modern Fleet & Safety</h4>
                  <p className="font-body-md text-on-primary-container">Our equipment is maintained to the highest industry standards to prevent delays and ensure the safest transport possible.</p>
                </div>
              </div>
              <div className="trust-feature flex gap-md">
                <span className="material-symbols-outlined text-secondary-fixed mt-1">schedule</span>
                <div>
                  <h4 className="font-label-md mb-1">Precision On-Time Delivery</h4>
                  <p className="font-body-md text-on-primary-container">We respect your schedule. Our logistics team provides precise tracking so you always know where your cargo is.</p>
                </div>
              </div>
              <div className="trust-feature flex gap-md">
                <span className="material-symbols-outlined text-secondary-fixed mt-1">thermometer</span>
                <div>
                  <h4 className="font-label-md mb-1">Constant Monitoring</h4>
                  <p className="font-body-md text-on-primary-container">Every trailer is equipped with telematics that provide real-time temperature data to our dispatch and your team.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="trust-stats grid grid-cols-2 gap-md">
            <div className="trust-stat-box bg-primary-container">
              <h4 className="font-display-lg text-secondary-fixed mb-2">99%</h4>
              <p className="font-label-md opacity-80">Safety Rating</p>
            </div>
            <div className="trust-stat-box bg-primary-container">
              <h4 className="font-display-lg text-secondary-fixed mb-2">24h</h4>
              <p className="font-label-md opacity-80">Support Availability</p>
            </div>
            <div className="trust-stat-box bg-primary-container col-span-2">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-headline-md text-secondary-fixed">Green Bay, WI</h4>
                  <p className="font-label-md opacity-80">Strategic Logistics Hub</p>
                </div>
                <span className="material-symbols-outlined text-4xl opacity-40">map</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="contact-preview-section py-section">
        <div className="container">
          <div className="contact-card flex justify-between items-center gap-lg">
            <div className="contact-card-text text-center md:text-left">
              <h2 className="font-headline-lg text-primary mb-2">Ready to ship with us?</h2>
              <p className="font-body-md text-on-surface-variant">Get a custom quote or talk to our dispatch team today.</p>
            </div>
            <div className="contact-card-actions flex gap-md">
              <a href="tel:920-530-5147" className="btn btn-primary">
                <span className="material-symbols-outlined">call</span>
                920-530-5147
              </a>
              <a href="mailto:info@skylandexpress.com" className="btn btn-surface">
                <span className="material-symbols-outlined">mail</span>
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
