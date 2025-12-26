'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

const Contact = () => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-0 shadow-2xl rounded-3xl overflow-hidden">

                    {/* Left: Map Placeholder (Simulated) */}
                    <div className="bg-slate-200 relative min-h-[400px] lg:min-h-full w-full group">
                        {/* This would be an iframe in production */}
                        <div className="absolute inset-0 flex items-center justify-center flex-col gap-4 text-slate-400">
                            <MapPin className="w-16 h-16 opacity-50" />
                            <span className="font-bold text-xl opacity-50">Google Haritalar</span>
                            <p className="text-sm px-8 text-center opacity-70">
                                Efeler Mahallesi, Adnan Menderes Bulvarı No: 123, Aydın
                            </p>
                        </div>
                        {/* Overlay Effect */}
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors pointer-events-none"></div>

                        {/* Real Map Iframe (Commented out for now, can be enabled with real API key or Embed URL) */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d27.8!3d37.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ4JzAwLjAiTiAyN8KwNDgnMDAuMCJF!5e0!3m2!1sen!2str!4v1600000000000!5m2!1sen!2str"
                            width="100%"
                            height="100%"
                            style={{ border: 0, position: 'absolute', top: 0, left: 0, opacity: 0.6, mixBlendMode: 'multiply', filter: 'grayscale(50%)' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="pointer-events-none" // Disabled interaction for demo
                        ></iframe>
                    </div>

                    {/* Right: Info */}
                    <div className="bg-gray-900 p-10 md:p-16 text-white">
                        <h2 className="text-3xl font-bold mb-2">Bize Ulaşın</h2>
                        <p className="text-gray-400 mb-10">
                            İnşaat temizliği projeleriniz için bize ulaşın.
                        </p>

                        <div className="space-y-8">
                            {/* Address */}
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center shrink-0">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Merkez Ofis</h4>
                                    <p className="text-gray-400 leading-relaxed">
                                        Efeler Mahallesi, Adnan Menderes Bulvarı<br />
                                        No: 123, Aydın / Merkez
                                    </p>
                                </div>
                            </div>

                            {/* Phone & Email */}
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center shrink-0">
                                    <Phone className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">İletişim</h4>
                                    <a href="tel:+905555555555" className="block text-gray-400 hover:text-white transition-colors">
                                        +90 (555) 555 55 55
                                    </a>
                                    <a href="mailto:info@aydintemizlik.com" className="block text-gray-400 hover:text-white transition-colors">
                                        info@aydintemizlik.com
                                    </a>
                                </div>
                            </div>

                            {/* Working Areas */}
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center shrink-0">
                                    <Navigation className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-3">Hizmet Bölgeleri</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Efeler', 'Kuşadası', 'Söke', 'Didim', 'Nazilli', 'İncirliova', 'Germencik'].map(area => (
                                            <span key={area} className="text-xs font-semibold bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">
                                                {area}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
