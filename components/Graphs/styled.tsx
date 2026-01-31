'use client';

import styled from 'styled-components';

const StyledGraphs = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    padding: 0 16px 40px;
  }

  .styled-button {
    display: inline-block;
    font-size: 1.1em;
    font-weight: bold;
    padding: 14px 48px;
    color: #121212;
    background: linear-gradient(135deg, #00ff80 0%, #00cc66 100%);
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 4px 15px rgba(0, 255, 128, 0.3);
  }

  .styled-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 255, 128, 0.4);
  }

  .styled-button:active {
    transform: translateY(0);
    box-shadow: 0 2px 10px rgba(0, 255, 128, 0.3);
  }

  .graph {
    width: 90%;
    max-width: 800px;
    height: 400px;
    background-color: #1a1a1a;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  }

  .styled-table {
    border-collapse: collapse;
    width: 90%;
    max-width: 500px;
    background-color: #1a1a1a;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  }

  .styled-table caption {
    padding: 14px 16px;
    font-size: 1.1em;
    font-weight: bold;
    color: #00ff80;
    background-color: #222;
    text-align: left;
    border-bottom: 1px solid #333;
  }

  .styled-table th {
    padding: 10px 16px;
    background-color: #252525;
    color: #aaa;
    font-weight: normal;
    text-align: left;
    width: 40%;
    border-bottom: 1px solid #333;
  }

  .styled-table td {
    padding: 10px 16px;
    text-align: right;
    color: #e0e0e0;
    border-bottom: 1px solid #333;
  }

  .styled-table thead th,
  .styled-table thead td {
    background-color: #222;
    color: #888;
    font-size: 0.85em;
    padding: 8px 16px;
  }

  .styled-table tbody tr:last-child th,
  .styled-table tbody tr:last-child td {
    border-bottom: none;
  }

  .styled-table tbody tr:hover {
    background-color: rgba(0, 255, 128, 0.05);
  }

  .error-message {
    color: #ff6b6b !important;
    background-color: rgba(255, 107, 107, 0.1);
    padding: 12px 20px;
    border-radius: 6px;
    border: 1px solid rgba(255, 107, 107, 0.3);
  }

  @media screen and (max-width: 600px) {
    .graph {
      width: 95%;
      height: 300px;
      padding: 12px;
    }
    .styled-table {
      width: 95%;
    }
  }
`;

export default StyledGraphs;
