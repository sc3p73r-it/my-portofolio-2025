export const siteConfig = {
  name: "Sc3p73r",
  fullName: "Htet Oo Wai Yan",
  title: "Cloud & DevOps",
  tagline:
    "Experienced in SysOps, system design, Linux, containers, and networking — improving reliability and optimizing performance in cloud-native environments.",
  email: "sc3p73r@outlook.com",
  linkedin: "https://www.linkedin.com/in/sc3p73r",
  github: "https://github.com/sc3p73r-it",
  blog: "https://blog.vitaltechmyanmar.com",
  avatar: "/src/webp/howy.png",
  quote: "you build it, you run it",
};

export const navItems = [
  { id: "home", label: "</Home>" },
  { id: "about", label: "</AboutMe>" },
  { id: "skills", label: "</Skills>" },
  { id: "projects", label: "</Projects>" },
  { id: "blogs", label: "</Blogs>", href: siteConfig.blog, external: true },
] as const;

export const skills = [
  { name: "Linux", logo: "/src/png/Linux.png" },
  { name: "Docker", logo: "/src/png/Docker.png" },
  { name: "Podman", logo: "/src/png/Podman.png" },
  { name: "Kubernetes", logo: "/src/png/Kubernetes.png" },
  { name: "AWS", logo: "/src/png/AWS.png" },
  { name: "Vercel", logo: "/src/png/Vercel.png" },
  { name: "Node.js", logo: "/src/png/node.png" },
  { name: "GitLab", logo: "/src/png/GitLab.png" },
  { name: "GitHub", logo: "/src/png/githublogo.png", invert: true },
  { name: "GitHub Actions", logo: "/src/png/GitHub Actions.png", invert: true },
  { name: "Git", logo: "/src/png/gitlogo.png" },
  { name: "Azure", logo: "/src/png/Azure.png" },
  { name: "Cloudflare", logo: "/src/png/Cloudflare.png" },
  { name: "VMware vSphere", logo: "/src/png/vSphere.png" },
  { name: "Jenkins", logo: "/src/png/Jenkins.png" },
  { name: "Terraform", logo: "/src/png/Terraform.png" },
  { name: "Grafana", logo: "/src/png/Grafana.png" },
] as const;

export type Project = {
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  status?: "deployed" | "training" | "internal";
};

export const projects: Project[] = [
  {
    title: "M365 Tenant to Tenant Migration",
    description:
      "Comprehensive solution for organizations migrating Microsoft 365 data seamlessly between tenants.",
    image: "/src/webp/report.png",
    liveUrl: "/src/webp/report.png",
    status: "deployed",
  },
  {
    title: "Implementation ThinkAgile HCI Node Setup",
    description:
      "Robust data center infrastructure for Metro Bank — high availability, security, and scalability for digital banking.",
    image: "/src/webp/hci.png",
    status: "deployed",
  },
  {
    title: "Open-Source IT Asset Management System",
    description:
      "Snipe-IT based platform for inventory tracking, assignments, and lifecycle reporting.",
    image: "/src/webp/dashboard.png",
    liveUrl: "https://assets.kmagroup.com.mm",
    githubUrl: "https://github.com/sc3p73r-it/snipe-it",
    status: "deployed",
  },
  {
    title: "AWS CodeBuild",
    description:
      "Fully managed build service that compiles source code, runs tests, and produces software packages.",
    image: "/src/webp/awscodebuild.png",
    status: "deployed",
  },
  {
    title: "vGPU Server Deployment",
    description: "vGPU server deployment for Channel-K Media.",
    image: "/src/webp/nvidia.png",
    status: "deployed",
  },
  {
    title: "DevOps Fundamentals Class",
    description: "Corporate training — DevOps Fundamentals [Metro Bank].",
    image: "/src/webp/devops.png",
    status: "training",
  },
  {
    title: "EKS Deployment with GitHub Actions",
    description: "Kubernetes workloads on EKS with GitHub Actions CI/CD.",
    image: "/src/webp/eks-deploy.png",
    status: "deployed",
  },
];
