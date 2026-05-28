export default function EmptyState({ message = "SYSTEM_DATA_NOT_FOUND" }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 border border-dashed border-zinc-800 rounded-lg">
      <p className="font-mono   text-zinc-500 tracking-[0.2em]">
        {`// ${message}`}
      </p>
    </div>
  );
}
