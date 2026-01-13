import React, { useMemo } from "react";

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
          </div>
          {/* right */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
