import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '../UI/Button';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Solutions', href: '#solutions' },
        { name: 'Enterprise', href: '#enterprise' },
        { name: 'About', href: '#about' },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
                isScrolled ? "bg-[hsl(var(--bg)/0.9)] backdrop-blur-md border-[hsl(var(--sf))]" : "bg-transparent"
            )}
            style={{ height: 'var(--header-height)' }}
        >
            <div className="container h-full flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {/* Logo Icon placed here if exists */}
                    <span className="text-2xl font-bold font-display tracking-tight text-gradient">
                        Curless
                    </span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-[hsl(var(--tx-sec))] hover:text-[hsl(var(--tx-pri))] transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <a href="#" className="text-sm font-medium text-[hsl(var(--tx-pri))] hover:opacity-80">
                        Log in
                    </a>
                    <Button size="sm">
                        Contact Sales <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-[hsl(var(--tx-pri))]"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-[var(--header-height)] left-0 w-full bg-[hsl(var(--bg))] border-b border-[hsl(var(--sf))] p-6 md:hidden shadow-2xl"
                    >
                        <nav className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-[hsl(var(--tx-sec))]"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <hr className="border-[hsl(var(--sf))]" />
                            <Button className="w-full justify-center">Get Started</Button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
