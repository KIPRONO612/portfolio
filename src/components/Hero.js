import React, { useEffect, useRef } from "react"; 
import "./components.css";
import profileImage from "../assets/mesh.JPEG";

export default function Hero() {
  useEffect(() => {
    const container = document.querySelector(".particle-bg");
    if (!container) return;

    container.innerHTML = "";

    const particleCount = 60;
    const colors = ["#4f46e5", "#22d3ee", "#a855f7", "#facc15"];
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("span");
      particle.classList.add("particle");

      const size = Math.random() * 3 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      particle.style.animationDuration = `${6 + Math.random() * 8}s`;

      container.appendChild(particle);
      particles.push(particle);
    }

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;

      particles.forEach((p, i) => {
        const moveX = x * (i / particleCount);
        const moveY = y * (i / particleCount);
        p.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // IntersectionObserver to start button animations when visible
  const buttonsRef = useRef(null);
  useEffect(() => {
    const el = buttonsRef.current;
    if (!el) return;

    // Ensure children animate-fadeIn are paused by default (CSS handles this)
    const obs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('in-view');
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
  <section className="hero container hero-particles hero-dance--spin" data-dance="spin">
      <div className="particle-bg"></div>

      <div className="hero-content">
        <div className="hero-text">
          <h2>Hi, I'm MESHACK</h2>
          <p>
            I’m a passionate developer skilled in React, TypeScript, Python,
            and C++ — I love building clean, interactive, and accessible web apps.
          </p>

          {/* Buttons Section */}
          <div className="hero-buttons flex flex-col items-center gap-4 mt-6">

            {/* First row: Contact + Download CV horizontal */}
            <div className="flex gap-4 justify-center hero-buttons-wrapper" ref={buttonsRef}>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn contact-scroll-btn opacity-0 animate-fadeIn"
                style={{ animationDelay: "0.2s" }}
                aria-label="Scroll to contact"
              >
                Contact Me
              </button>

              <a
                href="/assets/CV/Kiprono_Meshack_CV.docx"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="btn download-btn opacity-0 animate-fadeIn"
                style={{ animationDelay: "3s" }}
              >
                Download CV
              </a>
            </div>

          </div>
        </div>

        <div className="hero-image">
          <img src={profileImage} alt="Meshack Kiprono" />
        </div>
      </div>
    </section>
  );
}
