import type { Metadata } from 'next';
import StyledComponentsRegistry from '@/lib/registry';
import './globals.css';

export const metadata: Metadata = {
  title: 'スロシミュ',
  description: 'ジャグラーのシミュレーションができます',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
