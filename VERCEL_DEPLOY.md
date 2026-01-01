# Vercel'de Deploy Etme Rehberi

## 1. Vercel Hesabı Oluşturma ve Projeyi İmport Etme

### Adım 1: Vercel Hesabı
1. [vercel.com](https://vercel.com) adresine gidin
2. "Sign Up" butonuna tıklayın
3. GitHub hesabınızla giriş yapın (önerilir)

### Adım 2: Projeyi İmport Etme
1. Vercel dashboard'una gidin
2. "Add New..." → "Project" seçin
3. GitHub repository'nizi seçin: `anonymousparzival/pruva_cleaning`
4. "Import" butonuna tıklayın

### Adım 3: Build Ayarları
Vercel otomatik olarak Next.js projelerini algılar. Ayarlar:
- **Framework Preset:** Next.js
- **Root Directory:** `aydin-temizlik` (eğer proje alt klasördeyse)
- **Build Command:** `npm run build` (otomatik)
- **Output Directory:** `.next` (otomatik)
- **Install Command:** `npm install` (otomatik)

**ÖNEMLİ:** Eğer proje `aydin-temizlik` klasöründeyse:
- Root Directory: `aydin-temizlik` olarak ayarlayın

## 2. Domain Yapılandırması (Turhost)

### Adım 1: Vercel'de Domain Ekleme
1. Vercel dashboard'unda projenize gidin
2. "Settings" → "Domains" sekmesine gidin
3. "Add Domain" butonuna tıklayın
4. `xmaxtemizlik.com` domain'ini girin
5. Vercel size DNS kayıtlarını gösterecek

### Adım 2: Turhost'ta DNS Ayarları
Turhost kontrol panelinizde şu DNS kayıtlarını ekleyin:

#### A Record (Ana Domain)
- **Type:** A
- **Name:** @ (veya boş)
- **Value:** `76.76.21.21` (Vercel'in IP adresi - Vercel dashboard'unda gösterilecek)
- **TTL:** 3600

#### CNAME Record (www)
- **Type:** CNAME
- **Name:** www
- **Value:** `cname.vercel-dns.com` (Vercel dashboard'unda gösterilecek)
- **TTL:** 3600

**Alternatif:** Vercel dashboard'unda gösterilen Nameservers'ı kullanabilirsiniz:
- Turhost'ta domain'inizin Nameserver'larını Vercel'in verdiği Nameserver'larla değiştirin

### Adım 3: SSL Sertifikası
- Vercel otomatik olarak Let's Encrypt SSL sertifikası sağlar
- Domain eklendikten sonra birkaç dakika içinde SSL aktif olur

## 3. Environment Variables (Gerekirse)

Eğer environment variable kullanıyorsanız:
1. Vercel dashboard'unda projenize gidin
2. "Settings" → "Environment Variables" sekmesine gidin
3. Gerekli değişkenleri ekleyin

## 4. Build ve Deploy

### Otomatik Deploy
- GitHub'a push yaptığınızda Vercel otomatik olarak deploy eder
- Her commit için yeni bir deployment oluşturulur

### Manuel Deploy
1. Vercel dashboard'unda projenize gidin
2. "Deployments" sekmesine gidin
3. "Redeploy" butonuna tıklayın

## 5. Önemli Notlar

### BasePath Kaldırma
Vercel'de deploy ederken `next.config.ts` dosyasındaki basePath ayarı otomatik olarak devre dışı kalır çünkü `process.env.VERCEL` kontrolü eklendi.

### GitHub Pages ile Birlikte Kullanım
- GitHub Pages için basePath (`/pruva_cleaning`) korunur
- Vercel'de basePath kullanılmaz (ana domain'de yayınlanır)

### DNS Yayılımı
- DNS değişiklikleri 24-48 saat içinde yayılır
- Genellikle birkaç saat içinde aktif olur

## 6. Sorun Giderme

### Domain Bağlanmıyor
1. DNS kayıtlarının doğru olduğundan emin olun
2. [DNS Checker](https://dnschecker.org) ile DNS yayılımını kontrol edin
3. Vercel dashboard'unda domain durumunu kontrol edin

### Build Hatası
1. Vercel dashboard'unda "Deployments" sekmesine gidin
2. Başarısız deployment'ı açın
3. Build loglarını kontrol edin
4. Hataları düzeltin ve tekrar deploy edin

### Görseller Yüklenmiyor
- Vercel'de basePath kullanılmadığı için görseller `/images/...` path'inden yüklenecek
- `getBasePath` fonksiyonu Vercel'de otomatik olarak boş string döndürür

## 7. Vercel CLI ile Deploy (Opsiyonel)

```bash
# Vercel CLI kurulumu
npm i -g vercel

# Projeye gidin
cd aydin-temizlik

# Deploy edin
vercel

# Production'a deploy
vercel --prod
```

## 8. Domain Yönetimi

### Turhost'ta Yapılacaklar
1. Domain kontrol panelinize giriş yapın
2. DNS Yönetimi bölümüne gidin
3. Vercel'in verdiği DNS kayıtlarını ekleyin
4. Nameserver'ları değiştirmeyi tercih ederseniz, Vercel'in verdiği Nameserver'ları kullanın

### Vercel'de Yapılacaklar
1. Domain eklendikten sonra Vercel otomatik olarak SSL sertifikası sağlar
2. Domain durumunu "Settings" → "Domains" sekmesinden takip edebilirsiniz
3. "Valid Configuration" görünene kadar bekleyin

