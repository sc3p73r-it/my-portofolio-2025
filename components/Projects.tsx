"use client";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Stack,
  Typography,
  alpha,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/portfolio";
import { palette } from "@/theme/theme";

const statusColor = {
  deployed: "success",
  training: "warning",
  internal: "default",
} as const;

const statusLabel = {
  deployed: "deployed",
  training: "training",
  internal: "internal",
} as const;

export default function Projects() {
  return (
    <Box id="projects" component="section" sx={{ py: { xs: 8, md: 10 } }}>
      <SectionHeading title="</Projects>" subtitle="// deployments.log" />
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid key={project.title} item xs={12} lg={6}>
            <Card
              elevation={0}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                bgcolor: alpha(palette.bgElevated, 0.6),
                border: `1px solid ${palette.border}`,
                overflow: "hidden",
                transition: "border-color 0.2s, box-shadow 0.2s",
                "&:hover": {
                  borderColor: alpha(palette.violet, 0.5),
                  boxShadow: `0 8px 28px ${alpha(palette.violet, 0.15)}`,
                },
              }}
            >
              <CardMedia sx={{ width: { xs: "100%", sm: 200 }, flexShrink: 0, position: "relative" }}>
                <Box sx={{ position: "relative", width: "100%", height: { xs: 180, sm: "100%" }, minHeight: 160 }}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 600px) 100vw, 200px"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </CardMedia>
              <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
                <CardContent sx={{ flex: 1 }}>
                  <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                    {project.status && (
                      <Chip
                        size="small"
                        label={statusLabel[project.status]}
                        color={statusColor[project.status]}
                        variant="outlined"
                      />
                    )}
                  </Stack>
                  <Typography variant="h6" component="h3" gutterBottom sx={{ fontFamily: "monospace" }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ px: 2, pb: 2, gap: 1 }}>
                  {project.githubUrl && (
                    <Button
                      size="small"
                      variant="outlined"
                      startIcon={<GitHubIcon />}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      size="small"
                      variant="contained"
                      endIcon={<OpenInNewIcon />}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live view
                    </Button>
                  )}
                </CardActions>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
