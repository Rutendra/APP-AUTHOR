import React from "react";
import "./Services.css";

const priceCards = [
  {
    bg:"B" ,
    title: "Basic Plan",
    price: "₹149",
    services: ["🚀 Landing Page", "🚀 1 Modification", "🚀 3 Pages" , "🚀 Within 24 Hours"] ,
  },
  {
    bg:"U",
    title: "Standard Plan",
    price: "₹249",
    services: ["🚀 Landing Page", "🚀 4 Pages ", "🚀 4 Modifications", "🚀 Within 2 Days"],
  },
  {
    bg:"Y",
    title: "Premium Plan",
    price: "₹349",
    services: ["🚀 Landing Page", "🚀 8 Pages ", "🚀 8 Modifications", "🚀 Within 3 Days"],
  },
];

const Services = () => {
  return (
    <div className="call-service-section" name="services">
      <h1>Our Services</h1>
      <div className="price-cards">
        {priceCards.map((card, index) => (
          <div className="price-card" key={index}>
            <h2>{card.title}</h2>
            <p className="bg">{card.bg}</p>
            <p className="price">{card.price}</p>
            <ul className="ul">
              {card.services.map((service, idx) => (
                <li key={idx}>{service}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
