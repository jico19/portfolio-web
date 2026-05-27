const links = [
  { href: "#skills",         label: "stack" },
  { href: "#projects",       label: "projects" },
  { href: "#experience",     label: "experience" },
  { href: "#certifications", label: "certs" },
  { href: "#testimonials",   label: "testimonials" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex justify-between items-center px-6 py-5 border-b border-[#222] bg-black/80 backdrop-blur-md">
      <span className="font-mono text-xs text-zinc-300 tracking-widest">
        &gt;_ portfolio
      </span>
      <div className="flex gap-8">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="font-mono text-xs text-zinc-300 tracking-widest hover:text-white transition-colors duration-200"
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}