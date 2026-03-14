import { Users, QrCode, Earth, GalleryVerticalEnd, Cloud } from 'lucide-react';

const Features = () => {
  const stats = [
    {
      icon: Users,
      value: 'De 1k à 10m',
      label: 'Utilisateurs'
    },
    {
      icon: QrCode,
      value: 'Volume adapté',
      label: 'QR Codes'
    },
    {
      icon: Earth,
      value: 'Local à mondial',
      label: 'Couverture'
    },
    {
      icon: GalleryVerticalEnd,
      value: 'Standard ou custom',
      label: 'Albums'
    },
    {
      icon: Cloud,
      value: 'Cloud ou On-Premise',
      label: 'Infrastructure'
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-[#E5E7EB]">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-12 h-12 bg-[#F0FDF4] rounded-lg flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-[#16A34A] group-hover:to-[#0B6B3A] transition-all duration-300">
                  <IconComponent 
                    size={24} 
                    className="text-[#16A34A] group-hover:text-white transition-colors duration-300" 
                    strokeWidth={1.5}
                  />
                </div>

                <div className="font-semibold text-[#0F172A] mb-1">
                  {item.label}
                </div>

                <div className="text-xs text-[#475569]">
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

export default Features;