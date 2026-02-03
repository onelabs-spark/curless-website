import { HeroSection } from '../components/Home/HeroSection';
import { ServicesSection } from '../components/Home/ServicesSection';
import { BatchGatewaySection } from '../components/Home/BatchGatewaySection';
import { EnterpriseSection } from '../components/Home/EnterpriseSection';

export function Home() {
    return (
        <>
            <HeroSection />
            <ServicesSection />
            <BatchGatewaySection />
            <EnterpriseSection />
        </>
    );
}
