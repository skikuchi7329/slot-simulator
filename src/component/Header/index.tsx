import React from "react";
import StyledHeader from "./index.styled";
import { Link } from "react-router-dom";

function Header() {
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
        </div>
      </header>
    </StyledHeader>
  );
}

export default Header;
