import React from 'react';
import { Trash2, Sparkles, PaintBucket, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Services = () => {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-primary font-bold text-xs tracking-wider mb-4">
                        PROFESYONEL HİZMETLER
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                        Sıradan Temizlik Değil,<br className="hidden md:block" /> <span className="text-primary">Endüstriyel Çözüm</span>
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        İnşaat sonrası karmaşayı profesyonel ekipman ve uzman kadromuzla yaşam alanına dönüştürüyoruz.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1: Kaba İnşaat */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center mb-6 text-slate-600">
                            <Trash2 className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Kaba İnşaat Temizliği</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Moloz atımı, kaba tozun detaylı temizlik yöntemleriyle çekilmesi ve alanın çalışmaya hazır hale getirilmesi.
                        </p>
                        <Link href="/services/kaba-insaat-temizligi" className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all group">
                            Detaylı Bilgi <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Card 2: İnce Detay (Featured) */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-primary relative transform md:-translate-y-2">
                        <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                            POPÜLER HİZMET
                        </div>
                        <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6 text-primary">
                            <Sparkles className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">İnce Detay & Cam Temizliği</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Çizmeden boya/harç çıkarma, cam yüzeylerde özel kazıma teknikleri, derz arası ve buharlı tam dezenfeksiyon.
                        </p>
                        <Link href="/services/ince-detay-ve-cam-temizligi" className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all group">
                            Detaylı Bilgi <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Card 3: Zemin Bakım */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center mb-6 text-slate-600">
                            <PaintBucket className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Zemin ve Parke Bakımı</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Parke, mermer ve fayanslardaki inatçı inşaat kalıntılarının yüzeye zarar vermeyen özel kimyasallarla temizliği.
                        </p>
                        <Link href="/services/zemin-ve-parke-bakimi" className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all group">
                            Detaylı Bilgi <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
