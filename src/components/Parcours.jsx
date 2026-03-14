import { ShoppingCart, QrCode, GalleryVerticalEnd, Puzzle, Gift } from 'lucide-react';

const Parcours = () => {
  const steps = [
    { 
      number: '1', 
      title: 'Achat produit', 
      description: 'Le client achète votre produit en magasin',
      icon: ShoppingCart
    },
    { 
      number: '2', 
      title: 'Scan QR Code', 
      description: 'Il scanne le code sur l\'emballage',
      icon: QrCode
    },
    { 
      number: '3', 
      title: 'Déblocage carte', 
      description: 'Une carte digitale est débloquée',
      icon: GalleryVerticalEnd
    },
    { 
      number: '4', 
      title: 'Collection', 
      description: 'Il complète sa collection',
      icon: Puzzle
    },
    { 
      number: '5', 
      title: 'Récompenses', 
      description: 'Participe aux tirages',
      icon: Gift
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            Un parcours client simple et engageant
          </h2>
          <p className="text-lg text-[#475569]">
            De l'achat du produit à la récompense, en 5 étapes
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => {
            const IconComponent = step.icon;

            const isGreen = index < 3; // first 3 green
            const borderColor = isGreen ? "#BBF7D0" : "#FECACA";
            const iconColor = isGreen ? "#16A34A" : "#DC2626";
            const badgeColor = isGreen ? "#16A34A" : "#DC2626";

            return (
                <div key={index} className="relative flex flex-col items-center text-center group">
                {/* Icon Container */}
                <div className="relative mb-4">
                    <div
                    className={`w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-300`}
                    style={{ border: `2px solid ${borderColor}` }}
                    >
                    <IconComponent size={18} className="" style={{ color: iconColor }} strokeWidth={1.5} />
                    </div>

                    {/* Number Badge */}
                    <div
                    className="absolute -top-2 -right-24 w-[28px] h-[28px] rounded-full flex items-center justify-center z-20"
                    style={{ backgroundColor: badgeColor }}
                    >
                    <span className="text-white font-bold text-[12px] leading-[16px]">
                        {step.number}
                    </span>
                    </div>
                </div>

                {/* Step Content */}
                <h3 className="font-semibold text-[#0F172A]">
                    {step.title}
                </h3>
                <p className="text-[#475569] text-sm max-w-[180px]">
                    {step.description}
                </p>
                </div>
            );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parcours;