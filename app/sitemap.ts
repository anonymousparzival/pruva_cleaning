import { Metadata, Viewport } from 'next';

export const dynamic = 'force-static';

const baseUrl = 'https://karabogatemizlik.com'; // Change to actual domain in production

export default function sitemap() {
    const routes = [
        '',
        '#services',
        '#before-after',
        '#quote-form',
        '#contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }));

    return [...routes];
}
