import React, { useMemo } from "react";
import Button from "../components/Button.jsx";
import {
  ArrowRight,
  ChevronDown,
  Download,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import AnimatedBorderButton from "../components/AnimatedBorderButton.jsx";

const skills = [
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
];

const Hero = () => {
  const dots = useMemo(() => {
    return Array.from({ length: 30 }, () => {
      const duration = 15 + Math.random() * 20;
      const delay = Math.random() * 5;

      return {
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration,
        delay,
      };
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="hero background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20b2a6",
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              animation: `slow-drift ${dot.duration}s ease-in-out infinite`,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>
      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center ">
          {/* left */}
          <div className="space-y-8">
            <div className="animation-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />{" "}
                Software Engineer • React Specialist
              </span>
            </div>
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animation-fade-in animation-delay-100">
                Creafting
                <span className="text-primary glow-text">digital</span>
                <br />
                experience with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animation-fade-in animation-delay-200">
                Hi, I'm Pedro Machado — a software engineer specializing in
                React, Next.js, and TypeScript. I build scalable, performant web
                applications that users love.
              </p>
            </div>
            {/* CTA's  */}
            <div className="flex flex-wrap gap-4 animation-fade-in animation-delay-300">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>
            {/* Social Links  */}
            <div className="flex items-center gap-4 animation-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground  ">
                Fallow Me:
              </span>
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, i) => (
                <a
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  href={social.href}
                  key={i}
                >
                  {" "}
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* right */}
          <div className="relative animation-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-bg from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile.jpg"
                  alt="Danish Rajawat"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* States Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500 ">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animation-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee  ">
              {[...skills, ...skills].map((skill, i) => (
                <div key={i} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animation-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground  hover:text-primary "
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
