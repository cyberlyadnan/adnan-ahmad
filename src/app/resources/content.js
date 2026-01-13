import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Adnan",
  lastName: "Ahmad",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Software Engineer",
  avatar: "/images/avatar.jpg", // Update with your actual image
  location: "Asia/Kolkata",
  languages: ["English", "Hindi"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I share insights on full-stack development, modern web technologies, cloud architecture, 
      performance optimization, and building scalable enterprise applications.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/cyberlyadnan", // Replace with your actual GitHub
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/adnanahmad9334/", // Replace with your LinkedIn
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/adnanahmad9334/status/1519980096769122305?s=48", // Optional
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:cyberlyadnan@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name} - ${person.role} | Full Stack Developer Portfolio`,
  description: `Professional ${person.role} specializing in Next.js, React, Node.js, MongoDB, Firebase, and cloud architecture. Expert in building scalable web applications, mobile apps, and enterprise solutions. Available for freelance projects and consulting.`,
  headline: <>Full Stack Software Engineer | Building Scalable Web & Mobile Solutions</>,
  subline: (
    <>
      I'm Adnan, a {person.role} passionate about crafting end-to-end digital solutions.
      <br /> From frontend interfaces to backend APIs, databases, and cloud infrastructure—I deliver production-ready applications that scale.
    </>
  ),
};

const resume = {
  label: "Resume",
  display: true,
  link: "/resume/adnan-ahmad-full-stack-engineer.pdf",
};

const about = {
  label: "About",
  title: `About ${person.name} - ${person.role}`,
  description: `Meet ${person.name}, an experienced ${person.role} specializing in full-stack web development, mobile applications, cloud architecture, and enterprise solutions. Expert in Next.js, React, Node.js, MongoDB, Firebase, AWS, and modern development practices.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "tel:9756896250", // Replace with personal calendar link if any
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Adnan is a {person.role} based in India with expertise spanning the entire software development lifecycle. 
        He specializes in building scalable, production-ready applications using modern full-stack technologies including 
        Next.js, React, React Native, Node.js, Express.js, MongoDB, Firebase, AWS, Docker, and Kubernetes. 
        With a strong foundation in both frontend and backend development, he delivers end-to-end solutions 
        that combine beautiful user interfaces with robust APIs, database design, cloud infrastructure, and DevOps practices. 
        His work includes e-commerce platforms, mobile applications, real-time systems, payment integrations, and enterprise-grade applications.
      </>
    ),
  },
  work: {
    label: "Work",
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Zeptik",
        role: "Full Stack Developer Intern",
        timeframe: "Feb 2024 – Feb 2025",
        location: "Lucknow, India",
        project: "Second-Hand Goods Platform (OLX Clone)",
        description:
          "A dynamic full-stack platform enabling users to buy and sell second-hand products, available both as a web and mobile application with real-time features, payment integration, and scalable cloud infrastructure.",
        achievements: [
          "Architected and built the complete full-stack web platform using Next.js, Tailwind CSS, and integrated it seamlessly with a React Native mobile app.",
          "Implemented secure authentication and authorization systems with JWT tokens, ensuring safe communication between WebView and React Native app.",
          "Designed and developed RESTful APIs, database schemas, and backend services for user management, product listings, and transactions.",
          "Containerized the application using Docker and deployed via Kubernetes for high availability and horizontal scalability.",
          "Enhanced project agility using Jira and Notion for team collaboration, sprint planning, and task tracking.",
          "Enabled secure testing environments via Ngrok tunneling during development and CI/CD pipeline integration.",
        ],
        techStack: [
          "Next.js",
          "React",
          "React Native",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Firebase",
          "Docker",
          "Kubernetes",
          "RESTful APIs",
          "JWT Authentication",
          "Ngrok",
          "Jira",
          "Notion",
        ],
        images: [],
      },
      {
        company: "Credible Academy",
        role: "Full Stack Development Trainer",
        timeframe: "Jun 2023 – Sep 2023",
        location: "Saharanpur, India",
        project: "Full Stack Web Development Bootcamp",
        description:
          "Designed and led a comprehensive professional course in full-stack web development, covering frontend, backend, databases, and deployment with hands-on projects and real-world applications.",
        achievements: [
          "Created a complete full-stack curriculum covering HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, and deployment strategies, improving student project completion rates by 30%.",
          "Built interactive coding challenges, full-stack projects, and hands-on exercises to drive engagement and practical learning.",
          "Conducted live webinars and workshops with 200+ attendees, teaching both frontend and backend development, improving the academy's reputation and student outcomes.",
          "Mentored students in building end-to-end applications, from UI design to API development and database integration.",
        ],
        techStack: [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Node.js",
          "Express.js",
          "MongoDB",
          "RESTful APIs",
          "Teaching",
          "Mentorship",
        ],
        images: [],
      },
      {
        company: "Institute of Skills and Rural Development",
        role: "IT Trainer",
        timeframe: "Sep 2021 – Sep 2022",
        location: "Saharanpur, India",
        project: "Multi-Tech Training Program",
        description:
          "Provided foundational and advanced computer education to rural students across various domains.",
        achievements: [
          "Delivered courses in MS Office, HTML/CSS, Photoshop, Networking, and Security.",
          "Applied case studies and real-life simulations to boost understanding.",
          "Mentored 100+ students with project support, leading to a significant rise in exam success rates.",
        ],
        techStack: [
          "MS Office",
          "HTML",
          "CSS",
          "Photoshop",
          "CorelDraw",
          "Networking",
          "Security",
        ],
        images: [],
      },
      {
        company: "Wealth Clinic",
        role: "Business Development Executive",
        timeframe: "Mar 2023 – May 2023",
        location: "Noida, India",
        project: "Business Growth Strategy",
        description:
          "Developed actionable strategies to expand client reach and streamline operations.",
        achievements: [
          "Optimized client interaction strategies, increasing acquisition/retention by 20%.",
          "Performed deep market and competitor analysis, helping target new niches.",
          "Collaborated with cross-functional teams to streamline client communication pipelines.",
        ],
        techStack: [
          "Business Development",
          "Market Research",
          "Client Relations",
        ],
        images: [],
      },
      {
        company: "Self-Employed",
        role: "Freelance Full Stack Developer & Educator",
        timeframe: "2020 – Present",
        location: "Remote",
        project: "Full-Stack Development, Training & Client Projects",
        description:
          "Providing full-stack development services to clients worldwide while teaching aspiring developers essential programming skills. Building custom web applications, mobile apps, and enterprise solutions.",
        achievements: [
          "Delivered 20+ full-stack projects for clients including e-commerce platforms, mobile applications, real-time systems, and enterprise solutions.",
          "Created comprehensive full-stack training modules (HTML, CSS, JavaScript, React, Node.js, MongoDB, etc.) tailored for hands-on learning.",
          "Facilitated practical projects, coding challenges, and real-world scenarios to ensure skill retention and job readiness.",
          "Built scalable applications using modern technologies like Next.js, React Native, Firebase, AWS, and cloud infrastructure.",
          "Earned positive feedback from clients and students for delivering high-quality solutions and boosting confidence.",
        ],
        techStack: [
          "Next.js",
          "React",
          "React Native",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Firebase",
          "AWS",
          "Docker",
          "HTML",
          "CSS",
          "JavaScript",
          "TypeScript",
          "DBMS",
          "RESTful APIs",
          "Training",
          "Mentorship",
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Aligarh Muslim University",
        description: <>B.Sc. in Computer Science</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Next.js",
        description: <>Building performant, SEO-optimized apps with Next.js.</>,
        images: [
          {
            src: "/images/skills/nextjs.png",
            alt: "NextJs logo",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "React.js & React Native",
        description: (
          <>
            Developing scalable web and mobile applications with modern React
            ecosystems.
          </>
        ),
        images: [
          {
            src: "/images/skills/reactjs.png",
            alt: "React logo",
            width: 5,
            height: 5,
          },
          {
            src: "/images/skills/react-native.png",
            alt: "React-native logo",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "Tailwind CSS & Bootstrap",
        description: (
          <>
            Crafting elegant UIs with utility-first and responsive design
            frameworks.
          </>
        ),
        images: [
          {
            src: "/images/skills/tailwind.png",
            alt: "Tailwind logo",
            width: 5,
            height: 5,
          },
          {
            src: "/images/skills/bootstrap.png",
            alt: "Bootstrap logo",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "JavaScript, HTML & CSS",
        description: (
          <>
            Core frontend technologies for building interactive and accessible
            interfaces.
          </>
        ),
        images: [
          {
            src: "/images/skills/javascript.png",
            alt: "JavaScript logo",
            width: 5,
            height: 5,
          },
          {
            src: "/images/skills/html.png",
            alt: "HTML logo",
            width: 5,
            height: 5,
          },
          {
            src: "/images/skills/css.jpg",
            alt: "CSS logo",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "Redux",
        description: (
          <>
            Managing complex state in React applications efficiently with Redux.
          </>
        ),
        images: [
          {
            src: "/images/skills/redux.png",
            alt: "Redux logo",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "Parcel, Webpack, Babel",
        description: (
          <>
            Modern JavaScript tooling for fast development and optimized builds.
          </>
        ),
        images: [
          {
            src: "/images/skills/parcel.png",
            alt: "Parcel logo",
            width: 5,
            height: 5,
          },
          {
            src: "/images/skills/webpack.png",
            alt: "Webpack logo",
            width: 5,
            height: 5,
          },
          {
            src: "/images/skills/babel.png",
            alt: "Babel logo",
            width: 7,
            height: 5,
          },
        ],
      },
      {
        title: "Git",
        description: (
          <>Version control for collaborative and efficient development.</>
        ),
        images: [
          {
            src: "/images/skills/git.png",
            alt: "Git logo",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "Server-Side Rendering (SSR)",
        description: (
          <>
            Enhancing SEO and performance with SSR techniques using frameworks
            like Next.js.
          </>
        ),
        images: [],
      },
      {
        title: "Node.js & Express.js",
        description: (
          <>
            Building scalable backend APIs, RESTful services, and server-side applications 
            with Node.js and Express.js for high-performance web applications.
          </>
        ),
        images: [],
      },
      {
        title: "MongoDB & Database Design",
        description: (
          <>
            Designing and implementing NoSQL databases, data modeling, query optimization, 
            and managing data persistence for scalable applications.
          </>
        ),
        images: [],
      },
      {
        title: "Firebase & Cloud Services",
        description: (
          <>
            Building real-time apps, handling authentication, cloud storage, hosting, 
            and serverless functions with Firebase and AWS cloud infrastructure.
          </>
        ),
        images: [
          {
            src: "/images/skills/firebase.png",
            alt: "Firebase logo",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "Docker & Kubernetes",
        description: (
          <>
            Containerizing and orchestrating scalable apps for modern deployment, 
            microservices architecture, and cloud-native development.
          </>
        ),
        images: [],
      },
      {
        title: "RESTful APIs & API Integration",
        description: (
          <>
            Designing and developing RESTful APIs, integrating third-party services, 
            payment gateways, and building scalable backend architectures.
          </>
        ),
        images: [],
      },
      {
        title: "Jest",
        description: (
          <>Testing React components and frontend logic with confidence.</>
        ),
        images: [
          {
            src: "/images/skills/jest.png",
            alt: "Jest logo",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "Python & Backend Development",
        description: (
          <>
            Building backend services, APIs, data processing scripts, and solving 
            complex algorithmic problems with Python for scalable applications.
          </>
        ),
        images: [
          {
            src: "/images/skills/python.png",
            alt: "Python logo",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "TypeScript",
        description: (
          <>
            Writing type-safe, maintainable code for both frontend and backend 
            applications with TypeScript for better developer experience and fewer runtime errors.
          </>
        ),
        images: [],
      },
      {
        title: "WordPress",
        description: (
          <>Customizing and managing content-driven websites with WordPress.</>
        ),
        images: [
          {
            src: "/images/skills/wordpress.png",
            alt: "WordPress logo",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "Notion & Jira",
        description: (
          <>Managing tasks and documentation in modern project workflows.</>
        ),
        images: [
          {
            src: "/images/skills/notion.png",
            alt: "Notion logo",
            width: 5,
            height: 5,
          },
          {
            src: "/images/skills/jira.png",
            alt: "Jira logo",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "Problem Solving & DSA",
        description: (
          <>
            Strong foundation in data structures and algorithms to write
            efficient code.
          </>
        ),
        images: [
          {
            src: "/images/skills/dsa.png",
            alt: "DSA logo",
            width: 5,
            height: 5,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Full Stack Development Insights and Articles",
  description: `Read articles on full-stack development, web technologies, mobile app development, cloud architecture, and software engineering best practices by ${person.name}`,
};

const work = {
  label: "Work",
  title: "My Projects",
  description: `Full-stack web applications, mobile apps, and enterprise solutions by ${person.name}`,
};

const projects = {
  label: "Projects",
  title: "Explore My Projects",
  description: `Full-stack web applications, mobile apps, e-commerce platforms, and enterprise solutions by ${person.name}`,

  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter,resume, home, about, blog, work, projects };
