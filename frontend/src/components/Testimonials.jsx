import { useTestimonials } from "../hooks/usePortfolio";
import SectionShell from "./SectionShell";
import EmptyState from "./EmptyState";

export default function Testimonials() {
  const { data: testimonials = [], isLoading } = useTestimonials();

  return (
    <SectionShell id="testimonials" label="testimonials read">
      <h2 className="font-mono text-2xl font-bold mb-10 text-white">Testimonials</h2>
      {isLoading ? (
        <p className="font-mono text-xs text-zinc-300">fetching data...</p>
      ) : testimonials.length === 0 ? (
        <EmptyState message="NO_TESTIMONIALS_RECEIVED" />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-900">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-black hover:bg-zinc-950 transition-colors duration-200 p-8"
            >
              <p className="font-mono text-xs text-zinc-200 italic leading-relaxed mb-6">
                "{t.description}"
              </p>
              <p className="font-mono text-sm font-semibold text-white">{t.name}</p>
              <span className="inline-block font-mono text-[0.65rem] text-zinc-300 border border-zinc-800 px-2 py-0.5 mt-2">
                {t.tag}
              </span>
            </div>
          ))}
        </div>
      )}
    </SectionShell>
  );
}