import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://portfolio.kondraten.dev';
  const languages = ['en', 'pl', 'ua'];

  const routes = languages.map((lang) => ({
    url: `${baseUrl}/${lang}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: lang === 'en' ? 1 : 0.8,
  }));

  return routes;
}
