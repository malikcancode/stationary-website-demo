import { FiArrowRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const FeaturedProduct = () => {
  const featuredImages = [
    {
      src: "/3.jpg",
      alt: "Featured Design - Premium Writing Collection",
    },
    {
      src: "/4.jpg",
      alt: "Featured Design - Elegant Stationery",
    },
    {
      src: "/5.jpg",
      alt: "Featured Design - Designer Collection",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % featuredImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-card/50">
      <div className="container-custom">
        <div className="bg-accent rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Image */}
            <div className="relative aspect-square lg:aspect-auto min-h-[400px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={featuredImages[currentImageIndex].src}
                  alt={featuredImages[currentImageIndex].alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
              <div className="absolute top-6 left-6 z-10">
                <span className="inline-block px-4 py-2 bg-foreground text-background text-sm font-medium rounded-full">
                  Featured
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <div className="space-y-6">
                <div>
                  <span className="text-muted-foreground text-sm">
                    Featured Design
                  </span>
                  <h2 className="section-heading mt-2">
                    Premium Writing Collection
                  </h2>
                </div>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  Showcasing our expertly designed writing instruments and
                  stationary essentials. Each piece demonstrates meticulous
                  attention to detail, combining ergonomic functionality with
                  aesthetic elegance. A testament to innovative design in
                  everyday tools.
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-background/50 rounded-xl p-4">
                    <p className="font-heading font-semibold text-lg">
                      Ergonomic
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Comfort-focused design
                    </p>
                  </div>
                  <div className="bg-background/50 rounded-xl p-4">
                    <p className="font-heading font-semibold text-lg">
                      Precision
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Engineered accuracy
                    </p>
                  </div>
                  <div className="bg-background/50 rounded-xl p-4">
                    <p className="font-heading font-semibold text-lg">
                      Durable
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Long-lasting quality
                    </p>
                  </div>
                  <div className="bg-background/50 rounded-xl p-4">
                    <p className="font-heading font-semibold text-lg">
                      Innovative
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Modern aesthetics
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <a href="#contact" className="btn-primary">
                    Learn More
                    <FiArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
