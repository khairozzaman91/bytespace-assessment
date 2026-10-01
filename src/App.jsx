import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brands from "./components/Partners";
import CategorySection from "./components/CategorySection";
import CourseGrid from "./components/CourseGrid";
import LearningPaths from "./components/LearningPaths";
import ProfessionalGrowth from "./components/ProfessionalGrowth";



function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <CategorySection />
        <CourseGrid />
        <LearningPaths />
        <ProfessionalGrowth />
    
    </>
  );
}

export default App;
