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
        <section id="solutions" className="bg-white py-24 sm:py-32">
            <div className="container grid lg:grid-cols-2 gap-20 items-center">
                <div>
                    <div className="inline-block px-4 py-1.5 rounded-full bg-[hsl(var(--pk)/0.1)] text-[hsl(var(--pk))] font-medium text-sm mb-6">
                        Advanced Technology
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-[hsl(var(--tx-pri))] leading-tight">
                        Stablecoin Batch <br />
                        Payment Gateway
                    </h2>
                    <p className="text-[hsl(var(--tx-sec))] text-xl leading-relaxed mb-10 font-medium">
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
                    {/* Code/Dashboard Visual - Lighten or keep dark but clear */}
                    <div className="bg-[#1e2330] rounded-2xl border border-[hsl(var(--tx-mut)/0.3)] p-8 shadow-2xl font-mono text-sm overflow-hidden">
                        <div className="flex gap-2 mb-6 border-b border-white/10 pb-4">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                        </div>
                        <div className="space-y-3 text-gray-300">
                            <p><span className="text-[#c792ea]">const</span> <span className="text-[#82aaff]">batchTransfer</span> = <span className="text-[#c792ea]">async</span> (recipients) ={'>'} {'{'}</p>
                            <p className="pl-4"><span className="text-gray-500">// Optimize gas limits</span></p>
                            <p className="pl-4"><span className="text-[#c792ea]">const</span> optimized = <span className="text-[#ffcb6b]">optimizeGas</span>(recipients);</p>
                            <p className="pl-4">&nbsp;</p>
                            <p className="pl-4"><span className="text-[#c792ea]">const</span> tx = <span className="text-[#c792ea]">await</span> gateway.<span className="text-[#82aaff]">sendBatch</span>({'{'}</p>
                            <p className="pl-8">token: <span className="text-[#c3e88d]">'USDT'</span>,</p>
                            <p className="pl-8">items: optimized,</p>
                            <p className="pl-8">tag: <span className="text-[#c3e88d]">'Payroll_Nov'</span></p>
                            <p className="pl-4">{'}'});</p>
                            <p className="pl-4">&nbsp;</p>
                            <p className="pl-4"><span className="text-[#89ddff]">console</span>.log(<span className="text-[#c3e88d]">'Batch Processed:'</span>, tx.hash);</p>
                            <p className="pl-4"><span className="text-[#c792ea]">return</span> tx;</p>
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
