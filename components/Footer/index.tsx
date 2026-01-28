'use client';

import Link from 'next/link';
import StyledFooter from './styled';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <footer>
        <div>
          <nav>
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
          </nav>
        </div>
        <p>&copy; {currentYear} Shopeco</p>
      </footer>
    </StyledFooter>
  );
}
