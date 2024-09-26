import React, { useEffect, useState } from "react";
import "./About.css";

const statsData = [
  { count: 16, text1: "Projects", text2: "Completed" },
  { count: 12, text1: "Happy", text2: "Clients" },
  { count: 7, text1: "Recognitions", text2: "By Experts" },
  { count: 8, text1: "Workshops", text2: "Conducted" },
];

const About = () => {
  const [counts, setCounts] = useState(Array(statsData.length).fill(0));
  const [isVisible, setIsVisible] = useState(false);
  const [reasonVisible, setReasonVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector(".about-section");
      const { top } = aboutSection.getBoundingClientRect();
      if (top <= window.innerHeight && top >= 0 && !isVisible) {
        setIsVisible(true);
        countUp();
        animateReasons();
      }
    };

    const countUp = () => {
      const interval = setInterval(() => {
        setCounts((prevCounts) => {
          return prevCounts.map((count, index) => {
            if (count < statsData[index].count) {
              return Math.min(count + 1, statsData[index].count);
            }
            return count;
          });
        });
      }, 50);

      // Stop counting when all stats are counted
      if (counts.every((count, index) => count >= statsData[index].count)) {
        clearInterval(interval);
      }
    };

    const animateReasons = () => {
      setReasonVisible(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [counts, isVisible]);

  return (
    <div className="about-section" name='about'>
      <h1>About Us</h1>
      <p className="para">
      App Author is a full-service app development company specializing in creating innovative, user-centric mobile and web applications. With a team of experienced developers and designers we transform ideas into functional, scalable, and visually compelling websites that drive business growth.
      </p>
      <div className="stats">
        <h2>Our Stats</h2>
        <div className="stats-container">
          {statsData.map((stat, index) => (
            <div className={`stat-item animate ${isVisible ? "slide-in" : ""}`} key={index}>
              <div className="count">
                {counts[index]}<span className="plus">+</span>
              </div>
              <div className="stat-text">
                <div>{stat.text1}</div>
                <div>{stat.text2}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="choose-us">
        <h2>Why Choose Us?</h2>
        <p>
          We offer the best services in the industry. Here are a few reasons to choose us:
        </p>
        <div className="reasons">
          {["Quality Service", "Customer Focused", "Expert Team", "Innovative Solutions"].map((reason, index) => (
            <div 
              className={`reason-item animate ${reasonVisible ? `fall ${index}` : ""}`} 
              key={index}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <p>{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
