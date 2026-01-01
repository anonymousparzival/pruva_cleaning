import React from 'react';
import { ArrowRight, Image as ImageIcon, CheckCircle2 } from 'lucide-react';

const Hero = () => {
    return (
        <div id="hero" className="relative min-h-screen flex flex-col font-sans text-white overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop")',
                }}
            >
                <div className="absolute inset-0 bg-gray-900/80"></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 flex-1 flex flex-col justify-center px-6 lg:px-12 pb-20 pt-32 max-w-7xl mx-auto w-full">

                {/* Location Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold tracking-wide text-gray-300 w-fit mb-6 border border-white/10 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                    AYDIN / TÜRKİYE
                </div>

                {/* Main Title */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight max-w-4xl mb-6">
                    AYDIN'DA İNŞAATIN <br />
                    TOZUNU <span className="text-primary">YENİ EVİN</span> <br />
                    <span className="text-primary">IŞILTISINA</span> DÖNÜŞTÜRÜYORUZ.
                </h1>

                {/* Description Line */}
                <div className="flex border-l-4 border-primary pl-6 max-w-2xl mb-10">
                    <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed">
                        <span className="text-white font-bold">XMAX Temizlik</span> ile endüstriyel ekipmanlarla kaba ve ince inşaat temizliğinde uzman çözüm.
                        Taşınmaya hazır, tertemiz mekanlar yaratıyoruz.
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-20">
                    <a
                        href="#quote-form"
                        className="group flex items-center justify-center gap-2 bg-primary hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg shadow-orange-900/20"
                    >
                        Hemen Fiyat Al
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <a
                        href="#before-after"
                        className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/20 px-8 py-4 rounded-lg font-semibold text-lg backdrop-blur-sm transition-all duration-300 group"
                    >
                        <ImageIcon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                        Öncesi/Sonrası Galeri
                    </a>
                </div>

                {/* Bottom Features */}
                <div className="flex flex-wrap gap-8 text-sm font-semibold text-gray-300">
                    <div className="flex items-center gap-2">
                        <div className="bg-green-500/20 p-1 rounded-full">
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                        </div>
                        %100 Müşteri Memnuniyeti
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="bg-green-500/20 p-1 rounded-full">
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                        </div>
                        Profesyonel Ekipman
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
