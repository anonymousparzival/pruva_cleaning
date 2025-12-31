/**
 * BasePath'i dinamik olarak döndürür
 * Production'da /pruva_cleaning, development'ta boş
 */
export function getBasePath(): string {
  // Client-side: window.location.pathname'e göre kontrol et
  if (typeof window !== 'undefined') {
    const pathname = window.location.pathname;
    // GitHub Pages'de /pruva_cleaning ile başlıyorsa basePath kullan
    if (pathname.startsWith('/pruva_cleaning')) {
      return '/pruva_cleaning';
    }
    // Development'ta (localhost) boş
    if (pathname === '/' || !pathname.startsWith('/pruva_cleaning')) {
      return '';
    }
    return '/pruva_cleaning';
  }
  // Server-side veya build zamanı: Production build'de basePath kullan
  // Development'ta boş döndür (build zamanında NODE_ENV kontrolü yapılır)
  return process.env.NODE_ENV === 'production' ? '/pruva_cleaning' : '';
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

