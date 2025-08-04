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
        title: "Git記法チートシート",
        url: "git-cheatsheet.html",
        category: "その他",
        keywords: ["git", "github", "記法", "チートシート", "ワークフロー", "markdown"],
        sections: [
            { heading: "Gitの基本ワークフロー", keywords: ["init", "clone", "config", "add", "commit", "diff"] },
            { heading: "ブランチ操作", keywords: ["branch", "checkout", "switch", "merge", "rebase"] },
            { heading: "リモートリポジトリとの連携", keywords: ["remote", "fetch", "pull", "push", "origin"] },
            { heading: "履歴の確認", keywords: ["log", "blame", "show", "--oneline", "--graph"] },
            { heading: "変更の取り消し", keywords: ["reset", "revert", "restore", "stash"] },
            { heading: "GitHub特有の記法", keywords: ["markdown", "#", "@", "mention", "issue", "pr"] },
            { heading: ".gitignoreの記法", keywords: ["gitignore", "ignore", "exclude", "wildcard"] }
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
    },
    {
        title: "Rubyメソッド一覧",
        url: "ruby-reference.html",
        category: "Ruby",
        keywords: ["ruby", "ルビー", "メソッド", "method", "クラス", "class", "string", "array", "hash"],
        sections: [
            { heading: "文字列（String）メソッド", keywords: ["length", "upcase", "downcase", "capitalize", "reverse", "strip", "gsub", "split"] },
            { heading: "配列（Array）メソッド", keywords: ["push", "pop", "shift", "unshift", "each", "map", "select", "sort", "uniq"] },
            { heading: "ハッシュ（Hash）メソッド", keywords: ["keys", "values", "has_key?", "merge", "delete", "each", "select"] },
            { heading: "数値（Numeric）メソッド", keywords: ["abs", "round", "ceil", "floor", "even?", "odd?", "times"] },
            { heading: "範囲（Range）メソッド", keywords: ["to_a", "include?", "each", "step", "first", "last"] },
            { heading: "ファイル（File）クラス", keywords: ["open", "read", "write", "exist?", "size", "delete"] },
            { heading: "時刻（Time）クラス", keywords: ["now", "strftime", "year", "month", "day", "hour"] },
            { heading: "Enumerable（列挙可能）モジュール", keywords: ["reduce", "inject", "all?", "any?", "count", "max", "min"] }
        ]
    },
    {
        title: "Ruby記法チートシート",
        url: "ruby-cheatsheet.html",
        category: "Ruby",
        keywords: ["ruby", "ルビー", "記法", "構文", "syntax", "チートシート", "cheatsheet"],
        sections: [
            { heading: "変数と定数", keywords: ["local", "instance", "@", "class", "@@", "global", "$", "constant"] },
            { heading: "データ型", keywords: ["string", "array", "hash", "symbol", "range", "nil", "boolean"] },
            { heading: "制御構文", keywords: ["if", "elsif", "else", "unless", "case", "when", "while", "until", "for", "each"] },
            { heading: "メソッド（関数）", keywords: ["def", "return", "yield", "block", "argument", "default", "keyword"] },
            { heading: "クラスとモジュール", keywords: ["class", "module", "initialize", "attr_accessor", "include", "extend", "inheritance"] },
            { heading: "エラー処理", keywords: ["begin", "rescue", "ensure", "raise", "retry", "exception"] },
            { heading: "ブロック・Proc・Lambda", keywords: ["block", "proc", "lambda", "yield", "call", "->"] },
            { heading: "正規表現", keywords: ["match", "=~", "gsub", "scan", "capture", "regex"] }
        ]
    },
    {
        title: "HTTPメソッド一覧",
        url: "http-reference.html",
        category: "HTTP",
        keywords: ["http", "hypertext", "transfer", "protocol", "メソッド", "method", "ステータスコード", "status code"],
        sections: [
            { heading: "主要なHTTPメソッド", keywords: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS", "CONNECT", "TRACE"] },
            { heading: "メソッドの特性", keywords: ["安全性", "safe", "冪等性", "idempotent", "キャッシュ可能", "cacheable"] },
            { heading: "2xx 成功レスポンス", keywords: ["200", "OK", "201", "Created", "204", "No Content", "206", "Partial Content"] },
            { heading: "3xx リダイレクション", keywords: ["301", "Moved Permanently", "302", "Found", "304", "Not Modified", "307", "Temporary Redirect"] },
            { heading: "4xx クライアントエラー", keywords: ["400", "Bad Request", "401", "Unauthorized", "403", "Forbidden", "404", "Not Found", "422", "429"] },
            { heading: "5xx サーバーエラー", keywords: ["500", "Internal Server Error", "502", "Bad Gateway", "503", "Service Unavailable", "504"] },
            { heading: "HTTPヘッダー", keywords: ["Accept", "Authorization", "Content-Type", "Cookie", "Host", "User-Agent", "Cache-Control", "ETag"] }
        ]
    },
    {
        title: "HTTP記法チートシート",
        url: "http-cheatsheet.html",
        category: "HTTP",
        keywords: ["http", "記法", "syntax", "チートシート", "cheatsheet", "api", "rest", "restful"],
        sections: [
            { heading: "HTTPリクエストの基本構造", keywords: ["request", "method", "url", "header", "body", "GET", "POST", "PUT", "DELETE"] },
            { heading: "HTTPレスポンスの基本構造", keywords: ["response", "status", "200", "404", "500", "header", "body"] },
            { heading: "RESTful API設計", keywords: ["rest", "restful", "resource", "crud", "endpoint", "url pattern"] },
            { heading: "認証・認可パターン", keywords: ["authentication", "authorization", "bearer", "token", "basic", "api key", "jwt"] },
            { heading: "Content-Typeとデータ形式", keywords: ["json", "form-data", "multipart", "application/json", "urlencoded"] },
            { heading: "CORS", keywords: ["cors", "cross-origin", "preflight", "options", "access-control"] },
            { heading: "キャッシュ制御", keywords: ["cache", "cache-control", "etag", "if-none-match", "max-age"] }
        ]
    },
    {
        title: "HTMLの歴史",
        url: "html-history.html",
        category: "HTML",
        keywords: ["html", "歴史", "history", "tim berners-lee", "www", "web", "進化", "evolution"],
        sections: [
            { heading: "HTMLの誕生", keywords: ["1989", "1991", "cern", "hypertext", "sgml", "www"] },
            { heading: "ブラウザ戦争", keywords: ["netscape", "internet explorer", "ie", "ブラウザ戦争", "browser wars"] },
            { heading: "標準化への道", keywords: ["w3c", "xhtml", "xml", "strict", "標準化"] },
            { heading: "HTML5革命", keywords: ["html5", "whatwg", "canvas", "video", "audio", "semantic"] },
            { heading: "Living Standard", keywords: ["living standard", "継続的進化", "whatwg", "w3c"] }
        ]
    },
    {
        title: "CSSの歴史",
        url: "css-history.html",
        category: "CSS",
        keywords: ["css", "歴史", "history", "håkon wium lie", "スタイルシート", "進化"],
        sections: [
            { heading: "CSSの誕生", keywords: ["1994", "1996", "håkon", "構造と表現の分離"] },
            { heading: "CSS2とブラウザ実装", keywords: ["css2", "positioning", "z-index", "ブラウザハック"] },
            { heading: "CSS3とモジュール化", keywords: ["css3", "モジュール", "ベンダープレフィックス", "webkit", "moz"] },
            { heading: "レスポンシブデザイン", keywords: ["responsive", "media query", "mobile first", "flexbox", "grid"] },
            { heading: "モダンCSS", keywords: ["custom properties", "css variables", "has", "container query", "houdini"] }
        ]
    },
    {
        title: "JavaScriptの歴史",
        url: "javascript-history.html",
        category: "JavaScript",
        keywords: ["javascript", "js", "歴史", "history", "brendan eich", "ecmascript", "進化"],
        sections: [
            { heading: "JavaScriptの誕生", keywords: ["1995", "netscape", "brendan eich", "10日間", "mocha", "livescript"] },
            { heading: "標準化への道", keywords: ["ecmascript", "es", "ecma-262", "jscript", "標準化"] },
            { heading: "Ajax革命", keywords: ["ajax", "2005", "gmail", "google maps", "jquery", "web 2.0"] },
            { heading: "Node.jsの登場", keywords: ["nodejs", "node", "v8", "ryan dahl", "サーバーサイド"] },
            { heading: "ES6革命", keywords: ["es6", "es2015", "arrow function", "class", "promise", "module"] },
            { heading: "現代のJavaScript", keywords: ["typescript", "react", "vue", "angular", "webpack", "npm"] }
        ]
    },
    {
        title: "HTTPの歴史",
        url: "http-history.html",
        category: "HTTP",
        keywords: ["http", "歴史", "history", "protocol", "プロトコル", "進化", "web"],
        sections: [
            { heading: "HTTP/0.9", keywords: ["http/0.9", "1991", "one line protocol", "get only"] },
            { heading: "HTTP/1.0", keywords: ["http/1.0", "1996", "header", "status code", "post"] },
            { heading: "HTTP/1.1", keywords: ["http/1.1", "1997", "persistent connection", "host header", "cache"] },
            { heading: "HTTP/2", keywords: ["http/2", "2015", "spdy", "binary", "multiplexing", "server push"] },
            { heading: "HTTP/3とQUIC", keywords: ["http/3", "quic", "udp", "2022", "0-rtt", "connection migration"] }
        ]
    },
    {
        title: "Gitの歴史",
        url: "git-history.html",
        category: "その他",
        keywords: ["git", "歴史", "history", "linus torvalds", "バージョン管理", "vcs", "進化"],
        sections: [
            { heading: "バージョン管理の歴史", keywords: ["sccs", "rcs", "cvs", "svn", "subversion", "centralized"] },
            { heading: "Gitの誕生", keywords: ["2005", "linus torvalds", "bitkeeper", "linux kernel", "distributed"] },
            { heading: "GitHubの登場", keywords: ["github", "2008", "social coding", "pull request", "fork"] },
            { heading: "Gitの普及", keywords: ["microsoft", "google", "enterprise", "adoption", "デファクトスタンダード"] },
            { heading: "現代のGit", keywords: ["gitlab", "bitbucket", "gitea", "sha-256", "partial clone", "vfs"] }
        ]
    },
    {
        title: "プログラミング命名規則",
        url: "naming-conventions.html",
        category: "その他",
        keywords: ["命名規則", "naming", "convention", "camelCase", "PascalCase", "snake_case", "kebab-case", "コーディング規約"],
        sections: [
            { heading: "命名規則の種類", keywords: ["camelCase", "キャメルケース", "PascalCase", "パスカルケース", "snake_case", "スネークケース", "kebab-case", "ケバブケース", "UPPER_SNAKE_CASE", "アッパースネークケース"] },
            { heading: "JavaScript / TypeScript", keywords: ["javascript", "typescript", "変数", "関数", "クラス", "定数", "react", "コンポーネント"] },
            { heading: "Python", keywords: ["python", "pep8", "変数", "関数", "クラス", "定数", "プライベート", "__init__"] },
            { heading: "Java", keywords: ["java", "変数", "メソッド", "クラス", "定数", "パッケージ", "interface"] },
            { heading: "C# (.NET)", keywords: ["csharp", "c#", ".net", "パブリック", "プライベート", "メソッド", "インターフェース", "IPascalCase"] },
            { heading: "Web開発", keywords: ["url", "css", "html", "data属性", "rest", "api", "エンドポイント"] },
            { heading: "データベース", keywords: ["database", "テーブル", "カラム", "インデックス", "外部キー", "fk", "idx"] },
            { heading: "ベストプラクティス", keywords: ["意味のある名前", "検索しやすい", "発音しやすい", "一貫性", "適切な長さ", "ブール値", "is", "has", "can", "should"] }
        ]
    },
    {
        title: "命名規則の具体例一覧",
        url: "naming-examples.html",
        category: "その他",
        keywords: ["命名例", "naming examples", "変数名", "関数名", "クラス名", "定数名", "具体例"],
        sections: [
            { heading: "基本的な変数名", keywords: ["userName", "userId", "emailAddress", "productName", "totalAmount", "user_name", "product_price"] },
            { heading: "ブール値（真偽値）変数", keywords: ["isActive", "isValid", "isLoggedIn", "hasPermission", "canEdit", "shouldUpdate", "is_active", "can_edit"] },
            { heading: "関数・メソッド名", keywords: ["getUser", "getAllUsers", "createUser", "updateUser", "deleteUser", "calculateTotal", "validateInput", "fetchData"] },
            { heading: "クラス名", keywords: ["User", "UserAccount", "Product", "Order", "UserService", "ProductController", "DatabaseConnection"] },
            { heading: "定数名", keywords: ["MAX_RETRY_COUNT", "DEFAULT_PORT", "API_BASE_URL", "TIMEOUT_DURATION", "STATUS_SUCCESS", "ERROR_UNAUTHORIZED"] },
            { heading: "ファイル・ディレクトリ名", keywords: ["app-config.json", "user-model.js", "user-service.test.js", "main-styles.css", "user-profile.jsx"] },
            { heading: "データベース関連", keywords: ["users", "orders", "order_items", "user_id", "created_at", "updated_at", "is_deleted"] },
            { heading: "Web開発特有の命名", keywords: ["/user-profile", "/password-reset", ".nav-bar", "#main-content", ".btn-primary", ".error-message"] },
            { heading: "イベントハンドラー", keywords: ["handleClick", "handleSubmit", "onButtonClick", "onFormSubmit", "onDataLoad"] },
            { heading: "環境変数", keywords: ["DATABASE_URL", "API_KEY", "SECRET_KEY", "PORT", "NODE_ENV", "LOG_LEVEL"] }
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
    "git-cheatsheet.html": "Git GitHub 記法 チートシート cheatsheet ワークフロー workflow markdown マークダウン gitignore stash rebase reset revert",
    "javascript-reference.html": "JavaScript JS ジャバスクリプト メソッド method プロパティ property API String 文字列 Array 配列 Number 数値 Math Date 日付 DOM Promise async await",
    "javascript-cheatsheet.html": "JavaScript JS ジャバスクリプト 記法 syntax 構文 チートシート cheatsheet let const var function class 関数 クラス if for while",
    "sql-reference.html": "SQL データベース database クエリ query コマンド command DDL DML CREATE ALTER DROP SELECT INSERT UPDATE DELETE JOIN INNER LEFT RIGHT GROUP BY HAVING COUNT SUM AVG トランザクション",
    "sql-cheatsheet.html": "SQL 記法 syntax 構文 チートシート cheatsheet SELECT FROM WHERE ORDER BY LIMIT CREATE TABLE INSERT UPDATE DELETE JOIN GROUP BY HAVING CASE WHEN トランザクション transaction",
    "linux-commands.html": "Linux リナックス コマンド command bash shell terminal ls cd pwd mkdir rm cp mv find grep ps top kill chmod chown ssh apt yum tar",
    "linux-cheatsheet.html": "Linux 記法 syntax 構文 チートシート bash shell コマンドライン command line pipe redirect | > >> < permission chmod 755 644 export alias",
    "ruby-reference.html": "Ruby ルビー メソッド method プロパティ クラス class String Array Hash Numeric Range File Time Enumerable length upcase downcase push pop map select each",
    "ruby-cheatsheet.html": "Ruby ルビー 記法 syntax 構文 チートシート cheatsheet 変数 variable 定数 constant if else class module def yield block proc lambda 正規表現 regex",
    "http-reference.html": "HTTP HyperText Transfer Protocol メソッド method ステータスコード status code GET POST PUT PATCH DELETE 200 OK 404 Not Found 500 Internal Server Error header ヘッダー",
    "http-cheatsheet.html": "HTTP 記法 syntax チートシート cheatsheet RESTful API REST request response authentication authorization CORS cache Content-Type JSON Bearer Token",
    "html-history.html": "HTML 歴史 history Tim Berners-Lee ティム・バーナーズ＝リー WWW World Wide Web CERN 1991 ブラウザ戦争 XHTML HTML5 Living Standard WHATWG W3C",
    "css-history.html": "CSS 歴史 history Håkon Wium Lie ホーコン・ウィウム・リー 構造と表現の分離 CSS1 CSS2 CSS3 Flexbox Grid レスポンシブデザイン ベンダープレフィックス",
    "javascript-history.html": "JavaScript JS 歴史 history Brendan Eich ブレンダン・アイク 10日間 Netscape ECMAScript Ajax jQuery Node.js ES6 ES2015 React Vue Angular TypeScript",
    "http-history.html": "HTTP 歴史 history プロトコル protocol HTTP/0.9 HTTP/1.0 HTTP/1.1 HTTP/2 HTTP/3 SPDY QUIC Tim Berners-Lee 進化 evolution",
    "git-history.html": "Git 歴史 history Linus Torvalds リーナス・トーバルズ バージョン管理 VCS BitKeeper 2005 分散型 distributed GitHub social coding pull request",
    "naming-conventions.html": "命名規則 naming convention コーディング規約 camelCase キャメルケース PascalCase パスカルケース snake_case スネークケース kebab-case ケバブケース UPPER_SNAKE_CASE アッパースネークケース JavaScript TypeScript Python Java C# 変数 関数 クラス 定数 メソッド Web開発 データベース ベストプラクティス",
    "naming-examples.html": "命名例 naming examples 変数名 関数名 クラス名 定数名 具体例 userName userId emailAddress productName isActive isValid hasPermission getUser createUser updateUser User UserAccount UserService MAX_RETRY_COUNT API_BASE_URL DATABASE_URL 比較表"
};