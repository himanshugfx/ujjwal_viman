"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Ujjwal Viman", href: "/ujjwal-viman" },
        { name: "Blogs", href: "/blogs" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
                isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <Image
                        src="/assets/img/logo.png"
                        alt="Ujjwal Viman Logo"
                        width={160}
                        height={40}
                        className={cn("h-8 sm:h-10 w-auto transition-all group-hover:scale-110", isScrolled ? "brightness-100" : "brightness-0 invert")}
                    />
                    <span className={cn(
                        "text-xl sm:text-2xl font-bold outfit transition-colors",
                        isScrolled ? "text-green-900" : "text-white"
                    )}>
                        Ujjwal Viman
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-700 hover:text-green-700 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={cn(
                        "md:hidden p-2 rounded-lg transition-colors",
                        isScrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
                    )}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 z-[100] bg-green-950/98 backdrop-blur-xl transition-all duration-300 flex flex-col">
                    <div className="relative z-10 flex flex-col h-full">
                        {/* Header in Menu */}
                        <div className="flex items-center justify-between p-6">
                            <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                                <Image
                                    src="/assets/img/logo.png"
                                    alt="Logo"
                                    width={100}
                                    height={28}
                                    className="h-8 w-auto brightness-0 invert"
                                />
                                <span className="text-xl font-bold text-white outfit uppercase tracking-wider">Ujjwal Viman</span>
                            </Link>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 text-white/70 hover:text-white transition-colors"
                            >
                                <X className="w-8 h-8" />
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <nav className="flex flex-col items-center justify-center flex-grow gap-8 px-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-3xl font-bold text-white/80 hover:text-white transition-all outfit uppercase tracking-widest"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Menu Footer */}
                        <div className="p-8 mt-auto border-t border-white/5 bg-black/40">
                            <div className="flex flex-col items-center gap-4">
                                <div className="flex gap-8">
                                    <a href="https://wa.me/91XXXXXXXXXX" target="_blank" className="text-white/50 hover:text-green-500 transition-colors">
                                        <Image src="/assets/img/icon/whatsapp.png" alt="WhatsApp" width={24} height={24} className="opacity-70 hover:opacity-100" />
                                    </a>
                                    <a href="mailto:info@ujjwalviman.com" className="text-white/50 hover:text-white transition-colors">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                        </svg>
                                    </a>
                                </div>
                                <p className="text-white/20 text-[10px] mt-2 font-mono uppercase tracking-widest">© 2026 Ujjwal Viman</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
