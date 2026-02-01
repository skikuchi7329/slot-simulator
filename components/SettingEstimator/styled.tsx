'use client';

import styled from 'styled-components';

const StyledEstimator = styled.div`
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px 16px 40px;
  }

  h1 {
    text-align: center;
    color: #d4af37;
    font-size: 1.8em;
    margin-bottom: 8px;
  }

  .description {
    text-align: center;
    color: #666;
    margin-bottom: 24px;
  }

  .input-section {
    background-color: #fff;
    border-radius: 8px;
    padding: 24px;
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    border: 1px solid #e0e0e0;
  }

  .input-group {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .input-group label {
    width: 100px;
    color: #555;
    font-size: 0.95em;
  }

  .input-group input,
  .input-group select {
    flex: 1;
    padding: 10px 12px;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 6px;
    background-color: #fff;
    color: #333;
    transition: border-color 0.2s;
  }

  .input-group input:focus,
  .input-group select:focus {
    outline: none;
    border-color: #d4af37;
  }

  .estimate-button {
    display: block;
    width: 100%;
    font-size: 1.1em;
    font-weight: bold;
    padding: 14px;
    color: #fff;
    background: linear-gradient(135deg, #ff9800 0%, #f57c00 100%);
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 4px 15px rgba(255, 152, 0, 0.3);
    margin-top: 8px;
  }

  .estimate-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 152, 0, 0.4);
  }

  .results-section {
    margin-bottom: 24px;
  }

  .results-table {
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 20px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    border: 1px solid #e0e0e0;
  }

  .results-table caption {
    padding: 14px 16px;
    font-size: 1.1em;
    font-weight: bold;
    color: #ff9800;
    background-color: #fafafa;
    text-align: left;
    border-bottom: 1px solid #e0e0e0;
  }

  .results-table th,
  .results-table td {
    padding: 12px 16px;
    text-align: left;
    border-bottom: 1px solid #e0e0e0;
  }

  .results-table thead th {
    background-color: #f5f5f5;
    color: #666;
    font-weight: normal;
    font-size: 0.9em;
  }

  .results-table tbody tr:last-child td {
    border-bottom: none;
  }

  .results-table tbody tr:hover {
    background-color: rgba(255, 152, 0, 0.05);
  }

  .results-table .rank-1 {
    background-color: rgba(255, 152, 0, 0.15);
  }

  .results-table .rank-1 .setting-cell {
    color: #e65100;
    font-weight: bold;
  }

  .results-table .rank-2 {
    background-color: rgba(255, 152, 0, 0.08);
  }

  .setting-cell {
    color: #333;
    font-weight: 500;
  }

  .probability-cell {
    width: 40%;
  }

  .probability-bar-container {
    position: relative;
    height: 24px;
    background-color: #e0e0e0;
    border-radius: 4px;
    overflow: hidden;
  }

  .probability-bar {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: linear-gradient(90deg, #ff9800, #f57c00);
    border-radius: 4px;
    transition: width 0.3s ease;
  }

  .probability-value {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    color: #333;
    text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
    font-size: 0.9em;
  }

  .actual-data {
    background-color: #fff;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    border: 1px solid #e0e0e0;
  }

  .actual-data h3 {
    color: #2e7d32;
    font-size: 1em;
    margin-bottom: 12px;
  }

  .data-table {
    width: 100%;
    border-collapse: collapse;
  }

  .data-table th,
  .data-table td {
    padding: 8px 12px;
    border-bottom: 1px solid #e0e0e0;
  }

  .data-table th {
    text-align: left;
    color: #666;
    font-weight: normal;
    width: 40%;
  }

  .data-table td {
    text-align: right;
    color: #333;
  }

  .data-table tr:last-child th,
  .data-table tr:last-child td {
    border-bottom: none;
  }

  .reference-section {
    background-color: #fff;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    border: 1px solid #e0e0e0;
  }

  .reference-section h3 {
    color: #5a9fd4;
    font-size: 1em;
    margin-bottom: 12px;
  }

  .reference-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.9em;
  }

  .reference-table th,
  .reference-table td {
    padding: 8px 10px;
    text-align: center;
    border-bottom: 1px solid #e0e0e0;
  }

  .reference-table thead th {
    color: #666;
    font-weight: normal;
    background-color: #f5f5f5;
  }

  .reference-table tbody td {
    color: #444;
  }

  .reference-table tbody tr:last-child td {
    border-bottom: none;
  }

  .reference-table tbody tr:hover {
    background-color: rgba(90, 159, 212, 0.05);
  }

  @media screen and (max-width: 600px) {
    .input-group {
      flex-direction: column;
      align-items: flex-start;
    }

    .input-group label {
      width: auto;
      margin-bottom: 4px;
    }

    .input-group input,
    .input-group select {
      width: 100%;
    }

    .results-table th,
    .results-table td {
      padding: 10px 8px;
      font-size: 0.9em;
    }

    .reference-table {
      font-size: 0.8em;
    }

    .reference-table th,
    .reference-table td {
      padding: 6px 4px;
    }
  }
`;

export default StyledEstimator;
