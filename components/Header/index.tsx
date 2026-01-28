'use client';

import Link from 'next/link';
import StyledHeader from './styled';

export default function Header() {
  return (
    <StyledHeader>
      <header>
        <div className="title">
          <h1>スロシミュ</h1>
          <p>ジャグラーのシミュレーションができます</p>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/about">開発者について</Link>
            </li>
            <li>
              <Link href="/detail">詳細</Link>
            </li>
            <li>
              <Link href="/contact">お問合せ</Link>
            </li>
          </ul>
        </div>
      </header>
    </StyledHeader>
  );
}
