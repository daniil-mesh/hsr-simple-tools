import './globals.css';
import Footer from '@/layouts/footer/footer';
import Header from '@/layouts/header/header';
import Main from '@/layouts/main/main';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HSR Simple Tools',
  description: 'HSR Simple Tools',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-fill-200 text-fill-900 dark:bg-fill-800 dark:text-fill-200">
        <div className="min-h-dvh flex flex-col gap-8 lg:gap-12">
          <Header />
          <Main className="grow mx-auto">{children}</Main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
