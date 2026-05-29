"use client";

import { Box, Grid, Paper, Tooltip, Typography, alpha } from "@mui/material";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { skills } from "@/data/portfolio";
import { panelSx, palette } from "@/theme/theme";

export default function Skills() {
  return (
    <Box id="skills" component="section" sx={{ py: { xs: 8, md: 10 } }}>
      <SectionHeading title="</Skills>" subtitle="// tech-stack.yaml" />
      <Typography variant="h6" sx={{ mb: 3, fontFamily: "monospace", color: "text.secondary" }}>
        Tech Stack
      </Typography>
      <Grid container spacing={2}>
        {skills.map((skill) => (
          <Grid key={skill.name} item xs={6} sm={4} md={3} lg={2}>
            <Tooltip title={skill.name} arrow>
              <Paper
                elevation={0}
                sx={{
                  ...panelSx,
                  p: 2,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 1.5,
                  transition: "transform 0.2s, border-color 0.2s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: alpha(palette.cyan, 0.4),
                    boxShadow: `0 8px 24px ${alpha(palette.violet, 0.12)}`,
                  },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: 48,
                    height: 48,
                    filter: "invert" in skill && skill.invert ? "invert(1)" : "none",
                  }}
                >
                  <Image src={skill.logo} alt={skill.name} fill style={{ objectFit: "contain" }} />
                </Box>
                <Typography
                  variant="caption"
                  align="center"
                  sx={{ fontFamily: "monospace", color: "text.secondary" }}
                >
                  {skill.name}
                </Typography>
              </Paper>
            </Tooltip>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
