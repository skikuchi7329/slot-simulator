'use client';

import styled from 'styled-components';

const StyledMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 16px;

  .styled-table {
    border-collapse: collapse;
    font-size: 0.95em;
    min-width: 320px;
    background-color: #1a1a1a;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  }

  .styled-table caption {
    padding: 16px;
    font-size: 1.1em;
    font-weight: bold;
    color: #00ff80;
    background-color: #222;
    text-align: left;
    border-bottom: 1px solid #333;
  }

  .styled-table th {
    padding: 12px 16px;
    background-color: #252525;
    color: #aaa;
    font-weight: normal;
    text-align: left;
    width: 120px;
    border-bottom: 1px solid #333;
  }

  .styled-table td {
    padding: 12px 16px;
    border-bottom: 1px solid #333;
  }

  .styled-table tbody tr:last-child th,
  .styled-table tbody tr:last-child td {
    border-bottom: none;
  }

  .styled-table select,
  .styled-table input {
    width: 100%;
    padding: 10px 12px;
    font-size: 1em;
    background-color: #2a2a2a;
    border: 1px solid #444;
    border-radius: 4px;
    color: #fff;
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .styled-table select:focus,
  .styled-table input:focus {
    border-color: #00ff80;
    box-shadow: 0 0 0 2px rgba(0, 255, 128, 0.2);
  }

  .styled-table select {
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23888' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 12px center;
    padding-right: 36px;
  }

  .styled-table select option {
    background-color: #2a2a2a;
    color: #fff;
  }

  .styled-table input[type='number'] {
    -moz-appearance: textfield;
  }

  .styled-table input[type='number']::-webkit-outer-spin-button,
  .styled-table input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media screen and (max-width: 480px) {
    .styled-table {
      min-width: 280px;
    }
    .styled-table th {
      width: 100px;
    }
  }
`;

export default StyledMenu;
