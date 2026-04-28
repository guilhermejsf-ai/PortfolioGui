type TimelineItem = {
  phase: string;
  text: string;
};

type TimelineProps = {
  items: TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <div
          key={item.phase}
          className="relative rounded-[28px] border border-line bg-panel p-6"
        >
          <div className="absolute left-6 top-6 h-[calc(100%-3rem)] w-px bg-line" />
          <div className="relative pl-8">
            <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-accent" />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-deep">
              Step {index + 1}
            </p>
            <h3 className="mt-3 font-display text-3xl tracking-tight text-ink">
              {item.phase}
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
