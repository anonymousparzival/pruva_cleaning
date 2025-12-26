import React from 'react';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
            <h1 className="text-9xl font-extrabold text-primary mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Aradığınız Sayfa Süpürülmüş Olabilir!
            </h2>
            <p className="text-gray-500 mb-10 max-w-md mx-auto">
                Üzgünüz, aradığınız sayfa ya taşındı ya da temizlik sırasında kayboldu.
                Anasayfaya dönerek devam edebilirsiniz.
            </p>
            <Link
                href="/"
                className="bg-primary hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg"
            >
                Anasayfaya Dön
            </Link>
        </div>
    );
}
