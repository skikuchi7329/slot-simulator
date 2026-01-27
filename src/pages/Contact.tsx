import React from "react";
import styled from "styled-components";
import Header from "../component/Header";
import Footer from "../component/Footer";

function Contact() {
  return (
    <StyledContact>
      <Header />
      <main className="content">
        <h2>お問合せ</h2>
        <p>準備中です。</p>
      </main>
      <Footer />
    </StyledContact>
  );
}

const StyledContact = styled.div`
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

export default Contact;
