"use client";

import {
  Box,
  Button,
  Chip,
  Paper,
  Stack,
  Typography,
  alpha,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import CircleIcon from "@mui/icons-material/Circle";
import PipelineStatus from "@/components/PipelineStatus";
import { siteConfig } from "@/data/portfolio";
import { gradients, panelSx, terminalHeaderSx } from "@/theme/theme";

export default function Hero() {
  return (
    <Box
      id="home"
      component="section"
      sx={{
        minHeight: { xs: "85vh", md: "90vh" },
        display: "flex",
        alignItems: "center",
        py: { xs: 6, md: 8 },
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 1100, mx: "auto" }}>
        <Stack direction={{ xs: "column", lg: "row" }} spacing={4} alignItems="stretch">
          <Paper elevation={0} sx={{ ...panelSx, flex: 1, overflow: "hidden" }}>
            <Box sx={terminalHeaderSx}>
              <CircleIcon sx={{ fontSize: 10, color: "#ff5f57" }} />
              <CircleIcon sx={{ fontSize: 10, color: "#febc2e" }} />
              <CircleIcon sx={{ fontSize: 10, color: "#28c840" }} />
              <Typography variant="caption" sx={{ ml: 1, fontFamily: "monospace", color: "text.secondary" }}>
                ~/waiyan — bash
              </Typography>
            </Box>
            <Box sx={{ p: { xs: 3, md: 4 } }}>
              <Typography
                variant="body1"
                sx={{ fontFamily: "monospace", color: "secondary.main", mb: 1 }}
              >
                Hello();
              </Typography>
              <Typography
                variant="h3"
                component="h1"
                sx={{
                  fontSize: { xs: "2rem", md: "2.75rem" },
                  mb: 1,
                  background: gradients.heroTitle,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {siteConfig.fullName}.
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "monospace",
                  mb: 2,
                  background: gradients.aurora,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {siteConfig.title}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 560, mb: 3 }}>
                {siteConfig.tagline}
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 3 }}>
                <Chip
                  label="sysadmin"
                  size="small"
                  variant="outlined"
                  sx={{ borderColor: alpha("#22d3ee", 0.4), color: "secondary.light" }}
                />
                <Chip label="kubernetes" size="small" variant="outlined" />
                <Chip
                  label="ci/cd"
                  size="small"
                  variant="outlined"
                  sx={{ borderColor: alpha("#8b5cf6", 0.45), color: "primary.light" }}
                />
                <Chip label="cloud-native" size="small" variant="outlined" />
              </Stack>
              <Button
                variant="contained"
                size="large"
                startIcon={<EmailIcon />}
                href={`mailto:${siteConfig.email}`}
                sx={{
                  background: gradients.button,
                  boxShadow: `0 10px 28px ${alpha("#8b5cf6", 0.4)}`,
                  "&:hover": {
                    background: gradients.button,
                    filter: "brightness(1.08)",
                    boxShadow: `0 12px 32px ${alpha("#22d3ee", 0.35)}`,
                  },
                }}
              >
                Ping Me!
              </Button>
            </Box>
          </Paper>

          <PipelineStatus />
        </Stack>
      </Box>
    </Box>
  );
}
