"use client";

import styled from "styled-components";

const StyledFooter = styled.div`
  footer {
    background: linear-gradient(180deg, #f8f8f8 0%, #f0f0f0 100%);
    border-top: 1px solid #e0e0e0;
    color: #666;
    padding: 24px 0;
    text-align: center;
    font-size: 13px;
    margin-top: auto;
  }

  footer a {
    color: #555;
    text-decoration: none;
    margin: 0 12px;
    transition: color 0.2s ease;
  }

  footer a:hover {
    color: #d4af37;
  }

  footer p {
    margin-top: 16px;
    color: #888;
  }

  footer ul {
    list-style-type: none;
    padding: 0;
  }

  footer ul li {
    display: inline;
  }
`;

export default StyledFooter;
