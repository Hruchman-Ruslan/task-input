import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Custom Input',
  description:
    'This project was created as a test assignment. The goal is to create a universal, customizable input component.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='bg-black text-white'>
      <body className={`${inter.className} container`}>{children}</body>
    </html>
  );
}
