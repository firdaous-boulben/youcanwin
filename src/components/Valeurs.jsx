import { Zap, Heart, Share2 } from 'lucide-react';

const Valeurs = () => {
  const valeurs = [
    {
      icon: Zap,
      title: 'Engagement immédiat',
      description: 'Chaque produit devient une opportunité de jeu'
    },
    {
      icon: Heart,
      title: 'Fidélisation naturelle',
      description: 'Les clients reviennent pour compléter leur collection'
    },
    {
      icon: Share2,
      title: 'Viralité organique',
      description: 'Les fans partagent et échangent entre eux'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-[#16A34A] to-[#0B6B3A]">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-4xl font-bold text-white mb-4">
            Transformez vos ventes en expérience mémorable
          </h2>
          <p className="text-lg text-[#F0FDF4] max-w-3xl mx-auto">
            YouCanWin offre à vos clients plus qu'un produit : une expérience interactive complète autour du football
          </p>
        </div>

        {/* Valeurs Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {valeurs.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm rounded-[16px] p-8 text-center group hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#16A34A]/20"
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <IconComponent size={36} className="text-white" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#F0FDF4]">
                  {item.description}
                </p>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Valeurs;