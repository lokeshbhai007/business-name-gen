import BusinessFeatures from "@/components/BusinessFeaturesCard";
import Search from "@/components/Search";
import { Button } from "@/components/ui/button";
import { Filter, Heart, Lightbulb } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-40 md:h-screen md:w-screen">
      <div className="md:px-0 px-5">
        <h1 className="md:text-5xl text-4xl text-white capitalize font-semibold text-center mb-3">
          Business Name Generator
        </h1>
        <p className="text-white text-center text-xl">
          Generate the perfect Business name by our ai-powered business name
          generator tool!
        </p>

        <Search />
      </div>

      <div >
        {/* <div className="md:mb-0 mb-10">
          <Lightbulb className="text-primary mb-3" size={30} />
          <h4 className="text-white text-xl font-semibold">Generate Ideas</h4>
          <p className="text-white">
            Enter your business keywords and let our AI-powered generator create
            hundreds of unique, creative business names instantly. Get inspired
            with memorable names that perfectly match your brand vision.
          </p>
        </div>
        <div className="md:mb-0 mb-10">
          <Filter className="text-primary mb-3" size={30} />
          <h4 className="text-white text-xl font-semibold">Filter Results</h4>
          <p className="text-white">
            Refine your search with smart filters including industry type, name
            length, style preferences, and domain availability. Find the perfect
            name that fits your specific business requirements.
          </p>
        </div>
        <div className="md:mb-0 mb-10">
          <Heart className="text-primary mb-3" size={30} />
          <h4 className="text-white text-xl font-semibold">Save Favorites</h4>
          <p className="text-white">
            Bookmark your favorite business names and create a personalized
            collection. Compare options, share with your team, and make the
            final decision with confidence.
          </p>
        </div> */}
        <BusinessFeatures />
      </div>
    </div>
  );
}
