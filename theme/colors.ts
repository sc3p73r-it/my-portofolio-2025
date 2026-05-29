/** Shared palette tokens for gradients and custom UI */
export const palette = {
  bg: "#05070d",
  bgElevated: "#0b1018",
  bgGlass: "rgba(12, 18, 30, 0.72)",
  violet: "#8b5cf6",
  violetLight: "#c4b5fd",
  cyan: "#22d3ee",
  cyanMuted: "#67e8f9",
  rose: "#fb7185",
  emerald: "#34d399",
  amber: "#fbbf24",
  text: "#f1f5f9",
  textMuted: "#94a3b8",
  border: "rgba(148, 163, 184, 0.14)",
  borderGlow: "rgba(139, 92, 246, 0.35)",
} as const;

export const gradients = {
  aurora:
    "linear-gradient(135deg, #8b5cf6 0%, #6366f1 28%, #22d3ee 62%, #fb7185 100%)",
  auroraSoft:
    "linear-gradient(135deg, rgba(139,92,246,0.22) 0%, rgba(34,211,238,0.14) 55%, rgba(251,113,133,0.12) 100%)",
  heading: "linear-gradient(120deg, #c4b5fd 0%, #67e8f9 45%, #fda4af 100%)",
  heroTitle: "linear-gradient(120deg, #f8fafc 20%, #a5f3fc 55%, #c4b5fd 90%)",
  pipelineLine: "linear-gradient(180deg, #34d399 0%, #22d3ee 50%, #8b5cf6 100%)",
  button: "linear-gradient(135deg, #7c3aed 0%, #2563eb 50%, #0891b2 100%)",
  progressRunning:
    "linear-gradient(90deg, #8b5cf6, #22d3ee, #8b5cf6)",
} as const;
