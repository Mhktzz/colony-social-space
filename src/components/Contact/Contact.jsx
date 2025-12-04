import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-container">
        <div className="contact-info">
          <h2>Temukan Kami</h2>
          <p>Jl. Prof. M. Yamin No.2 (Contoh), Purwokerto, Jawa Tengah</p>
          <div className="socials">
            <span>Instagram: @colonysocialspace</span>
            <span>WhatsApp: +62 812-xxxx-xxxx</span>
          </div>
          <button className="btn btn-primary" style={{ marginTop: "20px" }}>
            Buka Maps
          </button>
        </div>
        <div className="contact-map">
          {/* Placeholder untuk Map atau Gambar Lokasi */}
          <div className="map-placeholder">
            <p>Google Maps Area</p>
          </div>
        </div>
      </div>
      <footer className="footer-copyright">
        &copy; 2025 Colony Social Space. All rights reserved.
      </footer>
    </section>
  );
};

export default Contact;
