export default function SectionShell({ id, label, children }) {
  return (
    <section id={id} className="border-t border-[#222] py-24 px-6 max-w-6xl mx-auto">
      {label && (
        <p className="font-mono text-[0.7rem] tracking-[0.2em] uppercase text-zinc-300 mb-10">
          {`// ${label}`}
        </p>
      )}
      {children}
    </section>
  );
}