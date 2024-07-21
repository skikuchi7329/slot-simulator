import React from "react";
import styled from "styled-components";
import Header from "../component/Header/index";
import Footer from "../component/Footer/index";

function Detail() {
  return (
    <StyledDetail>
      <Header />
      <Footer />
    </StyledDetail>
  );
}

const StyledDetail = styled.div`
  /* .wrapper {
    margin: 0;
    width: 100%;
    height: 100%;
  }

  .header {
    margin: 0 auto;
    
    h2 {
      text-align: center;
    }
  } */
`;

export default Detail;
