import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from './theme-provider';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://barakahqalam.com'),
  title: 'Barakah Qalam | Thoughtful Islamic Art & Literature',
  description: 'Explore our collection of Islamic coloring books, calligraphy art, and educational resources. Join our community and get exclusive free content.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 font-sans dark:bg-gray-900 dark:text-gray-100 overflow-x-hidden max-w-[100vw]">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
