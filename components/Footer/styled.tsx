'use client';

import styled from 'styled-components';

const StyledFooter = styled.div`
  footer {
    background: linear-gradient(180deg, #171717 0%, #121212 100%);
    border-top: 1px solid #2a2a2a;
    color: #888;
    padding: 24px 0;
    text-align: center;
    font-size: 13px;
    margin-top: auto;
  }

  footer a {
    color: #aaa;
    text-decoration: none;
    margin: 0 12px;
    transition: color 0.2s ease;
  }

  footer a:hover {
    color: #00ff80;
  }

  footer p {
    margin-top: 16px;
    color: #666;
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
