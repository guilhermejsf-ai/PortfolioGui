export function Chevron({ direction = "right" }: { direction?: "left" | "right" }) {
  return (
    <svg className="chevron-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path d={direction === "left" ? "M14 6 8 12l6 6" : "m10 6 6 6-6 6"} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
