import Image from "next/image";

import { ProjectVisual } from "@/data/projects";
import { cn } from "@/lib/utils";

type VisualBlockProps = {
  visual: ProjectVisual;
  className?: string;
  showLabel?: boolean;
  elevated?: boolean;
  balancedImage?: boolean;
};

const toneClasses = {
  white: "bg-white",
  blue: "bg-accent-deep",
  neutral: "bg-panel-alt",
  warm: "bg-[#f7efe7]",
};

export function VisualBlock({
  visual,
  className,
  showLabel = true,
  elevated = true,
  balancedImage = false,
}: VisualBlockProps) {
  const tone = toneClasses[visual.tone ?? "neutral"];
  const visualFit = visual.type === "image" ? visual.fit : undefined;
  const imageClassName =
    balancedImage && visualFit !== "contain"
      ? "object-contain object-center p-2 sm:p-3"
      : visualFit === "cover"
        ? "object-cover"
        : "object-contain";

  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-[28px] border border-line/90",
        elevated && "shadow-card",
        tone,
        className,
      )}
    >
      {visual.type === "image" ? (
        <>
          <div className="absolute inset-0 h-full w-full overflow-hidden">
            <Image
              src={visual.src}
              alt={visual.alt}
              fill
              className={cn("select-none object-center", imageClassName)}
              sizes="(max-width: 768px) 100vw, 50vw"
              draggable={false}
            />
          </div>
          {showLabel ? (
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/35 to-transparent px-5 pb-5 pt-16">
              <p className="text-sm font-medium text-white">{visual.label}</p>
            </div>
          ) : null}
        </>
      ) : (
        <div className="flex h-full min-h-[220px] items-center justify-center p-6 text-center">
          <div className="max-w-xs rounded-[20px] border border-dashed border-line bg-white/65 px-5 py-4 backdrop-blur">
            <p className="text-sm font-semibold text-ink">{visual.label}</p>
          </div>
        </div>
      )}
    </div>
  );
}
