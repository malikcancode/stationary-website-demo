import { useState } from "react";
import { FiEye, FiX } from "react-icons/fi";

const Products = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filters = ["All", "Popular", "New Arrivals", "Best Rated"];

  const products = [
    {
      id: 1,
      name: "Premium Fountain Pen",
      image: "/4.jpg",
      category: "Popular",
      badge: null,
    },
    {
      id: 2,
      name: "Designer Notebook Set",
      image: "/5.jpg",
      category: "New Arrivals",
      badge: "New",
    },
    {
      id: 3,
      name: "Precision Mechanical Pencil",
      image: "/15.jpg",
      category: "Best Rated",
      badge: null,
    },
    {
      id: 4,
      name: "Ergonomic Gel Pen",
      image: "/7.jpg",
      category: "Popular",
      badge: "New",
    },
    {
      id: 5,
      name: "Leather-Bound Journal",
      image: "/8.jpg",
      category: "Popular",
      badge: null,
    },
    {
      id: 6,
      name: "Professional Marker Set",
      image: "/9.jpg",
      category: "Best Rated",
      badge: "Featured",
    },
    {
      id: 7,
      name: "Artistic Sketch Pad",
      image: "/11.jpg",
      category: "New Arrivals",
      badge: null,
    },
    {
      id: 8,
      name: "Premium Eraser Collection",
      image: "/14.jpg",
      category: "Popular",
      badge: null,
    },
    {
      id: 9,
      name: "Executive Pen Set",
      image: "/4.jpg",
      category: "Popular",
      badge: null,
    },
    {
      id: 10,
      name: "Vintage Ink Bottle",
      image: "/5.jpg",
      category: "New Arrivals",
      badge: null,
    },
    {
      id: 11,
      name: "Designer Paper Clips",
      image: "/15.jpg",
      category: "Best Rated",
      badge: null,
    },
    {
      id: 12,
      name: "Luxury Desk Organizer",
      image: "/7.jpg",
      category: "Popular",
      badge: "Featured",
    },
  ];

  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <section id="products" className="py-16 md:py-24">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="section-heading">
              The <span className="text-muted-foreground">Collection</span>
            </h2>
            <p className="section-subheading mt-4">
              A selection of our finest designs, showcasing innovation and
              craftsmanship
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-foreground text-background"
                    : "bg-card text-foreground hover:bg-accent"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid Gallery */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {/* Column 1 */}
          <div className="grid gap-4">
            {[filteredProducts[0], filteredProducts[4], filteredProducts[8]]
              .filter(Boolean)
              .map((product) => (
                <div
                  key={product.id}
                  className="cursor-pointer group relative"
                  onClick={() => setSelectedProduct(product)}
                >
                  <img
                    className="h-auto max-w-full rounded-lg object-cover object-center group-hover:opacity-90 transition-opacity duration-300"
                    src={product.image}
                    alt={product.name}
                  />
                  {product.badge && (
                    <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full bg-accent text-foreground">
                      {product.badge}
                    </span>
                  )}
                  {/* Eye Icon Overlay */}
                  <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FiEye className="w-8 h-8 text-white" />
                  </div>
                </div>
              ))}
          </div>

          {/* Column 2 */}
          <div className="grid gap-4">
            {[filteredProducts[1], filteredProducts[5], filteredProducts[9]]
              .filter(Boolean)
              .map((product) => (
                <div
                  key={product.id}
                  className="cursor-pointer group relative"
                  onClick={() => setSelectedProduct(product)}
                >
                  <img
                    className="h-auto max-w-full rounded-lg object-cover object-center group-hover:opacity-90 transition-opacity duration-300"
                    src={product.image}
                    alt={product.name}
                  />
                  {product.badge && (
                    <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full bg-accent text-foreground">
                      {product.badge}
                    </span>
                  )}
                  {/* Eye Icon Overlay */}
                  <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FiEye className="w-8 h-8 text-white" />
                  </div>
                </div>
              ))}
          </div>

          {/* Column 3 */}
          <div className="grid gap-4">
            {[filteredProducts[2], filteredProducts[6], filteredProducts[10]]
              .filter(Boolean)
              .map((product) => (
                <div
                  key={product.id}
                  className="cursor-pointer group relative"
                  onClick={() => setSelectedProduct(product)}
                >
                  <img
                    className="h-auto max-w-full rounded-lg object-cover object-center group-hover:opacity-90 transition-opacity duration-300"
                    src={product.image}
                    alt={product.name}
                  />
                  {product.badge && (
                    <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full bg-accent text-foreground">
                      {product.badge}
                    </span>
                  )}
                  {/* Eye Icon Overlay */}
                  <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FiEye className="w-8 h-8 text-white" />
                  </div>
                </div>
              ))}
          </div>

          {/* Column 4 */}
          <div className="grid gap-4">
            {[filteredProducts[3], filteredProducts[7]]
              .filter(Boolean)
              .map((product) => (
                <div
                  key={product.id}
                  className="cursor-pointer group relative"
                  onClick={() => setSelectedProduct(product)}
                >
                  <img
                    className="h-auto max-w-full rounded-lg object-cover object-center group-hover:opacity-90 transition-opacity duration-300"
                    src={product.image}
                    alt={product.name}
                  />
                  {product.badge && (
                    <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full bg-accent text-foreground">
                      {product.badge}
                    </span>
                  )}
                  {/* Eye Icon Overlay */}
                  <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FiEye className="w-8 h-8 text-white" />
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a href="#" className="btn-outline">
            View Complete Showcase
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 animate-fade-in"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-card rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-background/90 hover:bg-background rounded-full flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <FiX className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <div className="grid md:grid-cols-2 gap-6 p-6">
              {/* Image */}
              <div className="aspect-square overflow-hidden rounded-xl bg-accent/20">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="flex flex-col justify-center space-y-4">
                {selectedProduct.badge && (
                  <span className="inline-block w-fit px-3 py-1 text-xs font-medium rounded-full bg-accent text-foreground">
                    {selectedProduct.badge}
                  </span>
                )}
                <h3 className="font-heading text-3xl font-bold">
                  {selectedProduct.name}
                </h3>
                <p className="text-muted-foreground">
                  Category: {selectedProduct.category}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This exceptional piece showcases innovative design and premium
                  craftsmanship. Perfect for those who appreciate quality and
                  attention to detail in their everyday tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
