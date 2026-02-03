import { Code, CheckCircle, ShieldCheck, Zap } from 'lucide-react';
import { Button } from '../UI/Button';
import { motion } from 'framer-motion';

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
        <section id="solutions" className="py-24 sm:py-32 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[hsl(var(--pk)/0.03)] rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />

            <div className="container max-w-7xl relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--pk)/0.1)] border border-[hsl(var(--pk)/0.2)] mb-8">
                        <Code size={16} className="text-[hsl(var(--pk))]" />
                        <span className="text-sm font-semibold text-[hsl(var(--pk))]">
                            Advanced Technology
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter text-[hsl(var(--tx-pri))] leading-[1.1]">
                        Stablecoin Batch<br />
                        Payment Gateway
                    </h2>

                    <p className="text-lg text-[hsl(var(--tx-sec))] leading-relaxed mb-10">
                        Process thousands of transactions in seconds. Our intelligent gateway optimizes gas fees, ensures compliance, and automates your financial reporting.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6 mb-10">
                        {features.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="flex gap-4 p-4 rounded-[var(--radius-md)] hover:bg-[hsl(var(--sf)/0.5)] transition-colors"
                            >
                                <div className="flex-shrink-0 w-10 h-10 rounded-[var(--radius-sm)] bg-[hsl(var(--pk)/0.1)] flex items-center justify-center text-[hsl(var(--pk))]">
                                    <f.icon size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[hsl(var(--tx-pri))]">{f.title}</h4>
                                    <p className="text-sm text-[hsl(var(--tx-sec))] mt-1">{f.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <Button size="lg">
                        Explore Documentation
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                >
                    {/* Code Editor Visual */}
                    <div className="bg-[#0d1117] rounded-[var(--radius-xl)] border border-[#30363d] p-6 shadow-[var(--shadow-xl)] font-mono text-sm overflow-hidden">
                        {/* Window controls */}
                        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#30363d]">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                            </div>
                            <span className="text-xs text-[#8b949e] ml-4">batchTransfer.ts</span>
                        </div>

                        {/* Code content with line numbers */}
                        <div className="space-y-2 text-[13px] leading-relaxed">
                            <div className="flex">
                                <span className="text-[#6e7681] w-8 text-right mr-4 select-none">1</span>
                                <span><span className="text-[#ff7b72]">const</span> <span className="text-[#d2a8ff]">batchTransfer</span> = <span className="text-[#ff7b72]">async</span> <span className="text-[#c9d1d9]">(recipients) =&gt; {'{'}</span></span>
                            </div>
                            <div className="flex">
                                <span className="text-[#6e7681] w-8 text-right mr-4 select-none">2</span>
                                <span className="text-[#8b949e] pl-4">// Optimize gas limits</span>
                            </div>
                            <div className="flex">
                                <span className="text-[#6e7681] w-8 text-right mr-4 select-none">3</span>
                                <span className="pl-4"><span className="text-[#ff7b72]">const</span> <span className="text-[#c9d1d9]">optimized =</span> <span className="text-[#d2a8ff]">optimizeGas</span><span className="text-[#c9d1d9]">(recipients);</span></span>
                            </div>
                            <div className="flex">
                                <span className="text-[#6e7681] w-8 text-right mr-4 select-none">4</span>
                                <span>&nbsp;</span>
                            </div>
                            <div className="flex">
                                <span className="text-[#6e7681] w-8 text-right mr-4 select-none">5</span>
                                <span className="pl-4"><span className="text-[#ff7b72]">const</span> <span className="text-[#c9d1d9]">tx =</span> <span className="text-[#ff7b72]">await</span> <span className="text-[#c9d1d9]">gateway.</span><span className="text-[#d2a8ff]">sendBatch</span><span className="text-[#c9d1d9]">({'{'}</span></span>
                            </div>
                            <div className="flex">
                                <span className="text-[#6e7681] w-8 text-right mr-4 select-none">6</span>
                                <span className="pl-8"><span className="text-[#c9d1d9]">token:</span> <span className="text-[#a5d6ff]">'USDT'</span><span className="text-[#c9d1d9]">,</span></span>
                            </div>
                            <div className="flex">
                                <span className="text-[#6e7681] w-8 text-right mr-4 select-none">7</span>
                                <span className="pl-8"><span className="text-[#c9d1d9]">items: optimized,</span></span>
                            </div>
                            <div className="flex">
                                <span className="text-[#6e7681] w-8 text-right mr-4 select-none">8</span>
                                <span className="pl-8"><span className="text-[#c9d1d9]">tag:</span> <span className="text-[#a5d6ff]">'Payroll_Nov'</span></span>
                            </div>
                            <div className="flex">
                                <span className="text-[#6e7681] w-8 text-right mr-4 select-none">9</span>
                                <span className="pl-4"><span className="text-[#c9d1d9]">{'}'})</span><span className="text-[#c9d1d9]">;</span></span>
                            </div>
                            <div className="flex">
                                <span className="text-[#6e7681] w-8 text-right mr-4 select-none">10</span>
                                <span>&nbsp;</span>
                            </div>
                            <div className="flex">
                                <span className="text-[#6e7681] w-8 text-right mr-4 select-none">11</span>
                                <span className="pl-4"><span className="text-[#ff7b72]">return</span> <span className="text-[#c9d1d9]">tx;</span></span>
                            </div>
                            <div className="flex">
                                <span className="text-[#6e7681] w-8 text-right mr-4 select-none">12</span>
                                <span className="text-[#c9d1d9]">{'}'}</span>
                            </div>
                        </div>
                    </div>

                    {/* Floating Stats Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="absolute -bottom-6 -left-6 bg-white p-4 rounded-[var(--radius-lg)] border border-[hsl(var(--tx-mut)/0.15)] shadow-[var(--shadow-lg)] flex items-center gap-4"
                    >
                        <div className="w-12 h-12 rounded-[var(--radius-md)] bg-green-500/10 flex items-center justify-center text-green-500">
                            <Zap size={24} />
                        </div>
                        <div>
                            <p className="text-xs font-medium text-[hsl(var(--tx-sec))]">Gas Saved</p>
                            <p className="font-bold text-lg text-[hsl(var(--tx-pri))]">~45% vs Single</p>
                        </div>
                    </motion.div>

                    {/* Additional floating element */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="absolute -top-4 -right-4 bg-white px-4 py-2 rounded-full border border-[hsl(var(--tx-mut)/0.15)] shadow-[var(--shadow-md)] flex items-center gap-2"
                    >
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-sm font-semibold text-[hsl(var(--tx-pri))]">Live</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

