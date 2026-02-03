import { ArrowRight, Globe, Zap, Shield } from 'lucide-react';
import { Button } from '../UI/Button';
import { motion } from 'framer-motion';

export function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,hsl(var(--pk)/0.1),transparent_70%)]"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[hsl(var(--ac)/0.05)] rounded-full blur-3xl"></div>

            <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[hsl(var(--sf))] border border-[hsl(var(--sf)/0.5)] mb-6">
                        <span className="w-2 h-2 rounded-full bg-[hsl(var(--ac))] animate-pulse"></span>
                        <span className="text-xs font-medium text-[hsl(var(--tx-sec))] uppercase tracking-wider">
                            Banking As A Service
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                        Global Banking <br />
                        <span className="text-gradient">Local Speed.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-[hsl(var(--tx-sec))] mb-8 leading-relaxed max-w-lg">
                        Local collections, virtual accounts, FX, and cross-border settlements.
                        The complete payment link connecting Fiat and Crypto seamlessly.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button size="lg" className="shadow-lg shadow-[hsl(var(--pk)/0.25)]">
                            Start Integration <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button variant="outline" size="lg">
                            Contact Sales
                        </Button>
                    </div>

                    <div className="mt-12 flex gap-8 border-t border-[hsl(var(--sf))] pt-8">
                        <div>
                            <p className="text-3xl font-bold text-white">50+</p>
                            <p className="text-sm text-[hsl(var(--tx-mut))]">Countries Supported</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-white">$2B+</p>
                            <p className="text-sm text-[hsl(var(--tx-mut))]">Processed Monthly</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-white">0.5%</p>
                            <p className="text-sm text-[hsl(var(--tx-mut))]">Starting Fees</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    {/* Dashboard Preview Mockup */}
                    <div className="relative z-10 bg-[hsl(var(--sf))] rounded-xl border border-[hsl(var(--tx-mut)/0.2)] p-6 shadow-2xl skew-y-1 transform perspective-1000 rotate-y-[-5deg]">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <p className="text-sm text-[hsl(var(--tx-mut))]">Total Balance</p>
                                <p className="text-3xl font-bold">$1,245,390.00</p>
                            </div>
                            <div className="flex gap-2">
                                <Button size="sm" variant="secondary">Send</Button>
                                <Button size="sm" variant="primary">Add Funds</Button>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-[hsl(var(--bg))] border border-[hsl(var(--tx-mut)/0.1)]">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-[hsl(var(--pk)/0.2)] flex items-center justify-center text-[hsl(var(--pk))]">
                                            {i === 1 ? <Globe size={20} /> : i === 2 ? <Zap size={20} /> : <Shield size={20} />}
                                        </div>
                                        <div>
                                            <p className="font-medium text-white">USDT Settlement</p>
                                            <p className="text-xs text-[hsl(var(--tx-mut))]">Today, 10:23 AM</p>
                                        </div>
                                    </div>
                                    <p className="font-medium text-[hsl(var(--ac))]">+$45,000.00</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Decor */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-[hsl(var(--pk))] rounded-full blur-[100px] opacity-20"></div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[hsl(var(--ac))] rounded-full blur-[100px] opacity-20"></div>
                </motion.div>
            </div>
        </section>
    );
}
