import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Testimonials from "./components/Testimonials";

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            // Add animation class
            element.classList.remove("nav-highlight");
            // Trigger reflow to restart animation
            void element.offsetWidth;
            element.classList.add("nav-highlight");
            
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 0);
      }
    };

    // Handle initial hash on load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <Router>
      <div className="bg-black text-zinc-100 font-mono min-h-screen">
        <Navbar />
        <Hero />
        <div id="skills" className="reveal transition-opacity duration-500"><Skills /></div>
        <div id="projects" className="reveal transition-opacity duration-500"><Projects /></div>
        <div id="experience" className="reveal transition-opacity duration-500"><Experience /></div>
        <div id="certifications" className="reveal transition-opacity duration-500"><Certifications /></div>
        <div id="testimonials" className="reveal transition-opacity duration-500"><Testimonials /></div>
      </div>
    </Router>
  );
}