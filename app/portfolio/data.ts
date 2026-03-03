import {
  TrendingUp,
  Users,
  Target,
  BarChart,
  Megaphone,
  Globe,
  Zap,
  Share2,
  Heart,
  MessageCircle,
} from "lucide-react";

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  tags: string[];
  overview?: string;
  features?: string[];
}

export interface Campaign {
  id: string;
  title: string;
  client: string;
  image: string;
  description: string;
  metrics: { label: string; value: string; icon: any }[];
  challenge: string;
  strategy: string;
  execution: string[];
  results: { label: string; value: string; detail: string }[];
  link?: string;
}

export const webProjects: Project[] = [
  {
    id: "fashion-store",
    title: "Aavriti — Ethnic Fashion Store",
    category: "E-Commerce",
    image: "",
    tags: ["Next.js", "Shopify", "Tailwind CSS", "Stripe"],
    overview:
      "A premium Indian ethnic fashion e-commerce platform featuring 400+ handcrafted pieces — from Banarasi sarees to designer lehengas. Multi-page interactive store with product detail pages, size guides, and seamless checkout.",
    features: [
      "Multi-page interactive storefront with product detail pages",
      "Advanced filtering by category, size, and colour",
      "Wishlist, size guide, and COD payment support",
      "Newsletter-driven loyalty with ₹500 first-order discount",
    ],
  },
  {
    id: "real-estate",
    title: "NestIn — Property Platform",
    category: "Real Estate",
    image: "",
    tags: ["Next.js", "PostgreSQL", "Mapbox", "Three.js"],
    overview:
      "A premium Indian real estate platform with 13,000+ verified properties across 50+ cities. Features BHK-based search, ₹Cr pricing, EMI calculators, and agent dashboards.",
    features: [
      "Location-based property search with ₹ price range filters",
      "EMI calculator and home loan pre-qualification",
      "Agent dashboard for listing management",
      "Featured listings with BHK configs and virtual tours",
    ],
  },
  {
    id: "it-company",
    title: "Nexlabs — IT Solutions",
    category: "Corporate Website",
    image: "",
    tags: ["React", "Node.js", "AWS", "Framer Motion"],
    overview:
      "A bold, dark-themed IT company website for Nexlabs — featuring AI/ML solutions, glassmorphic service cards, and client logos of Indian tech giants like Flipkart and Razorpay.",
    features: [
      "Glassmorphic service cards with hover animations",
      "Client logo showcase (Flipkart, Razorpay, CRED, Zerodha)",
      "300+ project stats and global presence section",
      "CTA with free 30-min consultation for Indian startups",
    ],
  },
  {
    id: "marketing-agency",
    title: "GrowthBox — Digital Marketing",
    category: "Marketing Agency",
    image: "",
    tags: ["Next.js", "Sanity CMS", "Google Ads API", "Tailwind"],
    overview:
      "India's #1 performance marketing agency website. Showcases ₹500Cr+ revenue generated for 200+ D2C brands with case studies for boAt and Mamaearth.",
    features: [
      "Case studies with animated ROI metrics (4.2x ROAS)",
      "Full-funnel service cards (SEO, Ads, Social, Email)",
      "Results banner with live stats (₹500Cr+ revenue)",
      "Free audit CTA with booking system integration",
    ],
  },
  {
    id: "food-site",
    title: "Tambula — Fine Dining",
    category: "Restaurant Website",
    image: "",
    tags: ["Next.js", "OpenTable API", "Cloudinary", "GSAP"],
    overview:
      "A premium Indian fine dining restaurant website for Tambula — Times Food Award winner in Bandra West, Mumbai. Features cinematic hero, Chef's Table signatures with ₹ pricing, and reservation system.",
    features: [
      "Cinematic hero with award badges and auto-play video",
      "Chef's signature dishes with ₹ pricing and descriptions",
      "Ambiance photo gallery with lightbox viewer",
      "Online reservation with OpenTable and WhatsApp booking",
    ],
  },
];

export const appProjects: Project[] = [
  {
    id: "fit-track",
    title: "FitTrack Pro",
    category: "Health & Fitness",
    image: "",
    tags: ["React Native", "HealthKit", "Firebase", "Redux"],
    overview:
      "A premium fitness tracking and social workout application featuring real-time activity rings, social feed, and detailed workout analytics.",
    features: [
      "Real-time activity ring synchronization",
      "Social feed for friend's workouts",
      "Comprehensive daily summary and metrics",
      "Custom workout logging and tracking",
    ],
  },
  {
    id: "urban-bites",
    title: "UrbanBites",
    category: "Food Delivery",
    image: "",
    tags: ["Flutter", "Google Maps", "Node.js", "Stripe"],
    overview:
      "A modern food delivery application featuring live order tracking, rich category browsing, and personalized restaurant recommendations.",
    features: [
      "Live order tracking with interactive maps",
      "Dynamic category filtering",
      "Personalized restaurant discovery feed",
      "Seamless checkout and payment integration",
    ],
  },
  {
    id: "secure-wallet",
    title: "SecureWallet",
    category: "Fintech",
    image: "",
    tags: ["Swift", "CoreData", "Biometrics", "WebSockets"],
    overview:
      "A next-generation cryptocurrency and fiat wallet application offering portfolio tracking, asset allocation visualizations, and secure transactions.",
    features: [
      "Biometric authentication and secure enclave integration",
      "Real-time asset allocation charts and portfolio tracking",
      "Instant crypto and fiat transaction history",
      "Live price updates and market trends",
    ],
  },
];

export const digitalCampaigns: Campaign[] = [
  {
    id: "wonder-mega-city",
    title: "Real Estate Lead Generation",
    client: "Wonder Mega City",
    image: "/wa3.jpeg",
    description:
      "A high-performing Meta lead generation campaign targeting potential homebuyers for a prominent real estate developer in Alwar.",
    metrics: [
      { label: "Leads", value: "250+", icon: Users },
      { label: "CPL", value: "₹36.20", icon: Target },
      { label: "Spend", value: "₹6.3k", icon: TrendingUp },
    ],
    challenge:
      "Wonder Mega City, a trusted real estate developer in Alwar, needed to generate high-quality leads for their premium 3BHK properties efficiently within a tight timeframe.",
    strategy:
      "We implemented targeted Meta Lead Generation forms specifically designed to capture intent from users interested in real estate, utilizing dynamic ad sets and A/B testing across CMJAY and Awaas Mela profiles.",
    execution: [
      "Launched highly targeted Meta lead form campaigns.",
      "Optimized ad sets across CMJAY and Awaas Mela audiences.",
      "Utilized both highest volume and ad set bidding strategies.",
      "Focused on efficient cost per lead optimization.",
    ],
    results: [
      {
        label: "175",
        value: "Total Leads",
        detail: "Generated across multiple highly targeted ad sets.",
      },
      {
        label: "₹36.20",
        value: "Cost per Lead",
        detail: "Maintained an incredibly efficient acquisition cost.",
      },
      {
        label: "₹6,335",
        value: "Total Spend",
        detail: "Maximized ROI on a focused budget.",
      },
    ],
  },
  {
    id: "cleato-care",
    title: "WhatsApp Lead Generation",
    client: "Cleato Care",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description:
      "An aggressive WhatsApp messaging campaign driving a massive volume of service inquiries for Cleato Care (TC Facilities Services Pvt. Ltd.) in Bangalore.",
    metrics: [
      { label: "Chats", value: "1.9k+", icon: Users },
      { label: "Cost/Conv.", value: "₹11.33", icon: Target },
      { label: "Spend", value: "₹22k+", icon: TrendingUp },
    ],
    challenge:
      "TC Facilities Services Pvt. Ltd. (Cleato Care), a Bangalore-based provider delivering Total Clean (TC) solutions needed to rapidly scale inbound leads across homes, offices, apartments, hospitals, retail stores, and commercial spaces.",
    strategy:
      "We launched hyper-optimized Meta messaging directing intent-driven traffic straight to WhatsApp for quick cleaning, full home deep cleaning, kitchen/bathroom deep cleaning, vessel washing, and professional manpower supply.",
    execution: [
      "Set up dedicated WhatsApp business integration for ad destinations.",
      "Highlighted trained, disciplined, and service-focused staff in ad copy.",
      "Scaled the highest performing ad sets to maximize total conversation volume.",
      "Continuously monitored cost per messaging conversation to maintain low acquisition costs.",
    ],
    results: [
      {
        label: "1,947",
        value: "Total Conversations",
        detail: "Direct WhatsApp inquiries generated.",
      },
      {
        label: "₹11.33",
        value: "Cost per Reply",
        detail: "Extremely cost-effective conversation starter.",
      },
      {
        label: "₹22,066",
        value: "Total Spend",
        detail: "Efficient budget utilization at scale.",
      },
    ],
  },
  {
    id: "lamara-patisserie",
    title: "Organic SEO & Social Growth",
    client: "Lamara Patisserie",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description:
      "A comprehensive SEO and social media strategy for a premium bakery in Bangalore, securing top rankings for high-intent keywords and building a loyal follower base.",
    metrics: [
      { label: "Traffic", value: "4.1k/mo", icon: TrendingUp },
      { label: "Followers", value: "9.3k+", icon: Users },
      { label: "Search Rank", value: "Top 3", icon: Target },
    ],
    challenge:
      "Lamara Patisserie needed to increase their organic visibility for highly competitive keywords like 'best cakes in bangalore' while simultaneously growing their brand presence on Instagram to showcase their exquisite celebration cakes.",
    strategy:
      "We implemented a dual-pronged approach: robust on-page and technical SEO to dominate local search results, paired with a visually engaging, curated Instagram content strategy to build community and showcase their custom cakes.",
    execution: [
      "Optimized website structure and content for high-volume local keywords.",
      "Secured #1 and #2 rankings for core non-branded search terms like 'best cakes in bangalore'.",
      "Revamped Instagram aesthetic and posting schedule to highlight custom celebration cakes.",
      "Engaged with local food community to grow Instagram following to over 9,300 highly engaged users.",
    ],
    results: [
      {
        label: "4.1K",
        value: "Monthly Traffic",
        detail: "Consistent highly-qualified organic local traffic.",
      },
      {
        label: "#2 Rank",
        value: "Search Position",
        detail: "Secured top visibility for 'best cakes in bangalore'.",
      },
      {
        label: "9.3K+",
        value: "Instagram Followers",
        detail: "A strong, engaged community of brand advocates.",
      },
    ],
  },
];

export const smmCampaigns: Campaign[] = [
  {
    id: "kumms-official",
    title: "Brand Building & Visual Identity",
    client: "Kumms Official",
    link: "https://www.instagram.com/kummsofficial",
    image: "/UIs/smm_kumms.png",
    description:
      "Curated aesthetic content and community engagement to build a strong, recognizable brand identity on Instagram.",
    metrics: [
      { label: "Engagement", value: "+120%", icon: Heart },
      { label: "Followers", value: "Active", icon: Users },
      { label: "Content Reach", value: "High", icon: TrendingUp },
    ],
    challenge:
      "Kumms Official needed to establish a strong, recognizable visual identity and build an engaged community from the ground up on Instagram in a competitive niche.",
    strategy:
      "We developed a cohesive grid layout, an engaging reels strategy, and interactive stories to capture attention, build trust, and encourage continuous user interaction.",
    execution: [
      "Created a consistent brand aesthetic and thematic color palette.",
      "Produced high-quality short-form video content (Reels) and educational carousels.",
      "Implemented a proactive community engagement and comment management strategy.",
      "Utilized trending audio and modern formats to maximize organic reach.",
    ],
    results: [
      {
        label: "+120%",
        value: "Engagement Rate",
        detail: "Massive increase in likes, comments, and shares.",
      },
      {
        label: "Viral",
        value: "Reels Reach",
        detail: "Significantly expanded top-of-funnel brand awareness.",
      },
      {
        label: "Strong",
        value: "Visual Identity",
        detail: "Created a highly recognizable and premium feed.",
      },
    ],
  },
  {
    id: "kevnit-digital",
    title: "B2B Social & Thought Leadership",
    client: "Kevnit Digital Solutions",
    link: "https://www.instagram.com/kevnitdigitalsolutions",
    image: "/UIs/smm_kevnit.png",
    description:
      "Establishing Kevnit as a thought leader in the digital space through valuable insights, agency culture showcases, and client success stories.",
    metrics: [
      { label: "Brand Trust", value: "High", icon: Share2 },
      { label: "Inquiries", value: "+45%", icon: MessageCircle },
      { label: "Profile Visits", value: "+200%", icon: TrendingUp },
    ],
    challenge:
      "As a digital agency, Kevnit needed to practice what they preach by maintaining an authoritative, engaging, and professional social media presence that attracts B2B clients.",
    strategy:
      "We focused on a mix of educational content, behind-the-scenes agency culture, and hard-hitting portfolio showcases to build trust and demonstrate expertise.",
    execution: [
      "Shared actionable digital marketing and development tips for businesses.",
      "Highlighted team members and agency culture to humanize the brand.",
      "Posted high-quality case studies and portfolio pieces as social proof.",
      "Optimized bio, link-in-bio, and highlights for maximum lead conversion.",
    ],
    results: [
      {
        label: "+45%",
        value: "DM Inquiries",
        detail:
          "Increase in organic B2B leads generated directly through Instagram.",
      },
      {
        label: "Authority",
        value: "Market Positioning",
        detail: "Established as a reliable and expert digital partner.",
      },
      {
        label: "+200%",
        value: "Profile Visits",
        detail: "Driven by highly shareable and saveable educational content.",
      },
    ],
  },
];
