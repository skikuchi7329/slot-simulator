import React from "react";
import StyledMenu from "./index.styled";

function Menu() {
  return (
    <StyledMenu>
      <table className="styled-table">
        <caption>条件設定</caption>
        <tbody>
          <tr>
            <th>機種</th>
            <td>
              <select name="" id="">
                <option value="s-Im">Sアイムジャグラー</option>
                <option value="my5">マイジャグラーV</option>
                <option value="happy">ハッピージャグラー2</option>
                <option value="funky">ファンキージャグラー2</option>
                <option value="gogo">ゴーゴージャグラー3</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>設定</th>
            <td>
              <select name="" id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>回転数</th>
            <td>
              <input type="tel" id="games" value="999999" maxLength={7} />
            </td>
          </tr>
          <tr>
            <th>試行回数</th>
            <td>
              <input type="number" value="1000" maxLength={4} />
            </td>
          </tr>
        </tbody>
      </table>
    </StyledMenu>
  );
}

export default Menu;
