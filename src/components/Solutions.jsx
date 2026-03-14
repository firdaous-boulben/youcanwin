import { CircleCheck, Smartphone, GalleryVerticalEnd, Gift, ChartNoAxesColumnIncreasing, Calendar } from 'lucide-react';
import solutions from "../assets/img/solutions.png";

const Solutions = () => {
  const features = [
    {
      title: 'Activation instantanée',
      description: 'QR codes uniques sur chaque produit'
    },
    {
      title: 'Collection digitale',
      description: 'Cartes de joueurs, raretés, échanges'
    },
    {
      title: 'Récompenses exclusives',
      description: 'Tirages au sort, lots partenaires, expériences VIP'
    },
    {
      title: 'Analytics avancés',
      description: 'Dashboard temps réel, insights consommateurs'
    }
  ];

  return (
    <section className="py-20 px-8 bg-gradient-to-b from-[#FFFFFF] to-[#F5F5F5] border-t border-[#E5E7EB]">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative">
                <img src={solutions} alt="solution" className="max-w-[448px] h-auto rounded-2xl shadow-2xl"/>
            </div>

            {/* Right Column - Text Content */}
            <div>
                <span className="inline-flex items-center gap-2 text-[#0B6B3A] font-medium text-sm bg-[#DCFCE7] py-1 px-3 mb-5 rounded-full">
                    <CircleCheck size={16} />
                    Solution complète
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold text-[#0F172A] mb-6 leading-tight">
                    Le terrain de jeu digital de votre marque
                </h2>
                <p className="text-lg text-[#475569] mb-8">
                    YouCanWin transforme vos produits en expériences interactives. 
                    Chaque achat devient une opportunité d'engagement avec vos consommateurs.
                </p>

                {/* Features List */}
                <div className="space-y-6">
                {features.map((feature, index) => {
                    const icons = [Smartphone, GalleryVerticalEnd, Gift, ChartNoAxesColumnIncreasing];
                    const Icon = icons[index];

                    return (
                    <div key={index} className="flex items-start gap-4">
                        {/* Icon container */}
                        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[#F0FDF4] rounded-[8px]">
                            <Icon size={20} className="text-[#16A34A]" />
                        </div>

                        {/* Feature text */}
                        <div>
                        <h3 className="font-semibold text-[#0F172A]">
                            {feature.title}
                        </h3>
                        <p className="font-regular text-sm text-[#475569]">
                            {feature.description}
                        </p>
                        </div>
                    </div>
                    );
                })}
                </div>

                {/* CTA Button */}
                <div className="mt-10">
                <button className="inline-flex items-center gap-2 bg-[#DC2626] text-white px-6 py-3 rounded-lg hover:bg-[#B01219] transition font-medium shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
                    Planifier une démo
                    <Calendar size={16} />
                </button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;