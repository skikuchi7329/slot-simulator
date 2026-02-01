"use client";

import { useState, useMemo } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LineController,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import StyledGraphs from "./styled";
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
} from "@/lib/constants/slotSettings";

Chart.register(LineController, LinearScale, PointElement, LineElement, Filler);

type Props = {
  game: number;
  machineId: MachineId;
  setting: SettingLevel;
  trialCount: number;
};

// 1回のシミュレーション結果
interface SingleSimulationResult {
  totalCoins: number;
  bbCount: number;
  rbCount: number;
  maxHamari: number;
  graphData: { x: number; y: number }[];
}

// 複数回シミュレーションの統計結果
interface MultiSimulationStats {
  maxProfit: number;
  minProfit: number;
  avgProfit: number;
  maxBonusCount: number;
  minBonusCount: number;
  avgBonusCount: number;
  winRate: number;
  avgPayoutRate: number;
  maxHamari: number;
}

export default function Graphs({
  game,
  machineId,
  setting,
  trialCount,
}: Props) {
  const [totalCoins, setTotalCoins] = useState(0);
  const [results, setResults] = useState<{ x: number; y: number }[]>([]);
  const [multiResults, setMultiResults] = useState<
    { x: number; y: number }[][]
  >([]);
  const [bbCount, setBBCount] = useState(0);
  const [rbCount, setRBCount] = useState(0);
  const [cherryCount, setCherryCount] = useState(0);
  const [replayCount, setReplayCount] = useState(0);
  const [grapeCount, setGrapeCount] = useState(0);
  const [missCount, setMissCount] = useState(0);
  const [maxHamari, setMaxHamari] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [multiStats, setMultiStats] = useState<MultiSimulationStats | null>(
    null,
  );
  const [isMultiMode, setIsMultiMode] = useState(false);

  const rangeTable = useMemo(
    () => generateRangeTable(machineId, setting),
    [machineId, setting],
  );

  function gcd(a: number, b: number): number {
    if (!b) {
      return a;
    }
    return gcd(b, a % b);
  }

  function fraction(numerator: number, denominator: number): string {
    if (denominator === 0 || numerator === 0) {
      return "-";
    }

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

  // 1回のシミュレーションを実行
  const runSingleSimulation = (): SingleSimulationResult => {
    let bb = 0,
      rb = 0,
      cherry = 0,
      replay = 0,
      grape = 0,
      miss = 0;
    let newCoins = 0;
    let currentHamari = 0;
    let maxHamariCount = 0;
    const newResults: { x: number; y: number }[] = [{ x: 0, y: 0 }];

    for (let i = 0; i < game; i++) {
      newCoins -= COINS_PER_GAME;
      const randomNum = Math.floor(Math.random() * RANDOM_MAX + 1);
      const result = getSymbolFromRandom(randomNum, rangeTable);

      newCoins += result.payout;

      switch (result.symbol) {
        case "BB":
          bb++;
          if (currentHamari > maxHamariCount) {
            maxHamariCount = currentHamari;
          }
          currentHamari = 0;
          break;
        case "RB":
          rb++;
          if (currentHamari > maxHamariCount) {
            maxHamariCount = currentHamari;
          }
          currentHamari = 0;
          break;
        case "CHERRY":
          cherry++;
          currentHamari++;
          break;
        case "REPLAY":
          replay++;
          currentHamari++;
          break;
        case "GRAPE":
          grape++;
          currentHamari++;
          break;
        case "MISS":
        default:
          miss++;
          currentHamari++;
          break;
      }
      newResults.push({ x: i + 1, y: newCoins });
    }

    if (currentHamari > maxHamariCount) {
      maxHamariCount = currentHamari;
    }

    return {
      totalCoins: newCoins,
      bbCount: bb,
      rbCount: rb,
      maxHamari: maxHamariCount,
      graphData: newResults,
    };
  };

  // 単発シミュレーション
  const runSimulation = () => {
    const validationError = validateGameCount(game);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError(null);
    setIsMultiMode(false);
    setMultiStats(null);
    setMultiResults([]);

    let bb = 0,
      rb = 0,
      cherry = 0,
      replay = 0,
      grape = 0,
      miss = 0;
    let newCoins = 0;
    let currentHamari = 0;
    let maxHamariCount = 0;
    const newResults: { x: number; y: number }[] = [{ x: 0, y: 0 }];

    for (let i = 0; i < game; i++) {
      newCoins -= COINS_PER_GAME;
      const randomNum = Math.floor(Math.random() * RANDOM_MAX + 1);
      const result = getSymbolFromRandom(randomNum, rangeTable);

      newCoins += result.payout;

      switch (result.symbol) {
        case "BB":
          bb++;
          if (currentHamari > maxHamariCount) {
            maxHamariCount = currentHamari;
          }
          currentHamari = 0;
          break;
        case "RB":
          rb++;
          if (currentHamari > maxHamariCount) {
            maxHamariCount = currentHamari;
          }
          currentHamari = 0;
          break;
        case "CHERRY":
          cherry++;
          currentHamari++;
          break;
        case "REPLAY":
          replay++;
          currentHamari++;
          break;
        case "GRAPE":
          grape++;
          currentHamari++;
          break;
        case "MISS":
        default:
          miss++;
          currentHamari++;
          break;
      }
      newResults.push({ x: i + 1, y: newCoins });
    }

    if (currentHamari > maxHamariCount) {
      maxHamariCount = currentHamari;
    }

    setResults(newResults);
    setBBCount(bb);
    setRBCount(rb);
    setCherryCount(cherry);
    setReplayCount(replay);
    setGrapeCount(grape);
    setMissCount(miss);
    setMaxHamari(maxHamariCount);
    setTotalCoins(newCoins);
  };

  // 複数回シミュレーション
  const runMultiSimulation = () => {
    const validationError = validateGameCount(game);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError(null);
    setIsMultiMode(true);

    const results: SingleSimulationResult[] = [];
    const totalBet = game * COINS_PER_GAME;

    for (let i = 0; i < trialCount; i++) {
      results.push(runSingleSimulation());
    }

    // 統計を計算
    const profits = results.map((r) => r.totalCoins);
    const bonusCounts = results.map((r) => r.bbCount + r.rbCount);
    const hamaris = results.map((r) => r.maxHamari);
    const payoutRates = results.map(
      (r) => ((r.totalCoins + totalBet) / totalBet) * 100,
    );

    const stats: MultiSimulationStats = {
      maxProfit: Math.max(...profits),
      minProfit: Math.min(...profits),
      avgProfit: Math.round(profits.reduce((a, b) => a + b, 0) / trialCount),
      maxBonusCount: Math.max(...bonusCounts),
      minBonusCount: Math.min(...bonusCounts),
      avgBonusCount:
        Math.round((bonusCounts.reduce((a, b) => a + b, 0) / trialCount) * 10) /
        10,
      winRate:
        Math.round((profits.filter((p) => p > 0).length / trialCount) * 1000) /
        10,
      avgPayoutRate:
        Math.round(
          (payoutRates.reduce((a, b) => a + b, 0) / trialCount) * 100,
        ) / 100,
      maxHamari: Math.max(...hamaris),
    };

    setMultiStats(stats);

    // すべてのシミュレーション結果をグラフ用に保存
    setMultiResults(results.map((r) => r.graphData));

    // 最後のシミュレーション結果を詳細表示用に設定
    const lastResult = results[results.length - 1];
    setResults(lastResult.graphData);
    setTotalCoins(lastResult.totalCoins);
    setBBCount(lastResult.bbCount);
    setRBCount(lastResult.rbCount);
    setMaxHamari(lastResult.maxHamari);
  };

  // 複数回シミュレーション用のデータセット生成
  const generateMultiDatasets = () => {
    if (!isMultiMode || multiResults.length === 0) {
      return [
        {
          label: "差枚数",
          data: results,
          fill: {
            target: 'origin',
            above: 'rgba(46, 125, 50, 0.15)',
            below: 'rgba(198, 40, 40, 0.15)',
          },
          borderColor: '#2e7d32',
          borderWidth: 2,
          pointRadius: 0,
          tension: 0,
        },
      ];
    }

    // 各ラインの最終結果に基づいて色を決定
    return multiResults.map((graphData, index) => {
      const finalValue = graphData[graphData.length - 1]?.y || 0;
      const isPositive = finalValue >= 0;
      // 透明度を調整（試行回数が多いほど薄く）
      const opacity = Math.max(0.2, Math.min(0.7, 40 / trialCount));
      const color = isPositive
        ? `rgba(46, 125, 50, ${opacity})`
        : `rgba(198, 40, 40, ${opacity})`;

      return {
        label: `試行${index + 1}`,
        data: graphData,
        fill: false,
        borderColor: color,
        borderWidth: 1,
        pointRadius: 0,
        tension: 0,
      };
    });
  };

  const data = {
    datasets: generateMultiDatasets(),
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: isMultiMode ? { duration: 0 } : { duration: 750 },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: !isMultiMode || multiResults.length <= 10,
      },
    },
    scales: {
      x: {
        type: "linear" as const,
        beginAtZero: true,
        title: {
          display: true,
          text: '回転数',
          color: '#666',
          font: { size: 12 },
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          color: '#666',
          maxTicksLimit: 10,
        },
      },
      y: {
        type: "linear" as const,
        title: {
          display: true,
          text: '差枚数',
          color: '#666',
          font: { size: 12 },
        },
        grid: {
          color: (context: { tick: { value: number } }) => {
            if (context.tick.value === 0) {
              return 'rgba(0, 0, 0, 0.4)';
            }
            return 'rgba(0, 0, 0, 0.1)';
          },
          lineWidth: (context: { tick: { value: number } }) => {
            if (context.tick.value === 0) {
              return 2;
            }
            return 1;
          },
        },
        ticks: {
          color: '#666',
        },
      },
    },
  };

  const totalCount =
    bbCount + rbCount + cherryCount + replayCount + grapeCount + missCount;

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
        {error && <div className="error-message">{error}</div>}
        <div className="button-group">
          <button className="styled-button" onClick={runSimulation}>
            単発シミュレーション
          </button>
          <button className="styled-button multi" onClick={runMultiSimulation}>
            {trialCount}回シミュレーション
          </button>
        </div>
        <div className="graph">
          <Line data={data} options={options} />
        </div>

        {isMultiMode && multiStats && (
          <table className="styled-table stats-table">
            <caption>統計結果（{trialCount}回試行）</caption>
            <tbody>
              <tr>
                <th>最大収支</th>
                <td
                  className={
                    multiStats.maxProfit >= 0 ? "positive" : "negative"
                  }
                >
                  {multiStats.maxProfit >= 0 ? "+" : ""}
                  {multiStats.maxProfit}枚 （
                  {multiStats.maxProfit >= 0 ? "+" : ""}
                  {multiStats.maxProfit * YEN_PER_COIN}円）
                </td>
              </tr>
              <tr>
                <th>最低収支</th>
                <td
                  className={
                    multiStats.minProfit >= 0 ? "positive" : "negative"
                  }
                >
                  {multiStats.minProfit >= 0 ? "+" : ""}
                  {multiStats.minProfit}枚 （
                  {multiStats.minProfit >= 0 ? "+" : ""}
                  {multiStats.minProfit * YEN_PER_COIN}円）
                </td>
              </tr>
              <tr>
                <th>平均収支</th>
                <td
                  className={
                    multiStats.avgProfit >= 0 ? "positive" : "negative"
                  }
                >
                  {multiStats.avgProfit >= 0 ? "+" : ""}
                  {multiStats.avgProfit}枚 （
                  {multiStats.avgProfit >= 0 ? "+" : ""}
                  {multiStats.avgProfit * YEN_PER_COIN}円）
                </td>
              </tr>
              <tr>
                <th>勝率</th>
                <td>{multiStats.winRate}%</td>
              </tr>
              <tr>
                <th>平均機械割</th>
                <td>{multiStats.avgPayoutRate}%</td>
              </tr>
              <tr>
                <th>最大ボーナス回数</th>
                <td>{multiStats.maxBonusCount}回</td>
              </tr>
              <tr>
                <th>最小ボーナス回数</th>
                <td>{multiStats.minBonusCount}回</td>
              </tr>
              <tr>
                <th>平均ボーナス回数</th>
                <td>{multiStats.avgBonusCount}回</td>
              </tr>
              <tr>
                <th>最大ハマり</th>
                <td>{multiStats.maxHamari}G</td>
              </tr>
            </tbody>
          </table>
        )}

        {!isMultiMode && (
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
              <tr>
                <th>最大ハマり</th>
                <td>{maxHamari}G</td>
              </tr>
            </tbody>
          </table>
        )}

        {!isMultiMode && (
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
        )}
      </div>
    </StyledGraphs>
  );
}
