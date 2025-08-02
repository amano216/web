# CLAUDE.md

このファイルは、Claude Code (claude.ai/code) がこのリポジトリで作業する際のガイドラインを提供します。

## プロジェクト概要

HTMLタグの包括的なガイドを提供する静的HTML参考資料です。プロジェクトの構成：

- `index.html` - HTMLタグの実例を紹介するインタラクティブなWebページ
- `obsidian-note.html` - Obsidianノート風にスタイリングされたHTML教育資料

## アーキテクチャ

インラインCSSスタイリングを使用したスタンドアロンHTMLファイル。主な設計方針：

- Obsidianノートアプリに着想を得たダークテーマ
- HTMLタグ情報を整理するための表構造
- アクセシビリティを考慮したセマンティックHTML構造
- 外部依存関係やビルドプロセスなし

## 開発方法

静的HTMLプロジェクトのため、ビルドプロセスは不要です。ファイルの閲覧方法：
- HTMLファイルをブラウザで直接開く
- サーバーやコンパイルは不要

## ファイル構成

```
/Users/emma/Desktop/web/
├── index.html          # インタラクティブなHTML実例ページ
├── obsidian-note.html  # HTMLリファレンスガイド（Obsidianスタイル）
└── CLAUDE.md          # このファイル
```

## リーダブルコードの原則

### 1. 命名規則

**意味のある名前を使用する**
```html
<!-- 良い例 -->
<section id="navigation-menu">
<div class="user-profile-card">

<!-- 悪い例 -->
<section id="nav">
<div class="card1">
```

**一貫性のある命名パターン**
- ID: ケバブケース（kebab-case）を使用 `id="main-content"`
- クラス: ケバブケースを使用 `class="error-message"`
- 日本語を避け、英語で記述する

### 2. HTMLの構造化

**セマンティックHTMLを優先**
```html
<!-- 良い例 -->
<nav>
  <ul>
    <li><a href="#home">ホーム</a></li>
  </ul>
</nav>

<!-- 悪い例 -->
<div class="navigation">
  <div class="nav-item"><span>ホーム</span></div>
</div>
```

**適切なインデントと階層構造**
```html
<!-- 良い例：2スペースインデント -->
<article>
  <header>
    <h1>記事タイトル</h1>
  </header>
  <section>
    <p>内容</p>
  </section>
</article>
```

### 3. CSSの整理

**プロパティの論理的なグループ化**
```css
/* 良い例：関連プロパティをグループ化 */
.card {
  /* レイアウト */
  display: flex;
  position: relative;
  
  /* ボックスモデル */
  width: 300px;
  padding: 20px;
  margin: 10px;
  
  /* 視覚的スタイル */
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  
  /* タイポグラフィ */
  font-size: 16px;
  line-height: 1.5;
}
```

**CSS変数を使用した一貫性**
```css
:root {
  /* カラーパレット */
  --primary-color: #3498db;
  --text-color: #333;
  --background-color: #f5f5f5;
  
  /* スペーシング */
  --spacing-small: 8px;
  --spacing-medium: 16px;
  --spacing-large: 24px;
}
```

### 4. コメントのベストプラクティス

**なぜそうしたかを説明する**
```html
<!-- フォームのautocompleteを無効化：セキュリティ要件のため -->
<input type="password" autocomplete="off">

<!-- IE11対応のためのフォールバック -->
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="説明">
</picture>
```

### 5. アクセシビリティ

**必須の属性を忘れない**
```html
<!-- 良い例 -->
<img src="logo.png" alt="会社のロゴ">
<label for="email">メールアドレス</label>
<input type="email" id="email" name="email" required>

<!-- ARIAラベルの適切な使用 -->
<button aria-label="メニューを開く">
  <svg><!-- ハンバーガーアイコン --></svg>
</button>
```

### 6. パフォーマンスの考慮

**リソースの最適化**
```html
<!-- 画像の遅延読み込み -->
<img src="image.jpg" loading="lazy" alt="説明">

<!-- 適切なメタタグ -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### 7. コードの再利用性

**コンポーネント思考**
```css
/* 再利用可能なユーティリティクラス */
.text-center { text-align: center; }
.mt-1 { margin-top: var(--spacing-small); }
.mt-2 { margin-top: var(--spacing-medium); }

/* コンポーネントクラス */
.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
}
```

### 8. エラー処理とフォールバック

**プログレッシブエンハンスメント**
```html
<!-- CSSが読み込めない場合でも機能する -->
<noscript>
  <style>
    .js-only { display: none !important; }
  </style>
</noscript>
```

## コーディング規約

### HTML
- DOCTYPE宣言は必須: `<!DOCTYPE html>`
- 言語属性を指定: `<html lang="ja">`
- 文字エンコーディング: `<meta charset="UTF-8">`
- 終了タグは省略しない（自己完結型要素を除く）
- 属性値は必ずダブルクォートで囲む
- ブール属性は値を省略: `<input type="checkbox" checked>`

### CSS
- セレクタは具体的すぎず、汎用的すぎず
- !importantの使用は最小限に
- ベンダープレフィックスは必要な場合のみ
- メディアクエリはモバイルファーストで記述

### 一般的な原則
- DRY原則（Don't Repeat Yourself）を守る
- KISS原則（Keep It Simple, Stupid）を実践
- YAGNI原則（You Aren't Gonna Need It）を意識
- 早すぎる最適化を避ける

## 注意事項

- すべてのコンテンツは日本語
- インラインCSSを使用（外部ファイル化も検討可能）
- JavaScriptフレームワークや依存関係なし
- 現在はバージョン管理されていない（Git導入を推奨）