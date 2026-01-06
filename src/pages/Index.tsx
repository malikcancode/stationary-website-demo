import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Products from "../components/Products";
import ScrollVelocity from "../components/ScrollVelocity";
import FeaturedProduct from "../components/FeaturedProduct";
import Instagram from "../components/Instagram";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import CursorFollower from "../components/CursorFollower";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <CursorFollower />
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      <div className={`min-h-screen ${isLoading ? "hidden" : ""}`}>
        <Header />
        <main>
          <Hero />
          <Categories />
          <Products />
          {/* <ScrollVelocity
            texts={["Premium Stationary", "Innovative Design"]}
            velocity={50}
            className="text-muted-foreground"
            parallaxClassName="py-4 bg-card/30"
          /> */}
          <FeaturedProduct />
          <Instagram />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
