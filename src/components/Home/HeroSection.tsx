import { Button } from '../UI/Button';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-white">
            {/* Background Elements - Minimal */}
            <div className="absolute top-0 right-0 w-[45%] h-full bg-[hsl(var(--sf))] -skew-x-12 translate-x-1/3 hidden lg:block"></div>

            <div className="container relative z-10 max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
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

                    <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] mb-10 text-[hsl(var(--tx-pri))] tracking-tighter">
                        The future of <br />
                        money is <span className="text-[hsl(var(--pk))]">here.</span>
                    </h1>

                    <p className="text-2xl md:text-3xl text-[hsl(var(--tx-sec))] mb-12 leading-tight max-w-lg font-bold opacity-80">
                        Over 100 million people and businesses trust us to buy, sell, and manage crypto.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button size="lg" className="px-10 font-bold">
                            Get started
                        </Button>
                        <Button variant="outline" size="lg" className="px-10 font-bold border-2">
                            Sign up
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    {/* Dashboard Preview Mockup - Coinbase style clean white card */}
                    <div className="relative z-10 bg-white rounded-2xl border border-[hsl(var(--tx-mut)/0.3)] p-8 shadow-xl">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <p className="text-sm font-bold text-[hsl(var(--tx-sec))] uppercase tracking-wider">Portfolio Balance</p>
                                <p className="text-4xl font-bold text-[hsl(var(--tx-pri))] mt-1">$54,290.00</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {[
                                { name: 'Bitcoin', symbol: 'BTC', price: '$64,231.00', change: '+2.4%' },
                                { name: 'Ethereum', symbol: 'ETH', price: '$3,420.50', change: '+1.8%' },
                                { name: 'Solana', symbol: 'SOL', price: '$145.20', change: '-0.5%' }
                            ].map((coin, i) => (
                                <div key={i} className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-[hsl(var(--sf))] flex items-center justify-center text-[hsl(var(--pk))] font-bold">
                                            {coin.symbol[0]}
                                        </div>
                                        <div>
                                            <p className="font-bold text-[hsl(var(--tx-pri))]">{coin.name}</p>
                                            <p className="text-xs font-bold text-[hsl(var(--tx-sec))]">{coin.symbol}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-[hsl(var(--tx-pri))]">{coin.price}</p>
                                        <p className={cn("text-xs font-bold", coin.change.startsWith('+') ? "text-green-500" : "text-red-500")}>
                                            {coin.change}
                                        </p>
                                    </div>
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
