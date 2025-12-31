import { Trash2, Sparkles, PaintBucket, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

export const servicesData = {
    'kaba-insaat-temizligi': {
        title: 'Kaba İnşaat Temizliği',
        shortDesc: 'Moloz atımı, kaba tozun detaylı temizlik yöntemleriyle çekilmesi ve alanın çalışmaya hazır hale getirilmesi.',
        fullDesc: 'İnşaat veya tadilat sonrası geriye kalan molozlar, harç kalıntıları, toz ve kaba atıklar profesyonel ekipmanlarımızla titizlikle temizlenir. Bu süreç, ince temizliğe geçişin en önemli aşamasıdır ve yüzeylere zarar vermeden yapılır.',
        icon: Trash2,
        image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop',
        steps: [
            'Kaba atıkların ve molozların toplanarak atılması.',
            'Yüzeylerdeki harç, alçı ve boya kalıntılarının kazınması.',
            'Detaylı vakum ve süpürme işlemleri ile kaba tozun temizlenmesi.',
            'Cam ve çerçevelerin koruyucu bantlarının sökülmesi.',
            'Zeminlerin ince temizliğe hazır hale getirilmesi.'
        ],
        features: [
            'Detaylı Temizlik Süreci',
            'Yüzey Koruyucu Kazıma',
            'Hızlı ve Etkili Çözüm',
            'İş Güvenliği Standartlarına Uygunluk'
        ]
    },
    'ince-detay-ve-cam-temizligi': {
        title: 'İnce Detay & Cam Temizliği',
        shortDesc: 'Çizmeden boya/harç çıkarma, cam yüzeylerde özel kazıma teknikleri, derz arası ve buharlı tam dezenfeksiyon.',
        fullDesc: 'Mekanınızın gerçek ışıltısını ortaya çıkaran aşamadır. Priz içlerinden petek aralarına, cam çerçevelerinden dolap içlerine kadar en ince detaylar titizlikle temizlenir. Özel kimyasallar ve buharlı temizlik ile hijyen sağlanır.',
        icon: Sparkles,
        image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=2070&auto=format&fit=crop',
        steps: [
            'Camlardaki bant, silikon ve boya izlerinin özel jiletlerle temizlenmesi.',
            'Pencere doğramaları ve mermerlerin derinlemesine temizliği.',
            'Mutfak ve banyo dolaplarının iç-dış silinmesi.',
            'Buharlı makine ile ıslak zeminlerin (banyo, wc) dezenfekte edilmesi.',
            'Kapı, priz, petek ve süpürgeliklerin detaylı temizliği.'
        ],
        features: [
            'Buharlı Dezenfeksiyon',
            'Leke Çıkarma Uzmanlığı',
            'Çizilmez Cam Temizliği',
            'Antialerjik Temizlik Ürünleri'
        ]
    },
    'zemin-ve-parke-bakimi': {
        title: 'Zemin ve Parke Bakımı',
        shortDesc: 'Parke, mermer ve fayanslardaki inatçı inşaat kalıntılarının yüzeye zarar vermeyen özel kimyasallarla temizliği.',
        fullDesc: 'Farklı zemin türleri (laminat, mermer, granit, seramik) için özel temizlik yöntemleri ve kimyasallar kullanıyoruz. İnşaat sonrası oluşan matlık, boya damlaları ve derz kalıntıları yüzeye zarar verilmeden giderilir.',
        icon: PaintBucket,
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop',
        steps: [
            'Zemin türünün (ahşap, taş, seramik) analiz edilmesi.',
            'Yüzeylerdeki boya damlaları ve harç kalıntılarının özel kazıma teknikleriyle temizlenmesi.',
            'Derz aralarındaki inşaat kalıntılarının ve tozun detaylı temizliği.',
            'Zemin yüzeylerinin nemli bez ve uygun temizlik malzemeleriyle silinmesi.',
            'Son olarak parlatma ve koruyucu bakım yapılması.'
        ],
        features: [
            'Yüzey Koruyucu Temizlik',
            'Özel Kazıma Teknikleri',
            'Parlaklık ve Koruma',
            'Derinlemesine Derz Temizliği'
        ]
    }
};
