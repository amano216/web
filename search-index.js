// 検索インデックスデータ
const searchIndex = [
    {
        title: "HTMLタグ一覧",
        url: "index.html",
        category: "HTML",
        keywords: ["html", "タグ", "要素", "マークアップ"],
        sections: [
            { heading: "基本的な文書構造", keywords: ["DOCTYPE", "html", "head", "body"] },
            { heading: "メタデータ", keywords: ["title", "meta", "link", "style", "script"] },
            { heading: "セクショニング", keywords: ["header", "footer", "main", "nav", "article", "section", "aside", "div"] },
            { heading: "テキストコンテンツ", keywords: ["p", "a", "span", "strong", "em", "br", "hr", "blockquote", "ul", "ol", "li"] },
            { heading: "埋め込みコンテンツ", keywords: ["img", "video", "audio", "iframe"] },
            { heading: "テーブル", keywords: ["table", "thead", "tbody", "tr", "td", "th"] },
            { heading: "フォーム", keywords: ["form", "input", "textarea", "select", "button", "label"] }
        ]
    },
    {
        title: "HTML記法チートシート",
        url: "html-cheatsheet.html",
        category: "HTML",
        keywords: ["html", "記法", "構文", "テンプレート", "チートシート"],
        sections: [
            { heading: "HTML文書の基本構造", keywords: ["DOCTYPE", "テンプレート", "構造"] },
            { heading: "タグの記法ルール", keywords: ["開始タグ", "終了タグ", "空要素", "属性"] },
            { heading: "文字参照とエンティティ", keywords: ["エンティティ", "&lt;", "&gt;", "&amp;", "特殊文字"] },
            { heading: "グローバル属性", keywords: ["id", "class", "style", "title", "data-*"] },
            { heading: "メタタグの種類", keywords: ["charset", "viewport", "description", "og:"] },
            { heading: "フォーム要素のタイプ", keywords: ["text", "password", "email", "number", "date", "checkbox", "radio"] },
            { heading: "イベント属性", keywords: ["onclick", "onchange", "onsubmit", "onload"] },
            { heading: "ARIA属性", keywords: ["aria-label", "aria-hidden", "role", "アクセシビリティ"] }
        ]
    },
    {
        title: "CSSプロパティ一覧",
        url: "css-reference.html",
        category: "CSS",
        keywords: ["css", "プロパティ", "スタイル", "デザイン"],
        sections: [
            { heading: "テキストとフォント", keywords: ["color", "font-size", "font-family", "text-align", "line-height"] },
            { heading: "ボックスモデル", keywords: ["width", "height", "margin", "padding", "border", "box-sizing"] },
            { heading: "背景とボーダー", keywords: ["background", "background-color", "background-image", "border-radius"] },
            { heading: "配置とレイアウト", keywords: ["display", "position", "float", "clear", "z-index", "overflow"] },
            { heading: "Flexbox", keywords: ["flex", "justify-content", "align-items", "flex-direction", "flex-wrap"] },
            { heading: "Grid", keywords: ["grid", "grid-template", "grid-column", "grid-row", "gap"] },
            { heading: "アニメーション", keywords: ["transition", "animation", "transform", "@keyframes"] }
        ]
    },
    {
        title: "CSS記法チートシート",
        url: "css-cheatsheet.html",
        category: "CSS",
        keywords: ["css", "記法", "セレクタ", "チートシート"],
        sections: [
            { heading: "基本セレクタ", keywords: ["要素セレクタ", "クラス", "ID", "全称セレクタ"] },
            { heading: "結合子", keywords: ["子孫セレクタ", "子セレクタ", "隣接セレクタ", "一般兄弟"] },
            { heading: "属性セレクタ", keywords: ["[attr]", "[attr=value]", "[attr^=]", "[attr$=]"] },
            { heading: "擬似クラス", keywords: [":hover", ":active", ":focus", ":nth-child", ":first-child"] },
            { heading: "擬似要素", keywords: ["::before", "::after", "::first-line", "::selection"] },
            { heading: "単位", keywords: ["px", "em", "rem", "%", "vw", "vh"] },
            { heading: "色の指定", keywords: ["名前付き色", "hex", "rgb", "rgba", "hsl"] },
            { heading: "Flexbox", keywords: ["flex-container", "flex-item", "main-axis", "cross-axis"] },
            { heading: "Grid", keywords: ["grid-container", "grid-item", "grid-line", "grid-area"] },
            { heading: "メディアクエリ", keywords: ["@media", "min-width", "max-width", "レスポンシブ"] }
        ]
    },
    {
        title: "記号の読み方と使い方",
        url: "symbols-reference.html",
        category: "その他",
        keywords: ["記号", "読み方", "特殊文字", "シンボル"],
        sections: [
            { heading: "HTMLで使う記号", keywords: ["<", ">", "/", "=", "\"", "&", "!", "-"] },
            { heading: "CSSで使う記号", keywords: ["{", "}", ":", ";", ".", "#", "*", ",", "+", "~", "@"] },
            { heading: "URLやパスで使う記号", keywords: ["/", ".", "..", "?", "&", "#", ":", "//"] },
            { heading: "特殊な記号と用途", keywords: ["_", "-", "|", "^", "$", "%", "\\", "`"] },
            { heading: "エスケープが必要な記号", keywords: ["エンティティ", "&lt;", "&gt;", "&amp;", "&quot;"] },
            { heading: "プログラマーが使う読み方", keywords: ["バン", "ハッシュ", "スター", "パイプ", "チルダ"] }
        ]
    },
    {
        title: "JavaScriptメソッド・プロパティ一覧",
        url: "javascript-reference.html",
        category: "JavaScript",
        keywords: ["javascript", "js", "メソッド", "プロパティ", "API"],
        sections: [
            { heading: "文字列（String）メソッド", keywords: ["length", "charAt", "indexOf", "slice", "substring", "split", "replace", "toLowerCase", "toUpperCase"] },
            { heading: "配列（Array）メソッド", keywords: ["push", "pop", "shift", "unshift", "map", "filter", "reduce", "forEach", "find"] },
            { heading: "数値（Number）メソッド", keywords: ["parseInt", "parseFloat", "toFixed", "toPrecision", "isNaN", "isFinite"] },
            { heading: "Mathオブジェクト", keywords: ["Math.floor", "Math.ceil", "Math.round", "Math.max", "Math.min", "Math.random", "Math.sqrt"] },
            { heading: "日付（Date）メソッド", keywords: ["getFullYear", "getMonth", "getDate", "getHours", "getMinutes", "getSeconds", "setFullYear"] },
            { heading: "DOM操作メソッド", keywords: ["getElementById", "querySelector", "querySelectorAll", "addEventListener", "removeEventListener", "createElement", "appendChild"] },
            { heading: "非同期処理", keywords: ["Promise", "async", "await", "then", "catch", "finally", "fetch", "setTimeout", "setInterval"] }
        ]
    },
    {
        title: "JavaScript記法チートシート",
        url: "javascript-cheatsheet.html",
        category: "JavaScript",
        keywords: ["javascript", "js", "記法", "構文", "チートシート"],
        sections: [
            { heading: "変数と定数", keywords: ["let", "const", "var", "変数宣言", "スコープ"] },
            { heading: "データ型", keywords: ["number", "string", "boolean", "null", "undefined", "object", "array", "symbol"] },
            { heading: "演算子", keywords: ["+", "-", "*", "/", "%", "===", "!==", "&&", "||", "!", "??"] },
            { heading: "制御構文", keywords: ["if", "else", "switch", "for", "while", "do while", "break", "continue"] },
            { heading: "関数", keywords: ["function", "arrow function", "アロー関数", "return", "arguments", "default parameters"] },
            { heading: "クラス", keywords: ["class", "constructor", "extends", "super", "static", "getter", "setter"] },
            { heading: "モジュール", keywords: ["import", "export", "default", "module", "ES6 modules"] },
            { heading: "正規表現", keywords: ["RegExp", "test", "match", "replace", "\\d", "\\w", "\\s", "^", "$"] }
        ]
    },
    {
        title: "Git/GitHubコマンド",
        url: "git-commands.html",
        category: "その他",
        keywords: ["git", "github", "バージョン管理", "コマンド"],
        sections: [
            { heading: "初期設定", keywords: ["init", "config", "clone"] },
            { heading: "基本操作", keywords: ["status", "add", "commit", "diff", "rm", "mv"] },
            { heading: "履歴の確認", keywords: ["log", "show", "blame", "reflog"] },
            { heading: "ブランチ操作", keywords: ["branch", "checkout", "switch", "merge"] },
            { heading: "リモートリポジトリ", keywords: ["remote", "fetch", "pull", "push"] },
            { heading: "変更の取り消し", keywords: ["reset", "revert", "restore", "clean"] },
            { heading: "GitHub CLI", keywords: ["gh", "pr", "issue", "repo"] }
        ]
    }
];

// ページ内容のキャッシュ（実際のコンテンツから抽出）
const contentCache = {
    "index.html": "HTML HyperText Markup Language ハイパーテキスト マークアップ 言語 DOCTYPE 文書型宣言 head メタデータ body 本文 title タイトル meta メタ情報 link リンク style スタイル script スクリプト",
    "html-cheatsheet.html": "HTML5 テンプレート template 最小限 minimal 完全 complete DOCTYPE html lang charset viewport description keywords author favicon Open Graph Twitter",
    "css-reference.html": "CSS Cascading Style Sheets カスケーディング スタイルシート color 色 font フォント font-size 文字サイズ margin 外側余白 padding 内側余白 border 境界線",
    "css-cheatsheet.html": "セレクタ selector 要素 element クラス class ID 属性 attribute 擬似クラス pseudo-class 擬似要素 pseudo-element hover active focus before after",
    "symbols-reference.html": "記号 symbol 読み方 小なり less than 大なり greater than スラッシュ slash イコール equals ダブルクォート double quote アンパサンド ampersand",
    "git-commands.html": "Git GitHub バージョン管理 version control init 初期化 add 追加 commit コミット push プッシュ pull プル branch ブランチ merge マージ",
    "javascript-reference.html": "JavaScript JS ジャバスクリプト メソッド method プロパティ property API String 文字列 Array 配列 Number 数値 Math Date 日付 DOM Promise async await",
    "javascript-cheatsheet.html": "JavaScript JS ジャバスクリプト 記法 syntax 構文 チートシート cheatsheet let const var function class 関数 クラス if for while"
};