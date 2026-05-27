import Navbar         from "./components/Navbar";
import Hero           from "./components/Hero";
import Skills         from "./components/Skills";
import Projects       from "./components/Projects";
import Experience     from "./components/Experience";
import Certifications from "./components/Certifications";
import Testimonials   from "./components/Testimonials";
import { useEffect } from "react";

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

  return (
    <div className="bg-black text-zinc-100 font-mono min-h-screen">
      <Navbar />
      <Hero />
      <div className="reveal"><Skills /></div>
      <div className="reveal"><Projects /></div>
      <div className="reveal"><Experience /></div>
      <div className="reveal"><Certifications /></div>
      <div className="reveal"><Testimonials /></div>
    </div>
  );
}