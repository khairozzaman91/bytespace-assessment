
import Hero from "../components/Hero";
import Brands from "../components/Partners";
import CategorySection from "../components/CategorySection";
import CourseGrid from "../components/CourseGrid";
import LearningPaths from "../components/LearningPaths";
import ProfessionalGrowth from "../components/ProfessionalGrowth";
import CreatorCTA from "../components/CreatorCTA";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div className="w-full overflow-hidden bg-white">
      <Hero />
      <Brands />
      <CategorySection />
      <CourseGrid />
      <LearningPaths />
      <ProfessionalGrowth />
      <CreatorCTA />
      <Testimonials />
    </div>
  );
}