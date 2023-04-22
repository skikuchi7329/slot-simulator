<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
=======
# スロットシミュレーター

### スロットの遊戯をシミュレーションし出玉の推移を見る。


### 開発環境

- 言語はReact+TypeScriptを使用。styleはstyled-componentを使用。

### 要件定義

- まずSアイムジャグラーのシミュレーションを作成し、順次他機種も導入する。他機種を導入した場合プルダウンメニューで変更可能にする。他機種の導入をスムーズにするための
- 設定は変更できるようにする。（プルダウンメニュー）
- 回転数は1000回〜10000回を1000回転区切りで設定できるようにする。
- X軸を回転数、Y軸を回転数としたスランプグラフを表示する。
- フラグの種類とその確率(設定6のみ)を以下に示す。
    - ビッグボーナス(以下BB):1/255　251枚
    - レギュラーボーナス(以下RB):1/255　95枚
    - ブドウ確率:1/5.848 8枚
    - チェリー:1/31.51 2枚
    - リプレイ:1/7.298 3枚
    - ハズレ:余事象 
- 表に回転数、BB回数、RB回数と、BB確率、RB確率、BBとRBの合算の確率、機械割(総払い出し枚数/総投入枚数)*100)、収支(差枚数*20)を表示する。
- 1000回まで同一の試行を繰り返し、最大収支、最低収支、最大ボーナス回数、平均収支、機械割等を出す（理想）。これは初期段階では実装しない。
>>>>>>> bfb2bd1b886435c1e007ecf40e846cabca8f044f
