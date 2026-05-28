import { useExperience } from "../hooks/usePortfolio";
import SectionShell from "./SectionShell";
import EmptyState from "./EmptyState";

export default function Experience() {
  const { data: experience = [], isLoading } = useExperience();

  return (
    <SectionShell id="experience" label="experience">
      <h2 className="font-mono text-2xl font-bold mb-10 text-white">Experience</h2>
      {isLoading ? (
        <p className="font-mono   text-zinc-300">fetching data...</p>
      ) : experience.length === 0 ? (
        <EmptyState message="NO_EXPERIENCE_LOGGED" />
      ) : (
        <div className="divide-y divide-zinc-900">
          {experience.map((e) => (
            <div
              key={e.id}
              className="grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-6 py-8"
            >
              <p className="font-mono   text-zinc-300 pt-0.5">{e.date}</p>
              <div>
                <h3 className="font-mono text-sm font-semibold mb-2 text-white">{e.name}</h3>
                <p className="font-mono   text-zinc-300 leading-relaxed">{e.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </SectionShell>
  );
}