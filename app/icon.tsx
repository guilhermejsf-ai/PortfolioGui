import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  const portrait = await readFile(
    join(process.cwd(), "public/assets/shared/portrait-2026-09-16.png"),
    "base64",
  );

  return new ImageResponse(
    // ImageResponse renders a plain image into the transparent PNG favicon.
    <img
      src={`data:image/png;base64,${portrait}`}
      alt=""
      width={64}
      height={64}
      style={{ borderRadius: "50%", objectFit: "cover" }}
    />,
    size,
  );
}
