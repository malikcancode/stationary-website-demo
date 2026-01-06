import { useState } from "react";
import { FiMenu, FiX, FiSearch, FiPhone } from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Collections", href: "#collections" },
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Top Bar */}
      {/* <div className="bg-card py-2">
        <div className="container-custom flex items-center justify-between text-sm">
          <p className="text-muted-foreground hidden sm:block">
            Showcasing innovative design and exceptional craftsmanship.
          </p>
          <div className="flex items-center gap-4 ml-auto">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors"
            >
              <FiPhone className="w-4 h-4" />
              <span className="hidden md:inline">+1 (234) 567-890</span>
            </a>
          </div>
        </div>
      </div> */}

      {/* Main Header */}
      <div className="container-custom py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#"
            className="font-heading text-2xl font-bold tracking-tight"
          >
            Camel <span className="text-muted-foreground">Stationery</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              className="p-2 hover:bg-card rounded-full transition-colors"
              aria-label="Search"
            >
              <FiSearch className="w-5 h-5" />
            </button>
            <a href="#contact" className="btn-primary hidden sm:flex">
              Get in Touch
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 hover:bg-card rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground font-medium py-2 hover:text-muted-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a href="#contact" className="btn-primary mt-2 text-center">
                Get in Touch
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
