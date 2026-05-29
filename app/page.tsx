import { Box, Container } from "@mui/material";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <Box component="main">
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </Container>
      <Footer />
    </Box>
  );
}
