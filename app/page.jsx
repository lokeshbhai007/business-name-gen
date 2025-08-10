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
        <p className="text-white text-center opacity-60 text-xl">
          Generate the perfect Business name by our ai-powered business name
          generator tool!
        </p>

        <Search />
      </div>

      <div >
        <BusinessFeatures />
      </div>
    </div>
  );
}
