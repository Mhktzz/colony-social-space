import React from "react";
import "./Venue.css";

const Venue = () => {
  return (
    <section id="venue" className="venue-section">
      <div className="container">
        <div className="venue-content">
          <div className="venue-text">
            <h4
              className="section-title"
              style={{ textAlign: "left", color: "white" }}
            >
              Venue Kami
            </h4>
            <h2
              className="section-subtitle"
              style={{ textAlign: "left", color: "white" }}
            >
              Ruang Nyaman Untuk Segala Aktivitas
            </h2>
            <ul className="facilities-list">
              <li>High Speed WiFi</li>
              <li>Indoor AC & Outdoor Smoking</li>
              <li>Mushola & Toilet Bersih</li>
              <li>Live Music Space</li>
            </ul>
            <button
              className="btn"
              style={{
                backgroundColor: "var(--colony-yellow)",
                color: "white",
                marginTop: "20px",
              }}
            >
              Reservasi Tempat
            </button>
          </div>
          <div className="venue-gallery">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=60"
              alt="Interior Cafe"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
