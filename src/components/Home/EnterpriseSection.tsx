import { Users, ShoppingBag, Globe2, Gamepad2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function EnterpriseSection() {
    const scenarios = [
        {
            icon: Users,
            title: "Global Payroll",
            desc: "Instant salary disbursements to remote teams in USDT/USDC."
        },
        {
            icon: ShoppingBag,
            title: "E-Commerce",
            desc: "Cross-border supplier payments without SWIFT delays."
        },
        {
            icon: Globe2,
            title: "Affiliate Payouts",
            desc: "Automated commission distribution for global networks."
        },
        {
            icon: Gamepad2,
            title: "Gaming & Apps",
            desc: "Real-time user withdrawals and in-app economy settlements."
        }
    ];

    return (
        <section id="enterprise" className="py-24 sm:py-32 relative overflow-hidden bg-[hsl(var(--sf)/0.3)]">
            <div className="container max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter text-[hsl(var(--tx-pri))]">
                        Built for every <span className="text-[hsl(var(--pk))]">Scenario</span>
                    </h2>
                    <p className="text-xl text-[hsl(var(--tx-sec))] max-w-2xl mx-auto">
                        From startups to enterprises, our platform adapts to your unique payment needs.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {scenarios.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="group p-6 rounded-[var(--radius-xl)] bg-white border border-[hsl(var(--tx-mut)/0.1)]
                                       shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)]
                                       transition-all duration-[var(--duration-slow)] ease-[var(--ease-out-expo)]
                                       hover:-translate-y-2"
                        >
                            <div className="w-14 h-14 rounded-[var(--radius-lg)] bg-[hsl(var(--pk)/0.1)] flex items-center justify-center text-[hsl(var(--pk))] mb-5
                                          group-hover:bg-[hsl(var(--pk))] group-hover:text-white group-hover:scale-110
                                          transition-all duration-[var(--duration-normal)] ease-[var(--ease-out-expo)]">
                                <item.icon size={24} />
                            </div>
                            <h4 className="text-lg font-bold mb-2 text-[hsl(var(--tx-pri))]">{item.title}</h4>
                            <p className="text-sm text-[hsl(var(--tx-sec))] leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <div className="bg-[hsl(var(--pk))] rounded-[var(--radius-xl)] p-12 md:p-16 lg:p-20 relative overflow-hidden shadow-[var(--shadow-xl)]">
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2" />

                        <div className="relative z-10 max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                                Ready to modernize your financial infrastructure?
                            </h2>
                            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl mx-auto">
                                Join 100+ innovative companies using Curless to power their global payments.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="group inline-flex items-center justify-center gap-2 bg-white text-[hsl(var(--pk))] px-8 py-4 rounded-[var(--radius-md)] font-bold 
                                                 shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)]
                                                 hover:-translate-y-0.5 active:translate-y-0
                                                 transition-all duration-[var(--duration-normal)] ease-[var(--ease-out-expo)]">
                                    Contact Sales
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white px-8 py-4 rounded-[var(--radius-md)] font-bold 
                                                 hover:bg-white/20 transition-colors">
                                    Read API Docs
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

