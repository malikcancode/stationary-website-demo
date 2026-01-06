import {
  FiEdit,
  FiBook,
  FiClipboard,
  FiPaperclip,
  FiBookmark,
  FiLayers,
} from "react-icons/fi";

const Categories = () => {
  const categories = [
    { name: "Pens & Pencils", icon: FiEdit, count: 28 },
    { name: "Notebooks", icon: FiBook, count: 22 },
    { name: "Erasers", icon: FiClipboard, count: 16 },
    { name: "Markers", icon: FiBookmark, count: 19 },
    { name: "Clips & Pins", icon: FiPaperclip, count: 14 },
    { name: "Paper & Pads", icon: FiLayers, count: 25 },
  ];

  return (
    <section id="collections" className="py-16 md:py-24 bg-card/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-heading">
            Product <span className="text-muted-foreground">Categories</span>
          </h2>
          <p className="section-subheading mx-auto mt-4">
            Explore our diverse range of stationary designs and innovative
            writing instruments
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="category-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center group-hover:bg-foreground transition-colors duration-300">
                  <category.icon className="w-7 h-7 text-foreground group-hover:text-background transition-colors duration-300" />
                </div>
                {category.count > 0 && (
                  <span className="absolute -top-1 -right-1 w-6 h-6 bg-foreground text-background text-xs font-medium rounded-full flex items-center justify-center">
                    {category.count}
                  </span>
                )}
              </div>
              <p className="font-heading font-medium text-center">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
