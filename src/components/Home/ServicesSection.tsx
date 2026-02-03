import { Building2, Repeat, Coins, ArrowRight, type LucideIcon } from 'lucide-react';
import { Button } from '../UI/Button';

interface ServiceCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    features: string[];
}

const ServiceCard = ({ icon: Icon, title, description, features }: ServiceCardProps) => (
    <div className="group p-8 rounded-2xl bg-white border border-[hsl(var(--tx-mut)/0.3)] hover:shadow-lg transition-all">
        <div className="w-16 h-16 rounded-2xl bg-[hsl(var(--sf))] flex items-center justify-center text-[hsl(var(--pk))] mb-6 group-hover:bg-[hsl(var(--pk))] group-hover:text-white transition-colors">
            <Icon size={32} />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-[hsl(var(--tx-pri))]">{title}</h3>
        <p className="text-[hsl(var(--tx-sec))] mb-6 leading-relaxed font-medium">
            {description}
        </p>
        <ul className="space-y-4 mb-8">
            {features.map((item: string, idx: number) => (
                <li key={idx} className="flex items-center gap-3 text-sm font-bold text-[hsl(var(--tx-pri))]">
                    <div className="w-2 h-2 rounded-full bg-[hsl(var(--pk))]"></div>
                    {item}
                </li>
            ))}
        </ul>
        <Button variant="ghost" className="pl-0 text-[hsl(var(--pk))] hover:text-[hsl(var(--pk)/0.8)] font-bold">
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
        <section id="services" className="bg-white py-24 relative border-t border-[hsl(var(--sf))]">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[hsl(var(--tx-pri))] tracking-tight">
                        Everything you need to <span className="text-[hsl(var(--pk))]">manage crypto</span>
                    </h2>
                    <p className="text-[hsl(var(--tx-sec))] text-xl font-medium">
                        Coinbase has the tools you need to buy, sell, and manage your portfolio.
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
