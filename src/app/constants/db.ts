import { DiNginx } from "react-icons/di";
import { IconType } from "react-icons";
import {
  FaAws,
  FaCss3Alt,
  FaDocker,
  FaEnvelope,
  FaGit,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import {
  SiCplusplus,
  SiDaisyui,
  SiDart,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiGraphql,
  SiHono,
  SiKotlin,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReactquery,
  SiRedis,
  SiShadcnui,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { GiGemini } from "react-icons/gi";
import { GoHome } from "react-icons/go";
import { PiUser } from "react-icons/pi";
import { TbPencil } from "react-icons/tb";
import { BsChatText } from "react-icons/bs";
import { IoFileTrayOutline } from "react-icons/io5";

export const _icons = {
  github: FiGithub,
  linkedin: FiLinkedin,
  instagram: FiInstagram,
  whatsapp: FaWhatsapp,
  telegram: FaTelegram,
  mail: FaEnvelope,
  twitter: FiTwitter,
};

export const _menuIcons = [
  {
    icon: GoHome,
    title: "Home",
    link: "/",
  },
  {
    icon: PiUser,
    title: "About",
    link: "/about",
  },
  {
    icon: IoFileTrayOutline,
    title: "Projects",
    link: "/projects",
  },
  {
    icon: TbPencil,
    title: "Blogs",
    link: "/blogs",
  },
  {
    icon: BsChatText,
    title: "Contact",
    link: "/contact",
  },
];

export const _skillsIcons = {
  html: FaHtml5,
  css: FaCss3Alt,
  javascript: FaJs,
  react: FaReact,
  nextjs: SiNextdotjs,
  tailwindcss: SiTailwindcss,
  nodejs: FaNodeJs,
  expressjs: SiExpress,
  graphql: SiGraphql,
  hono: SiHono,
  prisma: SiPrisma,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  redis: SiRedis,
  socketio: SiSocketdotio,
  git: FaGit,
  github: FaGithub,
  vscode: VscCode,
  postman: SiPostman,
  docker: FaDocker,
  aws: FaAws,
  cpp: SiCplusplus,
  typescript: SiTypescript,
  java: FaJava,
  python: FaPython,
  flutter: SiFlutter,
  firebase: SiFirebase,
  kotlin: SiKotlin,
  dart: SiDart,
  reactNative: FaReact,
  reactQuery: SiReactquery,
  shadcnUI: SiShadcnui,
  daisyUI: SiDaisyui,
  nginx: DiNginx,
};

export const education = [
  {
    id: "plus-two",
    degree: "Plus Two",
    university: "Ramarani institute of science and technology",
    startYear: "2020",
    endYear: "2022",
    location: "Balasore,Odisha",
  },
  {
    id: "ug",
    degree: "BSc in Computer Science",
    university: "Fakir Mohan Autonomous College",
    startYear: "2022",
    endYear: "2025",
    location: "Balasore,Odisha",
  },
];

export const _skills: {
  [key: string]: {
    name: string;
    icon: IconType;
  };
} = {
  html: {
    name: "HTML",
    icon: _skillsIcons.html,
  },
  css: {
    name: "CSS",
    icon: _skillsIcons.css,
  },
  javascript: {
    name: "JavaScript",
    icon: _skillsIcons.javascript,
  },
  react: {
    name: "React",
    icon: _skillsIcons.react,
  },
  nextjs: {
    name: "Next.js",
    icon: _skillsIcons.nextjs,
  },
  tailwindcss: {
    name: "Tailwind CSS",
    icon: _skillsIcons.tailwindcss,
  },
  nodejs: {
    name: "Node.js",
    icon: _skillsIcons.nodejs,
  },
  expressjs: {
    name: "Express.js",
    icon: _skillsIcons.expressjs,
  },
  graphql: {
    name: "GraphQL",
    icon: _skillsIcons.graphql,
  },
  hono: {
    name: "Hono",
    icon: _skillsIcons.hono,
  },
  prisma: {
    name: "Prisma",
    icon: _skillsIcons.prisma,
  },
  mongodb: {
    name: "MongoDB",
    icon: _skillsIcons.mongodb,
  },
  postgresql: {
    name: "PostgreSQL",
    icon: _skillsIcons.postgresql,
  },
  mysql: {
    name: "MySQL",
    icon: _skillsIcons.mysql,
  },
  redis: {
    name: "Redis",
    icon: _skillsIcons.redis,
  },
  socketio: {
    name: "Socket.io",
    icon: _skillsIcons.socketio,
  },
  git: {
    name: "Git",
    icon: _skillsIcons.git,
  },
  github: {
    name: "GitHub",
    icon: _skillsIcons.github,
  },
  vscode: {
    name: "VS Code",
    icon: _skillsIcons.vscode,
  },
  postman: {
    name: "Postman",
    icon: _skillsIcons.postman,
  },
  docker: {
    name: "Docker",
    icon: _skillsIcons.docker,
  },
  aws: {
    name: "AWS",
    icon: _skillsIcons.aws,
  },
  cpp: {
    name: "C++",
    icon: _skillsIcons.cpp,
  },
  typescript: {
    name: "TypeScript",
    icon: _skillsIcons.typescript,
  },
  java: {
    name: "Java",
    icon: _skillsIcons.java,
  },
  python: {
    name: "Python",
    icon: _skillsIcons.python,
  },
  flutter: {
    name: "Flutter",
    icon: _skillsIcons.flutter,
  },
  firebase: {
    name: "Firebase",
    icon: _skillsIcons.firebase,
  },
  kotlin: {
    name: "Kotlin",
    icon: _skillsIcons.kotlin,
  },
  dart: {
    name: "Dart",
    icon: _skillsIcons.dart,
  },
  reactNative: {
    name: "React Native",
    icon: _skillsIcons.reactNative,
  },
  reactQuery: {
    name: "React Query",
    icon: _skillsIcons.reactQuery,
  },
  shadcnUI: {
    name: "Shadcn UI",
    icon: _skillsIcons.shadcnUI,
  },
  daisyUI: {
    name: "Daisy UI",
    icon: _skillsIcons.daisyUI,
  },
  nginx: {
    name: "Nginx",
    icon: _skillsIcons.nginx,
  },
};

export const techStacks = {
  frontend: [
    _skills.html,
    _skills.css,
    _skills.javascript,
    _skills.react,
    _skills.nextjs,
    _skills.tailwindcss,
    _skills.reactNative,
    _skills.reactQuery,
    _skills.shadcnUI,
    _skills.daisyUI,
  ],
  backend: [
    _skills.nodejs,
    _skills.expressjs,
    _skills.graphql,
    _skills.hono,
    _skills.prisma,
    _skills.mongodb,
    _skills.postgresql,
    _skills.mysql,
    _skills.redis,
    _skills.socketio,
  ],
  tools: [
    _skills.git,
    _skills.github,
    _skills.vscode,
    _skills.postman,
    _skills.docker,
    _skills.aws,
    _skills.nginx,
  ],
  languages: [_skills.cpp, _skills.typescript, _skills.java],
};

// export const socialLinks = {
//   github: "https://github.com/jyotishankar04",
//   linkedin: "https://www.linkedin.com/in/jyotishankar-patra/",
//   instagrm: "https://www.instagram.com/dev.suvam/",
//   twitter: "https://twitter.com/devsuvam1",
//   whatsapp: "https://wa.me/919861250893",
//   mail: "mailto:devsuvam@myyahoo.com",
//   telegram: "https://t.me/devsuvam",
// };

export const socialLinks = [
  {
    name: "GitHub",
    link: "https://github.com/jyotishankar04",
    icon: _icons.github,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/jyotishankar-patra/",
    icon: _icons.linkedin,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/dev.suvam/",
    icon: _icons.instagram,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/devsuvam1",
    icon: _icons.twitter,
  },
  {
    name: "WhatsApp",
    link: "https://wa.me/919861250893",
    icon: _icons.whatsapp,
  },
  {
    name: "Mail",
    link: "mailto:devsuvam@myyahoo.com",
    icon: _icons.mail,
  },
  {
    name: "Telegram",
    link: "https://t.me/devsuvam",
    icon: _icons.telegram,
  },
];

export const _projects: {
  id: string;
  title: string;
  isCurrent: boolean;
  description: string;
  detailedDescription: string;
  source: {
    github?: string;
    live?: string;
    backend?: string;
    frontend?: string;
  };
  image: string;
  techStacks: {
    name: string;
    icon: IconType;
  }[];
}[] = [
  {
    id: "quizzify",
    title: "Quizzify",
    isCurrent: true,
    description:
      "An AI-driven quiz application where users can take quizzes on specific topics, generate questions dynamically using AI, and receive real-time feedback on their performance.",
    detailedDescription: "",
    source: {
      frontend: "https://github.com/jyotishankar04/Quizzify/tree/main/frontend",
      backend: "https://github.com/jyotishankar04/Quizzify/tree/main/backend",
      github: "https://github.com/jyotishankar04/Quizzify",
      live: "https://quizzifyai.vercel.app",
    },
    image:
      "https://res.cloudinary.com/djby1yfko/image/upload/v1741372603/Screenshot_from_2025-03-08_00-05-22_tsohbh.png",
    techStacks: [
      _skills.nextjs,
      _skills.tailwindcss,
      _skills.nodejs,
      _skills.prisma,
      _skills.postgresql,
      _skills.typescript,
      _skills.expressjs,
      _skills.daisyUI,
      _skills.shadcnUI,
    ],
  },
  {
    id: "JustWatches",
    title: "JustWatches",
    isCurrent: false,
    description: "A ecommerce website for watches",
    detailedDescription: "",
    source: {
      frontend: "",
      backend: "",
      github: "https://github.com/jyotishankar04/JustWatches",
    },
    image:
      "https://res.cloudinary.com/djby1yfko/image/upload/v1741372858/Screenshot_from_2025-03-08_00-10-46_yauyzv.png",
    techStacks: [
      _skills.nextjs,
      _skills.tailwindcss,
      _skills.nodejs,
      _skills.react,
      _skills.prisma,
      _skills.postgresql,
      _skills.typescript,
      _skills.expressjs,
      _skills.daisyUI,
      _skills.shadcnUI,
      _skills.reactQuery,
    ],
  },
  {
    id: "nexgpt",
    title: "NexGPT",
    isCurrent: false,
    description: "A chat bot project using google gemini",
    detailedDescription: "",
    source: {
      frontend: "",
      backend: "",
      github: "https://github.com/jyotishankar04/s-gpt",
    },
    image:
      "https://res.cloudinary.com/djby1yfko/image/upload/v1730103189/Screenshot_from_2024-10-28_13-40-00_uvycvz.png",
    techStacks: [
      _skills.nextjs,
      _skills.tailwindcss,
      _skills.nodejs,
      _skills.prisma,
      _skills.postgresql,
      _skills.typescript,
      _skills.hono,
      { name: "Cloudflare", icon: _skillsIcons.aws },
      {
        name: "Google Gemini",
        icon: GiGemini,
      },
    ],
  },
  {
    id: "expense-tracker",
    title: "Expense Mate",
    isCurrent: false,
    description: " A simple expense tracker app using nextjs and postgres",
    detailedDescription: "",
    source: {
      frontend: "",
      backend: "",
      github: "https://github.com/jyotishankar04/expense-tracker",
      live: "https://expensemate.devsuvam.xyz",
    },
    image:
      "https://res.cloudinary.com/djby1yfko/image/upload/v1741373061/Screenshot_from_2025-03-08_00-14-08_y7xft0.png",
    techStacks: [
      _skills.nextjs,
      _skills.tailwindcss,
      _skills.nodejs,
      _skills.prisma,
      _skills.postgresql,
      _skills.typescript,
      { name: "Cloudflare", icon: _skillsIcons.aws },
    ],
  },
  {
    id: "date-request",
    title: "Date Request",
    isCurrent: false,
    description:
      "A request sending application using react , nodejs and express useing serverless architecture",
    detailedDescription: "",
    source: {
      frontend: "https://github.com/jyotishankar04/date-request-client",
      backend: "https://github.com/jyotishankar04/date-request-api",
      live: "https://daterequest.devsuvam.xyz",
    },
    image:
      "https://res.cloudinary.com/djby1yfko/image/upload/v1741373188/Screenshot_from_2025-03-08_00-16-12_kbndpg.png",
    techStacks: [
      _skills.react,
      _skills.tailwindcss,
      _skills.nodejs,
      _skills.hono,
      _skills.prisma,
      _skills.typescript,
      { name: "Cloudflare", icon: _skillsIcons.aws },
    ],
  },
  {
    id: "codersbook",
    title: "CodersBook",
    description: "A online library for coders",
    detailedDescription: "",
    isCurrent: false,
    source: {
      frontend: "https://github.com/jyotishankar04/elibs-client",
      backend: "https://github.com/jyotishankar04/elib-apis",
      live: "https://codersbook.devsuvam.xyz",
    },
    image:
      "https://res.cloudinary.com/djby1yfko/image/upload/v1741373466/Screenshot_from_2025-03-08_00-20-01_re5lqx.png",
    techStacks: [
      _skills.react,
      _skills.tailwindcss,
      _skills.nodejs,
      _skills.prisma,
      _skills.mongodb,
      _skills.expressjs,
      _skills.aws,
      { name: "Cloudinary", icon: _skillsIcons.aws }, // Replace with appropriate icon if available
      _skills.docker,
      _skills.nginx,
    ],
  },
  {
    id: "bolggy",
    title: "Bolgging Website",
    description: "A simple bloging website",
    detailedDescription: "",
    isCurrent: false,
    source: {
      frontend: "https://github.com/jyotishankar04/frontend",
      backend: "https://github.com/jyotishankar04/medium/tree/main/backend",
      github: "https://github.com/jyotishankar04/medium",
      live: "https://bloogy.devsuvam.xyz/",
    },
    image:
      "https://res.cloudinary.com/djby1yfko/image/upload/v1741373574/Screenshot_from_2025-03-08_00-22-37_zn6bts.png",
    techStacks: [
      _skills.react,
      _skills.tailwindcss,
      _skills.nodejs,
      _skills.hono,
      _skills.prisma,
      _skills.postgresql,
    ],
  },
  {
    id: "github-profile-viewer",
    title: "Github profile viewer",
    isCurrent: false,
    description:
      "A profile viewer project where you can view github profile by putting username",
    detailedDescription: "",
    source: {
      github: "https://github.com/jyotishankar04/github-profile-viewer",
      live: "https://githubprofileviewerapp.netlify.app/",
    },
    image:
      "https://res.cloudinary.com/djby1yfko/image/upload/v1741373685/Screenshot_from_2025-03-08_00-24-25_tmbvzb.png",
    techStacks: [
      _skills.react,
      _skills.tailwindcss,
      { name: "Github Api", icon: _skillsIcons.github },
    ],
  },
  {
    id: "sportify",
    title: "Sportify",
    isCurrent: false,
    description:
      "Spotify like music website which play local songs usind HTML,CSS and JS",
    detailedDescription: "",
    source: {
      github: "https://github.com/jyotishankar04/Spotify-Colne",
      live: "https://github.com/jyotishankar04/Spotify-Colne",
      backend: "",
      frontend: "",
    },
    image:
      "https://res.cloudinary.com/djby1yfko/image/upload/v1741373824/Screenshot_from_2025-03-08_00-26-44_vppnlo.png",
    techStacks: [
      _skills.html,
      { name: "CSS", icon: _skillsIcons.css },
      { name: "JavaScript", icon: _skillsIcons.javascript },
    ],
  },
];

export const userDB = {
  fullName: "Jyotishankar Patra",
  userName: "jyotishankar04",
  socialLinks,
  email: "devsuvam@myyahoo.com",
  phone: "+91 9951020608",
  location: "Balasore,Odisha",
  openToWork: true,

  about: [
    "I'm Jyotishankar Patra, a Web Developer skilled in both Frontend and Backend development. I build and manage complete Websites and Web Applications to ensure product success. Check out my work in the Projects section.",
    "I love sharing what I've learned in Web Development to help the Dev Community. Connect or follow me on LinkedIn and Instagram for useful content on Web Development and Programming.",
    "I'm passionate about creating efficient, scalable, and user-friendly web solutions. I'm open to job opportunities where I can contribute, learn, and grow. If you have a suitable opportunity, please contact me.",
  ],
  education: [...education],
  skills: _skills,
};
