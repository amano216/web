// 検索インデックスデータ
const searchIndex = [
    {
        title: "HTMLタグ一覧",
        url: "index.html",
        category: "HTML",
        keywords: ["html", "タグ", "要素", "マークアップ", "<a>", "<img>", "<div>", "<span>", "<p>", "<h1>", "<table>", "<form>"],
        sections: [
            { heading: "基本的な文書構造", keywords: ["DOCTYPE", "html", "head", "body"] },
            { heading: "メタデータ", keywords: ["title", "meta", "link", "style", "script"] },
            { heading: "セクショニング", keywords: ["header", "footer", "main", "nav", "article", "section", "aside", "div"] },
            { heading: "テキストコンテンツ", keywords: ["p", "a", "span", "strong", "em", "br", "hr", "blockquote", "ul", "ol", "li", "<p>", "<a>", "<span>", "<strong>", "<em>", "<br>", "<hr>"] },
            { heading: "<a>タグの属性", keywords: ["href", "target", "download", "rel", "type", "hreflang", "ping", "referrerpolicy", "_blank", "_self", "_parent", "_top", "nofollow", "noopener", "noreferrer"] },
            { heading: "埋め込みコンテンツ", keywords: ["img", "video", "audio", "iframe", "<img>", "<video>", "<audio>", "<iframe>"] },
            { heading: "<img>タグの属性", keywords: ["src", "alt", "width", "height", "loading", "decoding", "crossorigin", "referrerpolicy", "sizes", "srcset", "usemap", "lazy", "eager", "async", "sync", "anonymous", "use-credentials"] },
            { heading: "テーブル", keywords: ["table", "thead", "tbody", "tr", "td", "th"] },
            { heading: "フォーム", keywords: ["form", "input", "textarea", "select", "button", "label", "<form>", "<input>", "<textarea>", "<select>", "<button>", "<label>"] },
            { heading: "フォーム属性", keywords: ["action", "method", "name", "value", "placeholder", "required", "disabled", "readonly", "maxlength", "minlength", "pattern", "autocomplete", "autofocus"] }
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
            { heading: "グローバル属性", keywords: ["id", "class", "style", "title", "data-*", "lang", "dir", "tabindex", "contenteditable", "hidden", "draggable", "spellcheck"] },
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
    },
    {
        title: "SQLコマンド一覧",
        url: "sql-reference.html",
        category: "SQL",
        keywords: ["sql", "database", "データベース", "クエリ", "query", "select", "insert", "update", "delete"],
        sections: [
            { heading: "データ定義言語（DDL）", keywords: ["create", "alter", "drop", "truncate", "table", "index"] },
            { heading: "データ操作言語（DML）", keywords: ["select", "insert", "update", "delete", "from", "where", "order by"] },
            { heading: "結合（JOIN）操作", keywords: ["join", "inner join", "left join", "right join", "full outer join", "on"] },
            { heading: "集計関数", keywords: ["count", "sum", "avg", "max", "min", "group by", "having"] },
            { heading: "サブクエリと共通テーブル式", keywords: ["in", "exists", "any", "all", "with", "cte", "recursive"] },
            { heading: "トランザクション制御", keywords: ["begin", "commit", "rollback", "transaction", "savepoint"] }
        ]
    },
    {
        title: "SQL記法チートシート",
        url: "sql-cheatsheet.html",
        category: "SQL",
        keywords: ["sql", "記法", "構文", "syntax", "チートシート", "クエリ", "query"],
        sections: [
            { heading: "基本的なSELECT文", keywords: ["select", "from", "where", "order by", "limit", "distinct"] },
            { heading: "テーブルの作成と管理", keywords: ["create table", "primary key", "foreign key", "not null", "default"] },
            { heading: "データの挿入・更新・削除", keywords: ["insert into", "values", "update", "set", "delete from"] },
            { heading: "結合（JOIN）の種類と使い方", keywords: ["inner join", "left join", "right join", "cross join", "using"] },
            { heading: "集計とグループ化", keywords: ["group by", "having", "count", "sum", "avg", "window function"] },
            { heading: "条件分岐（CASE文）", keywords: ["case", "when", "then", "else", "end"] },
            { heading: "インデックスの作成と管理", keywords: ["create index", "drop index", "unique index", "explain"] },
            { heading: "トランザクション処理", keywords: ["start transaction", "commit", "rollback", "savepoint"] }
        ]
    },
    {
        title: "Linuxコマンド一覧",
        url: "linux-commands.html",
        category: "その他",
        keywords: ["linux", "リナックス", "コマンド", "command", "bash", "shell", "terminal"],
        sections: [
            { heading: "ファイル・ディレクトリ操作", keywords: ["ls", "cd", "pwd", "mkdir", "rm", "cp", "mv", "touch", "ln"] },
            { heading: "ファイル検索・情報取得", keywords: ["find", "grep", "which", "locate", "file", "stat", "wc", "du", "df"] },
            { heading: "プロセス管理", keywords: ["ps", "top", "htop", "kill", "killall", "jobs", "bg", "fg", "nohup"] },
            { heading: "ユーザー・権限管理", keywords: ["whoami", "id", "su", "sudo", "useradd", "passwd", "chmod", "chown"] },
            { heading: "ネットワーク関連", keywords: ["ping", "ifconfig", "ip", "netstat", "ss", "curl", "wget", "ssh", "scp"] },
            { heading: "システム情報・管理", keywords: ["uname", "hostname", "date", "uptime", "free", "mount", "apt", "yum"] },
            { heading: "アーカイブ・圧縮", keywords: ["tar", "gzip", "zip", "unzip", "bzip2", "xz"] },
            { heading: "テキスト処理", keywords: ["sed", "awk", "cut", "sort", "uniq", "tr", "tee", "xargs"] }
        ]
    },
    {
        title: "Linux記法チートシート",
        url: "linux-cheatsheet.html",
        category: "その他",
        keywords: ["linux", "記法", "構文", "syntax", "チートシート", "bash", "shell", "コマンドライン"],
        sections: [
            { heading: "基本的なコマンド構文", keywords: ["command", "option", "argument", "pipe", "redirect", "|", ">", ">>", "<"] },
            { heading: "ファイル・ディレクトリ操作", keywords: ["path", "絶対パス", "相対パス", "~", "..", ".", "ワイルドカード"] },
            { heading: "ワイルドカード（グロブパターン）", keywords: ["*", "?", "[", "]", "{}", "glob", "pattern"] },
            { heading: "リダイレクトとパイプ", keywords: ["|", ">", ">>", "<", "2>", "2>&1", "pipe", "redirect"] },
            { heading: "権限とパーミッション", keywords: ["rwx", "755", "644", "chmod", "chown", "permission"] },
            { heading: "プロセス管理", keywords: ["&", "bg", "fg", "jobs", "nohup", "kill", "ps"] },
            { heading: "シェルスクリプトの基礎", keywords: ["#!/bin/bash", "variable", "if", "for", "while", "function"] },
            { heading: "環境変数とエイリアス", keywords: ["export", "PATH", "alias", "source", ".bashrc", ".zshrc"] }
        ]
    }
];

// ページ内容のキャッシュ（実際のコンテンツから抽出）
const contentCache = {
    "index.html": "HTML HyperText Markup Language ハイパーテキスト マークアップ 言語 DOCTYPE 文書型宣言 head メタデータ body 本文 title タイトル meta メタ情報 link リンク style スタイル script スクリプト href src alt target download rel width height loading crossorigin referrerpolicy",
    "html-cheatsheet.html": "HTML5 テンプレート template 最小限 minimal 完全 complete DOCTYPE html lang charset viewport description keywords author favicon Open Graph Twitter 属性 attribute href src alt class id style",
    "css-reference.html": "CSS Cascading Style Sheets カスケーディング スタイルシート color 色 font フォント font-size 文字サイズ margin 外側余白 padding 内側余白 border 境界線",
    "css-cheatsheet.html": "セレクタ selector 要素 element クラス class ID 属性 attribute 擬似クラス pseudo-class 擬似要素 pseudo-element hover active focus before after",
    "symbols-reference.html": "記号 symbol 読み方 小なり less than 大なり greater than スラッシュ slash イコール equals ダブルクォート double quote アンパサンド ampersand",
    "git-commands.html": "Git GitHub バージョン管理 version control init 初期化 add 追加 commit コミット push プッシュ pull プル branch ブランチ merge マージ",
    "javascript-reference.html": "JavaScript JS ジャバスクリプト メソッド method プロパティ property API String 文字列 Array 配列 Number 数値 Math Date 日付 DOM Promise async await",
    "javascript-cheatsheet.html": "JavaScript JS ジャバスクリプト 記法 syntax 構文 チートシート cheatsheet let const var function class 関数 クラス if for while",
    "sql-reference.html": "SQL データベース database クエリ query コマンド command DDL DML CREATE ALTER DROP SELECT INSERT UPDATE DELETE JOIN INNER LEFT RIGHT GROUP BY HAVING COUNT SUM AVG トランザクション",
    "sql-cheatsheet.html": "SQL 記法 syntax 構文 チートシート cheatsheet SELECT FROM WHERE ORDER BY LIMIT CREATE TABLE INSERT UPDATE DELETE JOIN GROUP BY HAVING CASE WHEN トランザクション transaction",
    "linux-commands.html": "Linux リナックス コマンド command bash shell terminal ls cd pwd mkdir rm cp mv find grep ps top kill chmod chown ssh apt yum tar",
    "linux-cheatsheet.html": "Linux 記法 syntax 構文 チートシート bash shell コマンドライン command line pipe redirect | > >> < permission chmod 755 644 export alias"
};