import { ArrowUpRight, Github } from "lucide-react";
import React from "react";
import AnimatedBorderButton from "../components/AnimatedBorderButton";

const projects = [
  {
    title: "D-Blog",
    description:
      "D-Blog | MERN Stack, React, Node.js, Express, MongoDB, Tailwind CSS, JWTBuilt a responsive blog web app with React, Tailwind CSS, and React Router, featuring userauthentication, blog creation, and comment functionality. Integrated Quill.js for rich text editing andMoment.js for date formatting. Developed secure RESTful APIs with Node.js and E",
    image: "/projects/project-2.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    link: "https://blog-app-client-iota-nine.vercel.app/",
    github: "https://github.com/DanishRajawat09/Blog-app",
  },
  {
    title: "Shop.Co (Front-End)",
    description:
      "Developed a responsive e-commerce frontend using React, React Router DOM, and Redux Toolkit.Implemented dynamic routing, product listing, cart management, and state handling for a smooth userexperience.",
    image: "/projects/project shop.co.png",
    tags: ["React.js", "Redux Tool Kit"],
    link: "https://shopcodemo.netlify.app/",
    github: "https://github.com/DanishRajawat09/E-commerce-FRONT-END",
  },
  {
    title: "Shop.Co (Front-End)",
    description:
      "Developed a responsive e-commerce frontend using React, React Router DOM, and Redux Toolkit.Implemented dynamic routing, product listing, cart management, and state handling for a smooth userexperience.",
    image: "/projects/project shop.co.png",
    tags: ["React.js", "Redux Tool Kit"],
    link: "https://shopcodemo.netlify.app/",
    github: "https://github.com/DanishRajawat09/E-commerce-FRONT-END",
  },
  {
    title: "Shop.Co (Front-End)",
    description:
      "Developed a responsive e-commerce frontend using React, React Router DOM, and Redux Toolkit.Implemented dynamic routing, product listing, cart management, and state handling for a smooth userexperience.",
    image: "/projects/project shop.co.png",
    tags: ["React.js", "Redux Tool Kit"],
    link: "https://shopcodemo.netlify.app/",
    github: "https://github.com/DanishRajawat09/E-commerce-FRONT-END",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* bg Glows */}
      <div className="absolute top-1/4 right-0 w-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animation-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animation-f ade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact
            </span>
          </h2>
          <p className="text-muted-foreground animation-fade-in animation-delay-200">
            A selection of my recent work, from complex web application to
            innovative tools that solve real-world problems
          </p>
        </div>
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 ">
          {projects.map((project, i) => (
            <div
              className="group glass rounded-2xl overflow-hidden animation-fade-in md:row-span-1"
              style={{ animationDelay: `${(i + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                {/* Overlay links  */}
                <div
                  className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100
                transition-opacity duration-300
                "
                >
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              {/* Content */}
              <div className="p-6 space-y-4 ">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* View all Call to action */}
        <div className="text-center mt-12 animation-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};

export default Projects;
