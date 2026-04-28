type PlaceholderPanelProps = {
  title: string;
  text: string;
};

export function PlaceholderPanel({ title, text }: PlaceholderPanelProps) {
  return (
    <div className="rounded-[28px] border border-dashed border-line bg-panel-alt/70 p-6">
      <p className="text-sm font-semibold text-ink">{title}</p>
      <p className="mt-2 text-sm leading-7 text-muted">{text}</p>
    </div>
  );
}
