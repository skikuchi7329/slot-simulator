import React from "react";
import StyledFooter from "./index.styled";


function Footer () {
  return (
    <StyledFooter>
      <footer>
        <div>
          <nav>
            <ul>
              <li>
                <a href="">開発者について</a>
              </li>
              <li>
                <a href="">詳細</a>
              </li>
              <li>
                <a href="">お知らせ</a>
              </li>
            </ul>
          </nav>
        </div>
        <p>&copy; 2023/06 Shopeco</p>
      </footer>
    </StyledFooter>
  )
}

export default Footer;