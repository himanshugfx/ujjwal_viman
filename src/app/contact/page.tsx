"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logic for form submission
    };

    return (
        <div className="pt-24 pb-16">
            <section className="bg-green-900 py-24 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/assets/img/drone-on-field.jpg')] bg-cover bg-center opacity-20" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold outfit mb-6">Get in Touch</h1>
                    <p className="text-xl text-green-100 max-w-2xl mx-auto opacity-80">
                        Have questions about our drones or services? Our team of experts is here to help you modernize your farming.
                    </p>
                </div>
            </section>

            <section className="py-24 container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 outfit">Contact Information</h2>
                            <p className="text-gray-600 leading-relaxed max-w-md">
                                Connect with our expert team for tailored solutions and support. We are committed to fostering India's drone ecosystem.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
                            {[
                                { title: "Hotline", value: "+91 8007918999", icon: <Phone className="w-6 h-6" />, href: "tel:+918007918999" },
                                { title: "Official Email", value: "info@ujjwalviman.com", icon: <Mail className="w-6 h-6" />, href: "mailto:info@ujjwalviman.com" },
                                {
                                    title: "Our Location",
                                    value: "Survey No. 7/5, plot no. 22, Jadhavwadi, New Mondha, Chhatrapati Sambhajinagar, Aurangabad, 431001, Maharashtra, India",
                                    icon: <MapPin className="w-6 h-6" />,
                                    href: "#"
                                },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 p-6 bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                    <div className="w-12 h-12 bg-green-50 text-green-700 rounded-2xl flex items-center justify-center shrink-0">
                                        {item.icon}
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">{item.title}</h4>
                                        {item.href === "#" ? (
                                            <p className="text-gray-900 font-medium leading-relaxed">{item.value}</p>
                                        ) : (
                                            <a href={item.href} className="text-gray-900 font-bold hover:text-green-700 transition-colors text-lg italic">
                                                {item.value}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-premium border border-gray-50">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-600 ml-1">Your Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition-all"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-600 ml-1">Phone Number</label>
                                    <input
                                        type="text"
                                        placeholder="+91 98765 43210"
                                        className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition-all"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-600 ml-1">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition-all"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-600 ml-1">Your Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us about your requirements..."
                                    className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition-all resize-none"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-5 bg-green-700 hover:bg-green-800 text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-green-900/10 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
                            >
                                Send Message <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
