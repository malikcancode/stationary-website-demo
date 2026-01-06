import { FiArrowRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const images = [
    {
      src: "/1.jpg",
      alt: "Premium fountain pens and writing instruments",
    },
    {
      src: "/4.jpg",
      alt: "Elegant writing collection",
    },
    {
      src: "/5.jpg",
      alt: "Designer notebooks",
    },
    {
      src: "/7.jpg",
      alt: "Professional stationery",
    },
    {
      src: "/8.jpg",
      alt: "Premium office supplies",
    },
  ];

  const images2 = [
    {
      src: "/2.jpg",
      alt: "Designer notebooks and journals",
    },
    {
      src: "/9.jpg",
      alt: "Artistic tools",
    },
    {
      src: "/11.jpg",
      alt: "Creative supplies",
    },
    {
      src: "/14.jpg",
      alt: "Quality materials",
    },
    {
      src: "/15.jpg",
      alt: "Fine writing instruments",
    },
  ];

  const [currentImageIndex1, setCurrentImageIndex1] = useState(0);
  const [currentImageIndex2, setCurrentImageIndex2] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCurrentImageIndex1((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval1);
  }, []);

  useEffect(() => {
    const interval2 = setInterval(() => {
      setCurrentImageIndex2((prev) => (prev + 1) % images2.length);
    }, 3000);

    return () => clearInterval(interval2);
  }, []);

  return (
    <section className="py-12 md:py-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-card rounded-full text-sm font-medium text-muted-foreground">
              New Collection 2026
            </span>
            <h1 className="font-heading leading-none">
              <span
                className="block text-4xl md:text-5xl
               lg:text-5xl font-bold"
              >
                Showcasing{" "}
                <span className="text-muted-foreground">Premium</span>
              </span>
              <span className="block text-5xl md:text-5xl lg:text-5xl font-extrabold mt-2">
                Stationary
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              A curated showcase of innovative stationary design and precision
              craftsmanship. Explore our portfolio of writing instruments and
              desk essentials that inspire productivity and creativity.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#products" className="btn-primary">
                View Portfolio
                <FiArrowRight className="w-5 h-5" />
              </a>
              <a href="#about" className="btn-outline">
                About Us
              </a>
            </div>
          </div>

          {/* Hero Images Grid */}
          <div
            className="grid grid-cols-2 gap-4 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="space-y-4">
              <div className="bg-card rounded-2xl aspect-[4/5] overflow-hidden relative">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex1}
                    src={images[currentImageIndex1].src}
                    alt={images[currentImageIndex1].alt}
                    className="w-full h-full object-cover absolute inset-0"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>
              </div>
              <div className="bg-accent rounded-2xl p-6">
                <p className="font-heading font-semibold text-lg">Precision</p>
                <p className="text-muted-foreground text-sm">
                  Engineered excellence
                </p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-accent rounded-2xl p-6">
                <p className="font-heading font-semibold text-2xl">2026</p>
                <p className="text-muted-foreground text-sm">Latest Designs</p>
              </div>
              <div className="bg-card rounded-2xl aspect-[4/5] overflow-hidden relative">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex2}
                    src={images2[currentImageIndex2].src}
                    alt={images2[currentImageIndex2].alt}
                    className="w-full h-full object-cover absolute inset-0"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
