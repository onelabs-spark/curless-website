import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '../components/UI/Button';

export function Contact() {
    return (
        <div className="pt-32 pb-24 bg-white">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-20 items-start">
                    <div>
                        <h1 className="text-6xl font-bold text-[hsl(var(--tx-pri))] mb-8 tracking-tighter">
                            Get in <span className="text-[hsl(var(--pk))]">touch</span>
                        </h1>
                        <p className="text-xl text-[hsl(var(--tx-sec))] font-medium mb-12">
                            Have questions about our products or need a custom solution? Our team is here to help you navigate the future of finance.
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-6 items-center">
                                <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--sf))] flex items-center justify-center text-[hsl(var(--pk))]">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-[hsl(var(--tx-sec))] uppercase">Email</p>
                                    <p className="text-lg font-bold text-[hsl(var(--tx-pri))] mt-1">support@curless.com</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-center">
                                <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--sf))] flex items-center justify-center text-[hsl(var(--pk))]">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-[hsl(var(--tx-sec))] uppercase">Phone</p>
                                    <p className="text-lg font-bold text-[hsl(var(--tx-pri))] mt-1">+1 (800) CUR-LESS</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-center">
                                <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--sf))] flex items-center justify-center text-[hsl(var(--pk))]">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-[hsl(var(--tx-sec))] uppercase">Office</p>
                                    <p className="text-lg font-bold text-[hsl(var(--tx-pri))] mt-1">101 California St, San Francisco, CA</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-10 rounded-[32px] border border-[hsl(var(--sf))] shadow-2xl">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[hsl(var(--tx-pri))]">First Name</label>
                                    <input type="text" className="w-full p-4 rounded-xl border border-[hsl(var(--sf))] bg-[hsl(var(--sf)/0.3)] focus:border-[hsl(var(--pk))] outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[hsl(var(--tx-pri))]">Last Name</label>
                                    <input type="text" className="w-full p-4 rounded-xl border border-[hsl(var(--sf))] bg-[hsl(var(--sf)/0.3)] focus:border-[hsl(var(--pk))] outline-none transition-all" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-[hsl(var(--tx-pri))]">Work Email</label>
                                <input type="email" className="w-full p-4 rounded-xl border border-[hsl(var(--sf))] bg-[hsl(var(--sf)/0.3)] focus:border-[hsl(var(--pk))] outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-[hsl(var(--tx-pri))]">Message</label>
                                <textarea rows={4} className="w-full p-4 rounded-xl border border-[hsl(var(--sf))] bg-[hsl(var(--sf)/0.3)] focus:border-[hsl(var(--pk))] outline-none transition-all" />
                            </div>
                            <Button className="w-full p-5 font-bold text-lg">Send Message</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
