import React from "react";
import { Link } from "react-router-dom";
import StyledFooter from "./index.styled";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <footer>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/about">開発者について</Link>
              </li>
              <li>
                <Link to="/detail">詳細</Link>
              </li>
              <li>
                <Link to="/contact">お問合せ</Link>
              </li>
            </ul>
          </nav>
        </div>
        <p>&copy; {currentYear} Shopeco</p>
      </footer>
    </StyledFooter>
  );
}

export default Footer;
