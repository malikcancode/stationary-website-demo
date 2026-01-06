import { FiInstagram } from "react-icons/fi";

const Instagram = () => {
  const images = [
    "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=300&h=300&fit=crop",
    "https://media.istockphoto.com/id/2200507113/photo/stopping-falling-dominoes-in-a-conceptual-image-of-business-crisis-management.webp?a=1&b=1&s=612x612&w=0&k=20&c=9-9CrP7rnAiQd3c8GpD2TdFHE9Wqhcd2JrDx-yyqR5w=",
    "https://media.istockphoto.com/id/2151314310/photo/school-supplies-concept-back-to-school-colored-stationery-is-arranged-in-white-organizers.webp?a=1&b=1&s=612x612&w=0&k=20&c=gTvhTH3PP9uqipxaAWBSn2Z0Xy_AU1jKQfvI4ta-Mrc=",
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-muted-foreground italic mb-2">follow us on</p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-2xl md:text-3xl font-heading font-bold hover:text-muted-foreground transition-colors"
          >
            <FiInstagram className="w-8 h-8" />
            @stationex
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {images.map((image, index) => (
            <a
              key={index}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <img
                src={image}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-all duration-300 flex items-center justify-center">
                <FiInstagram className="w-8 h-8 text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instagram;
