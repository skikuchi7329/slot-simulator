"use client";

import styled from "styled-components";

const StyledGraphs = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    padding: 0 16px 40px;
  }

  .button-group {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .styled-button {
    display: inline-block;
    font-size: 1.1em;
    font-weight: bold;
    padding: 14px 32px;
    color: #fff;
    background: linear-gradient(135deg, #d4af37 0%, #b8972e 100%);
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
  }

  .styled-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(212, 175, 55, 0.4);
  }

  .styled-button:active {
    transform: translateY(0);
    box-shadow: 0 2px 10px rgba(212, 175, 55, 0.3);
  }

  .styled-button.multi {
    background: linear-gradient(135deg, #5a9fd4 0%, #4a8bc4 100%);
    box-shadow: 0 4px 15px rgba(90, 159, 212, 0.3);
  }

  .styled-button.multi:hover {
    box-shadow: 0 6px 20px rgba(90, 159, 212, 0.4);
  }

  .styled-button.multi:active {
    box-shadow: 0 2px 10px rgba(90, 159, 212, 0.3);
  }

  .graph {
    width: 90%;
    max-width: 800px;
    height: 400px;
    background-color: #fff;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    border: 1px solid #e0e0e0;
  }

  .styled-table {
    border-collapse: collapse;
    width: 90%;
    max-width: 500px;
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    border: 1px solid #e0e0e0;
  }

  .styled-table caption {
    padding: 14px 16px;
    font-size: 1.1em;
    font-weight: bold;
    color: #d4af37;
    background-color: #fafafa;
    text-align: left;
    border-bottom: 1px solid #e0e0e0;
  }

  .styled-table th {
    padding: 10px 16px;
    background-color: #f5f5f5;
    color: #666;
    font-weight: normal;
    text-align: left;
    width: 40%;
    border-bottom: 1px solid #e0e0e0;
  }

  .styled-table td {
    padding: 10px 16px;
    text-align: right;
    color: #333;
    border-bottom: 1px solid #e0e0e0;
  }

  .styled-table thead th,
  .styled-table thead td {
    background-color: #fafafa;
    color: #666;
    font-size: 0.85em;
    padding: 8px 16px;
  }

  .styled-table tbody tr:last-child th,
  .styled-table tbody tr:last-child td {
    border-bottom: none;
  }

  .styled-table tbody tr:hover {
    background-color: rgba(212, 175, 55, 0.05);
  }

  .stats-table {
    border: 2px solid #5a9fd4;
  }

  .stats-table caption {
    color: #5a9fd4;
  }

  .positive {
    color: #2e7d32 !important;
  }

  .negative {
    color: #c62828 !important;
  }

  .error-message {
    color: #c62828 !important;
    background-color: rgba(198, 40, 40, 0.1);
    padding: 12px 20px;
    border-radius: 6px;
    border: 1px solid rgba(198, 40, 40, 0.3);
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
