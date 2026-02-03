import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { HeroSection } from './components/Home/HeroSection';
import { ServicesSection } from './components/Home/ServicesSection';
import { BatchGatewaySection } from './components/Home/BatchGatewaySection';
import { EnterpriseSection } from './components/Home/EnterpriseSection';
import './index.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-[hsl(var(--tx-pri))]">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <BatchGatewaySection />
        <EnterpriseSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
