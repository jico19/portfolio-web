import { useTech } from "../hooks/usePortfolio";
import SectionShell from "./SectionShell";
import EmptyState from "./EmptyState";
import TechIcon from "./TechIcon";

export default function Skills() {
  const { data: tech = [], isLoading } = useTech();

  return (
    <SectionShell id="skills" label="tech.stack">
      <h2 className="font-mono text-2xl font-bold mb-10">Technologies</h2>
      {isLoading ? (
        <p className="font-mono   text-zinc-300">fetching data...</p>
      ) : tech.length === 0 ? (
        <EmptyState message="NO_TECH_STACK_FOUND" />
      ) : (
        <div className="flex flex-wrap gap-3">
          {tech.map((t) => (
            <div
              key={t.id}
              className="flex items-center gap-2 border border-zinc-800 px-4 py-2 font-mono   text-zinc-300 hover:border-white hover:text-white transition-colors duration-200 cursor-default"
            >
              <TechIcon name={t.name} icon={t.icon} />
              {t.name}
            </div>
          ))}
        </div>
      )}
    </SectionShell>
  );
}
