import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page flex-grow">
      {/* Hero / Title Section */}
      <section className="contact-hero py-xl container text-center md:text-left">
        <h1 className="font-display-lg text-primary mb-sm">Get in Touch</h1>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto md:mx-0">
          We are here to support your temperature-controlled logistics needs. Reach out to our Green Bay team for reliable refrigerated trucking solutions.
        </p>
      </section>

      {/* Content Grid */}
      <section className="container pb-section">
        <div className="grid lg:grid-cols-12 gap-lg items-start">
          
          {/* Contact Cards Section */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-lg">
            {/* Dispatch Call Card */}
            <a href="tel:920-227-1701" className="call-card bg-secondary-container p-lg flex-col gap-sm">
              <div className="call-icon bg-primary-container text-secondary-fixed">
                <span className="material-symbols-outlined">support_agent</span>
              </div>
              <span className="font-label-md text-on-secondary-container">Dispatch: Jay</span>
              <span className="font-headline-lg text-primary hover-shift">920-227-1701</span>
              <p className="font-body-md text-on-secondary-container opacity-80 mt-2">Tap to call dispatch directly.</p>
            </a>

            {/* Company Call Card */}
            <a href="tel:920-530-5147" className="call-card bg-surface-container p-lg flex-col gap-sm">
              <div className="call-icon bg-primary text-on-primary">
                <span className="material-symbols-outlined">business</span>
              </div>
              <span className="font-label-md text-on-surface-variant">Company Line</span>
              <span className="font-headline-lg text-primary hover-shift">920-530-5147</span>
              <p className="font-body-md text-on-surface-variant opacity-80 mt-2">Tap to call our headquarters.</p>
            </a>
            
            <div className="grid md:grid-cols-2 gap-lg">
              {/* Email Card */}
              <a href="mailto:skylandexpressllc1@gmail.com" className="info-card bg-surface-container-low p-lg flex-col gap-sm hover-border">
                <div className="info-icon text-primary">
                  <span className="material-symbols-outlined text-32px">mail</span>
                </div>
                <span className="font-label-md text-on-surface-variant">Email Inquiry</span>
                <span className="font-body-md font-bold text-primary break-all">skylandexpressllc1@gmail.com</span>
              </a>

              {/* Location Card */}
              <div className="info-card bg-surface-container-low p-lg flex-col gap-sm">
                <div className="info-icon text-primary">
                  <span className="material-symbols-outlined text-32px">location_on</span>
                </div>
                <span className="font-label-md text-on-surface-variant">Headquarters</span>
                <span className="font-body-md font-bold text-primary">Green Bay, Wisconsin</span>
              </div>
            </div>

            {/* Logo Branding Canvas */}
            <div className="brand-canvas bg-primary-container relative">
              <div className="canvas-pattern absolute inset-0 opacity-10"></div>
              <img 
                src="/logo.png" 
                alt="Skyland Express LLC Logo" 
                className="relative z-10 max-h-48 drop-shadow"
              />
            </div>
          </div>

          {/* Inquiry Form Section */}
          <div className="lg:col-span-7 bg-white p-xl rounded-xl border border-outline-variant shadow-sm form-section">
            <div className="mb-lg">
              <h2 className="font-headline-lg text-primary">Send a Message</h2>
              <p className="font-body-md text-on-surface-variant mt-xs">Provide your details below and our team will get back to you shortly.</p>
            </div>
            
            <form className="contact-form space-y-md">
              <div className="grid md:grid-cols-2 gap-md">
                <div className="form-group space-y-xs">
                  <label htmlFor="name" className="font-label-md text-primary">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="John Doe" className="form-input" />
                </div>
                <div className="form-group space-y-xs">
                  <label htmlFor="phone" className="font-label-md text-primary">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="920-555-0123" className="form-input" />
                </div>
              </div>
              <div className="form-group space-y-xs">
                <label htmlFor="email" className="font-label-md text-primary">Email Address</label>
                <input type="email" id="email" name="email" placeholder="john@example.com" className="form-input" />
              </div>
              <div className="form-group space-y-xs">
                <label htmlFor="message" className="font-label-md text-primary">Your Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Tell us about your shipping requirements..." className="form-input textarea resize-none"></textarea>
              </div>
              <div className="pt-md">
                <button type="submit" className="btn btn-primary btn-submit w-full md:w-auto">
                  <span>Send Inquiry</span>
                  <span className="material-symbols-outlined text-20px">send</span>
                </button>
              </div>
            </form>

            <div className="form-footer mt-xl pt-lg flex items-start gap-sm">
              <div className="info-icon-small bg-secondary-fixed">
                <span className="material-symbols-outlined text-secondary">info</span>
              </div>
              <p className="font-label-md text-on-surface-variant leading-relaxed">
                For immediate temperature-sensitive freight assistance, please contact our dispatch line directly. We prioritize rapid response for all logistics inquiries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Area Visual Placeholder */}
      <section className="map-section relative">
        <div className="map-overlay absolute inset-0 z-10"></div>
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwzryY3nb3hbgUu5NPp5h66CNx-rnc6BDqccPhVVZNFlzHH6cIqFgbvBAei_0WylnsR-V50CGIXKexuyXNHMWzgjt_jtEK9n2goXhhGnwUuZcjh1weVFwTnjsU4QglbRFGVep62odoaOuUiphO9BNpJMBcdOHTHz34uQmwMCWtkv3UdnJyKEr19Og8GHOQCNIjrD0IVkyKuoIbK_9xqYhDAhTIGuBqr_jA6NLv_DFj5hOdD2wPMV3P1EG3m0GdYbFlSz2xAxuyHtx-" 
          alt="Green Bay Map" 
          className="map-image w-full h-full object-cover"
        />
        <div className="map-content absolute inset-0 flex items-center justify-center z-20">
          <div className="map-badge flex-col items-center text-center">
            <span className="material-symbols-outlined text-primary text-4xl mb-sm" style={{fontVariationSettings: "'FILL' 1"}}>location_on</span>
            <p className="font-headline-md text-primary">Based in Green Bay, WI</p>
            <p className="font-body-md text-on-surface-variant">Serving the United States with Cold Chain Excellence</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
