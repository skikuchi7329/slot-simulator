import React from "react";
import styled from "styled-components";
import Header from "../component/Header/index"

function Detail() {
  return (
    <StyledDetail>
        {/* <Header /> */}
      {/* <div className="wrapper">
        <div className="header">
          <h2>条件</h2>
        </div>
      </div> */}
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
`

export default Detail;
