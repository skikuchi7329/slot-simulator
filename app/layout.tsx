import type { Metadata } from 'next';
import StyledComponentsRegistry from '@/lib/registry';
import './globals.css';

export const metadata: Metadata = {
  title: 'スロシミュ | ジャグラーシリーズ スロットシミュレーター',
  description:
    'ジャグラーシリーズ全7機種・全設定対応のスロットシミュレーター。アイムジャグラー、マイジャグラー、ファンキージャグラーなどのスランプグラフ、差枚数、機械割、ボーナス確率をシミュレーションできます。',
  keywords: [
    'ジャグラー',
    'スロット',
    'シミュレーター',
    'スランプグラフ',
    'アイムジャグラー',
    'マイジャグラー',
    'ファンキージャグラー',
    'ハッピージャグラー',
    'ゴーゴージャグラー',
    '設定判別',
    '機械割',
    'パチスロ',
  ],
  authors: [{ name: 'Shopeco' }],
  openGraph: {
    title: 'スロシミュ | ジャグラーシリーズ スロットシミュレーター',
    description:
      'ジャグラーシリーズ全7機種・全設定対応。スランプグラフや機械割をシミュレーション。',
    type: 'website',
    locale: 'ja_JP',
    siteName: 'スロシミュ',
  },
  twitter: {
    card: 'summary',
    title: 'スロシミュ | ジャグラー スロットシミュレーター',
    description:
      'ジャグラーシリーズ全7機種・全設定対応のスロットシミュレーター',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
  },
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
