import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { servicesData } from '@/lib/serviceData';
import { CheckCircle2, ArrowRight, Phone, ShieldCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

// This is required for static site generation with dynamic routes
export function generateStaticParams() {
    return Object.keys(servicesData).map((slug) => ({
        slug: slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = servicesData[slug as keyof typeof servicesData];
    if (!service) return { title: 'Hizmet Bulunamadı' };

    return {
        title: `${service.title} - Pruva Temizlik Aydın`,
        description: service.shortDesc,
    }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = servicesData[slug as keyof typeof servicesData];

    if (!service) {
        notFound();
    }

    const Icon = service.icon;

    return (
        <main className="font-sans antialiased text-gray-900 bg-white min-h-screen flex flex-col">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center pt-20">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover brightness-50"
                        priority
                    />
                </div>
                <div className="relative z-10 container mx-auto px-6 text-center text-white">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/90 text-white font-bold text-sm mb-6 backdrop-blur-sm">
                        <Icon className="w-4 h-4" />
                        PROFESYONEL HİZMET
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                        {service.title}
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto font-medium">
                        {service.shortDesc}
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-3 gap-12">

                        {/* Left Column: Content */}
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-bold mb-6 text-gray-900">Hizmet Detayları</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-10">
                                {service.fullDesc}
                            </p>

                            {/* Steps */}
                            <div className="bg-slate-50 rounded-3xl p-8 md:p-10 mb-12 border border-slate-100">
                                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                    <span className="bg-primary text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">01</span>
                                    Nasıl Yapıyoruz?
                                </h3>
                                <div className="space-y-6">
                                    {service.steps.map((step, index) => (
                                        <div key={index} className="flex gap-4">
                                            <div className="flex-shrink-0 mt-1">
                                                <CheckCircle2 className="w-6 h-6 text-primary" />
                                            </div>
                                            <p className="text-gray-700 font-medium text-lg border-b border-gray-200 pb-4 w-full">{step}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Features */}
                            <div>
                                <h3 className="text-2xl font-bold mb-6">Öne Çıkan Özellikler</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3 bg-white border border-gray-200 p-4 rounded-xl shadow-sm">
                                            <ShieldCheck className="w-5 h-5 text-green-500" />
                                            <span className="font-bold text-gray-800">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Sidebar / CTA */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-32 space-y-8">
                                {/* CTA Card */}
                                <div className="bg-gray-900 text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16"></div>

                                    <h3 className="text-2xl font-bold mb-4">Hemen Fiyat Alın</h3>
                                    <p className="text-gray-400 mb-8">Bu hizmet için size özel fiyat teklifimizi 30 saniye içinde oluşturun.</p>

                                    <a
                                        href="/#quote-form"
                                        className="block w-full bg-primary hover:bg-orange-600 text-white text-center py-4 rounded-xl font-bold transition-all shadow-lg shadow-primary/25 mb-4"
                                    >
                                        Fiyat Teklifi Al
                                    </a>

                                    <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                                        <Phone className="w-4 h-4" />
                                        <span>veya bizi arayın: </span>
                                        <a href="tel:+905555555555" className="text-white font-bold hover:underline">0555 555 55 55</a>
                                    </div>
                                </div>

                                {/* Assurance */}
                                <div className="bg-orange-50 border border-orange-100 rounded-3xl p-8">
                                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                                        <ShieldCheck className="w-5 h-5 text-primary" />
                                        Güvenilirlik Garantisi
                                    </h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Pruva Temizlik olarak tüm hizmetlerimizde %100 müşteri memnuniyeti ve sigortalı hizmet garantisi sunuyoruz.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <ScrollToTop />
            <Footer />
        </main>
    );
}
