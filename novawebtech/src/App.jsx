import "./App.css";

function App() {
  return (
    <div>

      {/* Navbar */}
      <nav className="navbar">

        <h1 className="logo">NovaWebTech</h1>

        <ul className="nav-links">

          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#services">Services</a>
          </li>

          <li>
            <a href="#portfolio">Portfolio</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>

        </ul>

      </nav>

      {/* Hero */}
      <section id="home" className="hero">

        <h1>Professional Website Development</h1>

        <p>
          We create premium modern websites for businesses,
          startups, creators, and brands.
        </p>

        <div className="hero-buttons">

          <button>Get Started</button>

          <button>View Portfolio</button>

        </div>

      </section>

      {/* Services */}
      <section id="services" className="services">

        <h2>Our Services</h2>

        <div className="services-container">

          <div className="service-card">

            <h3>Business Websites</h3>

            <p>
              Modern responsive websites for businesses and companies.
            </p>

          </div>

          <div className="service-card">

            <h3>Landing Pages</h3>

            <p>
              High converting landing pages for products and services.
            </p>

          </div>

          <div className="service-card">

            <h3>Website Redesign</h3>

            <p>
              We transform old websites into premium modern designs.
            </p>

          </div>

        </div>

      </section>

      {/* Portfolio */}
      <section id="portfolio" className="portfolio">

        <h2>Portfolio</h2>

        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt="portfolio"
        />

        <img
          src="https://images.unsplash.com/photo-1556155092-490a1ba16284"
          alt="portfolio"
        />

      </section>

      {/* Contact */}
      <section id="contact" className="contact">

        <h2>Contact Us</h2>

        <p>
          Send us a message and let’s build your dream website.
        </p>

        <form
          action="https://formspree.io/f/xvzlgrgp"
          method="POST"
          className="contact-form"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </section>

    </div>
  );
}

export default App;