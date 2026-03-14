import { ChevronRight } from 'lucide-react';
import jeu1 from "../assets/img/jeu1.png";
import jeu2 from "../assets/img/jeu2.png";
import jeu3 from "../assets/img/jeu3.png";
import jeu4 from "../assets/img/jeu4.png";


const Jeux = () => {
  const jeux = [
    {
      title: 'Album Digital 2025',
      description: 'Collection de cartes avec échanges et défis.',
      image: jeu1,
      link: '#'
    },
    {
      title: 'Quiz Football',
      description: 'Questions sur l\'actualité et histoire du foot.',
      image: jeu2,
      link: '#'
    },
    {
      title: 'Tombola digitale',
      description: 'Tirages au sort avec lots sponsorisés.',
      image: jeu3,
      link: '#'
    },
    {
      title: 'Pronostics',
      description: 'Prédictions de matchs et classements.',
      image: jeu4,
      link: '#'
    }
  ];

  return (
    <section className="pt-20 pb-6 bg-[#F8FAFC]">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            Catalogue de jeux
          </h2>
          <p className="text-lg text-[#475569]">
            Des mécaniques éprouvées pour engager vos audiences
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {jeux.map((jeu, index) => (
            <div
            key={index}
            className="group bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden hover:shadow-2xl transition-all duration-300 relative"
            >
            
            {/* TAGS */}
            {index === 0 && (
                <span className="absolute top-0 right-0 text-xs bg-gradient-to-r from-[#16A34A] to-[#0B6B3A] text-white font-semibold px-3 py-1 rounded-bl-[12px] uppercase z-10">
                Star
                </span>
            )}

            {index === 1 && (
                <span className="absolute top-0 right-0 text-xs bg-[#475569] text-white font-semibold px-3 py-1 rounded-bl-[12px] uppercase z-10">
                Bientôt
                </span>
            )}

            {/* Image */}
            <div className="relative h-52 overflow-hidden">
                <img
                src={jeu.image}
                alt={jeu.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="font-semibold text-[#0F172A] mb-2 group-hover:text-[#16A34A] transition">
                {jeu.title}
                </h3>

                <p className="text-[#475569] text-sm mb-4">
                {jeu.description}
                </p>

                {/* Show link only for first card */}
                {index === 0 && (
                <a
                    href={jeu.link}
                    className="inline-flex items-center gap-2 text-[#16A34A] font-medium text-sm group/link hover:gap-3 transition-all"
                >
                    Découvrir
                    <ChevronRight
                    size={16}
                    className="group-hover/link:translate-x-1 transition-transform"
                    />
                </a>
                )}
            </div>
            </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Jeux;