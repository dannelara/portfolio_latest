import AIicon from "@/assets/icons/AIicon";
import { PreferedSubject, Project, Work } from "@/utils/Types";

const projects: Project[] = [
    {
        id:1 ,
        year: new Date('2023-4-01'),
        name: 'Ciboost',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        href: new URL('https://ciboost.vercel.app/'),
        src: '/images/ciboost.png',
        tags: ['React', 'NextJS', 'CSS', "serverless", 'AWS', "MySQL", "MUI", "Contentful", "TanStack", "TypeScript"],
        images: []
    },
    {
        id:2 ,
        year: new Date('2023-06-01'),
        name: 'Söderögon',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        href: new URL('https://ciboost.vercel.app/'),
        src: '/images/ciboost.png',
        tags: ['React', 'NextJS', 'TailwindCSS',"TypeScript", "Docker", "AWS", "Cloudfare"],
        images: []
    },
    {
        id:3 ,
        year: new Date('2023-06-01'),
        name: 'Trifam',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        href: new URL('https://ciboost.vercel.app/'),
        src: '/images/ciboost.png',
        tags: ['React', 'NextJS', 'TailwindCSS', "Docker", "AWS", "Cloudfare", "TypeScript", "Strapi"],
        images: []
    },

]

const personalProjects: Project[] = [
    {
        id: 4,
        year: new Date('2023-06-01'),
        name: 'TriVisionArt',
        description: 'Welcome to TriVisionArt, the ultimate online platform for artists and art enthusiasts alike! Dive into a world of boundless creativity, where you can bring your digital artworks to life, connect with fellow creators, and explore a vibrant community of talent.',
        href: new URL('https://art-gallery-rho-two.vercel.app'),
        src: '/images/art_gallery.png',
        tags: ['React', 'NextJS', 'TailwindCSS', "TypeScript"],
        images: ["/images/art_gallery.png","/images/art_gallery2.png", "/images/art_gallery3.png"]
    },
    {
        id: 5,
        year: new Date('2023-01-01'),
        name: 'ThemovieDB',
        description: 'Welcome to ThemovieDB, your one-stop destination for all things movies! Immerse yourself in the world of cinema with a platform that provides you with a comprehensive movie database, trending films, top-rated picks, and the ability to watch trailers and access in-depth details.',
        href: new URL('https://themoviedb-chi.vercel.app/'),
        src: '/images/the_movie.png',
        tags: ['React', 'CSS', "TypeScript"],
        images: ["/images/the_movie.png","/images/the_movie_mobile.png"]
    },
]

const preferedSubjects: PreferedSubject [] = [
    {
        name: "Front-end",
        description: "I love crafting stunning, responsive websites using React, Next.js, Tailwind CSS, Material UI, Contenful CMS, Strapi CMS, and more"
    },
    {
        name: "Artificial intelligence",
        description: "AI is the future, not just a trend. I've worked with various AI technologies, including OpenAI models, Pinecone vector database, Vercel AI SDK, Langchain, and more."
    },
    
    {
        name: "Backend",
        description: "Backends are the real MVPs, and I have hands-on experience with Node.js, Serverless, AWS, Strapi, MySQL, MongoDB, and more cool tech."
    }
]

const work: Work[] = [
    {
        name: "Compileit",
        description: "Full-stack developer",
        year: new Date('2023-06-01')
    },{
        name: "Student",
        description: "Linnaeus University",
        year: new Date('2023-06-01')
    },{
        name: "ICA",
        description: "Retail worker",
        year: new Date('2023-06-01')
    },{
        name: "Nya Pulsen",
        description: "Shift Leader",
        year: new Date('2023-06-01')
    },
    
]

export { projects, personalProjects, preferedSubjects, work }