import { Shield, Globe, Zap, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

const products = [
    {
        title: "Global Accounts",
        description: "Open local accounts in 30+ countries instantly. Manage USD, EUR, GBP, and more in one place.",
        icon: Globe,
        color: "text-blue-600"
    },
    {
        title: "Crypto Bridge",
        description: "Seamless fiat-to-crypto onramps and offramps. Move money between worlds in seconds.",
        icon: Zap,
        color: "text-amber-500"
    },
    {
        title: "Curless Card",
        description: "Spend your balance anywhere with our physical and virtual debit cards.",
        icon: CreditCard,
        color: "text-purple-600"
    },
    {
        title: "Enterprise Vault",
        description: "Institutional-grade security for your digital and traditional assets.",
        icon: Shield,
        color: "text-emerald-600"
    }
];

export function Products() {
    return (
        <div className="pt-40 pb-32 bg-white">
            <div className="container max-w-6xl">
                <div className="max-w-3xl mb-20">
                    <h1 className="text-5xl md:text-7xl font-bold text-[hsl(var(--tx-pri))] mb-8 tracking-tighter leading-tight">
                        Our <span className="text-[hsl(var(--pk))]">Products</span>
                    </h1>
                    <p className="text-2xl text-[hsl(var(--tx-sec))] font-bold opacity-80">
                        Powerful financial tools designed for the modern economy. Simple, secure, and global.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {products.map((product, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-2xl border border-[hsl(var(--sf))] bg-[hsl(var(--sf)/0.3)] hover:border-[hsl(var(--pk)/0.3)] transition-all"
                        >
                            <product.icon className={`w-12 h-12 mb-6 ${product.color}`} />
                            <h3 className="text-2xl font-bold mb-4 text-[hsl(var(--tx-pri))]">{product.title}</h3>
                            <p className="text-[hsl(var(--tx-sec))] font-medium leading-relaxed">
                                {product.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
