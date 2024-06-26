import { PreferedSubject, Project, Work } from "@/utils/Types";

const projects: Project[] = [
  {
    id: 1,
    name: "Ciboost",
    description:
      "Ciboost is a digital tool that helps teams and organizations to collaborate and communicate more effectively.",
    href: new URL("https://ciboost.se"),
    src: "/images/ciboost.png",
    tags: [
      "React",
      "NextJS",
      "CSS",
      "serverless",
      "AWS",
      "MySQL",
      "MUI",
      "Contentful",
      "TanStack",
      "TypeScript",
    ],
    images: ["/images/cb.png"],
    role: "Co-project manager and full-stack developer responsible for the development of the front-end and back-end.",
    descriptionShort:
      "Ciboost is a digital tool that helps teams and organizations to collaborate and communicate more effectively.",
    locked: false,
  },
  {
    id: 2,
    name: "Söderögon",
    description:
      "SöderÖgon is a website created to showcase the expertise of its founders, who are experienced professionals in the fields of ophthalmology and optometry. Established in 2021, this platform offers information and services related to medical eye care and vision quality.",
    href: new URL("https://soderogon.se/"),
    src: "/mages/soder-ogon.png",
    tags: [
      "React",
      "NextJS",
      "TailwindCSS",
      "TypeScript",
      "Docker",
      "AWS",
      "Cloudfare",
    ],
    images: ["/images/soder-ogon.png"],
    role: "Project manager and full-stack developer responsible for the development of the front-end and back-end as well as the infrastructure.",
    descriptionShort:
      "SöderÖgon is a website created to showcase the expertise of its founders, who are experienced professionals in the fields of ophthalmology and optometry.",
    locked: false,
  },
  {
    id: 3,
    name: "Trifam",
    description:
      'Trifam, founded in the 1960s, specializes in commercial property construction and management. They expanded into residential properties in 2010, aiming for "Satisfied tenants in fully occupied buildings." With a portfolio of six commercial properties (75,000 sqm) and two residential properties (323 apartments), they handle all management in-house with eight employees.',
    href: new URL("https://trifam.se/"),
    src: "/images/ciboost.png",
    tags: [
      "React",
      "NextJS",
      "TailwindCSS",
      "Docker",
      "AWS",
      "Cloudfare",
      "TypeScript",
      "Strapi",
      "AirTable",
      "Tally forms",
    ],
    images: ["/images/tr.png"],
    role: "Project manager and full-stack developer responsible for the development of the front-end and back-end as well as the infrastructure.",
    descriptionShort:
      "Trifam, founded in the 1960s, specializes in commercial property construction and management.",
    locked: false,
  },
  {
    name: "AnalysAI",
    description: "Systematiska, snabba och säkra analyser med Analys AI",
    descriptionShort: "Systematiska, snabba och säkra analyser med Analys AI",
    href: new URL("https://www.analysai.se/"),
    id: 4,
    images: ["/images/analysai.png"],
    locked: false,
    role: "Full-stack developer responsible for the development of the front-end and back-end. I also worked and implemented AI models. Ollama, OpenAI, Pinecone, Vercel AI SDK, Langchain, and more.",
    tags: ["React", "NextJS", "TailwindCSS", "TypeScript"],
    src: "/images/analysai.png",
  },
  {
    name: "Netjobs",
    description:
      "Netjobs is a platform that connects job seekers with employers. It offers a wide range of job opportunities, including full-time, part-time, and freelance positions.",
    descriptionShort:
      "Netjobs is a platform that connects job seekers with employers.",
    href: new URL("https://karriarguiden.se/sv/"),
    id: 5,
    images: ["/images/netjobs.png"],
    locked: false,
    role: "Lead front-end developer responsible for the development of the front-end. I also worked with the back-end team to integrate the front-end with the back-end.",
    tags: [
      "React",
      "NextJS",
      "TypeScript",
      "ElasitcSearch",
      "TailwindCSS",
      "Serverless",
      "AWS",
      "MySQL",
      "MUI",
      "Contentful",
      "TypeScript",
    ],
    src: "/images/analysai.png",
  },
  {
    id: 6,
    name: "Equestrian Stockholm",
    description:
      "Team lead, project manager, and full-stack developer responsible for the development of the front-end and back-end. Responsible for the migration of the old website to the new website. I also worked with the back-end team to integrate the front-end with the back-end.",
    href: new URL("https://equestrianstockholm.com/"),
    descriptionShort:
      "Equestrian Stockholm is a website that offers a wide range of equestrian products.",
    images: ["/images/EQ.png"],
    tags: ["TailwindCSS", "Shopify", "Liquid"],
    locked: false,
    src: "/images/EQ.png",
    role: "Team lead, project manager, and full-stack developer responsible for the development of the front-end and back-end. Responsible for the migration of the old website to the new website. I also worked with the back-end team to integrate the front-end with the back-end.",
  },
];

const personalProjects: Project[] = [
  {
    id: 4,
    name: "TriVisionArt",
    description:
      "Welcome to TriVisionArt, the ultimate online platform for artists and art enthusiasts alike! Dive into a world of boundless creativity, where you can bring your digital artworks to life, connect with fellow creators, and explore a vibrant community of talent.",
    href: new URL("https://art-gallery-rho-two.vercel.app"),
    src: "/images/art_gallery.png",
    tags: ["React", "NextJS", "TailwindCSS", "TypeScript"],
    images: [
      "/images/art_gallery.png",
      "/images/art_gallery2.png",
      "/images/art_gallery3.png",
    ],
    descriptionShort:
      "Welcome to TriVisionArt, the ultimate online platform for artists and art enthusiasts alike!",
    locked: false,
  },
  {
    id: 5,
    name: "ThemovieDB",
    description:
      "Welcome to ThemovieDB, your one-stop destination for all things movies! Immerse yourself in the world of cinema with a platform that provides you with a comprehensive movie database, trending films, top-rated picks, and the ability to watch trailers and access in-depth details.",
    href: new URL("https://themoviedb-chi.vercel.app/"),
    src: "/images/the_movie.png",
    tags: ["React", "CSS", "TypeScript"],
    images: ["/images/the_movie.png", "/images/the_movie_mobile.png"],
    descriptionShort:
      "Welcome to ThemovieDB, your one-stop destination for all things movies!",
    locked: false,
  },
];

const preferedSubjects: PreferedSubject[] = [
  {
    name: "Front-end",
    description:
      "I love crafting stunning, responsive websites using React, Next.js, Tailwind CSS, Material UI, Contentful CMS, Strapi CMS, and more.",
  },
  {
    name: "Artificial intelligence",
    description:
      "AI is the future, not just a trend. I've worked with various AI technologies, including OpenAI models, Pinecone vector database, Vercel AI SDK, Langchain, and more.",
  },
  {
    name: "Backend",
    description:
      "Backends are the real MVPs, and I have hands-on experience with Node.js, Serverless, AWS, Strapi, MySQL, MongoDB, and more cool tech.",
  },
];

const work: Work[] = [
  {
    name: "Compileit",
    description: "Full-stack developer",
    from: new Date("2023-06-01"),
  },
  {
    name: "Bachelor's  Degree In Computer Science",
    description: "Linnaeus University",
    from: new Date("2021-06-01"),
    to: new Date("2023-06-01"),
  },
  {
    name: "Bachelor Thesis: Machine Learning & Algorithms",
    description: "Fortnox",
    from: new Date("2023-01-01"),
    to: new Date("2023-06-01"),
  },
  {
    name: "Software Developer Intern",
    description: "Kalmar",
    from: new Date("2022-06-01"),
    to: new Date("2023-01-01"),
  },
  {
    name: "Teaching Assistant",
    description: "Linnaeus University",
    from: new Date("2022-06-01"),
    to: new Date("2022-01-01"),
  },
];

export { projects, personalProjects, preferedSubjects, work };
