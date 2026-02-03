import { Code, CheckCircle, ShieldCheck, Zap } from 'lucide-react';
import { Button } from '../UI/Button';

export function BatchGatewaySection() {
    const features = [
        {
            icon: Code,
            title: "API Automation",
            desc: "Direct integration for automated bulk transfers."
        },
        {
            icon: Zap,
            title: "Gas Optimization",
            desc: "Smart contract batching to reduce fees by 80%."
        },
        {
            icon: ShieldCheck,
            title: "AML Compliance",
            desc: "Auto-screening and Travel Rule reporting."
        },
        {
            icon: CheckCircle,
            title: "Auto-Reconciliation",
            desc: "Two-way mapping with automated reports."
        }
    ];

    return (
        <section id="solutions" className="bg-[hsl(var(--sf)/0.3)] py-24 border-y border-[hsl(var(--sf))]">
            <div className="container grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="inline-block px-4 py-1.5 rounded-full bg-[hsl(var(--pk)/0.1)] text-[hsl(var(--pk))] font-medium text-sm mb-6">
                        Advanced Technology
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Stablecoin Batch <br />
                        Payment Gateway
                    </h2>
                    <p className="text-[hsl(var(--tx-sec))] text-lg leading-relaxed mb-8">
                        Process thousands of transactions in seconds. Our intelligent gateway optimizes gas fees, ensures compliance, and automates your financial reporting.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6 mb-10">
                        {features.map((f, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="mt-1 text-[hsl(var(--pk))]">
                                    <f.icon size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[hsl(var(--tx-pri))]">{f.title}</h4>
                                    <p className="text-sm text-[hsl(var(--tx-sec))] mt-1">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Button variant="primary" size="lg">
                        Explore Documentation
                    </Button>
                </div>

                <div className="relative">
                    {/* Code/Dashboard Visual */}
                    <div className="bg-[#1a1b26] rounded-xl border border-[hsl(var(--tx-mut)/0.3)] p-6 shadow-2xl font-mono text-sm overflow-hidden">
                        <div className="flex gap-2 mb-4 border-b border-gray-700 pb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="space-y-2 text-gray-300">
                            <p><span className="text-purple-400">const</span> <span className="text-blue-400">batchTransfer</span> = <span className="text-purple-400">async</span> (recipients) ={'>'} {'{'}</p>
                            <p className="pl-4"><span className="text-gray-500">// Optimize gas limits</span></p>
                            <p className="pl-4"><span className="text-purple-400">const</span> optimized = <span className="text-yellow-400">optimizeGas</span>(recipients);</p>
                            <p className="pl-4">&nbsp;</p>
                            <p className="pl-4"><span className="text-purple-400">const</span> tx = <span className="text-purple-400">await</span> gateway.<span className="text-blue-400">sendBatch</span>({'{'}</p>
                            <p className="pl-8">token: <span className="text-green-400">'USDT'</span>,</p>
                            <p className="pl-8">items: optimized,</p>
                            <p className="pl-8">tag: <span className="text-green-400">'Payroll_Nov'</span></p>
                            <p className="pl-4">{'}'});</p>
                            <p className="pl-4">&nbsp;</p>
                            <p className="pl-4"><span className="text-cyan-400">console</span>.log(<span className="text-green-400">'Batch Processed:'</span>, tx.hash);</p>
                            <p className="pl-4"><span className="text-purple-400">return</span> tx;</p>
                            <p>{'}'}</p>
                        </div>
                    </div>

                    {/* Floating Stats */}
                    <div className="absolute -bottom-6 -left-6 bg-[hsl(var(--sf))] p-4 rounded-lg border border-[hsl(var(--sf))] shadow-lg flex items-center gap-4">
                        <div className="bg-green-500/10 p-2 rounded text-green-500">
                            <Zap size={20} />
                        </div>
                        <div>
                            <p className="text-xs text-[hsl(var(--tx-mut))]">Gas Saved</p>
                            <p className="font-bold text-white">~45% vs Single</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
