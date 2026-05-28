import { useState } from "react";
import { useNavigate } from "react-router-dom";

const links = [
  { hash: "skills",         label: "stack" },
  { hash: "projects",       label: "projects" },
  { hash: "experience",     label: "experience" },
  { hash: "certifications", label: "certs" },
  { hash: "testimonials",   label: "testimonials" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  const handleNavigation = (hash) => {
    navigate(`/#${hash}`);
    const element = document.getElementById(hash);
    if (element) {
      setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 0);
    }
    closeMenu();
  };

  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-[#222] bg-black/80 backdrop-blur-md">
      <div className="flex justify-between items-center px-6 py-5">
        <button 
          onClick={() => navigate("/")}
          className="font-mono text-zinc-300 tracking-widest hover:text-white transition-colors duration-200 bg-none border-none cursor-pointer"
        >
          jico.dev
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {links.map((l) => (
            <button
              key={l.hash}
              onClick={() => handleNavigation(l.hash)}
              className="font-mono text-zinc-300 tracking-widest hover:text-white transition-colors duration-200 bg-none border-none cursor-pointer"
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-zinc-300 transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-zinc-300 transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-zinc-300 transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-[#222] bg-black/95 px-6 py-4">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <button
                key={l.hash}
                onClick={() => handleNavigation(l.hash)}
                className="font-mono text-zinc-300 tracking-widest hover:text-white transition-colors duration-200 text-left bg-none border-none cursor-pointer"
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}