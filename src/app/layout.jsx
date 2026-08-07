import './globals.css'
import { ThemeProvider } from '../context/ThemeContext'
import { PortfolioProvider } from '../context/PortfolioContext'
import { Toaster } from 'react-hot-toast'
import CustomCursor from '../components/CustomCursor'

export const metadata = {
  metadataBase: new URL('https://amitpatel.dev'),
  title: {
    default: 'Amit Patel | Full Stack Developer & AI Solutions Architect',
    template: '%s | Amit Patel',
  },
  description: 'Portfolio of Amit Patel - Senior Full Stack Developer, AI Solutions Architect, and Cloud Engineer specializing in React, Next.js, Node.js, and modern web engineering.',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  keywords: [
    'Amit Patel',
    'Amit Patel Developer',
    'Full Stack Developer India',
    'Next.js Specialist',
    'React Developer Gujarat',
    'Software Engineer',
    'AI Solutions Architect',
    'Web Developer Portfolio',
    'Node.js Developer',
    'Cloud Engineer'
  ],
  authors: [{ name: 'Amit Patel', url: 'https://github.com/Amit-Patel01' }],
  creator: 'Amit Patel',
  publisher: 'Amit Patel',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Amit Patel | Full Stack Developer & AI Solutions Architect',
    description: 'Explore projects, technical skills, and software engineering solutions by Amit Patel.',
    url: 'https://amitpatel.dev',
    siteName: 'Amit Patel Portfolio',
    images: [
      {
        url: '/assets/profile.jpeg',
        width: 800,
        height: 800,
        alt: 'Amit Patel - Full Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amit Patel | Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, and AI Solutions.',
    images: ['/assets/profile.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://amitpatel.dev',
  },
  other: {
    'geo.region': 'IN-GJ',
    'geo.placename': 'Gujarat, India',
    'geo.position': '23.0225;72.5714',
    'ICBM': '23.0225, 72.5714',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://amitpatel.dev/#person',
      name: 'Amit Patel',
      jobTitle: 'Full Stack Developer & AI Solutions Architect',
      description: 'Senior Software Engineer specializing in React, Next.js, Node.js, Cloud Services, and AI Application Development.',
      url: 'https://amitpatel.dev',
      image: 'https://amitpatel.dev/assets/profile.jpeg',
      sameAs: [
        'https://github.com/Amit-Patel01',
        'https://www.linkedin.com/in/amit-patel01/'
      ],
      knowsAbout: [
        'React',
        'Next.js',
        'Node.js',
        'JavaScript',
        'TypeScript',
        'Tailwind CSS',
        'Python',
        'AI/ML Integration',
        'Cloud Computing',
        'Web Architecture'
      ],
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'Gujarat',
        addressCountry: 'India'
      }
    },
    {
      '@type': 'WebSite',
      '@id': 'https://amitpatel.dev/#website',
      url: 'https://amitpatel.dev',
      name: 'Amit Patel Portfolio',
      description: 'Official portfolio website of Amit Patel.',
      publisher: {
        '@id': 'https://amitpatel.dev/#person'
      }
    }
  ]
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-slate-50 text-slate-900 overflow-x-hidden min-h-screen">
        <ThemeProvider>
          <PortfolioProvider>
            <CustomCursor />
            {children}
            <Toaster
              position="top-right"
              toastOptions={{
                style: {
                  background: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(6,182,212,0.2)',
                  color: '#0f172a',
                  borderRadius: '16px',
                  boxShadow: '0 8px 32px rgba(6,182,212,0.12)',
                  fontFamily: 'Inter, sans-serif',
                },
                success: {
                  iconTheme: { primary: '#06b6d4', secondary: '#fff' },
                },
                error: {
                  iconTheme: { primary: '#f43f5e', secondary: '#fff' },
                },
              }}
            />
          </PortfolioProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
