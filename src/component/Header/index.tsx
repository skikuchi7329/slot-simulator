import React from "react";
import StyldHeader from "./index.styled";
import { Routes, Route, Link } from 'react-router-dom';


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
    </StyldHeader>
  );
}

export default Header;
