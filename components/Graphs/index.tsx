'use client';

import { useState, useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart,
  LineController,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
} from 'chart.js';
import StyledGraphs from './styled';
import {
  RANDOM_MAX,
  COINS_PER_GAME,
  YEN_PER_COIN,
  SYMBOL_DISPLAY_NAMES,
  MIN_GAME_COUNT,
  MAX_GAME_COUNT,
  MachineId,
  SettingLevel,
  generateRangeTable,
  getSymbolFromRandom,
} from '@/lib/constants/slotSettings';

Chart.register(LineController, LinearScale, PointElement, LineElement, Filler);

type Props = {
  game: number;
  machineId: MachineId;
  setting: SettingLevel;
};

export default function Graphs({ game, machineId, setting }: Props) {
  const [totalCoins, setTotalCoins] = useState(0);
  const [results, setResults] = useState<{ x: number; y: number }[]>([]);
  const [bbCount, setBBCount] = useState(0);
  const [rbCount, setRBCount] = useState(0);
  const [cherryCount, setCherryCount] = useState(0);
  const [replayCount, setReplayCount] = useState(0);
  const [grapeCount, setGrapeCount] = useState(0);
  const [missCount, setMissCount] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const rangeTable = useMemo(
    () => generateRangeTable(machineId, setting),
    [machineId, setting]
  );

  function gcd(a: number, b: number): number {
    if (!b) {
      return a;
    }
    return gcd(b, a % b);
  }

  function fraction(numerator: number, denominator: number): string {
    if (denominator === 0 || numerator === 0) {
      return '-';
    }

    if (numerator < 0 || denominator < 0) {
      return '-';
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
      return '回転数は数値で入力してください';
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
      const result = getSymbolFromRandom(randomNum, rangeTable);

      newCoins += result.payout;

      switch (result.symbol) {
        case 'BB':
          bb++;
          break;
        case 'RB':
          rb++;
          break;
        case 'CHERRY':
          cherry++;
          break;
        case 'REPLAY':
          replay++;
          break;
        case 'GRAPE':
          grape++;
          break;
        case 'MISS':
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
        label: '差枚数',
        data: results,
        fill: {
          target: 'origin',
          above: 'rgba(0, 255, 128, 0.15)',
          below: 'rgba(255, 80, 80, 0.15)',
        },
        borderColor: '#00ff80',
        borderWidth: 2,
        pointRadius: 0,
        tension: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        type: 'linear' as const,
        beginAtZero: true,
        title: {
          display: true,
          text: '回転数',
          color: '#aaa',
          font: { size: 12 },
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#aaa',
          maxTicksLimit: 10,
        },
      },
      y: {
        type: 'linear' as const,
        title: {
          display: true,
          text: '差枚数',
          color: '#aaa',
          font: { size: 12 },
        },
        grid: {
          color: (context: { tick: { value: number } }) => {
            if (context.tick.value === 0) {
              return 'rgba(255, 255, 255, 0.5)';
            }
            return 'rgba(255, 255, 255, 0.1)';
          },
          lineWidth: (context: { tick: { value: number } }) => {
            if (context.tick.value === 0) {
              return 2;
            }
            return 1;
          },
        },
        ticks: {
          color: '#aaa',
        },
      },
    },
  };

  const totalCount =
    bbCount + rbCount + cherryCount + replayCount + grapeCount + missCount;

  const calculatePayoutRate = (): string => {
    const totalBet = game * COINS_PER_GAME;
    if (totalBet === 0) {
      return '0.00';
    }
    return (((totalCoins + totalBet) / totalBet) * 100).toFixed(2);
  };

  return (
    <StyledGraphs>
      <div className="container">
        {error && (
          <div
            className="error-message"
            style={{ color: 'red', marginBottom: '10px' }}
          >
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
              <th>{SYMBOL_DISPLAY_NAMES.BB}</th>
              <td>{bbCount}</td>
              <td>{fraction(bbCount, totalCount)}</td>
            </tr>
            <tr>
              <th>{SYMBOL_DISPLAY_NAMES.RB}</th>
              <td>{rbCount}</td>
              <td>{fraction(rbCount, totalCount)}</td>
            </tr>
            <tr>
              <th>合算</th>
              <td>{rbCount + bbCount}</td>
              <td>{fraction(rbCount + bbCount, totalCount)}</td>
            </tr>
            <tr>
              <th>{SYMBOL_DISPLAY_NAMES.CHERRY}</th>
              <td>{cherryCount}</td>
              <td>{fraction(cherryCount, totalCount)}</td>
            </tr>
            <tr>
              <th>{SYMBOL_DISPLAY_NAMES.REPLAY}</th>
              <td>{replayCount}</td>
              <td>{fraction(replayCount, totalCount)}</td>
            </tr>
            <tr>
              <th>{SYMBOL_DISPLAY_NAMES.GRAPE}</th>
              <td>{grapeCount}</td>
              <td>{fraction(grapeCount, totalCount)}</td>
            </tr>
            <tr>
              <th>{SYMBOL_DISPLAY_NAMES.MISS}</th>
              <td>{missCount}</td>
              <td>{fraction(missCount, totalCount)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </StyledGraphs>
  );
}
