import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-[hsl(var(--sf)/0.3)] border-t border-[hsl(var(--sf))] pt-16 pb-8">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <span className="text-2xl font-bold font-display tracking-tight text-white mb-4 block">
                            Curless
                        </span>
                        <p className="text-[hsl(var(--tx-sec))] text-sm leading-relaxed">
                            Global banking and payment infrastructure for the digital economy. seamless money movement for everyone.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-[hsl(var(--tx-pri))] font-medium mb-4">Platform</h4>
                        <ul className="space-y-3 text-sm text-[hsl(var(--tx-sec))]">
                            <li><a href="#" className="hover:text-[hsl(var(--pk))]">Global Accounts</a></li>
                            <li><a href="#" className="hover:text-[hsl(var(--pk))]">Multi-Currency</a></li>
                            <li><a href="#" className="hover:text-[hsl(var(--pk))]">Crypto Bridge</a></li>
                            <li><a href="#" className="hover:text-[hsl(var(--pk))]">API Docs</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[hsl(var(--tx-pri))] font-medium mb-4">Company</h4>
                        <ul className="space-y-3 text-sm text-[hsl(var(--tx-sec))]">
                            <li><a href="#" className="hover:text-[hsl(var(--pk))]">About Us</a></li>
                            <li><a href="#" className="hover:text-[hsl(var(--pk))]">Compliance</a></li>
                            <li><a href="#" className="hover:text-[hsl(var(--pk))]">Careers</a></li>
                            <li><a href="#" className="hover:text-[hsl(var(--pk))]">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[hsl(var(--tx-pri))] font-medium mb-4">Connect</h4>
                        <div className="flex gap-4 text-[hsl(var(--tx-sec))]">
                            <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
                        </div>
                        <p className="mt-4 text-xs text-[hsl(var(--tx-mut))]">
                            Licensed Money Transmitter.
                        </p>
                    </div>
                </div>

                <div className="border-t border-[hsl(var(--sf))] pt-8 text-center md:text-left text-xs text-[hsl(var(--tx-mut))] flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>© 2024 Curless Payments Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-[hsl(var(--tx-sec))]">Privacy Policy</a>
                        <a href="#" className="hover:text-[hsl(var(--tx-sec))]">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
