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
        <section id="enterprise" className="py-24 sm:py-32 relative overflow-hidden text-center bg-white border-t border-[hsl(var(--sf))]">
            <div className="container relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-20 tracking-tight text-[hsl(var(--tx-pri))]">
                    Built for every <span className="text-[hsl(var(--pk))]">Scenario</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {scenarios.map((item, idx) => (
                        <div key={idx} className="p-8 rounded-2xl bg-white border border-[hsl(var(--tx-mut)/0.3)] hover:shadow-xl transition-all text-left">
                            <div className="mb-6 text-[hsl(var(--pk))]">
                                <item.icon size={36} />
                            </div>
                            <h4 className="text-xl font-bold mb-3 text-[hsl(var(--tx-pri))]">{item.title}</h4>
                            <p className="text-sm text-[hsl(var(--tx-sec))] leading-relaxed font-bold">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="bg-[hsl(var(--pk))] rounded-[40px] p-12 md:p-24 relative overflow-hidden shadow-2xl">
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tighter">
                            Ready to modernize your financial infrastructure?
                        </h2>
                        <p className="text-white/90 text-xl mb-12 font-medium">
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
