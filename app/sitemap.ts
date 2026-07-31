import { MetadataRoute } from 'next';
import { programsData } from '@/data/programsData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bilaalhealth.edu.so';

  const staticRoutes = [
    '',
    '/about',
    '/programs',
    '/admissions',
    '/apply',
    '/gallery',
    '/news',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const programRoutes = programsData.map((prog) => ({
    url: `${baseUrl}/programs/${prog.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...programRoutes];
}
