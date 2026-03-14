import { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import logo from "../assets/img/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/95 h-[72px] sticky top-0 z-50 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] backdrop-blur-[12px]">
      <div className="max-w-7xl mx-auto px-[40px] h-full flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3 w-[226px] h-10">
          <div className="flex justify-center items-center w-10 h-10 bg-gradient-to-br from-[#16A34A] to-[#0B6B3A] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] rounded-xl">
            <img src={logo} alt="Logo" />
          </div>
          {/* Text + Badge */}
          <div className="flex items-center gap-2">
            <h1 className="font-['Poppins'] font-bold text-[20px] leading-7">
              <span className="bg-gradient-to-r from-[#DC2626] to-[#B01219] bg-clip-text text-transparent">You</span>
              <span className="text-[#1E293B]">can</span>
              <span className="bg-gradient-to-r from-[#16A34A] to-[#0B6B3A] bg-clip-text text-transparent">win</span>
            </h1>

            <div className="mt-1 bg-[#DCFCE7] rounded-full px-2 py-[2px] flex items-center justify-center">
              <span className="font-poppins font-semibold text-[10px] leading-[15px] text-[#0B6B3A]">
                GAMES
              </span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-3 h-10">
          {["Nos offres", "Nos jeux", "Album 2025", "À propos"].map((item) => (
            <span key={item} className="px-3 py-2 rounded-md cursor-pointer hover:text-[#0B6B3A] transition">
              <span className="font-['Poppins'] font-medium text-sm text-[#334155]">{item}</span>
            </span>
          ))}

          {/* Demo Button */}
          <button className="flex items-center px-5 py-2.5 gap-2 w-[215px] h-10 bg-gradient-to-r from-[#16A34A] to-[#0B6B3A] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] rounded-lg">
            <span className="font-['Poppins'] font-medium text-sm text-white">Demander un démo</span>
            <ChevronRight size={16} className="text-white" />
          </button>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-[80px]">
          <div className="flex flex-col space-y-4">
            {["Nos offres", "Nos jeux", "Album 2025", "À propos"].map((item) => (
              <a key={item} className="font-['Poppins'] font-medium text-sm text-[#334155] cursor-pointer hover:text-[#0B6B3A] transition">
                {item}
              </a>
            ))}
            <button className="flex items-center justify-center px-5 py-2.5 gap-2 w-full h-10 bg-gradient-to-r from-[#16A34A] to-[#0B6B3A] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] rounded-lg">
              <span className="font-['Poppins'] font-medium text-sm text-white">Demander un démo</span>
              <ChevronRight size={16} className="text-white" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;