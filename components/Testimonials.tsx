'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  project: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Mehmet Yılmaz',
    location: 'Efeler, Aydın',
    rating: 5,
    comment: 'Yeni evimizde kaba inşaat temizliği yaptırdık. Gerçekten çok profesyonel bir ekip. Her köşeyi detaylıca temizlediler. Özellikle cam temizliği mükemmeldi. Kesinlikle tavsiye ederim.',
    project: '3+1 Daire - Kaba İnşaat Temizliği'
  },
  {
    id: 2,
    name: 'Ayşe Demir',
    location: 'Kuşadası, Aydın',
    rating: 5,
    comment: 'Tadilat sonrası evimiz çok kötü durumdaydı. XMAX Temizlik ekibi geldi ve evimizi pırıl pırıl yaptı. Zemin cilalama işlemi harika oldu. Çok memnun kaldık, teşekkürler!',
    project: 'Villa - Tadilat Sonrası Temizlik'
  },
  {
    id: 3,
    name: 'Ali Kaya',
    location: 'Söke, Aydın',
    rating: 5,
    comment: 'İnşaat sonrası temizlik için birçok firma aradık ama XMAX Temizlik en uygun fiyatı verdi. İş kalitesi de çok yüksekti. Ekip zamanında geldi, işi zamanında bitirdi. Çok başarılılar.',
    project: '2+1 Daire - İnşaat Sonrası Temizlik'
  },
  {
    id: 4,
    name: 'Fatma Şahin',
    location: 'Didim, Aydın',
    rating: 5,
    comment: 'Yazlık evimizde kaba temizlik yaptırdık. Özellikle banyo ve mutfak temizliği çok detaylıydı. Ekip çok nazik ve dikkatliydi. Eşyalarımıza hiç zarar vermediler. Çok teşekkür ederiz.',
    project: 'Yazlık - Kaba İnşaat Temizliği'
  },
  {
    id: 5,
    name: 'Mustafa Özkan',
    location: 'Nazilli, Aydın',
    rating: 5,
    comment: 'Ofis binamızın inşaat sonrası temizliğini yaptırdık. Çok geniş bir alandı ama ekip hiç yılmadı. Her katı ayrıntılı temizlediler. Camlar özellikle çok parlak oldu. Profesyonel hizmet!',
    project: 'Ofis Binası - İnşaat Sonrası Temizlik'
  },
  {
    id: 6,
    name: 'Zeynep Arslan',
    location: 'Efeler, Aydın',
    rating: 5,
    comment: 'Yeni aldığımız dairede hem kaba hem ince temizlik yaptırdık. İşçilik kalitesi çok yüksek. Parke zeminlerimiz cilalandı, camlar pırıl pırıl oldu. Fiyat performans açısından çok iyi. Kesinlikle tekrar tercih ederiz.',
    project: '4+1 Daire - Kaba + İnce Temizlik'
  },
  {
    id: 7,
    name: 'Hasan Çelik',
    location: 'İncirliova, Aydın',
    rating: 5,
    comment: 'Tadilat sonrası evimiz çok tozlu ve kirliydi. XMAX Temizlik ekibi geldi ve evimizi baştan sona temizledi. Özellikle derz temizliği ve cam temizliği mükemmeldi. Çok memnun kaldık, herkese tavsiye ederim.',
    project: '3+1 Daire - Tadilat Sonrası Temizlik'
  },
  {
    id: 8,
    name: 'Elif Yıldız',
    location: 'Germencik, Aydın',
    rating: 5,
    comment: 'Villamızın inşaat sonrası temizliğini yaptırdık. Çok büyük bir alandı ama ekip hiç yılmadı. Her odayı, her köşeyi detaylıca temizlediler. Zemin cilalama işlemi harika oldu. Çok profesyonel ve güvenilir bir firma.',
    project: 'Villa - İnşaat Sonrası Temizlik'
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? 'fill-yellow-400 text-yellow-400'
              : 'fill-gray-300 text-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-stone-50" id="referanslar">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 md:mb-4 px-4">
            Müşteri <span className="text-primary">Referansları</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Binlerce memnun müşterimizin deneyimlerini okuyun. XMAX Temizlik olarak 
            her projede %100 müşteri memnuniyeti hedefliyoruz.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 flex flex-col"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-primary/30" />
              </div>

              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Comment */}
              <p className="text-gray-700 mb-6 leading-relaxed flex-grow text-sm">
                "{testimonial.comment}"
              </p>

              {/* Project Type */}
              <div className="mb-4">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {testimonial.project}
                </span>
              </div>

              {/* Author */}
              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 text-center px-4">
          <p className="text-base sm:text-lg text-gray-600 mb-4 md:mb-6">
            Siz de memnun müşterilerimizden biri olmak ister misiniz?
          </p>
          <a
            href="#quote-form"
            className="inline-block bg-primary hover:bg-orange-600 text-white px-6 py-3 md:px-8 md:py-3.5 rounded-lg font-bold shadow-lg shadow-orange-200 transition-all hover:-translate-y-1 text-sm sm:text-base min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Fiyat teklifi almak için formu aç"
          >
            Hemen Fiyat Teklifi Alın
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

