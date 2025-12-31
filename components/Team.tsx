import React from 'react';
import { ShieldCheck, Clock, Smile, SearchCheck, ChevronRight } from 'lucide-react';

const Team = () => {
  return (
    <section className="py-24 bg-white" id="team">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Section: Text & Image */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">

          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Karaboğa Temizlik: <br />
              <span className="text-primary">En Güvenilir İnşaat</span> <br />
              Temizlik Ekibi
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Yılların verdiği tecrübe ve detaylara verdiğimiz önemle, yaşam alanlarınızda aradığınız hijyen ve ferahlığı sağlıyoruz. Eviniz bizim için kendi evimiz kadar değerli.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#services" className="bg-primary hover:bg-orange-600 text-white px-8 py-3.5 rounded-lg font-bold shadow-lg shadow-orange-200 transition-all hover:-translate-y-1 block text-center">
                Hizmetlerimiz
              </a>
              <a href="#contact" className="bg-orange-50 text-primary hover:bg-orange-100 px-8 py-3.5 rounded-lg font-bold transition-all block text-center">
                Bize Ulaşın
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-orange-100/50 rounded-3xl -z-10 transform rotate-3"></div>
            <img
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2070&auto=format&fit=crop"
              alt="Pristine Modern Living Space"
              className="rounded-2xl shadow-2xl w-full object-cover h-[400px]"
            />
          </div>
        </div>

        {/* Bottom Section: Values/Standards */}
        <div className="border-t border-gray-100 pt-16">
          <div className="flex items-center gap-3 mb-10">
            <div className="bg-orange-100 p-2 rounded-full">
              <ShieldCheck className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Neden Karaboğa Temizlik?</h3>
              <p className="text-sm text-gray-500">Bizi tercih etmeniz için geçerli sebeplerimiz var.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Value 1 */}
            <div className="bg-white border border-slate-100 p-6 rounded-2xl hover:shadow-lg transition-shadow hover:border-orange-100">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4 text-primary">
                <SearchCheck className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 mb-1">Detaycı Temizlik</h4>
              <p className="text-sm text-gray-500">Görünmeyen köşeler bile tertemiz.</p>
            </div>

            {/* Value 2 */}
            <div className="bg-white border border-slate-100 p-6 rounded-2xl hover:shadow-lg transition-shadow hover:border-orange-100">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4 text-primary">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 mb-1">Zamanında Teslim</h4>
              <p className="text-sm text-gray-500">Söz verdiğimiz saatte iş başı ve teslim.</p>
            </div>

            {/* Value 3 */}
            <div className="bg-white border border-slate-100 p-6 rounded-2xl hover:shadow-lg transition-shadow hover:border-orange-100">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4 text-primary">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 mb-1">Güvenilir Hizmet</h4>
              <p className="text-sm text-gray-500">Eşyalarınız ve eviniz güvence altında.</p>
            </div>

            {/* Value 4 */}
            <div className="bg-white border border-slate-100 p-6 rounded-2xl hover:shadow-lg transition-shadow hover:border-orange-100">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4 text-primary">
                <Smile className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 mb-1">%100 Memnuniyet</h4>
              <p className="text-sm text-gray-500">Beğenmediğiniz yeri tekrar temizliyoruz.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
