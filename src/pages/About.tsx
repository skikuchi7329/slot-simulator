import React from 'react';
import  Header  from '../component/Header/index'
import styled from 'styled-components';
import data from '../../public/data.json'


function About() {
  return (
  <StyledAbout>
    <Header />
    <div className='wrapper'>
    <div className='profile-container'>
        <div className='profile-title'>
          <h3>
            プロフィール
          </h3>
        </div>
        <div className='profile-content'>
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
                <td>沖ドキ、北斗、ラブ嬢</td>
              </tr>
              <tr>
                <th>趣味</th>
                <td>ネトゲ、麻雀、アニメ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className='profile-container'>
        <div className='profile-title'>
          <h3>
            開発者について
          </h3>
        </div>
        <div className='profile-content'>
          <p>はじめまして、しょぺこと申します。現役の兼業エナ専です。本業はエンジニアをしています（駆け出し）。大学時代に期待値稼働にハマって、そのまま中退して専業へ。その後に、結局大学入り直して兼業してるクズです。数学科に入るくらいには数学好きです。</p>
        </div>
      </div>
    </div>
  </StyledAbout>
  )
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
