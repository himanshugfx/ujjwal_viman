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

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 z-40 bg-white animate-in fade-in slide-in-from-right duration-300">
                    <div className="flex flex-col h-full">
                        <div className="flex items-center justify-between p-6 border-b">
                            <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                                <Image src="/assets/img/logo.png" alt="Logo" width={120} height={32} className="h-8 w-auto" />
                                <span className="text-xl font-bold text-green-900 outfit">Ujjwal Viman</span>
                            </Link>
                            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-gray-500">
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <nav className="flex flex-col p-8 gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-2xl font-bold text-gray-900 hover:text-green-700 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
