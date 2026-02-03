import { motion } from 'framer-motion';

export function About() {
    return (
        <div className="pt-40 pb-32 bg-white">
            <div className="container max-w-6xl">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-24"
                    >
                        <h1 className="text-6xl md:text-8xl font-bold text-[hsl(var(--tx-pri))] mb-10 tracking-tighter leading-[0.9]">
                            Building a <br /> <span className="text-[hsl(var(--pk))]">Fairer</span> Financial <br /> System
                        </h1>
                        <p className="text-2xl md:text-3xl text-[hsl(var(--tx-sec))] font-bold opacity-80 leading-snug">
                            We believe that anyone, anywhere, should be able to easily and securely access the global economy. Curless is the bridge to that future.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-[hsl(var(--tx-pri))]">Our Mission</h2>
                            <p className="text-lg text-[hsl(var(--tx-sec))] font-medium leading-relaxed">
                                Curless was founded with a simple goal: to remove the barriers between digital and traditional finance. We provide the infrastructure that allows money to move as fast as the internet.
                            </p>
                            <p className="text-lg text-[hsl(var(--tx-sec))] font-medium leading-relaxed">
                                Today, we serve over 100,000 customers globally, processing billions in transactions every month with 99.9% uptime.
                            </p>
                        </div>
                        <div className="p-12 bg-[hsl(var(--sf))] rounded-[40px] border-2 border-[hsl(var(--pk)/0.1)]">
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <p className="text-4xl font-extrabold text-[hsl(var(--pk))] mb-2">2021</p>
                                    <p className="text-sm font-bold text-[hsl(var(--tx-pri))]">Founded</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-extrabold text-[hsl(var(--pk))] mb-2">30+</p>
                                    <p className="text-sm font-bold text-[hsl(var(--tx-pri))]">Countries</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-extrabold text-[hsl(var(--pk))] mb-2">$5B+</p>
                                    <p className="text-sm font-bold text-[hsl(var(--tx-pri))]">Volume</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-extrabold text-[hsl(var(--pk))] mb-2">150+</p>
                                    <p className="text-sm font-bold text-[hsl(var(--tx-pri))]">Team Members</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center p-12 bg-[hsl(var(--pk))] rounded-3xl text-white">
                        <h2 className="text-4xl font-bold mb-6">Join the Revolution</h2>
                        <p className="text-xl mb-8 opacity-90 font-medium">We're always looking for talented people to join our global team.</p>
                        <button className="bg-white text-[hsl(var(--pk))] px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all">
                            View Careers
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
