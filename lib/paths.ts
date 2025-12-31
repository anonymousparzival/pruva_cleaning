/**
 * BasePath'i dinamik olarak döndürür
 * Production'da /pruva_cleaning, development'ta boş
 */
export function getBasePath(): string {
  // Client-side: window.location.pathname veya hostname'e göre kontrol et
  if (typeof window !== 'undefined') {
    const pathname = window.location.pathname;
    const hostname = window.location.hostname;
    
    // GitHub Pages'de (github.io domain'i) veya pathname /pruva_cleaning ile başlıyorsa basePath kullan
    if (hostname.includes('github.io') || pathname.startsWith('/pruva_cleaning')) {
      return '/pruva_cleaning';
    }
    // Development'ta (localhost) boş
    return '';
  }
  // Server-side veya build zamanı: Production build'de her zaman basePath kullan
  // (GitHub Actions'da NODE_ENV=production olacak)
  return '/pruva_cleaning';
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

