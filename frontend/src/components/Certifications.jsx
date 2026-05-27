import { useCertifications } from "../hooks/usePortfolio";
import SectionShell from "./SectionShell";
import EmptyState from "./EmptyState";

export default function Certifications() {
  const { data: certs = [], isLoading } = useCertifications();

  return (
    <SectionShell id="certifications" label="certifications verify">
      <h2 className="font-mono text-2xl font-bold mb-10 text-white">Certifications</h2>
      {isLoading ? (
        <p className="font-mono text-xs text-zinc-300">fetching data...</p>
      ) : certs.length === 0 ? (
        <EmptyState message="NO_CERTIFICATIONS_FOUND" />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((c) => (
            <div
              key={c.id}
              className="border border-zinc-900 p-6 hover:border-white transition-colors duration-200 bg-zinc-950/50"
            >
              {c.image && (
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-full object-cover grayscale mb-4 opacity-80 group-hover:opacity-100 transition-opacity"
                />
              )}
              <p className="font-mono text-sm font-semibold text-white">{c.name}</p>
              <p className="font-mono text-xs text-zinc-300 mt-1">{c.date_completed}</p>
            </div>
          ))}
        </div>
      )}
    </SectionShell>
  );
}