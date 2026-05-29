"use client";

import { Box, Typography } from "@mui/material";
import { gradients } from "@/theme/theme";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <Box sx={{ mb: { xs: 3, md: 4 } }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          background: gradients.heading,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1, fontFamily: "monospace" }}>
          {subtitle}
        </Typography>
      )}
      <Box
        sx={{
          mt: 2,
          height: 3,
          width: 140,
          background: gradients.aurora,
          borderRadius: 2,
          opacity: 0.85,
        }}
      />
    </Box>
  );
}
