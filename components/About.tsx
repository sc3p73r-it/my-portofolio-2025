"use client";

import { Box, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/data/portfolio";
import { panelSx } from "@/theme/theme";

export default function About() {
  return (
    <Box id="about" component="section" sx={{ py: { xs: 8, md: 10 } }}>
      <SectionHeading title="</AboutMe>" subtitle="// whoami" />
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={7}>
          <Paper elevation={0} sx={{ ...panelSx, p: { xs: 3, md: 4 } }}>
            <Typography variant="body1" color="text.secondary" paragraph>
              I&apos;m {siteConfig.fullName}, a System Engineer with over 6 years of experience in
              the IT industry related to Network, System and DevOps Culture.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              I focus on open-source platforms in production environments. I enjoy system
              development and solving complex infrastructure problems — deployments, and
              troubleshooting applications on-prem and in the cloud.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={5}>
          <Paper
            elevation={0}
            sx={{
              ...panelSx,
              p: 2,
              display: "flex",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: 320,
                aspectRatio: "1",
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <Image
                src={siteConfig.avatar}
                alt={siteConfig.fullName}
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                style={{ objectFit: "cover" }}
                priority
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
