import React from "react";
import Header from "../component/Header/index";
import Footer from "../component/Footer";
import styled from "styled-components";
import data from "../../public/data.json";

function About() {
  return (
    <StyledAbout>
      <Header />
      <div className="wrapper">
        <div className="profile-container">
          <div className="profile-title">
            <h3>プロフィール</h3>
          </div>
          <div className="profile-content">
            <table>
              <tbody>
                <tr>
                  <th>名前</th>
                  <td>しょぺこ</td>
                </tr>
                <tr>
                  <th>スロ歴</th>
                  <td>兼業7年、専業2年</td>
                </tr>
                <tr>
                  <th>好きな機種</th>
                  <td>バジ絆、ギアスR2、サラ番、沖ドキ、北斗etc</td>
                </tr>
                <tr>
                  <th>趣味</th>
                  <td>ネトゲ、麻雀、アニメ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="profile-container">
          <div className="profile-title">
            <h3>開発者について</h3>
          </div>
          <div className="profile-content">
            <p>
              はじめまして、しょぺこと申します。本業はエンジニアをしています（駆け出し）。大学の数学科に入るくらいには数学好きです。
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </StyledAbout>
  );
}

const StyledAbout = styled.div`
  .wrapper {
    max-width: 1400px;
    margin: 0 auto;
  }

  .profile-container {
    margin: 20px 20px 50px;
  }

  .profile-title {
    font-size: 24px;
    text-align: center;
  }

  .profile-content {
    font-size: 18px;
    text-align: center;
  }

  table {
    margin: 0 auto;

    th {
      float: left;
    }

    td {
      width: 60%;
    }
  }
`;

export default About;
