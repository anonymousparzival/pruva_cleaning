'use client';

import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-gray-400 py-16 border-t border-gray-900 font-sans">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white border border-gray-800">
                                <Image
                                    src="/pruva_cleaning/images/pruva-logo.jpg"
                                    fill
                                    className="object-contain p-0.5"
                                    alt="Pruva Logo"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-white tracking-tight">Pruva Temizlik</h3>
                        </div>
                        <p className="text-sm leading-relaxed mb-6">
                            Aydın Pruva Temizlik, inşaat ve tadilat sonrası profesyonel temizlik hizmetleri.
                            Modern ekipmanlarımız ve uzman kadromuzla mekanlarınızı teslime hazır hale getiriyoruz.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="bg-gray-900 p-2.5 rounded-lg hover:bg-primary hover:text-white transition-all duration-300">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-gray-900 p-2.5 rounded-lg hover:bg-primary hover:text-white transition-all duration-300">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-gray-900 p-2.5 rounded-lg hover:bg-primary hover:text-white transition-all duration-300">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Access */}
                    <div>
                        <h4 className="font-bold text-white mb-6 text-lg">Hızlı Erişim</h4>
                        <ul className="space-y-3 text-sm font-medium">
                            <li><a href="#hero" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>Anasayfa</a></li>
                            <li><a href="#services" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>Hizmetlerimiz</a></li>
                            <li><a href="#quote-form" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>Fiyat Teklifi Al</a></li>
                            <li><a href="#before-after" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>Projelerimiz</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-bold text-white mb-6 text-lg">Hizmetlerimiz</h4>
                        <ul className="space-y-3 text-sm font-medium">
                            <li className="hover:text-white transition-colors">İnşaat Sonrası Temizlik</li>
                            <li className="hover:text-white transition-colors">Tadilat Sonrası Temizlik</li>
                            <li className="hover:text-white transition-colors">Dış Cephe Cam Temizliği</li>
                            <li className="hover:text-white transition-colors">Zemin Cilalama ve Bakım</li>
                            <li className="hover:text-white transition-colors">Endüstriyel Temizlik</li>
                        </ul>
                    </div>

                    {/* Contact Mini */}
                    <div>
                        <h4 className="font-bold text-white mb-6 text-lg">İletişim</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span>Efeler Mah. Adnan Menderes Bulv. No:123, Aydın</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span>+90 (555) 555 55 55</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span>info@pruvatemizlik.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-600">
                    <p>&copy; {new Date().getFullYear()} Pruva Temizlik Hizmetleri. Tüm hakları saklıdır.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-gray-400">Gizlilik Politikası</a>
                        <a href="#" className="hover:text-gray-400">Kullanım Şartları</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
