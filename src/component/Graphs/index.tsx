import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LineController,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import Menu from "../Menu";
import StyledGraphs from "./index.styled";
import { NumberLiteralType } from "typescript";

Chart.register(LineController, LinearScale, PointElement, LineElement);

type Props = {
  game: number
  trial: number
}

function Graphs({game, trial}:Props) {
  const [totalCoins, setTotalCoins] = useState(0);
  const [results, setResults] = useState<{ x: number; y: number }[]>([]);
  const [bbCount, setBBCount] = useState(0);
  const [rbCount, setRBCount] = useState(0);
  const [cherryCount, setCherryCount] = useState(0);
  const [replayCount, setReplayCount] = useState(0);
  const [grapeCount, setGrapeCount] = useState(0);
  const [missCount, setMissCount] = useState(0);

  function fraction(numerator: number, denominator: number) {
    const g = gcd(numerator, denominator);
    numerator = numerator / g;
    denominator = denominator / g;

    if (numerator === 1) {
      return `${numerator}/${denominator.toFixed(2)}`;
    } else {
      return `1/${(denominator / numerator).toFixed(2)}`;
    }
  }

  function gcd(a: number, b: number): number {
    if (!b) {
      return a;
    }
    return gcd(b, a % b);
  }

  const random = () => {
    setTotalCoins(0);
    setResults([{ x: 0, y: 0 }]); //初期値をセット
    setTotalCoins((currentCoins) => {
      let bb = 0,
        rb = 0,
        cherry = 0,
        replay = 0,
        grape = 0,
        miss = 0;
      let newCoins = currentCoins;
      let newResults = [];
      for (let i = 0; i < game; i++) {
        newCoins -= 3;
        const rondomNum = Math.floor(Math.random() * 65536 + 1);
        if (1 <= rondomNum && 255 >= rondomNum) {
          newCoins += 252; //BB
          bb++;
        } else if (256 <= rondomNum && 511 >= rondomNum) {
          newCoins += 96; //RB
          rb++;
        } else if (512 <= rondomNum && 2592 >= rondomNum) {
          newCoins += 2; //チェリー
          cherry++;
        } else if (2593 <= rondomNum && 11571 >= rondomNum) {
          newCoins += 3; //リプレイ
          replay++;
        } else if (11572 <= rondomNum && 22871 >= rondomNum) {
          newCoins += 8; //ぶどう
          grape++;
        } else {
          miss++;
        }
        newResults.push({ x: i, y: newCoins });
      }
      setResults(newResults);
      setBBCount(bb);
      setRBCount(rb);
      setCherryCount(cherry);
      setReplayCount(replay);
      setGrapeCount(grape);
      setMissCount(miss);
      return newCoins;
    });
  };

  const data = {
    datasets: [
      {
        label: "Slamp Graphs",
        data: results,
        fill: false,
        backgroundColor: "rgb(3, 22, 129)",
        borderColor: "rgba(15, 8, 227, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "linear" as const,
        beginAtZero: true,
      },
      y: {
        type: "linear" as const,
        beginAtZero: true,
      },
    },
  };

  const totalCount =
    bbCount + rbCount + cherryCount + replayCount + grapeCount + missCount;

  return (
    <StyledGraphs>
      <div className="container">
        <button className="styled-button" onClick={random}>
          スタート
        </button>
        <div className="graph">
          <Line data={data} options={options} />
        </div>

        <table className="styled-table">
          <caption>結果</caption>
          <tbody>
            <tr>
              <th>差枚数</th>
              <td>{totalCoins}枚</td>
            </tr>
            <tr>
              <th>収支</th>
              <td>{totalCoins * 20}円</td>
            </tr>
            <tr>
              <th>機械割</th>
              <td>
                {(((totalCoins + game * 3) / (game * 3)) * 100).toFixed(2)}%
              </td>
            </tr>
          </tbody>
        </table>

        <table className="styled-table">
          <caption>ボーナス・小役</caption>
          <thead>
            <tr>
              <th></th>
              <td>回数</td>
              <td>確率</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>BB</th>
              <td>{bbCount}</td>
              <td>{fraction(bbCount, totalCount)}</td>
            </tr>
            <tr>
              <th>RB</th>
              <td>{rbCount}</td>
              <td>{fraction(rbCount, totalCount)}</td>
            </tr>
            <tr>
              <th>合算</th>
              <td>{rbCount + bbCount}</td>
              <td>{fraction(rbCount + bbCount, totalCount)}</td>
            </tr>
            <tr>
              <th>チェリー</th>
              <td>{cherryCount}</td>
              <td>{fraction(cherryCount, totalCount)}</td>
            </tr>
            <tr>
              <th>リプレイ</th>
              <td>{replayCount}</td>
              <td>{fraction(replayCount, totalCount)}</td>
            </tr>
            <tr>
              <th>ぶどう</th>
              <td>{grapeCount}</td>
              <td>{fraction(grapeCount, totalCount)}</td>
            </tr>
            <tr>
              <th>ハズレ</th>
              <td>{missCount}</td>
              <td>{fraction(missCount, totalCount)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </StyledGraphs>
  );
}

export default Graphs;
