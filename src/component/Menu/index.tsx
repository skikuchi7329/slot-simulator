import React, { useState } from "react";
import StyledMenu from "./index.styled";

type Props = {
  game: number;
  setGame: React.Dispatch<React.SetStateAction<number>>;
  trial: number;
  setTrial: React.Dispatch<React.SetStateAction<number>>;
}

function Menu({game, setGame, trial, setTrial}: Props) {

  const handleGameChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setGame(Number(e.target.value));
  }
  const handleTrialChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setTrial(Number(e.target.value));
  }

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
                <option  disabled value="my5">マイジャグラーV</option>
                <option  disabled value="happy">ハッピージャグラー2</option>
                <option  disabled value="funky">ファンキージャグラー2</option>
                <option  disabled value="gogo">ゴーゴージャグラー3</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>設定</th>
            <td>
              <select name="" id="">
                <option  disabled value="1">1</option>
                <option  disabled value="2">2</option>
                <option  disabled value="3">3</option>
                <option  disabled value="4">4</option>
                <option  disabled value="5">5</option>
                <option value="6" selected>6</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>回転数</th>
            <td>
              <input type="tel" id="game" value={game} onChange={handleGameChange} maxLength={7} />
            </td>
          </tr>
          {/* <tr>
            <th>試行回数</th>
            <td>
              <input type="number" id="trial" value={trial} onChange={handleTrialChange} maxLength={4} />
            </td>
          </tr> */}
        </tbody>
      </table>
    </StyledMenu>
  );
}

export default Menu;
