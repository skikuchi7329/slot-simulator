// スロットシミュレーション用の定数

// 乱数の最大値
export const RANDOM_MAX = 65536;

// 1ゲームあたりのコイン消費
export const COINS_PER_GAME = 3;

// 1枚あたりの円換算レート
export const YEN_PER_COIN = 20;

// 入力値の検証用定数
export const MIN_GAME_COUNT = 1;
export const MAX_GAME_COUNT = 100000;
export const DEFAULT_GAME_COUNT = 8000;

// 役の種類
export type SymbolType = 'BB' | 'RB' | 'CHERRY' | 'REPLAY' | 'GRAPE' | 'MISS';

// 設定値（1-6）
export type SettingLevel = 1 | 2 | 3 | 4 | 5 | 6;

// 機種ID
export type MachineId = 'aim' | 'myJuggler' | 'funky' | 'happy' | 'gogo' | 'girls' | 'mister';

// 払い出し枚数（全機種共通）
export const PAYOUTS: Record<Exclude<SymbolType, 'MISS'>, number> = {
  BB: 251,
  RB: 95,
  GRAPE: 8,
  CHERRY: 2,
  REPLAY: 3,
};

// 役の表示名
export const SYMBOL_DISPLAY_NAMES: Record<SymbolType, string> = {
  BB: 'BB',
  RB: 'RB',
  CHERRY: 'チェリー',
  REPLAY: 'リプレイ',
  GRAPE: 'ぶどう',
  MISS: 'ハズレ',
};

// 確率データの型（1/X形式のXの値）
export interface ProbabilityData {
  singleBB: number;    // 単独BB
  cherryBB: number;    // チェリーBB（または複合BB）
  singleRB: number;    // 単独RB
  cherryRB: number;    // チェリーRB（または複合RB）
  grape: number;       // ぶどう
  replay: number;      // リプレイ
  cherry: number;      // チェリー（非重複）
}

// 機種情報
export interface MachineInfo {
  id: MachineId;
  name: string;
  settings: Record<SettingLevel, ProbabilityData>;
}

// アイムジャグラー
const aimJuggler: MachineInfo = {
  id: 'aim',
  name: 'Sアイムジャグラー',
  settings: {
    1: { singleBB: 394.8, cherryBB: 888.1, singleRB: 630.2, cherryRB: 1456.4, grape: 6.02, replay: 7.3, cherry: 35.2 },
    2: { singleBB: 390.1, cherryBB: 873.8, singleRB: 574.9, cherryRB: 1310.7, grape: 6.02, replay: 7.3, cherry: 35.2 },
    3: { singleBB: 390.1, cherryBB: 873.8, singleRB: 474.9, cherryRB: 1092.3, grape: 6.02, replay: 7.3, cherry: 35.2 },
    4: { singleBB: 374.5, cherryBB: 840.2, singleRB: 452.0, cherryRB: 1040.3, grape: 6.02, replay: 7.3, cherry: 35.1 },
    5: { singleBB: 374.5, cherryBB: 840.2, singleRB: 364.1, cherryRB: 851.1, grape: 6.02, replay: 7.3, cherry: 35.0 },
    6: { singleBB: 368.2, cherryBB: 829.1, singleRB: 364.1, cherryRB: 851.1, grape: 5.78, replay: 7.3, cherry: 34.9 },
  },
};

// マイジャグラーV
const myJugglerV: MachineInfo = {
  id: 'myJuggler',
  name: 'マイジャグラーV',
  settings: {
    1: { singleBB: 390.1, cherryBB: 910.2, singleRB: 668.7, cherryRB: 1057.0, grape: 5.90, replay: 7.3, cherry: 38.5 },
    2: { singleBB: 385.5, cherryBB: 910.2, singleRB: 630.2, cherryRB: 993.0, grape: 5.86, replay: 7.3, cherry: 38.4 },
    3: { singleBB: 376.6, cherryBB: 910.2, singleRB: 574.9, cherryRB: 910.2, grape: 5.82, replay: 7.3, cherry: 38.3 },
    4: { singleBB: 356.2, cherryBB: 873.8, singleRB: 481.9, cherryRB: 780.2, grape: 5.78, replay: 7.3, cherry: 38.2 },
    5: { singleBB: 334.4, cherryBB: 851.1, singleRB: 414.9, cherryRB: 682.7, grape: 5.74, replay: 7.3, cherry: 38.1 },
    6: { singleBB: 321.3, cherryBB: 799.2, singleRB: 334.4, cherryRB: 720.2, grape: 5.66, replay: 7.3, cherry: 38.0 },
  },
};

// ファンキージャグラー2
const funkyJuggler2: MachineInfo = {
  id: 'funky',
  name: 'ファンキージャグラー2',
  settings: {
    1: { singleBB: 372.4, cherryBB: 936.2, singleRB: 682.7, cherryRB: 1236.5, grape: 6.10, replay: 7.3, cherry: 37.5 },
    2: { singleBB: 362.1, cherryBB: 910.2, singleRB: 630.2, cherryRB: 1149.8, grape: 6.08, replay: 7.3, cherry: 37.4 },
    3: { singleBB: 358.1, cherryBB: 897.8, singleRB: 565.0, cherryRB: 1040.3, grape: 6.06, replay: 7.3, cherry: 37.3 },
    4: { singleBB: 348.6, cherryBB: 873.8, singleRB: 496.5, cherryRB: 923.0, grape: 6.04, replay: 7.3, cherry: 37.2 },
    5: { singleBB: 324.4, cherryBB: 819.2, singleRB: 458.3, cherryRB: 862.3, grape: 6.00, replay: 7.3, cherry: 37.1 },
    6: { singleBB: 307.7, cherryBB: 771.0, singleRB: 402.1, cherryRB: 753.3, grape: 5.85, replay: 7.3, cherry: 36.5 },
  },
};

// ハッピージャグラーVIII
const happyJuggler8: MachineInfo = {
  id: 'happy',
  name: 'ハッピージャグラーVIII',
  settings: {
    1: { singleBB: 409.6, cherryBB: 819.2, singleRB: 618.3, cherryRB: 1110.8, grape: 6.00, replay: 7.3, cherry: 33.0 },
    2: { singleBB: 402.1, cherryBB: 829.1, singleRB: 590.4, cherryRB: 1092.3, grape: 5.98, replay: 7.3, cherry: 33.0 },
    3: { singleBB: 390.1, cherryBB: 809.1, singleRB: 528.5, cherryRB: 963.8, grape: 5.95, replay: 7.3, cherry: 33.0 },
    4: { singleBB: 376.6, cherryBB: 771.0, singleRB: 471.5, cherryRB: 873.8, grape: 5.92, replay: 7.3, cherry: 33.0 },
    5: { singleBB: 356.2, cherryBB: 728.2, singleRB: 422.8, cherryRB: 771.0, grape: 5.88, replay: 7.3, cherry: 33.0 },
    6: { singleBB: 334.4, cherryBB: 697.2, singleRB: 334.4, cherryRB: 697.2, grape: 5.80, replay: 7.3, cherry: 33.0 },
  },
};

// ゴーゴージャグラー3
const gogoJuggler3: MachineInfo = {
  id: 'gogo',
  name: 'ゴーゴージャグラー3',
  settings: {
    1: { singleBB: 344.9, cherryBB: 1040.3, singleRB: 474.9, cherryRB: 1394.4, grape: 6.80, replay: 7.3, cherry: 35.0 },
    2: { singleBB: 343.1, cherryBB: 1032.1, singleRB: 445.8, cherryRB: 1310.7, grape: 6.76, replay: 7.3, cherry: 35.0 },
    3: { singleBB: 341.3, cherryBB: 1024.0, singleRB: 412.2, cherryRB: 1213.6, grape: 6.72, replay: 7.3, cherry: 35.0 },
    4: { singleBB: 322.8, cherryBB: 971.0, singleRB: 360.1, cherryRB: 1057.0, grape: 6.68, replay: 7.3, cherry: 35.0 },
    5: { singleBB: 312.1, cherryBB: 936.2, singleRB: 315.1, cherryRB: 936.2, grape: 6.64, replay: 7.3, cherry: 35.0 },
    6: { singleBB: 295.2, cherryBB: 885.5, singleRB: 295.2, cherryRB: 885.5, grape: 6.50, replay: 7.3, cherry: 35.0 },
  },
};

// ジャグラーガールズSS
const jugglerGirlsSS: MachineInfo = {
  id: 'girls',
  name: 'ジャグラーガールズSS',
  settings: {
    1: { singleBB: 376.6, cherryBB: 963.8, singleRB: 541.6, cherryRB: 1260.3, grape: 6.05, replay: 7.3, cherry: 36.0 },
    2: { singleBB: 372.4, cherryBB: 952.6, singleRB: 508.1, cherryRB: 1213.6, grape: 6.03, replay: 7.3, cherry: 36.0 },
    3: { singleBB: 368.2, cherryBB: 910.2, singleRB: 458.3, cherryRB: 1110.8, grape: 6.01, replay: 7.3, cherry: 36.0 },
    4: { singleBB: 341.3, cherryBB: 862.3, singleRB: 409.6, cherryRB: 1008.2, grape: 5.99, replay: 7.3, cherry: 36.0 },
    5: { singleBB: 324.4, cherryBB: 819.2, singleRB: 368.2, cherryRB: 897.8, grape: 5.97, replay: 7.3, cherry: 36.0 },
    6: { singleBB: 318.1, cherryBB: 809.1, singleRB: 318.1, cherryRB: 809.1, grape: 5.90, replay: 7.3, cherry: 36.0 },
  },
};

// ミスタージャグラー（複合BB/RB = チェリー・ピエロ重複の合算値）
const misterJuggler: MachineInfo = {
  id: 'mister',
  name: 'ミスタージャグラー',
  settings: {
    1: { singleBB: 385.5, cherryBB: 880.5, singleRB: 565.0, cherryRB: 1107.4, grape: 5.95, replay: 7.3, cherry: 35.0 },
    2: { singleBB: 376.6, cherryBB: 880.5, singleRB: 532.8, cherryRB: 1074.4, grape: 5.92, replay: 7.3, cherry: 35.0 },
    3: { singleBB: 368.2, cherryBB: 880.5, singleRB: 481.9, cherryRB: 1024.0, grape: 5.89, replay: 7.3, cherry: 35.0 },
    4: { singleBB: 348.6, cherryBB: 862.3, singleRB: 422.8, cherryRB: 910.2, grape: 5.86, replay: 7.3, cherry: 35.0 },
    5: { singleBB: 334.4, cherryBB: 840.2, singleRB: 372.4, cherryRB: 819.2, grape: 5.82, replay: 7.3, cherry: 35.0 },
    6: { singleBB: 318.1, cherryBB: 800.0, singleRB: 318.1, cherryRB: 800.0, grape: 5.73, replay: 7.3, cherry: 35.0 },
  },
};

// 全機種データ
export const MACHINES: Record<MachineId, MachineInfo> = {
  aim: aimJuggler,
  myJuggler: myJugglerV,
  funky: funkyJuggler2,
  happy: happyJuggler8,
  gogo: gogoJuggler3,
  girls: jugglerGirlsSS,
  mister: misterJuggler,
};

// 機種リスト（UI表示用）
export const MACHINE_LIST: { id: MachineId; name: string }[] = [
  { id: 'aim', name: 'Sアイムジャグラー' },
  { id: 'myJuggler', name: 'マイジャグラーV' },
  { id: 'funky', name: 'ファンキージャグラー2' },
  { id: 'happy', name: 'ハッピージャグラーVIII' },
  { id: 'gogo', name: 'ゴーゴージャグラー3' },
  { id: 'girls', name: 'ジャグラーガールズSS' },
  { id: 'mister', name: 'ミスタージャグラー' },
];

// 確率（1/X）から乱数範囲の幅を計算
function probabilityToRange(probability: number): number {
  return Math.round(RANDOM_MAX / probability);
}

// シミュレーション用の乱数範囲テーブルを生成
export interface SymbolRange {
  symbol: SymbolType;
  rangeStart: number;
  rangeEnd: number;
  payout: number;
}

export function generateRangeTable(
  machineId: MachineId,
  setting: SettingLevel
): SymbolRange[] {
  const machine = MACHINES[machineId];
  const prob = machine.settings[setting];

  const ranges: SymbolRange[] = [];
  let currentStart = 1;

  // BB（単独BB + チェリーBB/複合BB）
  const bbRange = probabilityToRange(prob.singleBB) + probabilityToRange(prob.cherryBB);
  ranges.push({
    symbol: 'BB',
    rangeStart: currentStart,
    rangeEnd: currentStart + bbRange - 1,
    payout: PAYOUTS.BB,
  });
  currentStart += bbRange;

  // RB（単独RB + チェリーRB/複合RB）
  const rbRange = probabilityToRange(prob.singleRB) + probabilityToRange(prob.cherryRB);
  ranges.push({
    symbol: 'RB',
    rangeStart: currentStart,
    rangeEnd: currentStart + rbRange - 1,
    payout: PAYOUTS.RB,
  });
  currentStart += rbRange;

  // チェリー（非重複）
  const cherryRange = probabilityToRange(prob.cherry);
  ranges.push({
    symbol: 'CHERRY',
    rangeStart: currentStart,
    rangeEnd: currentStart + cherryRange - 1,
    payout: PAYOUTS.CHERRY,
  });
  currentStart += cherryRange;

  // リプレイ
  const replayRange = probabilityToRange(prob.replay);
  ranges.push({
    symbol: 'REPLAY',
    rangeStart: currentStart,
    rangeEnd: currentStart + replayRange - 1,
    payout: PAYOUTS.REPLAY,
  });
  currentStart += replayRange;

  // ぶどう
  const grapeRange = probabilityToRange(prob.grape);
  ranges.push({
    symbol: 'GRAPE',
    rangeStart: currentStart,
    rangeEnd: currentStart + grapeRange - 1,
    payout: PAYOUTS.GRAPE,
  });
  currentStart += grapeRange;

  // ハズレ（余事象）
  ranges.push({
    symbol: 'MISS',
    rangeStart: currentStart,
    rangeEnd: RANDOM_MAX,
    payout: 0,
  });

  return ranges;
}

// 乱数から役を判定する関数
export function getSymbolFromRandom(
  randomNum: number,
  rangeTable: SymbolRange[]
): SymbolRange {
  for (const range of rangeTable) {
    if (randomNum >= range.rangeStart && randomNum <= range.rangeEnd) {
      return range;
    }
  }
  // フォールバック（通常は到達しない）
  return rangeTable[rangeTable.length - 1];
}
