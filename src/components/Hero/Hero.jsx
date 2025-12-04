import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-text">
          <h1>
            Social Space &{" "}
            <span style={{ color: "var(--colony-orange)" }}>Coffee</span> in
            Purwokerto
          </h1>
          <p>
            Tempat nongkrong yang asik, nyaman, dan cozy untuk kamu
            berkolaborasi atau sekedar bersantai.
          </p>
          <button className="btn btn-primary">Lihat Menu</button>
        </div>
        <div className="hero-image">
          {/* Ganti src dengan gambar kopi/cafe asli */}
          <img
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Coffee Cup"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
