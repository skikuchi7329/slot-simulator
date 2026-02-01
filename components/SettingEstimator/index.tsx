'use client';

import { useState, useMemo } from 'react';
import StyledEstimator from './styled';
import {
  MachineId,
  SettingLevel,
  MACHINES,
  MACHINE_LIST,
} from '@/lib/constants/slotSettings';

type Props = {
  machineId: MachineId;
  setMachineId: (value: MachineId) => void;
};

interface EstimationResult {
  setting: SettingLevel;
  probability: number;
  rank: number;
}

export default function SettingEstimator({ machineId, setMachineId }: Props) {
  const [gameCount, setGameCount] = useState<number>(8000);
  const [bbCount, setBbCount] = useState<number>(30);
  const [rbCount, setRbCount] = useState<number>(25);
  const [grapeCount, setGrapeCount] = useState<number>(1300);
  const [results, setResults] = useState<EstimationResult[] | null>(null);

  const machine = useMemo(() => MACHINES[machineId], [machineId]);

  // ポアソン分布の確率質量関数（対数版）
  const logPoisson = (k: number, lambda: number): number => {
    if (lambda <= 0) return -Infinity;
    if (k < 0) return -Infinity;
    // log(P(X=k)) = k*log(lambda) - lambda - log(k!)
    let logFactorial = 0;
    for (let i = 2; i <= k; i++) {
      logFactorial += Math.log(i);
    }
    return k * Math.log(lambda) - lambda - logFactorial;
  };

  // 設定推測を実行
  const runEstimation = () => {
    if (gameCount <= 0) return;

    const settings: SettingLevel[] = [1, 2, 3, 4, 5, 6];
    const logLikelihoods: number[] = [];

    for (const setting of settings) {
      const prob = machine.settings[setting];

      // 各設定での期待値を計算
      const expectedBB = gameCount / (1 / (1 / prob.singleBB + 1 / prob.cherryBB));
      const expectedRB = gameCount / (1 / (1 / prob.singleRB + 1 / prob.cherryRB));
      const expectedGrape = gameCount / prob.grape;

      // 対数尤度を計算（ポアソン分布を使用）
      const logLikelihood =
        logPoisson(bbCount, expectedBB) +
        logPoisson(rbCount, expectedRB) +
        logPoisson(grapeCount, expectedGrape);

      logLikelihoods.push(logLikelihood);
    }

    // 最大対数尤度を引いて数値的安定性を確保
    const maxLogLikelihood = Math.max(...logLikelihoods);
    const likelihoods = logLikelihoods.map((ll) =>
      Math.exp(ll - maxLogLikelihood)
    );

    // 事前確率は均等（1/6）として正規化
    const totalLikelihood = likelihoods.reduce((a, b) => a + b, 0);
    const posteriors = likelihoods.map((l) => (l / totalLikelihood) * 100);

    // 結果を作成してランク付け
    const estimationResults: EstimationResult[] = settings.map(
      (setting, index) => ({
        setting,
        probability: Math.round(posteriors[index] * 10) / 10,
        rank: 0,
      })
    );

    // 確率順にソートしてランク付け
    const sorted = [...estimationResults].sort(
      (a, b) => b.probability - a.probability
    );
    sorted.forEach((result, index) => {
      result.rank = index + 1;
    });

    setResults(estimationResults);
  };

  const handleNumberInput = (
    value: string,
    setter: (v: number) => void
  ) => {
    const num = parseInt(value, 10);
    if (value === '' || isNaN(num)) {
      setter(0);
    } else {
      setter(num);
    }
  };

  // 合算確率の表示
  const getCombinedProbability = (setting: SettingLevel) => {
    const prob = machine.settings[setting];
    const bbProb = 1 / (1 / prob.singleBB + 1 / prob.cherryBB);
    const rbProb = 1 / (1 / prob.singleRB + 1 / prob.cherryRB);
    const combined = 1 / (1 / bbProb + 1 / rbProb);
    return combined.toFixed(1);
  };

  const getGrapeProbability = (setting: SettingLevel) => {
    return machine.settings[setting].grape.toFixed(2);
  };

  return (
    <StyledEstimator>
      <div className="container">
        <h1>設定推測ツール</h1>
        <p className="description">
          実際のプレイデータを入力して、設定を推測します。
        </p>

        <div className="input-section">
          <div className="input-group">
            <label htmlFor="machine">機種</label>
            <select
              id="machine"
              value={machineId}
              onChange={(e) => setMachineId(e.target.value as MachineId)}
            >
              {MACHINE_LIST.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name}
                </option>
              ))}
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="gameCount">回転数</label>
            <input
              id="gameCount"
              type="number"
              value={gameCount || ''}
              onChange={(e) => handleNumberInput(e.target.value, setGameCount)}
              min={1}
            />
          </div>

          <div className="input-group">
            <label htmlFor="bbCount">BB回数</label>
            <input
              id="bbCount"
              type="number"
              value={bbCount || ''}
              onChange={(e) => handleNumberInput(e.target.value, setBbCount)}
              min={0}
            />
          </div>

          <div className="input-group">
            <label htmlFor="rbCount">RB回数</label>
            <input
              id="rbCount"
              type="number"
              value={rbCount || ''}
              onChange={(e) => handleNumberInput(e.target.value, setRbCount)}
              min={0}
            />
          </div>

          <div className="input-group">
            <label htmlFor="grapeCount">ぶどう回数</label>
            <input
              id="grapeCount"
              type="number"
              value={grapeCount || ''}
              onChange={(e) => handleNumberInput(e.target.value, setGrapeCount)}
              min={0}
            />
          </div>

          <button className="estimate-button" onClick={runEstimation}>
            設定推測
          </button>
        </div>

        {results && (
          <div className="results-section">
            <table className="results-table">
              <caption>推測結果</caption>
              <thead>
                <tr>
                  <th>設定</th>
                  <th>確率</th>
                  <th>合算</th>
                  <th>ぶどう</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result) => (
                  <tr
                    key={result.setting}
                    className={
                      result.rank === 1
                        ? 'rank-1'
                        : result.rank === 2
                        ? 'rank-2'
                        : ''
                    }
                  >
                    <td className="setting-cell">設定{result.setting}</td>
                    <td className="probability-cell">
                      <div className="probability-bar-container">
                        <div
                          className="probability-bar"
                          style={{ width: `${result.probability}%` }}
                        />
                        <span className="probability-value">
                          {result.probability}%
                        </span>
                      </div>
                    </td>
                    <td>1/{getCombinedProbability(result.setting)}</td>
                    <td>1/{getGrapeProbability(result.setting)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="actual-data">
              <h3>入力データの確率</h3>
              <table className="data-table">
                <tbody>
                  <tr>
                    <th>BB確率</th>
                    <td>1/{(gameCount / bbCount).toFixed(1)}</td>
                  </tr>
                  <tr>
                    <th>RB確率</th>
                    <td>1/{(gameCount / rbCount).toFixed(1)}</td>
                  </tr>
                  <tr>
                    <th>合算確率</th>
                    <td>1/{(gameCount / (bbCount + rbCount)).toFixed(1)}</td>
                  </tr>
                  <tr>
                    <th>ぶどう確率</th>
                    <td>1/{(gameCount / grapeCount).toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="reference-section">
          <h3>{machine.name} - 設定別確率</h3>
          <table className="reference-table">
            <thead>
              <tr>
                <th>設定</th>
                <th>BB</th>
                <th>RB</th>
                <th>合算</th>
                <th>ぶどう</th>
              </tr>
            </thead>
            <tbody>
              {([1, 2, 3, 4, 5, 6] as SettingLevel[]).map((setting) => {
                const prob = machine.settings[setting];
                const bbProb = 1 / (1 / prob.singleBB + 1 / prob.cherryBB);
                const rbProb = 1 / (1 / prob.singleRB + 1 / prob.cherryRB);
                return (
                  <tr key={setting}>
                    <td>設定{setting}</td>
                    <td>1/{bbProb.toFixed(1)}</td>
                    <td>1/{rbProb.toFixed(1)}</td>
                    <td>1/{getCombinedProbability(setting)}</td>
                    <td>1/{prob.grape.toFixed(2)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </StyledEstimator>
  );
}
