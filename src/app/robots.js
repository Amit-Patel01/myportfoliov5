export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin'],
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'Google-Extended', 'PerplexityBot'],
        allow: '/',
      },
    ],
    sitemap: 'https://amitpatel.dev/sitemap.xml',
  }
}
