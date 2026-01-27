import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LineController,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import StyledGraphs from "./index.styled";
import {
  RANDOM_MAX,
  COINS_PER_GAME,
  YEN_PER_COIN,
  SYMBOL_CONFIGS,
  getSymbolFromRandom,
  MIN_GAME_COUNT,
  MAX_GAME_COUNT,
} from "../../constants/slotSettings";

Chart.register(LineController, LinearScale, PointElement, LineElement);

type Props = {
  game: number;
};

function Graphs({ game }: Props) {
  const [totalCoins, setTotalCoins] = useState(0);
  const [results, setResults] = useState<{ x: number; y: number }[]>([]);
  const [bbCount, setBBCount] = useState(0);
  const [rbCount, setRBCount] = useState(0);
  const [cherryCount, setCherryCount] = useState(0);
  const [replayCount, setReplayCount] = useState(0);
  const [grapeCount, setGrapeCount] = useState(0);
  const [missCount, setMissCount] = useState(0);
  const [error, setError] = useState<string | null>(null);

  function gcd(a: number, b: number): number {
    if (!b) {
      return a;
    }
    return gcd(b, a % b);
  }

  function fraction(numerator: number, denominator: number): string {
    // エラーハンドリング: 0除算の防止
    if (denominator === 0 || numerator === 0) {
      return "-";
    }

    // 負の値のハンドリング
    if (numerator < 0 || denominator < 0) {
      return "-";
    }

    const g = gcd(numerator, denominator);
    const reducedNumerator = numerator / g;
    const reducedDenominator = denominator / g;

    if (reducedNumerator === 1) {
      return `${reducedNumerator}/${reducedDenominator.toFixed(2)}`;
    } else {
      return `1/${(reducedDenominator / reducedNumerator).toFixed(2)}`;
    }
  }

  const validateGameCount = (count: number): string | null => {
    if (isNaN(count)) {
      return "回転数は数値で入力してください";
    }
    if (count < MIN_GAME_COUNT) {
      return `回転数は${MIN_GAME_COUNT}以上で入力してください`;
    }
    if (count > MAX_GAME_COUNT) {
      return `回転数は${MAX_GAME_COUNT}以下で入力してください`;
    }
    return null;
  };

  const runSimulation = () => {
    // 入力値のバリデーション
    const validationError = validateGameCount(game);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError(null);

    let bb = 0,
      rb = 0,
      cherry = 0,
      replay = 0,
      grape = 0,
      miss = 0;
    let newCoins = 0;
    const newResults: { x: number; y: number }[] = [{ x: 0, y: 0 }];

    for (let i = 0; i < game; i++) {
      newCoins -= COINS_PER_GAME;
      const randomNum = Math.floor(Math.random() * RANDOM_MAX + 1);
      const symbol = getSymbolFromRandom(randomNum);

      switch (symbol) {
        case "BB":
          newCoins += SYMBOL_CONFIGS.BB.payout;
          bb++;
          break;
        case "RB":
          newCoins += SYMBOL_CONFIGS.RB.payout;
          rb++;
          break;
        case "CHERRY":
          newCoins += SYMBOL_CONFIGS.CHERRY.payout;
          cherry++;
          break;
        case "REPLAY":
          newCoins += SYMBOL_CONFIGS.REPLAY.payout;
          replay++;
          break;
        case "GRAPE":
          newCoins += SYMBOL_CONFIGS.GRAPE.payout;
          grape++;
          break;
        case "MISS":
        default:
          miss++;
          break;
      }
      newResults.push({ x: i + 1, y: newCoins });
    }

    setResults(newResults);
    setBBCount(bb);
    setRBCount(rb);
    setCherryCount(cherry);
    setReplayCount(replay);
    setGrapeCount(grape);
    setMissCount(miss);
    setTotalCoins(newCoins);
  };

  const data = {
    datasets: [
      {
        label: "Slump Graph",
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

  // 機械割の計算（0除算防止）
  const calculatePayoutRate = (): string => {
    const totalBet = game * COINS_PER_GAME;
    if (totalBet === 0) {
      return "0.00";
    }
    return (((totalCoins + totalBet) / totalBet) * 100).toFixed(2);
  };

  return (
    <StyledGraphs>
      <div className="container">
        {error && (
          <div className="error-message" style={{ color: "red", marginBottom: "10px" }}>
            {error}
          </div>
        )}
        <button className="styled-button" onClick={runSimulation}>
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
              <td>{totalCoins * YEN_PER_COIN}円</td>
            </tr>
            <tr>
              <th>機械割</th>
              <td>{calculatePayoutRate()}%</td>
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
              <th>{SYMBOL_CONFIGS.BB.displayName}</th>
              <td>{bbCount}</td>
              <td>{fraction(bbCount, totalCount)}</td>
            </tr>
            <tr>
              <th>{SYMBOL_CONFIGS.RB.displayName}</th>
              <td>{rbCount}</td>
              <td>{fraction(rbCount, totalCount)}</td>
            </tr>
            <tr>
              <th>合算</th>
              <td>{rbCount + bbCount}</td>
              <td>{fraction(rbCount + bbCount, totalCount)}</td>
            </tr>
            <tr>
              <th>{SYMBOL_CONFIGS.CHERRY.displayName}</th>
              <td>{cherryCount}</td>
              <td>{fraction(cherryCount, totalCount)}</td>
            </tr>
            <tr>
              <th>{SYMBOL_CONFIGS.REPLAY.displayName}</th>
              <td>{replayCount}</td>
              <td>{fraction(replayCount, totalCount)}</td>
            </tr>
            <tr>
              <th>{SYMBOL_CONFIGS.GRAPE.displayName}</th>
              <td>{grapeCount}</td>
              <td>{fraction(grapeCount, totalCount)}</td>
            </tr>
            <tr>
              <th>{SYMBOL_CONFIGS.MISS.displayName}</th>
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
