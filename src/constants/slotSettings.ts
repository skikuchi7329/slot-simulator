// スロットシミュレーション用の定数

// 乱数の最大値
export const RANDOM_MAX = 65536;

// 1ゲームあたりのコイン消費
export const COINS_PER_GAME = 3;

// 1枚あたりの円換算レート
export const YEN_PER_COIN = 20;

// 役の種類
export type SymbolType = 'BB' | 'RB' | 'CHERRY' | 'REPLAY' | 'GRAPE' | 'MISS';

// 役の設定（設定6の確率）
export interface SymbolConfig {
  name: string;
  displayName: string;
  rangeStart: number;
  rangeEnd: number;
  payout: number;
}

// Sアイムジャグラー 設定6の確率テーブル
export const SYMBOL_CONFIGS: Record<SymbolType, SymbolConfig> = {
  BB: {
    name: 'BB',
    displayName: 'BB',
    rangeStart: 1,
    rangeEnd: 255,
    payout: 252,
  },
  RB: {
    name: 'RB',
    displayName: 'RB',
    rangeStart: 256,
    rangeEnd: 511,
    payout: 96,
  },
  CHERRY: {
    name: 'CHERRY',
    displayName: 'チェリー',
    rangeStart: 512,
    rangeEnd: 2592,
    payout: 2,
  },
  REPLAY: {
    name: 'REPLAY',
    displayName: 'リプレイ',
    rangeStart: 2593,
    rangeEnd: 11571,
    payout: 3,
  },
  GRAPE: {
    name: 'GRAPE',
    displayName: 'ぶどう',
    rangeStart: 11572,
    rangeEnd: 22871,
    payout: 8,
  },
  MISS: {
    name: 'MISS',
    displayName: 'ハズレ',
    rangeStart: 22872,
    rangeEnd: RANDOM_MAX,
    payout: 0,
  },
};

// 乱数から役を判定する関数
export function getSymbolFromRandom(randomNum: number): SymbolType {
  for (const [symbolType, config] of Object.entries(SYMBOL_CONFIGS)) {
    if (randomNum >= config.rangeStart && randomNum <= config.rangeEnd) {
      return symbolType as SymbolType;
    }
  }
  return 'MISS';
}

// 入力値の検証用定数
export const MIN_GAME_COUNT = 1;
export const MAX_GAME_COUNT = 100000;
export const DEFAULT_GAME_COUNT = 8000;
