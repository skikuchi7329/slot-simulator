import React from "react";
import StyldHeader from "./index.styled";

function Header() {
  return (
    <StyldHeader>
      <header>
        <div className="title">
          <h1>スロシミュ</h1>
          <p>ジャグラーのシミュレーションができます</p>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="">開発者について</a>
            </li>
            <li>
              <a href="">詳細</a>
            </li>
            <li>
              <a href="">お問合せ</a>
            </li>
          </ul>
        </div>
      </header>
    </StyldHeader>
  );
}

export default Header;
