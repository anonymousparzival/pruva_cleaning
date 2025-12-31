'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <a
            href="https://wa.me/905343710511"
            target="_blank"
            rel="noopener noreferrer"
            className={`fixed right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:shadow-[#25D366]/40 ${isScrolled ? 'bottom-24' : 'bottom-6 hover:-translate-y-2'
                }`}
            aria-label="WhatsApp ile iletişime geç"
        >
            <MessageCircle className="w-8 h-8 md:w-9 md:h-9" />
            <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
        </a>
    );
};

export default WhatsAppButton;
