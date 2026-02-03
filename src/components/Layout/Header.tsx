import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
        { name: 'Products', href: '/products' },
        { name: 'Solutions', href: '/solutions' },
        { name: 'About us', href: '/about' },
        { name: 'Contact us', href: '/contact' },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b",
                isScrolled ? "bg-white/90 backdrop-blur-md border-[hsl(var(--sf))]" : "bg-white border-transparent"
            )}
            style={{ height: 'var(--header-height)' }}
        >
            <div className="container h-full flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link to="/" className="text-2xl font-bold tracking-tight text-[hsl(var(--pk))]">
                        Curless
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className="text-sm font-semibold text-[hsl(var(--tx-pri))] hover:text-[hsl(var(--pk))] transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <a href="#" className="text-sm font-semibold text-[hsl(var(--tx-pri))] hover:text-[hsl(var(--pk))]">
                        Log in
                    </a>
                    <Button size="sm" className="font-bold">
                        Sign up
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
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="text-lg font-medium text-[hsl(var(--tx-sec))]"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
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
