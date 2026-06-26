
import Script from "next/script";

export default function Home() {
  return (
    <>
      

  
  <nav className="nav" id="navbar">
    <div className="wrap">
      <a href="#hero"><img src="/assets/images/logo.png" alt="NexusX" className="nav-logo" /></a>
      <div className="nav-links" id="navLinks">
        <a href="#approach" className="nav-link">Approach</a>
        <a href="#industries" className="nav-link">Industries</a>
        <a href="#team" className="nav-link">Leadership</a>
        <a href="#contact" className="nav-link">Contact</a>
        <a href="#contact" className="btn btn-primary nav-cta">Work With Us</a>
      </div>
      <button className="nav-hamburger" id="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  
  <div className="mobile-overlay" id="mobileMenu">
    <button className="mobile-close" id="mobileClose">×</button>
    <a href="#approach" className="nav-link" onClick="closeMobile()">Approach</a>
    <a href="#industries" className="nav-link" onClick="closeMobile()">Industries</a>
    <a href="#team" className="nav-link" onClick="closeMobile()">Leadership</a>
    <a href="#contact" className="nav-link" onClick="closeMobile()">Contact</a>
    <a href="#contact" className="btn btn-primary" onClick="closeMobile()">Work With Us</a>
  </div>

  
  <section className="hero" id="hero">

    
    <div className="hero-map-wrapper">
      <img src="/assets/images/world-map.svg" alt="Global Trade and Market Expansion Map" className="hero-world-map" />
    </div>

    
    <canvas id="heroCanvas"></canvas>
    <div className="hero-grid-overlay"></div>
    <div className="hero-content">
      <div className="hero-inner anim">

        <h1 className="hero-title">
          Global Market Expansion.<br />
          <span className="accent">Without Complexity.</span>
        </h1>

        <p className="hero-lead">
          Structured international market presence for manufacturers<br />
          Reliable Sourcing for international buyers
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn btn-hero-primary">
            Work With Us
          </a>
          <a href="#approach" className="btn btn-hero-outline">
            Explore Our Approach
          </a>
        </div>

      </div>
    </div>
  </section>

  
  <section className="sec insight" id="insight">
    <div className="wrap">
      <div className="insight-inner anim">
        <p className="t-label">The NexusX Perspective</p>
        <div className="insight-quote">
          <p className="t-statement">
            <strong>The Constraint Isn't Capability.<br />It's Execution.</strong>
          </p>
          <p className="insight-body">
            India produces at global standards. Yet international scale remains inconsistent.
          </p>
          <p className="insight-body">
            Markets exist. Demand exists.
          </p>
          <p className="insight-body">
            What's often missing is structured, sustained market presence.
          </p>
        </div>
      </div>
    </div>
  </section>



  
  <section className="sec bg-light" id="problem">
    <div className="wrap">
      <div className="problem-editorial-grid">

        <div className="problem-editorial-left anim-left">
          <p className="t-label">The Core Challenge</p>
          <h2 className="t-headline core-challenge">
            Manufacturers don't lack capability.<br />
            <span className="accent">They lack continuity in global execution.</span>
          </h2>
        </div>

        <div className="problem-editorial-right anim-right">
          <div className="problem-list">
            <div className="problem-item">
              <h3 className="problem-item-title">Fragmented Market Presence</h3>
              <p className="problem-item-desc">Disconnected representation across regions weakens positioning and visibility.</p>
            </div>
            <div className="problem-item">
              <h3 className="problem-item-title">Inconsistent Engagement</h3>
              <p className="problem-item-desc">Lack of sustained, professional interaction limits long-term buyer relationships.</p>
            </div>
            <div className="problem-item">
              <h3 className="problem-item-title">Regulatory & Process Complexity</h3>
              <p className="problem-item-desc">Navigating international requirements without structured support slows progress.</p>
            </div>
            <div className="problem-item">
              <h3 className="problem-item-title">Operational Strain</h3>
              <p className="problem-item-desc">Building internal global capabilities demands time, cost, and constant oversight.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <section className="sec approach-section" id="approach">
    <canvas id="modelCanvas"></canvas>
    <div className="wrap">
      <div className="approach-container anim">
        <div className="approach-content">
          <p className="t-label">Our Approach</p>
          <h2 className="t-headline approach-headline">A More Considered Way to<br />Expand Globally</h2>

          <div className="approach-body">
            <p className="approach-main">
              NexusX works with a select group of manufacturers to build and strengthen their international market presence.
            </p>
            <p className="approach-main">
              We ensure your products are represented with consistency, credibility, and intent—across the right markets, with the right engagement.
            </p>
            <p className="approach-emphasis">
              You remain focused on production and quality. We ensure your global presence reflects it.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section className="sec delivery-section" id="delivery">
    <div className="wrap">
      <div className="delivery-header anim">
        <p className="t-label t-label--centered">What We Deliver</p>
        <h2 className="t-headline">Three Core Pillars</h2>
        <div className="delivery-divider"></div>
      </div>

      <div className="delivery-grid anim">
        <div className="delivery-item">
          <div className="delivery-icon">1</div>
          <h3 className="delivery-item-title">Market Presence</h3>
          <p className="delivery-item-desc">Access to relevant international markets through credible networks.</p>
        </div>
        <div className="delivery-item">
          <div className="delivery-icon">2</div>
          <h3 className="delivery-item-title">Commercial Representation</h3>
          <p className="delivery-item-desc">Professional, consistent engagement with buyers—managed with clarity and accountability.</p>
        </div>
        <div className="delivery-item">
          <div className="delivery-icon">3</div>
          <h3 className="delivery-item-title">Structured Expansion</h3>
          <p className="delivery-item-desc">A disciplined approach to international growth built on alignment and continuity.</p>
        </div>
      </div>
    </div>
  </section>

  
  <section className="sec industries" id="industries">
    <div className="wrap">
      <div className="industries-inner">
        <div className="industries-left anim-left">
          <p className="t-label">Industries</p>
          <h2 className="t-headline">Sectors We Work Across</h2>
          <p className="t-body">Where global demand meets Indian manufacturing excellence.</p>
        </div>
        <div className="industry-list anim-right">
          <div className="industry-card">
            <div className="industry-icon"></div>
            <span className="industry-name">Chemicals</span>
          </div>
          <div className="industry-card">
            <div className="industry-icon"></div>
            <span className="industry-name">Pharmaceuticals</span>
          </div>
          <div className="industry-card">
            <div className="industry-icon"></div>
            <span className="industry-name">Nutraceuticals</span>
          </div>
          <div className="industry-card">
            <div className="industry-icon"></div>
            <span className="industry-name">Food Products</span>
          </div>
          <div className="industry-card">
            <div className="industry-icon"></div>
            <span className="industry-name">Polymers</span>
          </div>
          <div className="industry-card">
            <div className="industry-icon"></div>
            <span className="industry-name">Everyday Merchandise</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section className="sec global-reach" id="global-perspective">
    <div className="wrap">
      <div className="reach-header anim">
        <p className="t-label">Global Perspective</p>
        <h2 className="t-headline">
          Global Networks<br />
          <span className="accent">Across Buyers & Regions</span>
        </h2>
        <p className="t-lead">
          NexusX leadership brings decades of international business experience across diverse markets and industries.
        </p>
      </div>
      <div className="reach-stats">
        <div className="reach-stat anim">
          <div className="reach-number" data-target="35">35<span>+</span></div>
          <div className="reach-label">
            Years of International<br />Business Experience
          </div>
        </div>
        <div className="reach-stat anim anim-d1">
          <div className="reach-number" data-target="125">125<span>+</span></div>
          <div className="reach-label">
            Countries<br />Market Exposure
          </div>
        </div>
        <div className="reach-stat anim anim-d2">
          <div className="reach-number">Global</div>
          <div className="reach-label">
            Networks Across<br />Buyers & Regions
          </div>
        </div>
      </div>
    </div>
  </section>



  
  <section className="sec bg-section-alt" id="comparison">
    <div className="wrap">
      <div className="comp-header anim">
        <p className="t-label">Why NexusX</p>
        <h2 className="t-headline comp-headline">Defined by Clarity.<br />Driven by Discipline.</h2>
      </div>

      <h3 className="comp-subheading anim">A More Effective Way to Scale</h3>
      <div className="comparison-split anim-scale">
        <div className="comp-side comp-chaos">
          <div className="comp-eyebrow">Conventional Expansion</div>
          <h3 className="comp-title">Fragmented, reactive, and resource-intensive.</h3>
        </div>
        <div className="comp-side comp-structure">
          <div className="comp-eyebrow">NexusX</div>
          <h3 className="comp-title">Structured, deliberate, and built for long-term growth.</h3>
        </div>
      </div>
      <p className="comp-bottom-note anim">We bring structure to complexity and consistency to market presence. Manufacturers stay focused on what they do best. We ensure their global presence is aligned, credible, and sustained.</p>
    </div>
  </section>

  
  <section className="sec" id="team">
    <div className="wrap">
      <div className="team-header">
        <div className="anim-left">
          <p className="t-label">Leadership</p>
          <h2 className="t-headline">Experienced. Global. Execution-Focused.</h2>
        </div>
        <div className="team-header-right anim-right">
          <p className="t-body team-intro">NexusX is led by seasoned professionals who have spent decades building businesses across international markets. We don't just advise — we operate, execute, and deliver global growth.</p>
        </div>
      </div>

      <div className="team-profiles">
        
        <div className="team-card anim anim-d1">
          <img src="/assets/images/umakant.png?v=3" alt="Umakant Potdukhe" className="team-photo photo-umakant" />
          <div className="team-info">
            <h3 className="team-name">Umakant Potdukhe</h3>
            <p className="team-title">Director</p>
            <div className="team-bio">
              <p>Pioneer in structured global representation for Indian manufacturers.</p>
              <p>Decades of building international market presence from the ground up across global markets.</p>
            </div>
          </div>
        </div>
        
        <div className="team-card anim anim-d2">
          <img src="/assets/images/vinay.png?v=3" alt="Vinay Jagwani" className="team-photo photo-vinay" />
          <div className="team-info">
            <h3 className="team-name">Vinay Jagwani</h3>
            <p className="team-title">Director</p>
            <div className="team-bio">
              <p>International market research, demand mapping, and strategic buyer engagement.</p>
              <p>Executing focused growth strategies across emerging and established markets worldwide.</p>
            </div>
          </div>
        </div>
        
        <div className="team-card anim anim-d3">
          <img src="/assets/images/rahul.png?v=3" alt="Rahul Jagwani" className="team-photo photo-rahul" />
          <div className="team-info">
            <h3 className="team-name">Rahul Jagwani</h3>
            <p className="team-title">Director</p>
            <div className="team-bio">
              <p>Driving operational excellence in export execution and compliance coordination.</p>
              <p>Managing complex international supply chains and ensuring seamless cross-border delivery.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section className="sec cta-section" id="cta">
    <div className="wrap cta-wrap">
      <div className="cta-card anim-scale">
        <h2 className="t-headline cta-title">Build Your Global Market Presence</h2>
        <p className="t-body cta-desc">
          Work with NexusX to establish a structured, credible, and sustained presence across international markets.
        </p>
        <a href="#contact" className="btn btn-primary">Work With Us</a>
      </div>
    </div>
  </section>

  
  <section className="sec bg-section-alt" id="contact">
    <div className="wrap">
      <div className="contact-grid">
        <div className="contact-header anim-left">
          <p className="t-label">Contact</p>
          <h2 className="t-headline contact-title">Let's Begin the Conversation</h2>
          <p className="t-lead">Whether you're a manufacturer exploring international markets or a buyer sourcing from India, we'd be glad to connect.</p>
        </div>

        <div className="contact-cards anim-right">
          <div className="contact-card">
            <h3 className="contact-card-title">Corporate Office</h3>
            <p className="contact-card-text">
              Z 2086, Akshar Business Park, Sector 25,<br />
              Navi Mumbai, Maharashtra 400703
            </p>
          </div>
          <div className="contact-card">
            <h3 className="contact-card-title">Contact Information</h3>
            <div className="contact-row">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <a href="mailto:info@nexusxglobal.com" className="contact-card-link">info@nexusxglobal.com</a>
            </div>
            <div className="contact-row">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2">
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                </path>
              </svg>
              <a href="tel:+919759753181" className="contact-card-link">+91 97597 53181</a>
            </div>
            <div className="contact-row borderless">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z">
                </path>
              </svg>
              <a href="https://www.nexusxglobal.com" className="contact-card-link" target="_blank">www.nexusxglobal.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <footer className="footer">
    <div className="wrap">
      <div className="footer-top">
        <div className="footer-brand">
          <img src="/assets/images/logo.png" alt="NexusX" className="footer-logo" />
          <p>Structured international market presence for manufacturers. Defined by transparency. Anchored in trust. Delivered with structure.</p>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Company</div>
          <a href="#approach">Our Approach</a>
          <a href="#industries">Industries</a>
          <a href="#team">Leadership</a>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Industries</div>
          <a href="#industries">Chemicals</a>
          <a href="#industries">Pharmaceuticals</a>
          <a href="#industries">Nutraceuticals</a>
          <a href="#industries">Food Products</a>
          <a href="#industries">Polymers</a>
          <a href="#industries">Everyday Merchandise</a>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Contact</div>
          <a href="https://www.nexusxglobal.com" target="_blank">www.nexusxglobal.com</a>
          <a href="mailto:info@nexusxglobal.com">info@nexusxglobal.com</a>
          <a href="tel:+919759753181">+91 97597 53181</a>
          <span className="footer-location-note">Navi Mumbai,
            Maharashtra, India</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 NexusX. All rights reserved.</span>
        <div className="footer-positioning">
          <span className="footer-positioning-dot"></span>
          Defined by transparency. Anchored in trust.
        </div>
      </div>
    </div>
  </footer>

  

      
      {/* Schema Data */}
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "NexusX",
            "url": "https://www.nexusxglobal.com/",
            "logo": "https://www.nexusxglobal.com/assets/images/logo.png",
            "description": "Structured international market presence and global representation for manufacturers.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Z 2086, Akshar Business Park, Sector 25",
              "addressLocality": "Navi Mumbai",
              "addressRegion": "Maharashtra",
              "postalCode": "400703",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-97597-53181",
              "contactType": "customer service",
              "email": "info@nexusxglobal.com"
            }
          })
        }}
      />
      <Script src="/main.js" strategy="lazyOnload" />
    </>
  );
}
