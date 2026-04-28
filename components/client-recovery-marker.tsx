"use client";

import { useEffect } from "react";

const RECOVERY_KEY = "portfolio-runtime-recovery";

export function ClientRecoveryMarker() {
  useEffect(() => {
    const keysToClear: string[] = [];

    for (let index = 0; index < window.sessionStorage.length; index += 1) {
      const key = window.sessionStorage.key(index);

      if (key?.startsWith(RECOVERY_KEY)) {
        keysToClear.push(key);
      }
    }

    keysToClear.forEach((key) => window.sessionStorage.removeItem(key));
  }, []);

  return null;
}
