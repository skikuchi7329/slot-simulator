import React from "react";
import StyledFooter from "./index.styled";

function Footer() {
  return (
    <StyledFooter>
      <footer>
        <div>
          <nav>
            <ul>
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/about">開発者について</a>
              </li>
              <li>
                <a href="/detail">詳細</a>
              </li>
              <li>
                <a href="/contact">お問合せ</a>
              </li>
            </ul>
          </nav>
        </div>
        <p>&copy; 2023/06 Shopeco</p>
      </footer>
    </StyledFooter>
  );
}

export default Footer;
