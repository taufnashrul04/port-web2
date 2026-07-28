export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center border border-line bg-paper px-2.5 py-1 font-mono text-2xs uppercase tracking-wide text-muted transition-colors hover:border-red hover:text-red">
      {children}
    </span>
  );
}
