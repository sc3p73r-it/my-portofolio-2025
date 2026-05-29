"use client";

import { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  alpha,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import TerminalIcon from "@mui/icons-material/Terminal";
import { navItems } from "@/data/portfolio";
import { palette } from "@/theme/theme";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = navItems
      .filter((item) => !("external" in item && item.external))
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const onScroll = () => {
      let current = "home";
      for (const section of sections) {
        if (window.scrollY >= section.offsetTop - 120) {
          current = section.id;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinkSx = (id: string) => ({
    fontFamily: "monospace",
    fontSize: "0.85rem",
    color: active === id ? "secondary.main" : "text.secondary",
    cursor: "pointer",
    px: 1.5,
    py: 0.75,
    borderRadius: 1,
    border: `1px solid ${active === id ? alpha(palette.cyan, 0.4) : "transparent"}`,
    bgcolor: active === id ? alpha(palette.cyan, 0.1) : "transparent",
    transition: "all 0.2s",
    "&:hover": {
      color: "secondary.main",
      bgcolor: alpha(palette.violet, 0.08),
    },
  });

  const handleNav = (id: string, href?: string, external?: boolean) => {
    if (external && href) {
      window.open(href, "_blank", "noopener,noreferrer");
      setMobileOpen(false);
      return;
    }
    scrollToSection(id);
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ width: 260, pt: 2, px: 1 }}>
      <List>
        {navItems.map((item) => (
          <ListItemButton
            key={item.id}
            onClick={() =>
              handleNav(
                item.id,
                "href" in item ? item.href : undefined,
                "external" in item ? item.external : false
              )
            }
            selected={active === item.id}
            sx={{ borderRadius: 1, mb: 0.5 }}
          >
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{ fontFamily: "monospace", fontSize: "0.9rem" }}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" elevation={0} sx={{ bgcolor: alpha(palette.bg, 0.88) }}>
        <Toolbar sx={{ justifyContent: "space-between", gap: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <TerminalIcon sx={{ color: "secondary.main", fontSize: 22 }} />
            <Typography variant="body2" sx={{ fontFamily: "monospace", color: "text.secondary" }}>
              sc3p73r@portfolio
            </Typography>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.5 }}>
            {navItems.map((item) => (
              <Typography
                key={item.id}
                component="span"
                onClick={() =>
                  handleNav(
                    item.id,
                    "href" in item ? item.href : undefined,
                    "external" in item ? item.external : false
                  )
                }
                sx={navLinkSx(item.id)}
              >
                {item.label}
              </Typography>
            ))}
          </Box>

          <IconButton
            color="inherit"
            edge="end"
            onClick={() => setMobileOpen(true)}
            sx={{ display: { md: "none" } }}
            aria-label="Open menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{ sx: { bgcolor: "background.paper" } }}
      >
        {drawer}
      </Drawer>
      <Toolbar />
    </>
  );
}
