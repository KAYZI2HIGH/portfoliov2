export const navLinks = [
  {
    id: "home",
    name: "home",
  },
  {
    id: "about",
    name: "about",
  },
  {
    id: "projects",
    name: "projects",
  },
  {
    id: "contacts",
    name: "contacts",
  },
];
export const projects = [
  {
    name: "FlavourfulMenus",
    description: `FlavourfulMenus is a restaurant web app where users can explore a variety of meals, add items to their cart, and make secure payments seamlessly. The platform ensures a smooth and responsive experience across all devices.`,
    category: "fullstack",
    about: `FlavourfulMenus is a modern restaurant application that allows users to browse meals, customize their orders, and complete purchases using secure payment methods. The app was designed to provide a seamless online food ordering experience with real-time updates, smooth animations, and a mobile-friendly interface. With a structured backend and dynamic frontend, it efficiently manages content, orders, and payments.`,
    keyFeatures: [
      "User-friendly meal browsing and ordering",
      "Cart management with real-time updates",
      "Secure payments via Paystack",
      "Admin dashboard for managing menu items",
      "Responsive design for all devices",
      "Smooth animations with Framer Motion",
    ],
    projectDetails: {
      duration: "3 weeks",
      teamSize: 1,
      outcomes: [
        "Gained hands-on experience with Next.js for server-side rendering",
        "Implemented Sanity CMS for structured content management",
        "Integrated Paystack for seamless payment processing",
        "Enhanced my skills in building fullstack applications",
      ],
    },
    image: ['flavourfulmenus/home', 'flavourfulmenus/menu', 'flavourfulmenus/about', 'flavourfulmenus/contact', 'flavourfulmenus/cart', 'flavourfulmenus/checkout', 'flavourfulmenus/payment-gateway'],
    gitHubUrl: "https://github.com/KAYZI2HIGH/flavourfulmenus",
    url: "https://flavourfulmenus.vercel.app/",
    techStack: [
      "Next.js",
      "Tailwind",
      "Sanity CMS",
      "Context API",
      "Paystack",
      "Vercel",
    ],
  },
  {
    name: "AI Text Processor",
    description: `An AI-powered text processing tool built to enhance text manipulation, formatting, and analysis. It provides a seamless user experience with advanced text transformation features and browser integration.`,
    category: "fullstack",
    about: `This AI Text Processor was developed as part of a task in the HNG internship. It leverages AI capabilities for intelligent text manipulation, including formatting, summarization, and enhancements. The project integrates the Chrome API for an optimized user experience within the browser. Designed for efficiency, it offers real-time text processing with a clean and responsive UI.`,
    keyFeatures: [
      "AI-powered text formatting and transformation",
      "Real-time text processing",
      "Browser integration via Chrome API",
      "Customizable text enhancement options",
      "Responsive and user-friendly interface",
    ],
    projectDetails: {
      duration: "Task-based (Internship)",
      teamSize: 1,
      outcomes: [
        "Gained hands-on experience with Chrome API integration",
        "Deepened my understanding of AI-driven text processing",
        "Improved my ability to build efficient and responsive web applications",
      ],
    },
    image: ["ai-text-processor/home", "ai-text-processor/text-processor"],
    gitHubUrl: "https://github.com/KAYZI2HIGH/ai-text-processor",
    url: "https://ai-text-processor-omega.vercel.app/",
    techStack: [
      "Next.js",
      "Tailwind",
      "Chrome API",
      "AI-powered processing",
      "Vercel",
    ],
  },
  {
    name: "Youtube Clone.",
    description: `I built a YouTube clone with React that includes video search, playback, and recommendations. It offers smooth navigation, fast loading, and a responsive design for all screen sizes.`,
    category: "frontend",
    about: `This project was a deep dive into replicating key functionalities of YouTube, focusing on providing a seamless user experience. The aim was to build a dynamic web application that allows users to search, view, and interact with video content efficiently. This project required integrating third-party APIs, optimizing performance for various screen sizes, and leveraging React's capabilities for state management and component-based development.`,
    keyFeatures: [
      "Video search functionality",
      "Video playback with responsive player",
      "Recommended video suggestions",
      "Dynamic routing for individual video pages",
      "Responsive design for all devices",
    ],
    projectDetails: {
      duration: "2 weeks",
      teamSize: 1,
      outcomes: [
        "Enhanced my understanding of React state management with Context API",
        "Improved API integration and data fetching techniques",
        "Gained experience in creating a responsive video application",
      ],
    },
    image: ["youtube-demo/home", "youtube-demo/channels", "youtube-demo/player"],
    gitHubUrl: "https://github.com/KAYZI2HIGH/Youtube-Demo",
    url: "https://youtube-gray-ten.vercel.app/",
    techStack: [
      "Tailwind",
      "Framer Motion",
      "React",
      "Context API",
      "Vercel",
      "Rapid API",
    ],
  },
  {
    name: "Amazon demo website.",
    description: `I developed an Amazon demo website simulating an e-commerce platform with product listings, search, product details, and a shopping cart. Built with React, it offers a responsive and intuitive user interface.`,
    category: "frontend",
    about: `This project is a simplified e-commerce website that mimics Amazon's core functionality. It includes product listings, dynamic search features, and a shopping cart for a complete user experience. The focus was on creating an interactive interface that adapts to user needs, ensuring mobile responsiveness and smooth transitions.`,
    keyFeatures: [
      "Product listing and filtering",
      "Dynamic search functionality",
      "Shopping cart with add/remove item features",
      "Responsive and mobile-friendly layout",
      "Integrated React Context API for state management",
    ],
    projectDetails: {
      duration: "2 weeks",
      teamSize: 1,
      outcomes: [
        "Improved knowledge of building e-commerce platforms",
        "Learned efficient state management techniques",
        "Strengthened responsive design skills",
      ],
    },
    image: ["amazon-demo/home", "amazon-demo/cart", "amazon-demo/orders"],
    gitHubUrl: "https://github.com/KAYZI2HIGH/Amazon",
    url: "https://amazon-alpha-pearl.vercel.app/",
    techStack: ["Material UI", "Tailwind", "React", "Context API", "Vercel"],
  },
  {
    name: "YCDirectory",
    description: `A platform for creating and reading startup details, built with Next.js. It provides real-time updates, secure authentication, and error monitoring.`,
    category: "fullstack",
    about: `YC Directory is designed to simplify the process of discovering and showcasing startups. It integrates Sanity for real-time content management, Cloudinary for secure image storage, and Sentry for error and performance monitoring after deployment. The focus is on providing a smooth and intuitive experience for users and administrators.`,
    keyFeatures: [
      "User authentication with NextAuth",
      "Sanity integration for real-time updates",
      "Cloudinary for image uploads",
      "Sentry for error and web performance monitoring",
      "Responsive and modern user interface",
      "Secure and scalable architecture",
    ],
    techStack: [
      "Tailwind",
      "Material UI",
      "Next.js",
      "Sanity",
      "Cloudinary",
      "NextAuth",
      "Sentry",
      "Vercel",
    ],
    image: ["ycdirectory/home", "ycdirectory/create", "ycdirectory/pitchDetails"],
    projectDetails: {
      duration: "6 weeks",
      teamSize: 1,
      outcomes: [
        "Improved understanding of real-time updates with Sanity",
        "Enhanced skills in error monitoring using Sentry",
        "Gained experience in building user-focused applications",
      ],
    },
    gitHubUrl: "https://github.com/KAYZI2HIGH/ycdirectory", // Replace with the actual repo link
    url: "https://ycdirectory-seven.vercel.app/", // Replace with the actual deployment link
  },
  {
    name: "Baynedad Property Manager",
    description: `A full-stack property management application built with Next.js. It allows users to manage properties, upload images, and handle authentication seamlessly.`,
    category: "fullstack",
    about: `This project was designed to streamline property management tasks. It integrates Cloudinary for secure image storage and NextAuth for robust user authentication. The focus was on creating a modern, responsive application to cater to both property managers and their clients.`,
    keyFeatures: [
      "User authentication with NextAuth",
      "Cloudinary integration for image uploads",
      "Dynamic property listing management",
      "Responsive and modern user interface",
      "Secure and scalable architecture",
    ],
    techStack: [
      "Next.js",
      "Tailwind",
      "Cloudinary",
      "NextAuth",
      "MongoDB",
      "Mongoose",
      "Vercel",
    ],
    image: ["baynedad/home", "baynedad/listings", "baynedad/addProperty", "baynedad/contact", "baynedad/login"],
    projectDetails: {
      duration: "7 weeks",
      teamSize: 1,
      outcomes: [
        "Deepened my understanding of full-stack development with Next.js",
        "Enhanced skills in integrating third-party services like Cloudinary and NextAuth",
        "Gained experience in building scalable and user-friendly applications",
      ],
      // Update with your image reference
    },
    gitHubUrl: "https://github.com/KAYZI2HIGH/baynedad", // Replace with the actual repo link
    url: "https://baynedad.vercel.app/", // Replace with the actual deployment link
  },

  {
    name: "Champions Webpage.",
    description: `I created a church website to enhance community engagement with event schedules, online testimonies, and a contact section. Built with React, it’s mobile-friendly and adapts to all screen sizes.`,
    category: "frontend",
    about: `The Champions Webpage is designed to foster community connection and engagement. The platform showcases upcoming events, provides a section for online testimonies, and includes an easily accessible contact form. The goal was to create a welcoming and user-friendly experience that helps strengthen the church's online presence.`,
    keyFeatures: [
      "Event schedule display",
      "Online testimonies section",
      "Responsive and mobile-friendly design",
      "Interactive contact form",
      "Smooth animations using Framer Motion",
    ],
    projectDetails: {
      duration: "2 days",
      teamSize: 1,
      outcomes: [
        "Successfully developed a responsive and interactive website",
        "Improved user engagement through event schedules and testimonies",
        "Learned to implement smooth animations with Framer Motion",
      ],
    },
    image: ["project1"],
    gitHubUrl: "https://github.com/KAYZI2HIGH/Champions",
    url: "https://champions-pi.vercel.app/",
    techStack: [
      "Tailwind",
      "Material UI",
      "Framer Motion",
      "React",
      "Context API",
      "Vercel",
    ],
  },
  {
    name: "My Porfolio.",
    description: `I developed a portfolio website to showcase my projects and skills as a web developer. Built with React and Tailwind, it features a modern design, smooth navigation, and responsive layouts for all screen sizes.`,
    category: "frontend",
    about: `This portfolio website is designed to highlight my technical skills, projects, and achievements as a web developer. It provides visitors with a clear and interactive way to navigate my work and contact me. The focus was on creating a visually appealing design with smooth animations and responsive layouts.`,
    keyFeatures: [
      "Showcases projects with descriptions and links",
      "Responsive layout for all devices",
      "Smooth animations with Framer Motion",
      "Dynamic routing for project details",
      "Modern and minimalist UI design",
    ],
    projectDetails: {
      duration: "4 days",
      teamSize: 1,
      outcomes: [
        "Showcased my skills and work effectively",
        "Gained experience in portfolio website design",
        "Enhanced animation and layout design skills",
      ],
    },
    image: ["project4"],
    gitHubUrl: "https://github.com/KAYZI2HIGH/portfoliov2",
    url: "https://portfoliov2-seven-delta.vercel.app/",
    techStack: [
      "Tailwind",
      "Framer Motion",
      "React",
      "Context API",
      "Next JS",
      "Vercel",
    ],
  },
];

export const contact = [
  { icon: "", name: "email", handle: "dadavictory2000@gmail.com" },
  { icon: "", name: "phone", handle: "+2349132589516" },
  { icon: "", name: "address", handle: "Area 1 Estate, Adura B/STP, Lagos" },
];

export const SocialsIcon = [];

export const techStack = [
  {
    name: "JavaScript",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "React",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Python",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "Appwrite",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/appwrite/appwrite-original.svg",
  },
  {
    name: "Firebase",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original-wordmark.svg",
  },
  {
    name: "Material UI",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
  },
  {
    name: "MongoDB",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Mongoose",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original-wordmark.svg",
  },
  {
    name: "Next.js",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "MySQL",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  {
    name: "Tailwind",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "VSCode",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  },
];

export const contactFields = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};
