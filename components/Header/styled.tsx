'use client';

import styled from 'styled-components';

const StyledHeader = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
    background: linear-gradient(180deg, #1f1f1f 0%, #171717 100%);
    border-bottom: 1px solid #2a2a2a;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }

  .title h1 {
    margin: 0;
    font-size: 1.5em;
    font-weight: bold;
    color: #00ff80;
    text-shadow: 0 0 10px rgba(0, 255, 128, 0.3);
  }

  .title p {
    margin: 4px 0 0 0;
    font-size: 0.8em;
    color: #888;
  }

  .menu ul {
    display: flex;
    list-style: none;
    padding: 0;
    gap: 8px;
  }

  .menu ul li a {
    display: block;
    padding: 8px 16px;
    text-decoration: none;
    color: #aaa;
    font-size: 0.9em;
    border-radius: 4px;
    transition: all 0.2s ease;
  }

  .menu ul li a:hover {
    color: #00ff80;
    background-color: rgba(0, 255, 128, 0.1);
  }

  @media screen and (max-width: 768px) {
    header {
      padding: 12px 16px;
    }
    header .title p,
    .menu {
      display: none;
    }
    .title {
      margin: 0 auto;
    }
  }
`;

export default StyledHeader;
