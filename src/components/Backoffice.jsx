import { Settings,
  QrCode, 
  Users, 
  SlidersVertical, 
  BarChart3, 
  Gift, 
  Bell, 
  CloudDownload, 
  GalleryVerticalEnd,
  ChevronRight
} from 'lucide-react';

const Backoffice = () => {
  const features = [
    {
      icon: QrCode,
      title: 'Générateur QR Codes',
      description: 'Créez et téléchargez vos QR codes uniques en masse'
    },
    {
      icon: Users,
      title: 'CRM Participants',
      description: 'Collectez et gérez vos participants avec segmentation avancée'
    },
    {
      icon: SlidersVertical,
      title: 'Configuration jeux',
      description: 'Paramétrez entièrement vos jeux : règles, lots, durée, visuels'
    },
    {
      icon: BarChart3,
      title: 'Analytics temps réel',
      description: 'Suivez vos KPIs : scans, conversions, engagement, ROI'
    },
    {
      icon: Gift,
      title: 'Gestion des lots',
      description: 'Définissez vos récompenses et gérez les tirages au sort'
    },
    {
      icon: Bell,
      title: 'Notifications',
      description: 'Envoyez des push, emails et SMS à vos participants'
    },
    {
      icon: CloudDownload,
      title: 'Export données',
      description: 'Téléchargez vos données en CSV, Excel ou via API'
    },
    {
      icon: GalleryVerticalEnd,
      title: 'Multi-campagnes',
      description: 'Gérez plusieurs campagnes simultanément'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#FFFFFF] to-[#F5F5F5]">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-[#0B6B3A] font-medium text-sm bg-[#DCFCE7] py-1 px-3 mb-5 rounded-full">
                <Settings size={16} />
                Backoffice tout-en-un
            </span>
            <h2 className="text-4xl sm:text-4xl font-bold text-[#0F172A] mb-6">
                Gérez tout depuis une interface unique
            </h2>
            <p className="text-lg text-[#475569] max-w-2xl mx-auto">
                Notre backoffice intuitif vous permet de créer, configurer et piloter vos campagnes en toute autonomie
            </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-[#E2E8F0] hover:border-[#16A34A]/20 group"
              >
                {/* Icon with gradient background */}
                <div className="w-12 h-12 bg-[#F0FDF4] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={24} className="text-[#16A34A]" />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-[#0F172A] mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#475569] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-12">
          <button className="inline-flex items-center gap-3 bg-[#16A34A] text-white px-8 py-4 rounded-lg hover:bg-[#0B6B3A] transition-all font-medium shadow-lg hover:shadow-xl group">
            <span>Demander un accès au backoffice</span>
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Backoffice;