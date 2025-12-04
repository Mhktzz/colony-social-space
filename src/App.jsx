import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import Venue from "./components/Venue/Venue";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section
        id="about"
        style={{
          padding: "4rem 1.5rem",
          textAlign: "center",
          backgroundColor: "white",
        }}
      >
        <div className="container">
          <h4 className="section-title">Tentang Kami</h4>
          <p style={{ maxWidth: "700px", margin: "0 auto", lineHeight: "1.6" }}>
            Colony Social Space hadir di Purwokerto sebagai wadah kreatif dan
            tempat bersantai. Kami menyajikan kopi berkualitas dengan suasana
            yang mendukung produktivitas Anda.
          </p>
        </div>
      </section>
      <Menu />
      <Venue />
      {/* Placeholder Event Section */}
      <section
        id="event"
        style={{ padding: "4rem 1.5rem", backgroundColor: "#fdfbf7" }}
      >
        <div className="container">
          <h4 className="section-title">Event Terbaru</h4>
          <h2 className="section-subtitle">Live Music & Workshop</h2>
          <div
            style={{
              textAlign: "center",
              padding: "2rem",
              border: "2px dashed var(--colony-brown)",
              borderRadius: "16px",
            }}
          >
            <p>Cek Instagram kami untuk jadwal event minggu ini!</p>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
}

export default App;
