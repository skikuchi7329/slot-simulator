import { styled } from "styled-components";

const StyldHeader = styled.div`
  header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      background-color: #333;
      color: #fff;
  }

  .title h1 {
      margin: 0;
      font-size: 1.5em;
      font-weight: bold;
  }

  .title p {
      margin: 0;
      font-size: 0.9em;
      color: #ddd;
  }

  .menu ul {
      display: flex;
      list-style: none;
      padding: 0;
  }

  .menu ul li {
      margin-left: 20px;
  }

  .menu ul li a {
      text-decoration: none;
      color: #fff;
      font-size: 0.9em;
      transition: color 0.3s ease;
  }

  .menu ul li a:hover {
      color: #ddd;
  }

  @media screen and (max-width: 768px) {
    header .title p, .menu {
      display: none;
    }
    .title {
      margin: 0 auto;
    }
  }

`

export default StyldHeader;