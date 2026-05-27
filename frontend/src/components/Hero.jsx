import { usePersonalInfo } from "../hooks/usePortfolio";

export default function Hero() {
  const { data, isLoading } = usePersonalInfo();
  const info = data?.[0];

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-6xl mx-auto pt-20">
      <p className="animate-fade-up font-mono text-[0.7rem] tracking-[0.2em] uppercase text-zinc-300 mb-6 [animation-delay:0ms]">
        // portfolio 
      </p>

      <h1 className="animate-fade-up font-mono font-extrabold leading-none tracking-tighter text-[clamp(3rem,10vw,7rem)] text-white [animation-delay:100ms]">
        {isLoading ? "..." : (info?.name ?? "Your Name")}
      </h1>

      <p className="animate-fade-up mt-8 max-w-xl text-base text-zinc-300 leading-relaxed [animation-delay:250ms]">
        {info?.about ?? ""}
      </p>

      <div className="animate-fade-up flex gap-4 mt-12 [animation-delay:400ms]">
        <a
          href="#projects"
          className="font-mono text-xs tracking-widest px-6 py-3 bg-white text-black hover:bg-zinc-200 transition-colors duration-200"
        >
          VIEW_PROJECTS →
        </a>
        <a
          href="#testimonials"
          className="font-mono text-xs tracking-widest px-6 py-3 border border-zinc-800 text-zinc-300 hover:border-white hover:text-white transition-colors duration-200"
        >
          TESTIMONIALS
        </a>
      </div>
    </section>
  );
}