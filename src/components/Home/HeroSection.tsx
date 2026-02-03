import { Button } from '../UI/Button';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { TrendingUp, TrendingDown } from 'lucide-react';

// Simple SVG Sparkline component
const Sparkline = ({ data, color }: { data: number[]; color: string }) => {
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min || 1;
    const points = data.map((v, i) => `${(i / (data.length - 1)) * 100},${100 - ((v - min) / range) * 100}`).join(' ');

    return (
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-20 h-8">
            <polyline
                fill="none"
                stroke={color}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                points={points}
            />
        </svg>
    );
};

const coins = [
    { name: 'Bitcoin', symbol: 'BTC', price: '$64,231.00', change: '+2.4%', data: [40, 45, 38, 52, 48, 60, 58, 65], color: '#F7931A' },
    { name: 'Ethereum', symbol: 'ETH', price: '$3,420.50', change: '+1.8%', data: [30, 35, 32, 40, 38, 45, 50, 48], color: '#627EEA' },
    { name: 'Solana', symbol: 'SOL', price: '$145.20', change: '-0.5%', data: [50, 48, 45, 42, 40, 38, 35, 36], color: '#00FFA3' },
];

export function HeroSection() {
    return (
        <section className="relative min-h-[95vh] flex items-center pt-28 pb-20 overflow-hidden">
            {/* Animated Background Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-20 right-[20%] w-[500px] h-[500px] bg-[hsl(var(--pk)/0.08)] rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute bottom-0 left-[10%] w-[400px] h-[400px] bg-[hsl(var(--pk)/0.05)] rounded-full blur-[80px]"
                />
            </div>

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--sf))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--sf))_1px,transparent_1px)] bg-[size:60px_60px] opacity-50" />

            <div className="container relative z-10 max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--pk)/0.1)] border border-[hsl(var(--pk)/0.2)] mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-[hsl(var(--pk))] animate-pulse" />
                        <span className="text-sm font-semibold text-[hsl(var(--pk))] uppercase tracking-wider">
                            Banking As A Service
                        </span>
                    </motion.div>

                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold leading-[0.9] mb-8 text-[hsl(var(--tx-pri))] tracking-tighter">
                        The future of{' '}
                        <span className="relative">
                            <span className="relative z-10 text-[hsl(var(--pk))]">money</span>
                            <motion.span
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute bottom-2 left-0 right-0 h-3 bg-[hsl(var(--pk)/0.2)] -z-0 origin-left"
                            />
                        </span>
                        <br />is here.
                    </h1>

                    <p className="text-xl md:text-2xl text-[hsl(var(--tx-sec))] mb-10 leading-relaxed max-w-lg font-medium">
                        Over 100 million people and businesses trust us to buy, sell, and manage crypto.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button size="lg" className="px-10">
                            Get started
                        </Button>
                        <Button variant="outline" size="lg" className="px-10">
                            Learn more
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40, rotateX: 10 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="relative hidden lg:block perspective-1000"
                >
                    {/* Dashboard Card with Glassmorphism */}
                    <div className="relative z-10 bg-white/80 backdrop-blur-xl rounded-[var(--radius-xl)] border border-[hsl(var(--tx-mut)/0.15)] p-8 shadow-[var(--shadow-xl)]">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <p className="text-sm font-semibold text-[hsl(var(--tx-sec))] uppercase tracking-wider mb-1">Portfolio Balance</p>
                                <p className="text-4xl font-bold text-[hsl(var(--tx-pri))] tracking-tight">$54,290.00</p>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 text-green-600">
                                <TrendingUp size={16} />
                                <span className="text-sm font-bold">+12.4%</span>
                            </div>
                        </div>

                        <div className="space-y-5">
                            {coins.map((coin, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                    className="flex items-center justify-between p-4 rounded-[var(--radius-md)] bg-[hsl(var(--sf)/0.5)] hover:bg-[hsl(var(--sf))] transition-colors cursor-pointer group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div
                                            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-[var(--shadow-sm)]"
                                            style={{ backgroundColor: coin.color }}
                                        >
                                            {coin.symbol[0]}
                                        </div>
                                        <div>
                                            <p className="font-bold text-[hsl(var(--tx-pri))] group-hover:text-[hsl(var(--pk))] transition-colors">{coin.name}</p>
                                            <p className="text-xs font-semibold text-[hsl(var(--tx-sec))]">{coin.symbol}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Sparkline data={coin.data} color={coin.change.startsWith('+') ? '#22c55e' : '#ef4444'} />
                                        <div className="text-right">
                                            <p className="font-bold text-[hsl(var(--tx-pri))]">{coin.price}</p>
                                            <p className={cn(
                                                "text-xs font-bold flex items-center gap-1 justify-end",
                                                coin.change.startsWith('+') ? "text-green-500" : "text-red-500"
                                            )}>
                                                {coin.change.startsWith('+') ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                                                {coin.change}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Floating decorative elements */}
                    <div className="absolute -top-6 -right-6 w-32 h-32 bg-[hsl(var(--pk))] rounded-full blur-[80px] opacity-30" />
                    <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[hsl(var(--pk)/0.5)] rounded-full blur-[60px] opacity-40" />
                </motion.div>
            </div>
        </section>
    );
}

