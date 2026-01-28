'use client';

import StyledMenu from './styled';

type Props = {
  game: number;
  setGame: (value: number) => void;
};

export default function Menu({ game, setGame }: Props) {
  const handleGameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGame(Number(e.target.value));
  };

  return (
    <StyledMenu>
      <table className="styled-table">
        <caption>条件設定</caption>
        <tbody>
          <tr>
            <th>機種</th>
            <td>
              <select id="machine-type" defaultValue="s-Im">
                <option value="s-Im">Sアイムジャグラー</option>
                <option disabled value="my5">
                  マイジャグラーV
                </option>
                <option disabled value="happy">
                  ハッピージャグラー2
                </option>
                <option disabled value="funky">
                  ファンキージャグラー2
                </option>
                <option disabled value="gogo">
                  ゴーゴージャグラー3
                </option>
              </select>
            </td>
          </tr>
          <tr>
            <th>設定</th>
            <td>
              <select id="setting-level" defaultValue="6">
                <option disabled value="1">
                  1
                </option>
                <option disabled value="2">
                  2
                </option>
                <option disabled value="3">
                  3
                </option>
                <option disabled value="4">
                  4
                </option>
                <option disabled value="5">
                  5
                </option>
                <option value="6">6</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>回転数</th>
            <td>
              <input
                type="number"
                id="game"
                value={game}
                onChange={handleGameChange}
                min={1}
                max={100000}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </StyledMenu>
  );
}
