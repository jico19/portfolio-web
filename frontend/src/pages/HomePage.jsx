import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Certifications from "../components/Certifications";
import Testimonials from "../components/Testimonials";
import PageTransition from "../components/PageTransition";
import { useEffect } from "react";

export default function HomePage() {
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

  return (
    <PageTransition>
      <Hero />
      <div className="reveal transition-opacity duration-500"><Skills /></div>
      <div className="reveal transition-opacity duration-500"><Projects /></div>
      <div className="reveal transition-opacity duration-500"><Experience /></div>
      <div className="reveal transition-opacity duration-500"><Certifications /></div>
      <div className="reveal transition-opacity duration-500"><Testimonials /></div>
    </PageTransition>
  );
}
