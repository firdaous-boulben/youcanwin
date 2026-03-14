import { TrendingUp, Users, Star, Bolt } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: 'Interactions mensuelles',
      label: '500K+'
    },
    {
      icon: Users,
      value: 'Marques partenaires',
      label: '50+'
    },
    {
      icon: Star,
      value: 'Taux de satisfaction',
      label: '98%'
    },
    {
      icon: Bolt,
      value: 'Support technique',
      label: '24/7'
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-[#E5E7EB]">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center group">
                  <IconComponent 
                    size={32} 
                    className="text-[#16A34A] mb-4"
                  />
                

                <div className="text-3xl font-bold text-[#0F172A] mb-1">
                  {item.label}
                </div>

                <div className="text-sm text-[#475569]">
                  {item.value}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Stats;