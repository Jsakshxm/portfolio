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
    "Product Management",
    "User Experience",
    
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
        url: "https://youtube.com/jsakshxm",
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
        "Developed landing pages, backend systems, and database design.\n"+
"Implemented tanstack react query for caching\n"+
"Collaborated with Product Manager and Product Designer and understood about product lifecycle from ideation to execution",
    },
    {
      company: "Pamprazzi",
      href: "https://pamprazzi.com",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/pamprazzi_logo.jpeg",
      start: "July 24",
      end: "August  24",
      description:
        "Founding Engineer, streamlining self-care through an all-in-one platform.\n"+
"Built complete system architecture, from landing pages to database design.\n"+
"Developed scalable, user-friendly booking solutions for personalized care services.",
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
        {
          type: "Website",
          href: "https://note-wiise.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dgm7kbkn4/video/upload/v1739814939/NoteWiise_d763dl.mp4",
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
      active: false,
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
    {
      title: "Filter Pixel",
      href: "https://filter-pixel-delta.vercel.app/",
      dates: "August 2024 - August 2024",
      active: true,
      description:
        "Image Processing App",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        ,



      ],
      links: [
        {
          type: "Website",
          href: "https://filter-pixel-delta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://res.cloudinary.com/dgm7kbkn4/image/upload/v1730731268/Screenshot_2024-11-04_at_8.10.17_PM_nwbtu8.png",
      video:
        "",
    },
    {
      title: "PDF God",
      href: "https://treasurehunt.saavyas.in",
      dates: "August 2024 - August 2024",
      active: true,
      description:
        "Image Processing App",
      technologies: [
        "Next.js",
        "Typescript",


        "TailwindCSS",
        ""



      ],
      links: [
        {
          type: "Website",
          href: "https://filter-pixel-delta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/jsakshxm/socio-bot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://www.loom.com/share/d14564a66988494ba95cb7d74f01112b?sid=2f60175a-c765-4e5e-8d27-6fedc96a198c",
    },
    {
      title: "Treasure Hunt NITGOA 2024",
      href: "https://treasurehunt.saavyas.in",
      dates: "August 2024 - August 2024",
      active: true,
      description:
        "Image Processing App",
      technologies: [
        "Next.js",
        "Typescript",


        "TailwindCSS",
        ""



      ],
      links: [
        {
          type: "Website",
          href: "https://filter-pixel-delta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/jsakshxm/socio-bot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://res.cloudinary.com/dgm7kbkn4/image/upload/v1730744541/Screenshot_2024-11-04_at_11.50.50_PM_wclsoi.png",
      video:
        "",
    },
  ],
 
} as const;
