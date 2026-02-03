import { Building2, Users, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const solutions = [
    {
        title: "For Individuals",
        description: "Manage your personal wealth, trade crypto, and spend globally with ease.",
        icon: Users,
        features: ["Global Debit Card", "Instant Crypto Trading", "High-yield Savings"]
    },
    {
        title: "For Startups",
        description: "The financial OS for your global business. Collect payments and pay vendors anywhere.",
        icon: Rocket,
        features: ["Local Collections", "Global Payroll", "API-first Payments"]
    },
    {
        title: "For Enterprise",
        description: "Scale your financial operations with institutional-grade infrastructure.",
        icon: Building2,
        features: ["Custom Treasury", "Multi-sig Security", "Dedicated Account Manager"]
    }
];

export function Solutions() {
    return (
        <div className="pt-40 pb-32 bg-white">
            <div className="container max-w-6xl">
                <div className="max-w-4xl mb-24 text-center mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold text-[hsl(var(--tx-pri))] mb-8 tracking-tighter leading-tight">
                        Solutions for <span className="text-[hsl(var(--pk))]">Everyone</span>
                    </h1>
                    <p className="text-2xl text-[hsl(var(--tx-sec))] font-bold opacity-80">
                        Whether you're an individual or a global corporation, we have the right tools to help you grow.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {solutions.map((solution, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-10 rounded-3xl border border-[hsl(var(--sf))] bg-white shadow-xl flex flex-col items-center text-center hover:translate-y-[-8px] transition-transform"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-[hsl(var(--sf))] flex items-center justify-center text-[hsl(var(--pk))] mb-8">
                                <solution.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-[hsl(var(--tx-pri))]">{solution.title}</h3>
                            <p className="text-[hsl(var(--tx-sec))] mb-8 font-medium">
                                {solution.description}
                            </p>
                            <ul className="text-left w-full space-y-3">
                                {solution.features.map((f, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm font-bold text-[hsl(var(--tx-pri))]">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--pk))]" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
