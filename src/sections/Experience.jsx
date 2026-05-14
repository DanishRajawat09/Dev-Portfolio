import React from "react";
const experiences = [
  {
  // period: "",
    // role: "Senior Frontend Engineer",
    // company: "Tech Innovators Inc.",
    title : "Discovery & Planning",
    description:
    "Understanding your business goals, audience, and project requirements before starting the design and development process.",
    technologies: ["React", "TypeScript", "Next.js", "GraphQL"],
    current: false,
  },
  {
    // period: "2020 — 2022",
    // role: "Frontend Engineer",
    // company: "Digital Solutions Co.",
    title : "Design & Development",
    description:
      "Building responsive, user-friendly websites focused on performance, usability, and professional presentation.",
    technologies: ["React", "Redux", "Jest", "Cypress"],
    current: false,
  },
  {
    // period: "2019 — 2020",
    // role: "Junior Developer",
    // company: "StartUp Labs",
    title : "SEO & Optimization",
    description:
      "Improving website structure, speed, and search visibility to help businesses strengthen their online presence.",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    current: false,
  },
  {
    // period: "2018 — 2019",
    // role: "Freelance Developer",
    // company: "Self-Employed",
    title : "Launch & Support",
    description:
      "Launching the project with ongoing improvements, updates, and support when needed.",
    technologies: ["JavaScript", "PHP", "WordPress", "MySQL"],
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="Process" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 " />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animation-fade-in ">
          MY PROCESS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animation-fade-in animation-delay-100 text-secondary-foreground">
            A simple process 
{" "}
            <span className="font-serif italic font-normal text-white">
          focused on business growth.
            </span>
          </h2>
          <p className="text-muted-foreground animation-fade-in animation-delay-200">
        From planning and design to development and optimization, every step is focused on creating a better online presence for your business.
          </p>
        </div>
        {/* Time Line */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />
          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                className="relative grid md:grid-cols-2 gap-8 animation-fade-in "
                style={{ animationDelay: `${(i + 1) * 150}ms` }}
                key={i}
              >
                {/* TimeLine Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 `}
                  >
                    {/* <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span> */}
                    <h3 className="text-xl font-semibold mt-2 ">{exp.title}</h3>
                    {/* <p className="text-muted-foreground ">{exp.company}</p> */}
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    {/* <div
                      className={`flex flex-wrap gap-2 mt-4 ${i % 2 === 0 ? "md:justify-end" : ""}`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        ></span>
                      ))}
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
