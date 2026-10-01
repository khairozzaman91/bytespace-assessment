import logo1 from "../assets/Brands/Vector (1).png";
import logo2 from "../assets/Brands/Vector (2).png";
import logo3 from "../assets/Brands/Vector (3).png";
import logo4 from "../assets/Brands/Vector (4).png";
import logo5 from "../assets/Brands/Vector.png";

export default function Brands() {
  return (
    <div className="w-full bg-white py-10 shadow-sm">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-wrap items-center justify-between gap-6">
          
          <div className="flex items-center gap-2.5">
            <img src={logo1} alt="Logoipsum" className="h-6 w-auto object-contain" />
            <span className="text-[18px] font-bold text-gray-500 tracking-tight">Logoipsum</span>
          </div>

          <div className="flex items-center gap-2.5">
            <img src={logo2} alt="Logoipsum" className="h-6 w-auto object-contain" />
            <span className="text-[18px] font-bold text-gray-500 tracking-tight">Logoipsum</span>
          </div>

          <div className="flex items-center gap-2.5">
            <img src={logo3} alt="Logoipsum" className="h-6 w-auto object-contain" />
            <span className="text-[18px] font-bold text-gray-500 tracking-tight">Logoipsum</span>
          </div>

          <div className="flex items-center gap-2.5">
            <img src={logo4} alt="Logoipsum" className="h-6 w-auto object-contain" />
            <span className="text-[18px] font-bold text-gray-500 tracking-tight">Logoipsum</span>
          </div>

          <div className="flex items-center gap-2.5">
            <img src={logo5} alt="Logoipsum" className="h-6 w-auto object-contain" />
            <span className="text-[18px] font-bold text-gray-500 tracking-tight">Logoipsum</span>
          </div>

        </div>
      </div>
    </div>
  );
}
