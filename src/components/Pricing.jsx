import { Zap, TrendingUp, Earth, Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      icon: Zap,
      name: 'Starter',
      tag: 'Campagne locale',
      description: 'Idéal pour tester sur un marché',
      features: [
        'Jusqu\'à 1 000 utilisateurs',
        'Jusqu\'à 10K QR codes',
        '1 pays / région',
        'Album standard (équipe nationale)',
        'Hébergement Cloud sécurisé',
        'Backoffice simplifié',
        'Support par email',
        '1 marque'
      ]
    },
    {
      icon: TrendingUp,
      name: 'Scale',
      tag: 'Expansion nationale',
      description: 'Pour des campagnes d\'envergure',
      features: [
        'Jusqu\'à 50 000 utilisateurs',
        'QR codes illimités',
        'Multi-pays (jusqu\'à 5)',
        'Album complet (toutes les équipes)',
        'Cloud ou On-Premise',
        'Backoffice avancé avec analytics',
        'Support prioritaire 24/7',
        'Jusqu\'à 3 marques',
        'API REST disponible'
      ]
    },
    {
      icon: Earth,
      name: 'Enterprise',
      tag: 'Solution globale',
      description: 'Pour les groupes internationaux',
      features: [
        'Utilisateurs illimités',
        'QR codes illimités',
        'Déploiement mondial',
        'Albums personnalisés par région',
        'Infrastructure dédiée (On-Premise)',
        'Multi-marques illimité',
        'Développements sur-mesure',
        'Account manager dédié',
        'SLA garanti 99.9%',
        'Formation et onboarding complet'
      ]
    }
  ];

  const getColors = (index) => {
    if (index === 1) {
      return {
        bg: 'bg-[#FEF2F2]',
        text: 'text-[#DC2626]',
        border: 'border-[#FECACA]'
      };
    } else {
      return {
        bg: 'bg-[#F0FDF4]',
        text: 'text-[#16A34A]',
        border: 'border-[#E2E8F0]'
      };
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#FFFFFF] to-[#F8FAFC]">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-4xl font-bold text-[#0F172A] mb-6">
                Des formules adaptées à votre échelle
            </h2>
            <p className="text-lg text-[#475569] max-w-2xl mx-auto">
                Choisissez la solution qui correspond à vos besoins et votre ambition
            </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const colors = getColors(index);
            
            return (
            <div 
              key={index} 
              className={`border ${colors.border} bg-white rounded-3xl p-8 relative ${
                index === 1 ? "shadow-xl" : ""
              }`}
            >
              {index === 1 && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#DC2626] to-[#B01219] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg uppercase">
                    Populaire
                  </span>
                </div>
              )}

              {/* Plan Icon */}
              <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mb-4`}>
                  <plan.icon size={24} className={`${colors.text}`} />
              </div>

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-[#0F172A]">
                {plan.name}
              </h3>

              {/* Plan Tag */}
              <h4 className="text-sm font-medium text-[#16A34A] mb-4">
                {plan.tag}
              </h4>

              {/* Description */}
              <p className="text-[#475569] mb-6">
                {plan.description}
              </p>

              {/* Pricing Note */}
              <p className="text-sm text-[#64748B] mb-6 border-t border-b border-[#F1F5F9] py-6">
                Tarification sur mesure selon vos volumes
              </p>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check size={18} className={`${colors.text} flex-shrink-0 mt-0.5`} />
                    <span className="text-[#475569] text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button 
                className={`w-full max-h-[46px] py-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2 group ${
                  index === 1 
                    ? 'bg-[#DC2626] text-white hover:bg-[#B01219] shadow-lg' 
                    : 'border border-[#CBD5E1] text-[#334155] hover:bg-[#16A34A]/10'
                }`}
              >
                <span>
                  {index === 0 && 'Demander un devis'}
                  {index === 1 && 'Planifier une démo'}
                  {index === 2 && 'Contactez-nous'}
                </span>
              </button>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;