

// Import your custom category icons/images here
import designIcon from "../assets/courselogo/Frame4.png";
import devIcon from "../assets/courselogo/Filled.png";
import itIcon from "../assets/courselogo/Frame5.png";
import businessIcon from "../assets/courselogo/Frame6.png";
import marketingIcon from "../assets/courselogo/Frame7.png";
import photoIcon from "../assets/courselogo/Frame8.png";

export default function LearningPaths() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        
        {/* Section Heading & Subtitle */}
        <h2 className="text-[32px] lg:text-[40px] font-bold text-gray-900">
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <p className="mt-3 max-w-[750px] mx-auto text-[16px] text-gray-500 leading-relaxed">
          At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
        </p>

        {/* Category Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          
          {/* Design Category */}
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all">
            <div className="w-16 h-16 rounded-full bg-lime-300 flex items-center justify-center mb-4 overflow-hidden p-3">
              <img src={designIcon} alt="Design" className="w-full h-full object-contain" />
            </div>
            <span className="text-[18px] font-semibold text-gray-800">Design</span>
          </div>

          {/* Development Category */}
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all">
            <div className="w-16 h-16 rounded-full bg-lime-300 flex items-center justify-center mb-4 overflow-hidden p-3">
              <img src={devIcon} alt="Development" className="w-full h-full object-contain" />
            </div>
            <span className="text-[18px] font-semibold text-gray-800">Development</span>
          </div>

          {/* IT & Software Category */}
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all">
            <div className="w-16 h-16 rounded-full bg-lime-300 flex items-center justify-center mb-4 overflow-hidden p-3">
              <img src={itIcon} alt="IT & Software" className="w-full h-full object-contain" />
            </div>
            <span className="text-[18px] font-semibold text-gray-800">IT & Software</span>
          </div>

          {/* Business Category */}
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all">
            <div className="w-16 h-16 rounded-full bg-lime-300 flex items-center justify-center mb-4 overflow-hidden p-3">
              <img src={businessIcon} alt="Business" className="w-full h-full object-contain" />
            </div>
            <span className="text-[18px] font-semibold text-gray-800">Business</span>
          </div>

          {/* Marketing Category */}
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all">
            <div className="w-16 h-16 rounded-full bg-lime-300 flex items-center justify-center mb-4 overflow-hidden p-3">
              <img src={marketingIcon} alt="Marketing" className="w-full h-full object-contain" />
            </div>
            <span className="text-[18px] font-semibold text-gray-800">Marketing</span>
          </div>

          {/* Photography Category */}
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all">
            <div className="w-16 h-16 rounded-full bg-lime-300 flex items-center justify-center mb-4 overflow-hidden p-3">
              <img src={photoIcon} alt="Photography" className="w-full h-full object-contain" />
            </div>
            <span className="text-[18px] font-semibold text-gray-800">Photography</span>
          </div>

        </div>

      </div>
    </section>
  );
}