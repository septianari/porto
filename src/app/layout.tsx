import type { ReactNode } from 'react';

import { Providers } from '@/components/providers';
import Background from '@/components/layouts/Background';
import { Inter, M_PLUS_Rounded_1c } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });
const assetPrefix = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const mPlusRounded = M_PLUS_Rounded_1c({
  subsets: ['latin'],
  weight: ['300', '700'],
  variable: '--font-mplus-rounded',
});

export const metadata: Metadata = {
  title: 'AW. Septian - Software Engineer',
  description: 'Portfolio of Septian Ari Wibowo',
  icons: {
    icon: `${assetPrefix}/favicon.ico`, // Default fallback
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${mPlusRounded.variable}`} suppressHydrationWarning>
        <Providers>
          <Background />
          {children}
        </Providers>
      </body>
    </html>
  );
}
