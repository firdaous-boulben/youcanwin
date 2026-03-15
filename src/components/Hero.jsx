import { LightbulbIcon, ChevronRight, QrCode, Gift } from 'lucide-react';
import hero from "../assets/img/hero.png";

const Hero = () => {
  return (
    <section className="px-8 inset-0 bg-gradient-to-br from-[#F0FDF480] via-[#FFFFFF80] to-[#FEF2F280] pointer-events-none z-0">
        <div className="container py-24 px-8 sm:px-8 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-[72px] font-bold text-[#0F172A] leading-tight mb-6">
                Transformez chaque{" "}
                <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-[#16A34A] to-[#0B6B3A] bg-clip-text text-transparent">
                    produit
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 277 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 18C72 8 152 2 275 8" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                    <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#16A34A" />
                        <stop offset="100%" stopColor="#0B6B3A" />
                    </linearGradient>
                    </defs>
                </svg>
                </span>{" "}
                en expérience de jeu
            </h1>
            <p className="text-2xl text-[#475569] mb-8">
              YouCanWin connecte vos marques aux fans de football à travers des mécaniques de gamification innovantes. <span className="font-semibold text-[#0F172A]">Codes QR, cartes digitales, défis et récompenses.</span>
            </p>

            {/* Stats Section */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:gap-24 gap-6 mb-8">
                <div className="flex flex-col ">
                    <div className="text-4xl font-bold text-[#0B6B3A]">500K+</div>
                    <div className="text-[14px] text-[#475569]">Interactions/mois</div>
                </div>
                <div className="flex flex-col ">
                    <div className="text-4xl font-bold text-[#B01219]">50+</div>
                    <div className="text-[14px] text-[#475569]">Marques actives</div>
                </div>
                <div className="flex flex-col ">
                    <div className="text-4xl font-bold text-[#0B6B3A]">x3.5</div>
                    <div className="text-[14px] text-[#475569]">ROI moyen</div>
                </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
                <button className="flex items-center justify-center text-lg px-5 py-2.5 gap-2 w-[204px] h-[64px] text-white bg-gradient-to-r from-[#16A34A] to-[#0B6B3A] shadow-lg rounded-xl">
                    Voir la démo
                    <ChevronRight size={16} />
                </button>
                <button className="flex items-center justify-center text-lg px-5 py-2.5 gap-2 w-[293px] h-[64px] text-[#334155] border-[2px] border-[#CBD5E1] bg-[#ffffff] hover:bg-transparent hover:border-[#334155] rounded-xl">
                    <LightbulbIcon size={18} />
                    Comment ça marche
                </button>
            </div>

            <div className="mt-12 pt-8 border-t border-[#E2E8F0]">
                <p className="text-xs font-medium text-[#64748B] uppercase mb-4">Ils nous font confiance</p>
                <div className="flex flex-wrap items-center gap-8 text-sm text-[#94A3B8] font-medium">
                    <span>Maroc Telecom</span>
                    <span>Inwi</span>
                    <span>Orange</span>
                    <span>Carrefour</span>
                </div>
            </div>
          </div>

        {/* Right Column */}
        <div className="relative">
            <img src={hero} alt="Album Digital 2025" className="shadow-2xl relative z-10 w-full max-w-md mx-auto"/>
  
            {/* Top Right Card */}
            <div className="absolute top-0 right-0 bg-white rounded-2xl shadow-xl p-4 max-w-[210px] z-20">
                <div className="flex items-start gap-3">
                    <div className="bg-[#DCFCE7] p-2 rounded-lg flex-shrink-0">
                        <QrCode className="w-5 h-5 text-[#16A34A]" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold text-[#0F172A]">Scan QR Code</span>
                        <span className="text-xs text-[#64748B]">Débloquer une carte</span>
                    </div>
                </div>
            </div>
  
            {/* Bottom Left Card */}
            <div className="absolute bottom-0 left-0 bg-white rounded-2xl shadow-xl p-4 max-w-[218px] z-20">
                <div className="flex items-start gap-3">
                    <div className="bg-[#FEE2E2] p-2 rounded-lg flex-shrink-0">
                        <Gift className="w-5 h-5 text-[#DC2626]" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold text-[#0F172A]">Récompense</span>
                        <span className="text-xs text-[#64748B]">Tirage hebdomadaire</span>
                    </div>
                </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;