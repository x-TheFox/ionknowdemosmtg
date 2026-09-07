import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { SmoothScroll } from '@/components/ui/SmoothScroll';
import { Preloader } from '@/components/Preloader';
import { CustomCursor } from '@/components/ui/CustomCursor';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Meridian Estates | Luxury Custom Home Builder',
  description: 'Building lasting legacies through exceptional architecture and masterful craftsmanship. Custom luxury residences designed for those who demand the extraordinary.',
  keywords: ['luxury homes', 'custom home builder', 'architectural design', 'estate construction'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="bg-[#0A0A0A] text-[#F5F0EB] overflow-x-hidden">
        <SmoothScroll>
          <Preloader />
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
