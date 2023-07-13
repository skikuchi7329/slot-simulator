import styled from "styled-components";

const StyledGraphs = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px; /* 各要素の間隔を指定 */
  }

  .styled-button {
    display: inline-block;
    font-size: 1em;
    padding: 10px 20px;
    margin: 10px;
    color: #ffffff;
    background: linear-gradient(to right, #726a95, #2c88d9);
    border: none;
    border-radius: 5px;
    text-decoration: none;
    transition: all 0.3s ease-out;
  }

  .styled-button:hover {
    background: linear-gradient(to right, #2c88d9, #726a95);
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }

  .styled-button:active {
    background: #2c88d9;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }

  .styled-table {
    font-family: Arial, sans-serif;
    border-collapse: collapse;
    width: 60%;
    margin: auto;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
    color: #333;
  }

  .styled-table caption {
    font-size: 1.5em;
    margin-bottom: 10px;
    text-align: left;
  }

  

  .styled-table th {
    width: 20%; /* 幅を20%に変更 */
    background-color: #333;
    color: white;
    padding: 10px;
    text-align: left;
  }

  .styled-table td {
    border: 1px solid #999;
    padding: 10px;
    text-align: center;
  }

  .styled-table tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  .styled-table:last-of-type {
    margin-bottom: 30px;
  }
`;

export default StyledGraphs;
