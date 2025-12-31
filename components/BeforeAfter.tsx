'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { BadgeCheck, MessageCircle, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { getImagePath } from '@/lib/paths';

// Test görselleri - hepsi aynı görsel
const getGalleryItems = () => [
    {
        id: 1,
        before: getImagePath('/images/before-1.jpg'),
        after: getImagePath('/images/after-1.png'),
        title: 'Proje 1 - Salon Temizliği',
    },
    {
        id: 2,
        before: getImagePath('/images/before-1.jpg'),
        after: getImagePath('/images/after-1.png'),
        title: 'Proje 2 - Mutfak Temizliği',
    },
    {
        id: 3,
        before: getImagePath('/images/before-1.jpg'),
        after: getImagePath('/images/after-1.png'),
        title: 'Proje 3 - Banyo Temizliği',
    },
    {
        id: 4,
        before: getImagePath('/images/before-1.jpg'),
        after: getImagePath('/images/after-1.png'),
        title: 'Proje 4 - Yatak Odası Temizliği',
    },
    {
        id: 5,
        before: getImagePath('/images/before-1.jpg'),
        after: getImagePath('/images/after-1.png'),
        title: 'Proje 5 - Genel Temizlik',
    },
];

const BeforeAfter = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [galleryItems, setGalleryItems] = useState(getGalleryItems());
    const containerRef = useRef<HTMLDivElement>(null);
    const galleryRef = useRef<HTMLDivElement>(null);

    // Client-side'da path'leri güncelle (production'da basePath için)
    useEffect(() => {
        setGalleryItems(getGalleryItems());
    }, []);

    // Auto-play slider (optional)
    useEffect(() => {
        const interval = setInterval(() => {
            // Auto-play disabled for better UX - user controls
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // Handle swipe gestures for gallery navigation
    const minSwipeDistance = 50;

    const nextSlide = useCallback(() => {
        setSliderPosition(50); // Reset slider position
        setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
    }, []);

    const prevSlide = useCallback(() => {
        setSliderPosition(50); // Reset slider position
        setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
    }, []);

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(0);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = useCallback(() => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextSlide();
        }
        if (isRightSwipe) {
            prevSlide();
        }
    }, [touchStart, touchEnd, nextSlide, prevSlide]);

    const goToSlide = (index: number) => {
        setSliderPosition(50); // Reset slider position
        setCurrentIndex(index);
    };

    // Before/After slider logic
    const handleMove = useCallback((event: MouseEvent | TouchEvent) => {
        if (!isDragging || !containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;

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

    const handleClick = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
        setSliderPosition((x / rect.width) * 100);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
        };
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [prevSlide, nextSlide]);

    const [galleryItems, setGalleryItems] = useState(getGalleryItems());
    
    // Client-side'da path'leri güncelle
    useEffect(() => {
        setGalleryItems(getGalleryItems());
    }, []);

    const currentItem = galleryItems[currentIndex];

    return (
        <section className="py-24 bg-gradient-to-b from-white to-stone-50 select-none">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
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

                {/* Gallery Container */}
                <div className="relative mb-8">
                    {/* Main Slider Container */}
                    <div
                        ref={galleryRef}
                        className="relative rounded-3xl overflow-hidden shadow-2xl mb-6 h-[400px] md:h-[600px] bg-gray-200"
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        {/* Gallery Items */}
                        <div className="relative w-full h-full">
                            {galleryItems.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                                        index === currentIndex
                                            ? 'opacity-100 translate-x-0'
                                            : index < currentIndex
                                            ? 'opacity-0 -translate-x-full'
                                            : 'opacity-0 translate-x-full'
                                    }`}
                                >
                                    {/* Before/After Slider */}
                                    <div
                                        ref={index === currentIndex ? containerRef : null}
                                        onClick={handleClick}
                                        onMouseDown={handleMouseDown}
                                        onTouchStart={(e) => {
                                            if (index === currentIndex) handleMouseDown();
                                        }}
                                        className="relative w-full h-full cursor-col-resize group touch-none"
                                    >
                                        {/* Background Image (AFTER - CLEAN) */}
                                        <div className="absolute inset-0 w-full h-full">
                                            <img
                                                src={item.after}
                                                alt={`${item.title} - Sonrası`}
                                                className="w-full h-full object-cover pointer-events-none"
                                                loading={index === currentIndex ? 'eager' : 'lazy'}
                                            />
                                            <div className="absolute top-6 right-6 bg-green-600/95 backdrop-blur-sm text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg z-10 flex items-center gap-2">
                                                <BadgeCheck className="w-4 h-4" />
                                                SONRASI - Teslim Hali
                                            </div>
                                        </div>

                                        {/* Foreground Image (BEFORE - DIRTY) */}
                                        <div
                                            className="absolute inset-0 w-full h-full overflow-hidden"
                                            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`, transition: 'none' }}
                                        >
                                            <img
                                                src={item.before}
                                                alt={`${item.title} - Öncesi`}
                                                className="w-full h-full object-cover grayscale contrast-125 pointer-events-none"
                                                loading={index === currentIndex ? 'eager' : 'lazy'}
                                            />
                                            <div className="absolute top-6 left-6 bg-orange-500/95 backdrop-blur-sm text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg z-10 flex items-center gap-2">
                                                <Play className="w-4 h-4" />
                                                ÖNCESİ - Şantiye Hali
                                            </div>
                                        </div>

                                        {/* Slider Handle */}
                                        {index === currentIndex && (
                                            <div
                                                className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-20 pointer-events-none shadow-[0_0_15px_rgba(0,0,0,0.6)]"
                                                style={{ left: `${sliderPosition}%`, transition: 'none' }}
                                            >
                                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary hover:bg-orange-600 text-white w-12 h-12 md:w-14 md:h-14 rounded-full grid place-items-center shadow-xl border-4 border-white transition-all transform group-hover:scale-110 active:scale-95">
                                                    <div className="flex gap-1">
                                                        <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                                                        <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-gray-900 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110 active:scale-95 backdrop-blur-sm border border-gray-200"
                            aria-label="Önceki proje"
                        >
                            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-gray-900 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110 active:scale-95 backdrop-blur-sm border border-gray-200"
                            aria-label="Sonraki proje"
                        >
                            <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
                        </button>

                        {/* Project Title */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 bg-white/95 backdrop-blur-md text-gray-900 px-6 py-3 rounded-xl font-bold text-sm md:text-base shadow-xl border border-gray-200">
                            {currentItem.title}
                        </div>
                    </div>

                    {/* Gallery Indicators */}
                    <div className="flex items-center justify-center gap-3 mb-6">
                        {galleryItems.map((item, index) => (
                            <button
                                key={item.id}
                                onClick={() => goToSlide(index)}
                                className={`transition-all duration-300 rounded-full ${
                                    index === currentIndex
                                        ? 'w-12 h-3 bg-primary shadow-lg shadow-primary/50'
                                        : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                                }`}
                                aria-label={`Proje ${index + 1}'e git`}
                            />
                        ))}
                    </div>

                    {/* Thumbnail Navigation */}
                    <div className="flex items-center justify-center gap-3 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        {galleryItems.map((item, index) => (
                            <button
                                key={item.id}
                                onClick={() => goToSlide(index)}
                                className={`relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                                    index === currentIndex
                                        ? 'border-primary shadow-lg shadow-primary/50 scale-110'
                                        : 'border-gray-200 hover:border-gray-300 opacity-70 hover:opacity-100'
                                }`}
                            >
                                <img
                                    src={item.after}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                                {index === currentIndex && (
                                    <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                                            <Play className="w-3 h-3 text-white fill-white" />
                                        </div>
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Bottom Stats & CTA */}
                <div className="flex flex-col items-center gap-8 mt-12">
                    {/* Feature Box */}
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 px-8 py-4 flex items-center gap-3 transform hover:scale-105 transition-transform duration-300 max-w-2xl">
                        <BadgeCheck className="w-8 h-8 text-primary fill-orange-100" />
                        <div className="text-gray-800 font-medium text-lg">
                            Camlardaki boya ve harç kalıntılarına <span className="text-primary font-bold">%100 çözüm</span>
                        </div>
                    </div>

                    {/* WhatsApp Button */}
                    <a
                        href="https://wa.me/905343710511"
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
