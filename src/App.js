import Header from './components/Header';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Parcours from './components/Parcours';
import Valeurs from './components/Valeurs';
import Backoffice from './components/Backoffice';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Jeux from './components/Jeux';
import Stats from './components/Stats';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Parcours />
        <Valeurs />
        <Backoffice />  
        <Features />
        <Pricing />
        <Jeux />
        <Stats />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}

export default App;