"use client";

import { useEffect, useState } from "react";
import { isLowPowerDevice, prefersReducedMotion } from "@/lib/utils";

export default function NodeNetwork() {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Don't render WebGL for now - just show static fallback
    setShouldRender(false);
  }, []);

  // Always show static fallback for now
  return (
    <div className="absolute inset-0 opacity-20 pointer-events-none">
      <svg className="w-full h-full">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1.5" fill="var(--accent)" opacity="0.4" />
          </pattern>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <circle cx="20%" cy="30%" r="100" fill="url(#glow)" />
        <circle cx="80%" cy="60%" r="120" fill="url(#glow)" />
        <circle cx="50%" cy="80%" r="80" fill="url(#glow)" />
      </svg>
    </div>
  );
}
