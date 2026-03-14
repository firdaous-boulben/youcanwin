import { Calendar, Mail } from 'lucide-react';

const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-[#DC2626] to-[#B91C1C] py-20">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-4xl sm:text-4xl lg:text-4xl font-bold text-white mb-6 leading-tight">
            Prêt à transformer votre marketing ?
          </h2>

          {/* Subheading */}
          <p className="text-lg text-[#FEF2F2] mb-10">
            Rejoignez les marques qui engagent leurs fans avec YouCanWin
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group inline-flex items-center gap-3 bg-white text-[#B01219] px-8 py-4 rounded-lg hover:shadow-2xl transition-all font-medium">
              <Calendar size={18} />
              <span>Planifier une démo gratuite</span>
            </button>
            
            <button className="group inline-flex items-center gap-3 border-2 border-white/20 bg-white/10 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all font-medium">
              <Mail size={18} />
              <span>Nous contacter</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;