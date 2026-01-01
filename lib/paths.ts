/**
 * BasePath'i dinamik olarak döndürür
 * Production'da /pruva_cleaning, development'ta boş
 * Server ve client'ta aynı değeri döndürmeli (hydration mismatch'i önlemek için)
 */
export function getBasePath(): string {
  // Vercel'de basePath kullanma
  if (typeof process !== 'undefined' && process.env.VERCEL) {
    return '';
  }

  // Client-side'da önce hostname kontrolü yap (GitHub Pages için)
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    const pathname = window.location.pathname;
    
    // Vercel domain'inde basePath kullanma
    if (hostname.includes('vercel.app') || hostname.includes('xmaxtemizlik.com')) {
      return '';
    }
    
    // GitHub Pages'de (github.io domain'i) veya pathname /pruva_cleaning ile başlıyorsa basePath kullan
    if (hostname.includes('github.io') || pathname.startsWith('/pruva_cleaning')) {
      return '/pruva_cleaning';
    }
    
    // Development'ta (localhost) boş
    return '';
  }
  
  // Server-side: NODE_ENV kontrolü
  const isProduction = typeof process !== 'undefined' && process.env.NODE_ENV === 'production';
  
  if (isProduction && !process.env.VERCEL) {
    // Production build'de (GitHub Pages için) basePath kullan
    return '/pruva_cleaning';
  }
  
  // Server-side development veya Vercel'de boş
  return '';
}

/**
 * Görsel path'ini basePath ile birleştirir
 */
export function getImagePath(path: string): string {
  const basePath = getBasePath();
  // Path zaten / ile başlıyorsa basePath'i ekle
  if (path.startsWith('/')) {
    return `${basePath}${path}`;
  }
  return `${basePath}/${path}`;
}

