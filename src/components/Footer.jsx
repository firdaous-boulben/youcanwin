import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IconBrandX } from "@tabler/icons-react";
import { ShieldCheck } from 'lucide-react';
import logo from "../assets/img/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#F8FAFC] text-white pt-16 pb-8">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className='lg:col-span-2'>
            <div className="flex items-center gap-3 w-[226px] h-10 mb-2">
              <div className="flex justify-center items-center w-8 h-8 bg-gradient-to-br from-[#16A34A] to-[#0B6B3A] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] rounded-xl">
                <img src={logo} alt="Logo" />
              </div>
              <div className="relative w-[175px] h-7">
                <h3 className="font-['Poppins'] font-bold text-lg leading-7">
                  <span className="text-[#B01219]">You</span>
                  <span className="text-[#1E293B]">can</span>
                  <span className="text-[#0B6B3A]">win</span>
                </h3>
              </div>
            </div>

            <p className="text-[#475569] text-sm font-poppins leading-relaxed mb-6">
              Plateforme de jeux digitaux pour engager vos communautés autour du football. Un service d'agency Africa.
            </p>

            <div className="flex gap-3 mt-4">
              <span className="w-8 h-8 bg-[#E2E8F0] rounded-lg flex items-center justify-center hover:bg-[#16A34A] transition-colors cursor-pointer">
                <FaFacebookF size={16} className="text-[#475569] hover:text-white transition-colors" />
              </span>
              <span className="w-8 h-8 bg-[#E2E8F0] rounded-lg flex items-center justify-center hover:bg-[#16A34A] transition-colors cursor-pointer">
                <IconBrandX size={16} className="text-[#475569] hover:text-white transition-colors" />
              </span>
              <span className="w-8 h-8 bg-[#E2E8F0] rounded-lg flex items-center justify-center hover:bg-[#16A34A] transition-colors cursor-pointer">
                <FaInstagram size={16} className="text-[#475569] hover:text-white transition-colors" />
              </span>
              <span className="w-8 h-8 bg-[#E2E8F0] rounded-lg flex items-center justify-center hover:bg-[#16A34A] transition-colors cursor-pointer">
                <FaLinkedinIn size={16} className="text-[#475569] hover:text-white transition-colors" />
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[#0F172A] mb-4 font-poppins">
              Liens rapides
            </h4>
            <ul className="space-y-3">
              {['Nos offres', 'Nos jeux', 'Album 2025', 'À propos'].map((item, index) => (
                <li key={index}>
                  <span className="text-[#475569] hover:text-[#0B6B3A] transition font-poppins text-sm cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="font-semibold text-[#0F172A] mb-4 font-poppins">
              Contact & Légale
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:games@agency.africa" 
                  className="text-[#475569] hover:text-[#0B6B3A] transition font-poppins text-sm"
                >
                  games@agency.africa
                </a>
              </li>
              {['Mentions légales', 'Protection des données (CNDP)', "Conditions d'utilisation"].map((item, index) => (
                <li key={index}>
                  <span className="text-[#475569] hover:text-[#0B6B3A] transition font-poppins text-sm cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#E5E7EB] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          {/* Copyright */}
          <p className="text-[#475569] text-sm font-poppins">
            © 2025 Youcanwin. Tous droits réservés.
          </p>

          {/* Service */}
          <div className="text-[#475569] text-sm font-poppins">
            Un service de <span className="text-[#0B6B3A] font-semibold">Agency.Africa</span> — games.agency.africa
          </div>
        </div>

        <div className="flex justify-center">
          <div className="group inline-flex items-center gap-3 bg-[#F0FDF4] border border-[#BBF7D0] text-[#0B6B3A] text-sm font-medium font-poppins text-center py-2.5 px-4 rounded-lg w-fit">
            <ShieldCheck size={18} className="text-[#16A34A]"/>
            Site conforme CNDP Maroc
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;