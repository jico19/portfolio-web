import { useProjects } from "../hooks/usePortfolio";
import SectionShell from "./SectionShell";
import EmptyState from "./EmptyState";
import TechIcon from "./TechIcon";

export default function Projects() {
  const { data: projects = [], isLoading } = useProjects();

  return (
    <SectionShell id="projects" label="projects">
      <h2 className="font-mono text-2xl font-bold mb-10 text-white">Projects</h2>
      
      {isLoading ? (
        <p className="font-mono   text-zinc-300">fetching data...</p>
      ) : projects.length === 0 ? (
        <EmptyState message="NO_PROJECTS_FOUND" />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.id}
              className="flex flex-col bg-black hover:bg-zinc-950 transition-colors duration-200 p-8"
            >
              <div className="w-full h-44 mb-6 overflow-hidden bg-zinc-900/50 flex items-center justify-center border border-zinc-800">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 transition-opacity"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-8 h-8 border border-zinc-700 rounded rotate-45 flex items-center justify-center">
                      <div className="w-4 h-4 border border-zinc-800"></div>
                    </div>
                    <span className="font-mono text-[0.6rem] text-zinc-600">IMG_NULL</span>
                  </div>
                )}
              </div>
              
              <h3 className="font-mono text-sm font-semibold mb-2 text-white">{p.name}</h3>
              <p className="font-mono   text-zinc-300 leading-relaxed mb-4 flex-1">
                {p.decription}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-5">
                {p.technologies?.map((t) => (
                  <span
                    key={t.id}
                    className="flex items-center gap-1.5 font-mono text-[0.65rem] text-zinc-300 border border-zinc-800 px-2 py-0.5"
                  >
                    <TechIcon name={t.name} icon={t.icon} className="w-3 h-3" />
                    {t.name}
                  </span>
                ))}
              </div>
              
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono   text-white tracking-widest hover:text-zinc-300 transition-colors duration-200 self-start"
                >
                  open_project →
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </SectionShell>
  );
}