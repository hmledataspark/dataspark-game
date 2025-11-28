import { Building2, Rocket, Brain, Users, Newspaper, MapPin, Briefcase, Settings } from 'lucide-react';

export const companyData = [
  {
    id: 1,
    title: "DataSpark HQ",
    subtitle: "Automating the Future",
    year: "Frankfurt",
    description: "Headquartered in Frankfurt am Main (Mainzer Landstraße 41-45), DataSpark specializes in AI-supported automation. We help companies fully exploit their automation potential with intelligent, individually developed AI agents.",
    position: { x: 400, y: 400 },
    type: "hq",
    color: "bg-blue-600",
    icon: "Building2"
  },
  {
    id: 2,
    title: "AI Consulting",
    subtitle: "Strategy & Roadmap",
    year: "Service",
    description: "We analyze your current situation, design the target picture for AI, and develop the appropriate Use Case Roadmap. From AI Vision Canvas to strategic implementation.",
    position: { x: 1200, y: 500 },
    type: "service",
    color: "bg-indigo-500",
    icon: "Brain"
  },
  {
    id: 3,
    title: "AI Development",
    subtitle: "Implementation",
    year: "Service",
    description: "We implement your data and AI use cases from the first solution draft to the go-live of the finished solution. Building tailored AI agents for complex processes.",
    position: { x: 1200, y: 1200 },
    type: "service",
    color: "bg-purple-500",
    icon: "Rocket"
  },
  {
    id: 4,
    title: "AI Operations",
    subtitle: "Maintenance & Care",
    year: "Service",
    description: "We operate, maintain, and care for the developed solutions for you in various operating environments, ensuring your AI agents run smoothly 24/7.",
    position: { x: 2000, y: 800 },
    type: "service",
    color: "bg-emerald-500",
    icon: "Settings"
  },
  {
    id: 5,
    title: "Intelligent Agents",
    subtitle: "Our Core Technology",
    year: "Products",
    description: "From Chat Agents for direct dialogue to Auto Agents that manage processes in the background. We combine LLMs with orchestrated workflow logic to automate complex tasks.",
    position: { x: 2800, y: 600 },
    type: "product",
    color: "bg-orange-500",
    icon: "Bot" // We'll handle icon mapping in World/UI
  },
  {
    id: 6,
    title: "Join the Team",
    subtitle: "We are hiring!",
    year: "Careers",
    description: "Looking for Consultants in AI & Analytics or Werkstudents? We offer a culture of innovation, team spirit, and personal development. Join us in defining the limits of automatability.",
    position: { x: 3200, y: 1400 },
    type: "job",
    color: "bg-rose-500",
    icon: "Users"
  },
  {
    id: 7,
    title: "Success Stories",
    subtitle: "Proven Results",
    year: "Clients",
    description: "Trusted by companies like DZ Compliance Partner, EIDOS S.r.l., and L. Possehl & Co. mbH. We deliver measurable value: up to 90% less manual effort and 25% higher close rates.",
    position: { x: 2200, y: 1600 },
    type: "success",
    color: "bg-amber-500",
    icon: "Trophy"
  },
  {
    id: 8,
    title: "Latest Insights",
    subtitle: "DataSpark Blog",
    year: "Blog",
    description: "Read about the 'AI Vision Canvas' to move from chaos to clarity, or how our 'AI Discovery Workshops' help identify high-value use cases.",
    position: { x: 600, y: 1400 },
    type: "blog",
    color: "bg-cyan-600",
    icon: "Newspaper"
  }
];

