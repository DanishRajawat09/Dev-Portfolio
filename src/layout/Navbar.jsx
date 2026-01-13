import React from "react";
import Button from "../components/Button";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

const Navbar = () => {
  return (
    <header className="fixed right-0 top-0 left-0 bg-transparent py-5 ">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          DR<span className="text-primary">.</span>
        </a>
        {/* Desktop Nav */}
        <div className="items-center flex gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, i) => (
              <a
                key={i}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        {/* CTA Button */}
        <div>
          <Button size="sm">Contact Me</Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
