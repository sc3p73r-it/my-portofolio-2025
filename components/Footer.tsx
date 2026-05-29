"use client";

import {
  Box,
  Container,
  Fab,
  IconButton,
  Stack,
  Typography,
  alpha,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { siteConfig } from "@/data/portfolio";
import { palette } from "@/theme/theme";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        py: 6,
        borderTop: `1px solid ${palette.border}`,
        bgcolor: alpha(palette.bgElevated, 0.5),
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", md: "center" }}
          spacing={4}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{ fontFamily: "monospace", fontStyle: "italic", color: "secondary.main" }}
            >
              &quot;{siteConfig.quote}&quot;
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2, fontFamily: "monospace" }}>
              GetinTouch();
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
              <IconButton
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                color="inherit"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                color="inherit"
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                href={`mailto:${siteConfig.email}`}
                aria-label="Email"
                color="inherit"
              >
                <EmailIcon />
              </IconButton>
            </Stack>
          </Box>
          <Fab
            size="medium"
            color="primary"
            onClick={scrollTop}
            aria-label="Back to top"
            sx={{ alignSelf: { xs: "flex-end", md: "center" } }}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </Stack>
        <Typography variant="caption" color="text.secondary" display="block" sx={{ mt: 4 }}>
          Credits to ©{" "}
          <Box
            component="a"
            href="https://github.com/sc3p73r-it"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "secondary.main" }}
          >
            Sc3p73r
          </Box>
        </Typography>
      </Container>
    </Box>
  );
}
