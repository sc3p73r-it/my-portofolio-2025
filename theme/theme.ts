"use client";

import { createTheme, alpha } from "@mui/material/styles";
import { palette, gradients } from "./colors";

const mono = 'var(--font-fira), "JetBrains Mono", "Consolas", monospace';
const sans = 'var(--font-inter), "Segoe UI", system-ui, sans-serif';

export const devopsTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: palette.violet, light: palette.violetLight, dark: "#6d28d9" },
    secondary: { main: palette.cyan, light: palette.cyanMuted, dark: "#0891b2" },
    success: { main: palette.emerald },
    warning: { main: palette.amber },
    error: { main: palette.rose },
    background: {
      default: palette.bg,
      paper: palette.bgElevated,
    },
    text: {
      primary: palette.text,
      secondary: palette.textMuted,
    },
    divider: alpha(palette.cyan, 0.14),
  },
  typography: {
    fontFamily: sans,
    h1: { fontFamily: mono, fontWeight: 700, letterSpacing: "-0.02em" },
    h2: { fontFamily: mono, fontWeight: 600 },
    h3: { fontFamily: mono, fontWeight: 600 },
    h4: { fontFamily: mono, fontWeight: 600 },
    h5: { fontFamily: mono, fontWeight: 500 },
    h6: { fontFamily: mono, fontWeight: 500 },
    button: { fontFamily: mono, textTransform: "none", fontWeight: 600 },
    body1: { lineHeight: 1.7 },
    body2: { lineHeight: 1.65 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: palette.bg,
          backgroundImage: `
            radial-gradient(ellipse 80% 50% at 10% -10%, ${alpha(palette.violet, 0.22)}, transparent 50%),
            radial-gradient(ellipse 60% 45% at 95% 5%, ${alpha(palette.cyan, 0.16)}, transparent 45%),
            radial-gradient(ellipse 50% 40% at 50% 100%, ${alpha(palette.rose, 0.08)}, transparent 50%)
          `,
          backgroundAttachment: "fixed",
          scrollbarColor: `${palette.violet} ${palette.bg}`,
          "&::-webkit-scrollbar": { width: 6 },
          "&::-webkit-scrollbar-track": { background: palette.bg },
          "&::-webkit-scrollbar-thumb": {
            background: gradients.aurora,
            borderRadius: 8,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backdropFilter: "blur(16px)",
          borderBottom: `1px solid ${palette.border}`,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          border: `1px solid ${palette.border}`,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontFamily: mono, fontSize: "0.72rem" },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 10 },
      },
    },
  },
});

export const panelSx = {
  bgcolor: palette.bgGlass,
  border: `1px solid ${palette.border}`,
  borderRadius: 3,
  backdropFilter: "blur(14px)",
  boxShadow: `0 8px 32px ${alpha("#000", 0.35)}`,
} as const;

export const glowPanelSx = {
  ...panelSx,
  position: "relative" as const,
  overflow: "hidden" as const,
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: "inherit",
    padding: "1px",
    background: gradients.aurora,
    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
    pointerEvents: "none",
    opacity: 0.45,
  },
} as const;

export const terminalHeaderSx = {
  display: "flex",
  alignItems: "center",
  gap: 0.75,
  px: 2,
  py: 1.25,
  borderBottom: `1px solid ${palette.border}`,
  background: gradients.auroraSoft,
} as const;

export { gradients, palette };
