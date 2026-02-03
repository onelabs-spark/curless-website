import { Building2, Repeat, Coins, ArrowRight, type LucideIcon } from 'lucide-react';
import { Button } from '../UI/Button';
import { motion } from 'framer-motion';

interface ServiceCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    features: string[];
    index: number;
}

const ServiceCard = ({ icon: Icon, title, description, features, index }: ServiceCardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="group relative p-8 rounded-[var(--radius-xl)] bg-white border border-[hsl(var(--tx-mut)/0.15)] 
                   shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] 
                   transition-all duration-[var(--duration-slow)] ease-[var(--ease-out-expo)]
                   hover:-translate-y-2"
    >
        {/* Gradient border on hover */}
        <div className="absolute inset-0 rounded-[var(--radius-xl)] bg-gradient-to-br from-[hsl(var(--pk)/0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        <div className="relative z-10">
            <div className="w-16 h-16 rounded-[var(--radius-lg)] bg-[hsl(var(--pk)/0.1)] flex items-center justify-center text-[hsl(var(--pk))] mb-6 
                          group-hover:bg-[hsl(var(--pk))] group-hover:text-white group-hover:scale-110 group-hover:shadow-[var(--shadow-blue)]
                          transition-all duration-[var(--duration-normal)] ease-[var(--ease-out-expo)]">
                <Icon size={28} strokeWidth={2} />
            </div>

            <h3 className="text-2xl font-bold mb-4 text-[hsl(var(--tx-pri))] tracking-tight">{title}</h3>
            <p className="text-[hsl(var(--tx-sec))] mb-6 leading-relaxed">
                {description}
            </p>

            <ul className="space-y-3 mb-8">
                {features.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-medium text-[hsl(var(--tx-pri))]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--pk))]" />
                        {item}
                    </li>
                ))}
            </ul>

            <Button variant="ghost" className="pl-0 text-[hsl(var(--pk))] hover:text-[hsl(var(--pk-dark))] font-semibold group/btn">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
        </div>
    </motion.div>
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
            icon: Repeat,
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
        <section id="services" className="py-24 sm:py-32 bg-[hsl(var(--sf)/0.3)] relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[hsl(var(--pk)/0.03)] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

            <div className="container max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter text-[hsl(var(--tx-pri))]">
                        Everything you need<br />
                        to <span className="text-[hsl(var(--pk))]">build wealth.</span>
                    </h2>
                    <p className="text-xl text-[hsl(var(--tx-sec))] leading-relaxed">
                        Professional products for businesses, investors and individuals. Secure, compliant, and easy to use.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <ServiceCard key={idx} {...service} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}

