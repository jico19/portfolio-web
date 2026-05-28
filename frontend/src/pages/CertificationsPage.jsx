import Certifications from "../components/Certifications";
import PageTransition from "../components/PageTransition";
import { useEffect } from "react";

export default function CertificationsPage() {
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
      <div className="reveal transition-opacity duration-500 pt-20">
        <Certifications />
      </div>
    </PageTransition>
  );
}
