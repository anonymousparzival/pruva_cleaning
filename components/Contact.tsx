'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

const Contact = () => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-0 shadow-2xl rounded-3xl overflow-hidden">

                    {/* Left: Google Maps */}
                    <div className="bg-slate-200 relative min-h-[400px] lg:min-h-full w-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3128.5!2d27.8458!3d37.8444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c0b8b8b8b8b8b8%3A0x0!2sGirne%20Mahallesi%20Efeler%20Bulvarı%2037%2FF%20Blok%2C%20Aydın!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
                            width="100%"
                            height="100%"
                            style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="XMAX Temizlik Konum"
                            className="w-full h-full"
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
                                        Girne Mahallesi Efeler Bulvarı<br />
                                        37/F Blok, Aydın
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center shrink-0">
                                    <Phone className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">İletişim</h4>
                                    <a href="tel:+905343710511" className="block text-gray-400 hover:text-white transition-colors">
                                        +90 534 371 05 11
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
