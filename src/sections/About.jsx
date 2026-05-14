import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import React from "react";
const highlights = [
  {
    icon: Code2,
    title: "Modern Websites",
    description:
      "Modern responsive websites built for performance, usability, and strong online presence.",
  },
  {
    icon: Rocket,
    title: "SEO Optimization",
    description:
      "Improving website structure and search visibility to help businesses reach more people online."
  },
  {
    icon: Users,
    title: "Google Business Profile",
    description: "Optimizing business profiles to improve trust, reach, and customer engagement.",
  },
  {
    icon: Lightbulb,
    title: "Google Ads",
    description:
      "Creating targeted ad campaigns focused on attracting relevant traffic, calls, and leads..",
  },
];
const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center ">
          {/* left Column */}
          <div className="space-y-8 ">
            <div className="animation-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animation-fade-in animation-delay-100 text-secondary-foreground">
             Creating websites and marketing {" "}
              <span className="font-serif italic font-normal text-white ">
                strategies that help businesses grow.
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
               I’m a MERN stack developer and a google marketer focused on helping businesses build a stronger online presence through modern websites and digital marketing.
              </p>
              <p>
      Along with website development, I also work on SEO Optimization, Google Business Profile optimization, and Google Ads to help businesses improve visibility and reach more customers online.
              </p>
              <p>
               My focus is on creating clean, fast, and user-friendly websites that not only look professional but also support long-term business growth.
              </p>
            </div>
            {/* <div className="glass rounded-2xl p-6 glow-border animation-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful — products that users love to
                use and developers love to maintain."
              </p>
            </div> */}
          </div>
          {/* Right column */}
          <div className="grid sm:grid-cols-2 gap-6 ">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="glass p-6 rounded-2xl animation-fade-in"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
