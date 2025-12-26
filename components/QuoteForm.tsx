'use client';

import React, { useState } from 'react';
import { BedDouble, Armchair, Building2, Warehouse, Hammer, PaintRoller, Smartphone, CheckCircle2, MessageCircle, LayoutGrid, MoreHorizontal } from 'lucide-react';

type FlatType = '1+1' | '2+1' | '3+1' | '4+1' | 'Villa' | 'Diğer' | null;
type ConstructionStatus = 'new' | 'renovation' | null;

const QuoteForm = () => {
    const [flatType, setFlatType] = useState<FlatType>(null);
    const [otherFlatDetails, setOtherFlatDetails] = useState('');
    const [size, setSize] = useState<number>(120);
    const [status, setStatus] = useState<ConstructionStatus>(null);
    const [phone, setPhone] = useState<string>('');

    const handleWhatsAppRedirect = () => {
        if (!flatType || !status || !phone) {
            alert('Lütfen tüm alanları doldurunuz.');
            return;
        }

        if (flatType === 'Diğer' && !otherFlatDetails.trim()) {
            alert('Lütfen daire tipini belirtiniz.');
            return;
        }

        const finalFlatType = flatType === 'Diğer' ? otherFlatDetails : flatType;
        const statusText = status === 'new' ? 'Yeni Bitti (Kaba + İnce)' : 'Tadilat Sonrası (Boya & Badana)';
        const message = `Merhaba, Pruva Temizlik web sitenizden fiyat teklifi almak istiyorum.%0A%0A🏠 *Daire Tipi:* ${finalFlatType}%0A📐 *Metrekare:* ${size} m²%0A🔨 *Durum:* ${statusText}%0A📱 *İletişim:* ${phone}`;

        // Replace with the actual phone number
        const whatsappUrl = `https://wa.me/905555555555?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    const flatOptions = [
        { type: '1+1', icon: <BedDouble className="w-8 h-8" /> },
        { type: '2+1', icon: <Armchair className="w-8 h-8" /> },
        { type: '3+1', icon: <Building2 className="w-8 h-8" /> },
        { type: '4+1', icon: <LayoutGrid className="w-8 h-8" /> },
        { type: 'Villa', label: 'Villa/Müstakil', icon: <Warehouse className="w-8 h-8" /> },
        { type: 'Diğer', icon: <MoreHorizontal className="w-8 h-8" /> },
    ];

    return (
        <section className="py-24 bg-stone-50" id="quote-form">
            <div className="max-w-2xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                        Pruva ile <span className="text-primary">Hızlı Fiyat</span> Teklifi Al
                    </h2>
                    <p className="text-gray-500">
                        Profesyonel inşaat sonrası temizlik için 30 saniyede fiyat öğrenin.
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-white rounded-3xl shadow-xl border border-stone-100 p-6 md:p-10">

                    {/* Step 1: Flat Type */}
                    <div className="mb-10">
                        <h3 className="font-bold text-gray-900 mb-4 text-lg">1. Daire Tipi Seçin</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {flatOptions.map((item) => (
                                <button
                                    key={item.type}
                                    onClick={() => setFlatType(item.type as FlatType)}
                                    className={`relative flex flex-col items-center justify-center gap-3 p-4 rounded-xl border-2 transition-all duration-200 h-32
                    ${flatType === item.type
                                            ? 'border-primary bg-orange-50 text-primary'
                                            : 'border-slate-100 text-gray-500 hover:border-primary/50 hover:bg-slate-50'
                                        }`}
                                >
                                    {flatType === item.type && (
                                        <div className="absolute -top-2 -right-2 bg-primary text-white rounded-full p-0.5">
                                            <CheckCircle2 className="w-4 h-4" />
                                        </div>
                                    )}
                                    {item.icon}
                                    <span className="font-bold">{item.label || item.type}</span>
                                </button>
                            ))}
                        </div>

                        {/* Custom Input for 'Diğer' */}
                        {flatType === 'Diğer' && (
                            <div className="mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                                <label className="block text-sm font-bold text-gray-700 mb-2">Lütfen Daire Tipini Belirtiniz (Örn: 5+1, Dubleks vb.)</label>
                                <input
                                    type="text"
                                    value={otherFlatDetails}
                                    onChange={(e) => setOtherFlatDetails(e.target.value)}
                                    placeholder="Daire tipini buraya yazınız..."
                                    className="w-full p-4 rounded-xl border border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 bg-orange-50/50 text-gray-900 font-medium"
                                    autoFocus
                                />
                            </div>
                        )}
                    </div>

                    {/* Step 2: Size Slider */}
                    <div className="mb-10">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-gray-900 text-lg">2. Tahmini Metrekare</h3>
                            <div className="bg-orange-50 text-primary px-4 py-1.5 rounded-lg font-bold">
                                {size} m²
                            </div>
                        </div>

                        <div className="relative pt-2 pb-6">
                            <input
                                type="range"
                                min="50"
                                max="500"
                                step="5"
                                value={size}
                                onChange={(e) => setSize(parseInt(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                            />
                            <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
                                <span>50 m²</span>
                                <span>500 m²</span>
                            </div>
                        </div>
                    </div>

                    {/* Step 3: Construction Status */}
                    <div className="mb-10">
                        <h3 className="font-bold text-gray-900 mb-4 text-lg">3. İnşaat Durumu</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Option 1 */}
                            <button
                                onClick={() => setStatus('new')}
                                className={`relative flex items-center gap-4 p-5 rounded-xl border-2 transition-all duration-200 text-left
                    ${status === 'new'
                                        ? 'border-primary bg-orange-50'
                                        : 'border-slate-100 hover:border-primary/50 hover:bg-slate-50'
                                    }`}
                            >
                                <div className={`p-3 rounded-full ${status === 'new' ? 'bg-white' : 'bg-slate-100 text-slate-500'}`}>
                                    <Hammer className={`w-6 h-6 ${status === 'new' ? 'text-primary' : ''}`} />
                                </div>
                                <div>
                                    <div className={`font-bold ${status === 'new' ? 'text-primary' : 'text-gray-900'}`}>Yeni Bitti</div>
                                    <div className="text-xs text-gray-500">Kaba + İnce Temizlik</div>
                                </div>
                                {status === 'new' && (
                                    <CheckCircle2 className="absolute top-4 right-4 w-5 h-5 text-primary" />
                                )}
                            </button>

                            {/* Option 2 */}
                            <button
                                onClick={() => setStatus('renovation')}
                                className={`relative flex items-center gap-4 p-5 rounded-xl border-2 transition-all duration-200 text-left
                    ${status === 'renovation'
                                        ? 'border-primary bg-orange-50'
                                        : 'border-slate-100 hover:border-primary/50 hover:bg-slate-50'
                                    }`}
                            >
                                <div className={`p-3 rounded-full ${status === 'renovation' ? 'bg-white' : 'bg-slate-100 text-slate-500'}`}>
                                    <PaintRoller className={`w-6 h-6 ${status === 'renovation' ? 'text-primary' : ''}`} />
                                </div>
                                <div>
                                    <div className={`font-bold ${status === 'renovation' ? 'text-primary' : 'text-gray-900'}`}>Tadilat Sonrası</div>
                                    <div className="text-xs text-gray-500">Boya & Badana Sonrası</div>
                                </div>
                                {status === 'renovation' && (
                                    <CheckCircle2 className="absolute top-4 right-4 w-5 h-5 text-primary" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Step 4: Phone and Submit */}
                    <div className="border-t border-slate-100 pt-8 mt-2">
                        <label className="block text-gray-900 font-bold mb-3 text-sm">Telefon Numaranız</label>
                        <div className="relative mb-6">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                <Smartphone className="w-5 h-5" />
                            </div>
                            <input
                                type="tel"
                                placeholder="05XX XXX XX XX"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium text-gray-900 bg-slate-50"
                            />
                        </div>

                        <button
                            onClick={handleWhatsAppRedirect}
                            className="w-full bg-gradient-to-r from-primary to-orange-500 hover:from-orange-600 hover:to-orange-700 text-white p-4 rounded-xl font-bold text-lg shadow-lg shadow-orange-200 transition-all duration-300 flex items-center justify-center gap-2 group hover:shadow-xl hover:-translate-y-1"
                        >
                            <MessageCircle className="w-6 h-6 fill-white" />
                            TEKLİFİ WHATSAPP'TAN GÖNDER
                        </button>
                        <p className="text-center text-xs text-gray-400 mt-4">
                            Kişisel verileriniz KVKK kapsamında korunmaktadır.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default QuoteForm;
