'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        setIsMobileMenuOpen(false);
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/90 backdrop-blur-md shadow-lg py-3'
                    : 'bg-transparent py-6'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('#hero')}>
                        <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-white/20 shadow-md bg-white">
                            <Image
                                src="/pruva_cleaning/images/pruva-logo.jpg"
                                alt="Pruva Temizlik Logo"
                                fill
                                className="object-contain p-1"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className={`text-xl md:text-2xl font-bold tracking-tight leading-none ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                                Pruva Temizlik
                            </span>
                            <span className={`text-[10px] uppercase tracking-widest font-medium ${isScrolled ? 'text-primary' : 'text-gray-300'}`}>
                                Endüstriyel Yapı Bakımı
                            </span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
                        {[
                            { label: 'Hizmetler', id: '#services' },
                            { label: 'Projeler', id: '#before-after' },
                            { label: 'Referanslar', id: '#team' },
                            { label: 'İletişim', id: '#contact' },
                        ].map((item) => (
                            <button
                                key={item.label}
                                onClick={() => scrollToSection(item.id)}
                                className={`relative group transition-colors ${isScrolled ? 'text-gray-700 hover:text-primary' : 'text-gray-200 hover:text-white'
                                    }`}
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                            </button>
                        ))}
                        <a
                            href="tel:+905555555555"
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all ${isScrolled
                                ? 'bg-primary text-white hover:bg-orange-600 shadow-lg shadow-orange-200'
                                : 'bg-white text-primary hover:bg-gray-100'
                                }`}
                        >
                            <Phone className="w-4 h-4" />
                            <span>Hemen Ara</span>
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-gray-900' : 'text-white'}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Drawer */}
            <div
                className={`fixed inset-0 z-40 bg-gray-900/95 backdrop-blur-xl transition-all duration-300 md:hidden flex items-center justify-center ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                    }`}
            >
                <div className="flex flex-col items-center gap-8 text-white text-xl font-bold">
                    <button onClick={() => scrollToSection('#hero')} className="hover:text-primary">Anasayfa</button>
                    <button onClick={() => scrollToSection('#services')} className="hover:text-primary">Hizmetler</button>
                    <button onClick={() => scrollToSection('#before-after')} className="hover:text-primary">Projeler</button>
                    <button onClick={() => scrollToSection('#contact')} className="hover:text-primary">İletişim</button>
                    <button
                        onClick={() => scrollToSection('#quote-form')}
                        className="bg-primary text-white px-8 py-3 rounded-full mt-4 flex items-center gap-2"
                    >
                        Hemen Fiyat Al <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
