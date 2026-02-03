import { Building2, Repeat, Coins, ArrowRight } from 'lucide-react';
import { Button } from '../UI/Button';

const ServiceCard = ({ icon: Icon, title, description, features }: any) => (
    <div className="group p-8 rounded-2xl bg-[hsl(var(--sf))] border border-[hsl(var(--tx-mut)/0.1)] hover:border-[hsl(var(--pk)/0.3)] transition-all hover:-translate-y-1">
        <div className="w-14 h-14 rounded-xl bg-[hsl(var(--bg))] flex items-center justify-center text-[hsl(var(--pk))] mb-6 group-hover:bg-[hsl(var(--pk))] group-hover:text-white transition-colors">
            <Icon size={28} />
        </div>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="text-[hsl(var(--tx-sec))] mb-6 leading-relaxed">
            {description}
        </p>
        <ul className="space-y-3 mb-8">
            {features.map((item: string, idx: number) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-[hsl(var(--tx-sec))]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--ac))]"></div>
                    {item}
                </li>
            ))}
        </ul>
        <Button variant="ghost" className="pl-0 hover:pl-2 transition-all">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
    </div>
);

export function ServicesSection() {
    const services = [
        {
            icon: Building2,
            title: "B2B Local Collection",
            description: "Direct connection to local banking networks for seamless business payments.",
            features: [
                "VND, JPY, EUR, USD Accounts",
                "SEPA / ACH / Fedwire support",
                "Instant Online Account Opening",
                "Multi-currency Management"
            ]
        },
        {
            icon: Repeat, // Coins/Swap icon
            title: "Crypto-Fiat Exchange",
            description: "Seamless conversion between digital assets and traditional currency.",
            features: [
                "USDT / USDC Support",
                "Transparent Fee Structure",
                "Instant Settlement",
                "Fiat On/Off Ramp"
            ]
        },
        {
            icon: Coins,
            title: "Enterprise Solutions",
            description: "Tailored infrastructure for high-volume platforms and marketplaces.",
            features: [
                "White-label Solutions (Mica)",
                "Custom API Integration",
                "Dedicated Technical Support",
                "Volume-based Pricing"
            ]
        }
    ];

    return (
        <section id="services" className="bg-[hsl(var(--bg))] relative">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Comprehensive Payment Infrastructure
                    </h2>
                    <p className="text-[hsl(var(--tx-sec))] text-lg">
                        From local collections to complex crypto settlements, we cover the entire payment lifecycle.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <ServiceCard key={idx} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
}
