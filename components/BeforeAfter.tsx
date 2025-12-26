'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { BadgeCheck, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const BeforeAfter = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Update container width on mount and resize
    useEffect(() => {
        // Removed container width logic as it's not needed with clip-path
    }, []);

    const handleMove = useCallback((event: MouseEvent | TouchEvent) => {
        if (!isDragging || !containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;

        // Calculate percentage
        const x = Math.max(0, Math.min(rect.width, clientX - rect.left));
        const position = (x / rect.width) * 100;

        setSliderPosition(position);
    }, [isDragging]);

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMove);
            window.addEventListener('touchmove', handleMove);
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('touchend', handleMouseUp);
        }
        return () => {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('touchmove', handleMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchend', handleMouseUp);
        };
    }, [isDragging, handleMove]);

    // Handle click to jump
    const handleClick = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
        setSliderPosition((x / rect.width) * 100);
    };

    return (
        <section className="py-24 bg-white select-none">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="text-primary font-bold text-xs tracking-widest uppercase mb-2 block">
                        Profesyonel Temizlik
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Öncesi ve Sonrası Değişimi Görün
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        İnşaat sonrası temizlikte uzman ekibimizle mekanlarınızı şantiye halinden yaşam alanına dönüştürüyoruz.
                    </p>
                </div>

                {/* Slider Container */}
                <div
                    ref={containerRef}
                    onClick={handleClick}
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleMouseDown}
                    className="relative rounded-3xl overflow-hidden shadow-2xl mb-12 h-[300px] md:h-[500px] cursor-col-resize group touch-none bg-gray-200"
                >
                    {/* Background Image (Right Side - AFTER - CLEAN) */}
                    {/* Shows fully, covered by the left image */}
                    <div className="absolute inset-0 w-full h-full">
                        <img
                            src="/images/after-1.png"
                            alt="After Clean"
                            className="w-full h-full object-cover pointer-events-none"
                        />
                        <div className="absolute top-6 right-6 bg-green-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-bold text-sm shadow-sm z-10">
                            SONRASI - Teslim Hali
                        </div>
                    </div>

                    {/* Foreground Image (Left Side - BEFORE - DIRTY) */}
                    {/* Using clip-path to reveal/hide without resizing the image */}
                    <div
                        className="absolute inset-0 w-full h-full overflow-hidden"
                        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                    >
                        <img
                            src="/images/before-1.jpg"
                            alt="Before Construction"
                            className="w-full h-full object-cover grayscale contrast-125 pointer-events-none"
                        />
                        <div className="absolute top-6 left-6 bg-orange-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-bold text-sm shadow-sm z-10 w-max">
                            ÖNCESİ - Şantiye Hali
                        </div>
                    </div>

                    {/* Slider Handle Line */}
                    <div
                        className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-20 pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                        style={{ left: `${sliderPosition}%` }}
                    >
                        {/* Circle Button */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary hover:bg-orange-600 text-white w-10 h-10 md:w-12 md:h-12 rounded-full grid place-items-center shadow-lg border-[3px] border-white transition-transform transform group-hover:scale-110">
                            <div className="flex gap-0.5">
                                <ChevronLeft className="w-3 h-3 md:w-4 md:h-4" />
                                <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Stats & CTA */}
                <div className="flex flex-col items-center gap-8">
                    {/* Feature Box */}
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 px-8 py-4 flex items-center gap-3 transform hover:scale-105 transition-transform duration-300">
                        <BadgeCheck className="w-8 h-8 text-primary fill-orange-100" />
                        <div className="text-gray-800 font-medium text-lg">
                            Camlardaki boya ve harç kalıntılarına <span className="text-primary font-bold">%100 çözüm</span>
                        </div>
                    </div>

                    {/* WhatsApp Button */}
                    <a
                        href="https://wa.me/905555555555"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 shadow-lg shadow-green-200 transition-all hover:shadow-xl hover:-translate-y-1"
                    >
                        <MessageCircle className="w-6 h-6" />
                        <div className="flex flex-col items-start leading-none">
                            <span className="text-[10px] opacity-90 font-medium uppercase tracking-wider mb-0.5">WhatsApp Hattı</span>
                            <span>Danışmak için Tıklayın</span>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default BeforeAfter;
