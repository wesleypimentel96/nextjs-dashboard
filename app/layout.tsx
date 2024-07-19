import { hydrateRoot } from 'react-dom/client'
import '@/app/ui/global.css';
import { inter } from './ui/fonts';
import Home from './page';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={`${inter.className} antialiased`} suppressHydrationWarning={true}>{children}</body>
    </html>
  );

  
}


