// Import your user avatar images for testimonials
import sarahImg from "../assets/profile/Ellipse.png";
import jamesImg from "../assets/profile/Ellipse2.png";
import alexImg from "../assets/profile/Ellipse3.png";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Enthusiastic Learner",
      image: sarahImg,
      quote: "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."
    },
    {
      name: "James L.",
      role: "Lifelong Learner",
      image: jamesImg,
      quote: "I've tried several online learning platforms, but none compare to this. The vibrant community, easy navigation, and engaging content make it a go-to platform for continuous skill development."
    },
    {
      name: "Alex B.",
      role: "Inspired Creator",
      image: alexImg,
      quote: "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally."
    }
  ];

  return (
    <section className="relative w-full py-20 px-6 bg-gradient-to-b from-white via-[#f4f7fe] to-white overflow-hidden">
      <div className="mx-auto max-w-4xl">
        
        {/* Section Header */}
   {/* Section Header: Left & Right Layout */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16 mt-3">
          {/* Left Side: Title */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              Discover What Our Community Is Saying
            </h2>
          </div>

          {/* Right Side: Description */}
          <div className="lg:w-1/2">
            <p className="text-gray-500 text-sm lg:text-base leading-relaxed">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform.
            </p>
          </div>
        </div>
        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl"
            >
              <div>
                {/* User Info Header */}
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover shadow-md"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-base">{item.name}</h4>
                    <p className="text-blue-600 text-xs font-semibold">{item.role}</p>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  "{item.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}