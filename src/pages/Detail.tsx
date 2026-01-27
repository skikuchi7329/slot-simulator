import React from "react";
import styled from "styled-components";
import Header from "../component/Header";
import Footer from "../component/Footer";

function Detail() {
  return (
    <StyledDetail>
      <Header />
      <main className="content">
        <h2>詳細</h2>
        <p>準備中です。</p>
      </main>
      <Footer />
    </StyledDetail>
  );
}

const StyledDetail = styled.div`
  .content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 40px 20px;
    min-height: 50vh;
    text-align: center;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

export default Detail;
