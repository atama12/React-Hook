<div id="top"></div>

# 使用技術一覧

<p style="display: inline">
  <!-- フロントエンドフレームワーク一覧 -->
  <img src="https://img.shields.io/badge/-React-555.svg?logo=react&style=flat">
  <img src="https://img.shields.io/badge/-TypeScript-007ACC.svg?logo=typescript&style=flat">
  <img src="https://img.shields.io/badge/-ChakraUI-007ACC.svg?logo=chakraui&style=flat">
  <!-- インフラ一覧-->
  <img src="https://img.shields.io/badge/-Vercel-000000.svg?logo=vercel&style=flat">
  <!-- エディタ一覧 -->
  <img src="https://img.shields.io/badge/-Visual%20Studio%20Code-007ACC.svg?logo=visual-studio-code&style=flat">

</p>

# 目次

1. [プロジェクトについて](#プロジェクトについて)
2. [環境](#環境)
3. [ディレクトリ構成](#ディレクトリ構成)
4. [開発環境構築](#開発環境構築)
5. [トラブルシューティング](#トラブルシューティング)

<!-- プロジェクト名を記載 -->

## プロジェクト名

React Hooks

## プロジェクトについて

React Hooksについて勉強

◆使用するHooks一覧

| Hooks        | 概要                                                                      | 備考 |
| -------------| ----------                                                                | --------|
| useState     | 関数コンポーネントでstate管理（保持と更新）する、最も利用される                | [リンク](https://ja.react.dev/reference/react/useState)
| useEffect    | コンポーネントを外部システムと同期させる                                     | [リンク](https://ja.react.dev/reference/react/useEffect)
| useContext   | コンポーネントツリーの様々な階層からContextに収容されたデータへアクセスする     | [リンク](https://ja.react.dev/reference/react/useContext)
| useRef       | レンダリング不要な値の参照                                                  | [リンク](https://ja.react.dev/reference/react/useRef)
| useCallback  |  関数定義をキャッシュし再レンダリングをスキップする                           | [リンク](https://ja.react.dev/reference/react/useCallback)
| useMemo      | 計算結果をキャッシュし再レンダリングをスキップする                            | [リンク](https://ja.react.dev/reference/react/useMemo)
| useSound     | コンポーネント内でオーディオの制御を行う(別途use-soundのインストール要)        | [リンク](https://www.npmjs.com/package/use-sound)

<p align="right">(<a href="#top">トップへ</a>)</p>

## 環境

<!-- 言語、フレームワーク、ミドルウェア、インフラの一覧とバージョンを記載 -->

| 言語・フレームワーク  | バージョン |
| --------------------- | ---------- |
| Node.js               | 20.12.1    |
| React                 | 18.3.1     |
| TypeScript            | 5.4.5      |

その他のパッケージのバージョンは package.json を参照してください

<p align="right">(<a href="#top">トップへ</a>)</p>

## ディレクトリ構成

<!-- Treeコマンドを使ってディレクトリ構成を記載 -->

<p align="right">(<a href="#top">トップへ</a>)</p>

## 開発環境構築

<!-- コンテナの作成方法、パッケージのインストール方法など、開発環境構築に必要な情報を記載 -->

### node_moduleインストール

```bash
cd study
npm install
```

### サービス起動(Run Development)

```bash
cd study/src
npm run dev
```

### 動作確認

<http://127.0.0.1:8000> にアクセスできるか確認
アクセスできたら成功

## トラブルシューティング

### Missing script: "dev"

カレントディレクトリが正しくない可能性があります。

正しい位置に移動してください。（study/src）

<p align="right">(<a href="#top">トップへ</a>)</p>
