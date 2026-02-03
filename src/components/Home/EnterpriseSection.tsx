import { Users, ShoppingBag, Globe2, Gamepad2 } from 'lucide-react';

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
        <section id="enterprise" className="py-24 relative overflow-hidden text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,hsl(var(--pk)/0.1),transparent_70%)]"></div>

            <div className="container relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-16">
                    Built for every <span className="text-gradient">Scenario</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {scenarios.map((item, idx) => (
                        <div key={idx} className="p-6 rounded-xl bg-[hsl(var(--sf)/0.5)] border border-[hsl(var(--sf))] hover:border-[hsl(var(--pk)/0.5)] transition-all text-left group">
                            <div className="mb-4 text-[hsl(var(--tx-sec))] group-hover:text-[hsl(var(--pk))] transition-colors">
                                <item.icon size={32} />
                            </div>
                            <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                            <p className="text-sm text-[hsl(var(--tx-sec))] leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="bg-[hsl(var(--pk))] rounded-3xl p-12 md:p-20 relative overflow-hidden">
                    {/* Noise overlay simulation */}
                    <div className="absolute top-0 right-0 w-full h-full opacity-20 mix-blend-overlay bg-black"></div>
                    <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to modernize your financial infrastructure?
                        </h2>
                        <p className="text-white/80 text-lg mb-8">
                            Join 100+ innovative companies using Curless to power their global payments.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-[hsl(var(--pk))] px-8 py-3 rounded-xl font-bold hover:bg-white/90 transition-transform hover:-translate-y-1">
                                Contact Sales
                            </button>
                            <button className="bg-transparent border border-white/30 text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">
                                Read API Docs
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
