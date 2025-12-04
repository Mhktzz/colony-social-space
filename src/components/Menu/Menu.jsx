import React from "react";
import "./Menu.css";

const Menu = () => {
  // Data sementara
  const menuItems = [
    {
      id: 1,
      name: "Kopi Susu Colony",
      price: "20k",
      img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=400&q=60",
    },
    {
      id: 2,
      name: "V60 Manual Brew",
      price: "25k",
      img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400&q=60",
    },
    {
      id: 3,
      name: "Croissant Butter",
      price: "18k",
      img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=400&q=60",
    },
  ];

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <h4 className="section-title">Menu Favorit</h4>
        <h2 className="section-subtitle">Nikmati Rasa Terbaik</h2>

        <div className="menu-grid">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-card">
              <div className="menu-img-wrapper">
                <img src={item.img} alt={item.name} />
                <span className="price-tag">{item.price}</span>
              </div>
              <h3>{item.name}</h3>
              <p>Rasakan kenikmatan dalam setiap tegukan.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
