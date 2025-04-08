import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Adnan",
  lastName: "Ahmad",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Frontend Software Engineer",
  avatar: "/images/avatar.jpg", // Update with your actual image
  location: "Asia/Kolkata",
  languages: ["English", "Hindi"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I share insights on frontend technologies, performance optimization, and building scalable
      applications.
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
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Frontend engineer with performant web experiences</>,
  subline: (
    <>
      I'm Adnan, a frontend engineer passionate about building fast and accessible web apps.
      <br /> I thrive on solving UI challenges and shipping scalable solutions.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com", // Replace with personal calendar link if any
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Adnan is a frontend engineer based in India with a strong eye for UI/UX and a focus on
        performance and scalability. He builds responsive, accessible, and production-ready web
        applications with modern technologies like Next.js, React, Tailwind CSS, and TypeScript.
      </>
    ),
  },
  work: {
    label:"Work",
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Zeptik",
        timeframe: "2024 - Present",
        role: "Frontend Engineer Intern",
        achievements: [
          <>
            Developed a second-hand goods platform with Next.js and React Native.
          </>,
          <>
            Implemented secure WebView communication using authentication tokens.
          </>,
          <>
            Used Docker and Kubernetes for app deployment and containerization.
          </>,
        ],
        images: [],
      },
      {
        company: "Heritage Global",
        timeframe: "2023 - Present",
        role: "Founder & Developer",
        achievements: [
          <>
            Built and deployed the company website using Next.js.
          </>,
          <>
            Implemented SEO optimization and metadata strategies to improve ranking.
          </>,
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
          images: [{
            src: "/images/skills/nextjs.png",
            alt: "NextJs logo",
            width: 5,
            height: 5,
          },],
        },
        {
          title: "React.js & React Native",
          description: <>Developing scalable web and mobile applications with modern React ecosystems.</>,
          images: [{
            src: "/images/skills/reactjs.png",
            alt: "React logo",
            width: 5,
            height: 5,
          },{
            src: "/images/skills/react-native.png",
            alt: "React-native logo",
            width: 5,
            height: 5,
          }],
        },
        {
          title: "Tailwind CSS & Bootstrap",
          description: <>Crafting elegant UIs with utility-first and responsive design frameworks.</>,
          images: [{
            src: "/images/skills/tailwind.png",
            alt: "Tailwind logo",
            width: 5,
            height: 5,
          },{
            src: "/images/skills/bootstrap.png",
            alt: "Bootstrap logo",
            width: 5,
            height: 5,
          }],
        },
        {
          title: "JavaScript, HTML & CSS",
          description: <>Core frontend technologies for building interactive and accessible interfaces.</>,
          images: [{
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
            src: "/images/skills/css.png",
            alt: "CSS logo",
            width: 5,
            height: 5,
          }],
        },
        {
          title: "Redux",
          description: <>Managing complex state in React applications efficiently with Redux.</>,
          images: [{
            src: "/images/skills/redux.png",
            alt: "Redux logo",
            width: 5,
            height: 5,
          },],
        },
        {
          title: "Parcel, Webpack, Babel",
          description: <>Modern JavaScript tooling for fast development and optimized builds.</>,
          images: [{
            src: "/images/skills/parcel.png",
            alt: "Parcel logo",
            width: 5,
            height: 5,
          },{
            src: "/images/skills/webpack.png",
            alt: "Webpack logo",
            width: 5,
            height: 5,
          },{
            src: "/images/skills/babel.png",
            alt: "Babel logo",
            width: 7,
            height: 5,
          }],
        },
        {
          title: "Git",
          description: <>Version control for collaborative and efficient development.</>,
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
          description: <>Enhancing SEO and performance with SSR techniques using frameworks like Next.js.</>,
          images: [],
        },
        {
          title: "Firebase",
          description: <>Building real-time apps and handling authentication, storage, and hosting.</>,
          images: [{
            src: "/images/skills/firebase.png",
            alt: "Firebase logo",
            width: 5,
            height: 5,
          },],
        },
        {
          title: "Docker & Kubernetes",
          description: <>Containerizing and orchestrating scalable apps for modern deployment.</>,
          images: [],
        },
        {
          title: "Jest",
          description: <>Testing React components and frontend logic with confidence.</>,
          images: [{
            src: "/images/skills/jest.png",
            alt: "Jest logo",
            width: 5,
            height: 5,
          }],
        },
        {
          title: "Python",
          description: <>Scripting and solving backend or algorithmic problems.</>,
          images: [{
            src: "/images/skills/python.png",
            alt: "Python logo",
            width: 5,
            height: 5,
          }],
        },
        {
          title: "WordPress",
          description: <>Customizing and managing content-driven websites with WordPress.</>,
          images: [{
            src: "/images/skills/wordpress.png",
            alt: "WordPress logo",
            width: 5,
            height: 5,
          }],
        },
        {
          title: "Notion & Jira",
          description: <>Managing tasks and documentation in modern project workflows.</>,
          images: [{
            src: "/images/skills/notion.png",
            alt: "Notion logo",
            width: 5,
            height: 5,
          },{
            src: "/images/skills/jira.png",
            alt: "Jira logo",
            width: 5,
            height: 5,
          }],
        },
        {
          title: "Problem Solving & DSA",
          description: <>Strong foundation in data structures and algorithms to write efficient code.</>,
          images: [
            {
              src: "/images/skills/dsa.png",
              alt: "DSA logo",
              width: 5,
              height: 5,
            }
          ],
        },
      ], 
  },
};

const blog = {
  label: "Blog",
  title: "Insights and Articles",
  description: `Read what ${person.name} has been sharing recently`,
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Frontend projects by ${person.name}`,
};


const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
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

export { person, social, newsletter, home, about, blog, work, gallery };
