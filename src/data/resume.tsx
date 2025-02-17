import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Saksham Jain", 
  initials: "SJ",
  url: "https://sakshamjain.live",
  location: "Remote",

  description:
  "Full-stack developer passionate about creating impactful digital products. I've worked with multiple startups, building tools and solutions that people continue to use. I love turning ideas into real-world applications and thrive on solving problems through technology.",
  summary:
  "Throughout my journey, I’ve always been a student of technology, constantly learning and taking on new challenges. I've had the privilege of working with multiple startups, building and scaling products that solve real problems. From winning hackathons to leading development teams, I love taking responsibility and delivering impactful solutions. Building digital products that people use and love is my passion.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "JavaScript",
    "Postgres",
    "Docker",
    "TailwindCSS",
    "C",
    "C++",
    "ShadCN UI",
    "AI",
    "Material UI",
    "MongoDB",
    "Supabase",
    "Firebase",
    "Project Management",
    "Stakeholder Management",
    "Product-Market Fit Analysis"
    
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "jsaksham.work@gmail.com",
    tel: "+91 9669420333",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/jsakshxm",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https:linkedin.com/in/jsakshxm",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/jsakshxm",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@jsakshxm",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:jsakshxm.work@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    
    {
      company: "Exp.club",
      badges: [],
      href: "https://exp.club",
      location: "Remote",
      title: "Founding Engineer",
      logoUrl: "/exp.club.jpeg",
      start: "August 2024",
      end: "Present",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Pamprazzi",
      href: "",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/pamprazzi_logo.jpeg",
      start: "January 2020",
      end: "April 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "Edgame",
      href: "https://edgame.io",
      badges: [],
      location: "Remote",
      title: "Web Developer",
      logoUrl: "/edgame_logo.jpeg",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Developed games using Unity, focusing on player actions to enhance game immersion\nDesigned user interfaces that are easy to use, aiming for straightforward and intuitive navigation\nBuilt web applications with Next.js, ensuring quick loading times and interactive features.",
    },
  ],
  education: [
    {
      school: "National Institute of Technology, Goa",
      href: "https://nitgoa.ac.in",
      degree: "BTech",
      logoUrl: "/nitgoa.jpeg",
      start: "",
      end: "",
    },
    
  ],
  projects: [
    {
      title: "DIY Learning",
      href: "https://diy-learning.sakshamjain.live",
      dates: "August 24 - Present",
      active: true,
      description:
        "DIY-Learning is not your typical course platform. It's an AI-driven tool that crafts tailor-made courses based on your learning preferences and goals. We understand that everyone has a unique learning style, and with DIY-Learning, you get a course experience that is customized just for you.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Drizzle",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://diy-learning.sakshamjain.live",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dgm7kbkn4/video/upload/v1729367895/diy_gpcgzd.mp4",
    },
    {
      title: "NoteWiise",
      href: "https://note-wiise.vercel.app",
      dates: "August 24 - Present",
      active: true,
      description:
        "Built a web app where users can chat and take notes. Added secure sign-up and login for a smooth experience.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "TailwindCSS",
        "RAG",
        "Paypal",
        "Shadcn UI",
      ],
      links: [
        {type: "Website",
          href: "https://note-wiise.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dgm7kbkn4/video/upload/v1739814939/NoteWiise_d763dl.mp4",
    },
    {
      title: "Life-Stage Wealth Advisor",
      href: "https://docs.google.com/document/d/1AclMpKL9auIk2BqLfutfQ2WeuMNNWFd6gjZWxXNbHqc/edit?usp=sharing",
      dates: "Jan 2025 - Present",
      active: true,
      description:
        "The Life-Stage Wealth Advisor is a GenAI-powered co-pilot that uses RAG to deliver hyper-personalized investment strategies for Indian users. It dynamically adjusts portfolios based on life milestones, risk tolerance, and tax optimization, offering real-time guidance and behavioral coaching to ensure long-term wealth creation. This solution bridges gaps in personalization and proactive planning, setting Neosurge apart in the wealth-tech space..",
      technologies: [
        "Research & Analysis",
        "Product Ideation",
        "Project Management",
        "Technical Understanding",
        "RAG",
        "Problem-Solving",

      ],
      links: [
        {type: "Website",
          href: "https://docs.google.com/document/d/1AclMpKL9auIk2BqLfutfQ2WeuMNNWFd6gjZWxXNbHqc/edit?usp=sharing",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://res.cloudinary.com/dgm7kbkn4/image/upload/v1739821060/Screenshot_2025-02-18_at_1.06.42_AM_zw4nsw.png",
      video:
        "",
    },
    {
      title: "NutFlex: Movie Recommendation System",
      href: "https://nutflex-gpt.vercel.app",
      dates: "June 2023 - Present",
      active: true,
      description:
        "NutFlex GPT is an intelligent movie recommendation system designed to help you find your next favorite film effortlessly. Whether you're looking for the latest trending movies or personalized suggestions based on your taste, NutFlex GPT has you covered.",
      technologies: [
        "Next.js",
        "javascript",
"LLM",

        "TailwindCSS",



      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://res.cloudinary.com/dgm7kbkn4/video/upload/v1729442100/loom-video_1_behwdm.mp4",
    },
    {
      title: "Socio bot",
      href: "https://t.me/socio_bot",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://t.me/socio_bot",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/jsakshxm/socio-bot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://res.cloudinary.com/dgm7kbkn4/video/upload/v1729370254/socio_bot_tmr16b.mp4",
    },
    {
      title: "NITG Menu bot",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://t.me/NitgMenu_bot",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dgm7kbkn4/video/upload/v1729441689/NitgMenu_bot_j2ea5t.mp4",
    },
    {
      title: "Hola Youtube [No Ads]",
      href: "https://hola-youtube.vercel.app",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "javascript",
        "Youtube API",
       
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://hola-youtube.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/jsakshxm/hola-youtube",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://res.cloudinary.com/dgm7kbkn4/image/upload/v1729444606/Screenshot_2024-02-27_at_12.20.57_AM_ngoelp.png",
      video: "",
    },
    {
      title: "Book Exchange Platform",
      href: "https://hola-youtube.vercel.app",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "javascript",
        "Youtube API",
       
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://hola-youtube.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/jsakshxm/hola-youtube",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://res.cloudinary.com/dgm7kbkn4/image/upload/v1729444606/Screenshot_2024-02-27_at_12.20.57_AM_ngoelp.png",
      video: "",
    },
  ],
 
} as const;