"use client";

import type { ReactNode } from "react";
import { Box, Chip, LinearProgress, Stack, Typography, alpha, keyframes } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import BuildIcon from "@mui/icons-material/Build";
import ScienceIcon from "@mui/icons-material/Science";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { gradients, glowPanelSx, palette } from "@/theme/theme";

const pulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.92); }
`;

const shimmer = keyframes`
  0% { background-position: 200% center; }
  100% { background-position: -200% center; }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

type StepStatus = "success" | "running" | "pending";

type PipelineStep = {
  id: string;
  label: string;
  status: StepStatus;
  duration: string;
  progress: number;
  icon: ReactNode;
};

const steps: PipelineStep[] = [
  {
    id: "build",
    label: "build",
    status: "success",
    duration: "1m 24s",
    progress: 100,
    icon: <BuildIcon sx={{ fontSize: 18 }} />,
  },
  {
    id: "test",
    label: "test",
    status: "success",
    duration: "2m 08s",
    progress: 100,
    icon: <ScienceIcon sx={{ fontSize: 18 }} />,
  },
  {
    id: "deploy",
    label: "deploy",
    status: "running",
    duration: "0m 42s",
    progress: 68,
    icon: <RocketLaunchIcon sx={{ fontSize: 18 }} />,
  },
];

function StatusNode({ status }: { status: StepStatus }) {
  if (status === "success") {
    return (
      <Box
        sx={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${alpha(palette.emerald, 0.25)}, ${alpha(palette.cyan, 0.15)})`,
          border: `2px solid ${palette.emerald}`,
          boxShadow: `0 0 16px ${alpha(palette.emerald, 0.4)}`,
          color: palette.emerald,
          flexShrink: 0,
        }}
      >
        <CheckCircleIcon sx={{ fontSize: 20 }} />
      </Box>
    );
  }

  if (status === "running") {
    return (
      <Box
        sx={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: gradients.auroraSoft,
          border: `2px solid ${palette.cyan}`,
          boxShadow: `0 0 20px ${alpha(palette.cyan, 0.45)}`,
          color: palette.cyan,
          flexShrink: 0,
        }}
      >
        <AutorenewIcon sx={{ fontSize: 20, animation: `${spin} 1.2s linear infinite` }} />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: 36,
        height: 36,
        borderRadius: "50%",
        border: `2px dashed ${palette.border}`,
        flexShrink: 0,
      }}
    />
  );
}

function StepCard({ step, isLast }: { step: PipelineStep; isLast: boolean }) {
  const isRunning = step.status === "running";
  const isSuccess = step.status === "success";

  return (
    <Box sx={{ display: "flex", gap: 2, position: "relative" }}>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <StatusNode status={step.status} />
        {!isLast && (
          <Box
            sx={{
              width: 3,
              flex: 1,
              minHeight: 28,
              mt: 0.75,
              borderRadius: 2,
              background:
                isSuccess || isRunning
                  ? gradients.pipelineLine
                  : alpha(palette.textMuted, 0.2),
              opacity: isSuccess ? 1 : 0.6,
            }}
          />
        )}
      </Box>

      <Box
        sx={{
          flex: 1,
          mb: isLast ? 0 : 2,
          p: 1.75,
          borderRadius: 2,
          bgcolor: isRunning ? alpha(palette.cyan, 0.06) : alpha("#fff", 0.02),
          border: `1px solid ${isRunning ? alpha(palette.cyan, 0.28) : palette.border}`,
          transition: "border-color 0.3s, box-shadow 0.3s",
          ...(isRunning && {
            boxShadow: `0 0 24px ${alpha(palette.cyan, 0.12)}`,
          }),
        }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Box sx={{ color: isRunning ? "secondary.main" : "success.main", display: "flex" }}>
              {step.icon}
            </Box>
            <Typography variant="body2" sx={{ fontFamily: "monospace", fontWeight: 600 }}>
              {step.label}
            </Typography>
          </Stack>
          <Typography variant="caption" sx={{ fontFamily: "monospace", color: "text.secondary" }}>
            {step.duration}
          </Typography>
        </Stack>

        <Box sx={{ position: "relative", height: 6, borderRadius: 3, bgcolor: alpha("#fff", 0.06), overflow: "hidden" }}>
          <LinearProgress
            variant="determinate"
            value={step.progress}
            sx={{
              height: 6,
              borderRadius: 3,
              bgcolor: "transparent",
              "& .MuiLinearProgress-bar": {
                borderRadius: 3,
                background: isRunning ? gradients.progressRunning : gradients.pipelineLine,
                backgroundSize: isRunning ? "200% 100%" : "100% 100%",
                animation: isRunning ? `${shimmer} 2s linear infinite` : "none",
              },
            }}
          />
        </Box>

        <Stack direction="row" justifyContent="space-between" sx={{ mt: 0.75 }}>
          <Chip
            size="small"
            label={isRunning ? "running" : isSuccess ? "passed" : "queued"}
            sx={{
              height: 22,
              fontSize: "0.68rem",
              fontFamily: "monospace",
              bgcolor: isRunning
                ? alpha(palette.amber, 0.12)
                : alpha(palette.emerald, 0.12),
              color: isRunning ? palette.amber : palette.emerald,
              border: `1px solid ${isRunning ? alpha(palette.amber, 0.35) : alpha(palette.emerald, 0.35)}`,
            }}
          />
          <Typography variant="caption" color="text.secondary" sx={{ fontFamily: "monospace" }}>
            {step.progress}%
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}

export default function PipelineStatus() {
  return (
    <Box
      sx={{
        ...glowPanelSx,
        width: { xs: "100%", lg: 380 },
        p: 0,
      }}
    >
      <Box
        sx={{
          px: 2.5,
          py: 2,
          borderBottom: `1px solid ${palette.border}`,
          background: gradients.auroraSoft,
        }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
          <Box>
            <Stack direction="row" spacing={1} alignItems="center">
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  bgcolor: palette.amber,
                  boxShadow: `0 0 12px ${palette.amber}`,
                  animation: `${pulse} 1.5s ease-in-out infinite`,
                }}
              />
              <Typography
                variant="subtitle2"
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 700,
                  background: gradients.heading,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                pipeline #2847
              </Typography>
            </Stack>
            <Typography variant="caption" color="text.secondary" sx={{ fontFamily: "monospace", mt: 0.5, display: "block" }}>
              main · a3f9c2e · triggered 2m ago
            </Typography>
          </Box>
          <Chip
            label="CI/CD"
            size="small"
            sx={{
              fontFamily: "monospace",
              fontSize: "0.65rem",
              background: gradients.aurora,
              color: "#fff",
              fontWeight: 700,
              border: "none",
            }}
          />
        </Stack>
      </Box>

      <Box sx={{ p: 2.5 }}>
        {steps.map((step, index) => (
          <StepCard key={step.id} step={step} isLast={index === steps.length - 1} />
        ))}

        <Stack
          direction="row"
          spacing={1}
          sx={{
            mt: 2,
            pt: 2,
            borderTop: `1px solid ${palette.border}`,
          }}
        >
          {[
            { label: "uptime", value: "99.9%", color: palette.emerald },
            { label: "pods", value: "12/12", color: palette.cyan },
            { label: "latency", value: "24ms", color: palette.violetLight },
          ].map((metric) => (
            <Box
              key={metric.label}
              sx={{
                flex: 1,
                textAlign: "center",
                py: 1.25,
                px: 0.5,
                borderRadius: 2,
                bgcolor: alpha(metric.color, 0.08),
                border: `1px solid ${alpha(metric.color, 0.2)}`,
              }}
            >
              <Typography
                variant="caption"
                sx={{ fontFamily: "monospace", color: "text.secondary", display: "block", mb: 0.25 }}
              >
                {metric.label}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontFamily: "monospace", fontWeight: 700, color: metric.color }}
              >
                {metric.value}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
