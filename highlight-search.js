// 検索結果からのハイライト機能
class HighlightSearch {
    constructor() {
        this.highlightClass = 'search-highlight';
        this.currentHighlight = 0;
        this.totalHighlights = 0;
        this.searchQuery = '';
        this.init();
    }

    init() {
        // URLパラメータから検索クエリを取得
        const urlParams = new URLSearchParams(window.location.search);
        this.searchQuery = urlParams.get('q');
        
        if (this.searchQuery) {
            // ページ読み込み完了後にハイライト実行
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => {
                    this.highlightSearchTerms();
                });
            } else {
                this.highlightSearchTerms();
            }
            
            // ナビゲーションバーを作成
            this.createHighlightNavigation();
        }
    }

    highlightSearchTerms() {
        const query = this.searchQuery.toLowerCase();
        const queryWords = query.split(/\s+/).filter(word => word.length > 0);
        
        // 検索対象の要素を取得
        const contentElements = document.querySelectorAll('table, p, h1, h2, h3, h4, h5, h6, li');
        
        contentElements.forEach(element => {
            this.highlightInElement(element, queryWords);
        });
        
        // ハイライトされた要素を数える
        const highlights = document.querySelectorAll(`.${this.highlightClass}`);
        this.totalHighlights = highlights.length;
        
        if (this.totalHighlights > 0) {
            // 最初のハイライトにスクロール
            this.navigateToHighlight(0);
            this.updateNavigationInfo();
        }
    }

    highlightInElement(element, queryWords) {
        // テキストノードのみを処理
        const walker = document.createTreeWalker(
            element,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode: (node) => {
                    // スクリプトやスタイル要素のテキストは除外
                    const parent = node.parentElement;
                    if (parent.tagName === 'SCRIPT' || parent.tagName === 'STYLE') {
                        return NodeFilter.FILTER_REJECT;
                    }
                    return NodeFilter.FILTER_ACCEPT;
                }
            },
            false
        );

        const textNodes = [];
        let node;
        while (node = walker.nextNode()) {
            if (node.nodeValue.trim()) {
                textNodes.push(node);
            }
        }

        textNodes.forEach(textNode => {
            const text = textNode.nodeValue;
            let highlightedText = text;
            let hasMatch = false;

            // 各検索ワードをハイライト
            queryWords.forEach(word => {
                const regex = new RegExp(`(${this.escapeRegExp(word)})`, 'gi');
                if (regex.test(highlightedText)) {
                    hasMatch = true;
                    highlightedText = highlightedText.replace(regex, 
                        `<span class="${this.highlightClass}" data-highlight-index="">$1</span>`);
                }
            });

            if (hasMatch) {
                const span = document.createElement('span');
                span.innerHTML = highlightedText;
                textNode.parentNode.replaceChild(span, textNode);
            }
        });
    }

    createHighlightNavigation() {
        const navHTML = `
            <div id="highlight-navigation" class="highlight-navigation">
                <button id="highlight-close" class="highlight-close">✕</button>
                <div class="highlight-info">
                    <span id="highlight-current">0</span> / <span id="highlight-total">0</span>
                </div>
                <div class="highlight-controls">
                    <button id="highlight-prev" class="highlight-nav-btn">↑</button>
                    <button id="highlight-next" class="highlight-nav-btn">↓</button>
                </div>
                <div class="highlight-query">「${this.escapeHtml(this.searchQuery)}」</div>
            </div>
        `;

        document.body.insertAdjacentHTML('afterbegin', navHTML);

        // イベントリスナーを設定
        document.getElementById('highlight-close').addEventListener('click', () => {
            this.clearHighlights();
        });

        document.getElementById('highlight-prev').addEventListener('click', () => {
            this.navigateToPrevious();
        });

        document.getElementById('highlight-next').addEventListener('click', () => {
            this.navigateToNext();
        });

        // キーボードショートカット
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.clearHighlights();
            } else if (e.key === 'F3' || (e.ctrlKey && e.key === 'g')) {
                e.preventDefault();
                if (e.shiftKey) {
                    this.navigateToPrevious();
                } else {
                    this.navigateToNext();
                }
            }
        });
    }

    navigateToNext() {
        if (this.totalHighlights === 0) return;
        this.currentHighlight = (this.currentHighlight + 1) % this.totalHighlights;
        this.navigateToHighlight(this.currentHighlight);
    }

    navigateToPrevious() {
        if (this.totalHighlights === 0) return;
        this.currentHighlight = (this.currentHighlight - 1 + this.totalHighlights) % this.totalHighlights;
        this.navigateToHighlight(this.currentHighlight);
    }

    navigateToHighlight(index) {
        const highlights = document.querySelectorAll(`.${this.highlightClass}`);
        
        // すべてのハイライトから現在のマークを削除
        highlights.forEach(el => {
            el.classList.remove('current-highlight');
        });

        if (highlights[index]) {
            // 現在のハイライトにマークを追加
            highlights[index].classList.add('current-highlight');
            
            // スクロールして表示
            highlights[index].scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });

            this.updateNavigationInfo();
        }
    }

    updateNavigationInfo() {
        const currentEl = document.getElementById('highlight-current');
        const totalEl = document.getElementById('highlight-total');
        
        if (currentEl && totalEl) {
            currentEl.textContent = this.totalHighlights > 0 ? this.currentHighlight + 1 : 0;
            totalEl.textContent = this.totalHighlights;
        }
    }

    clearHighlights() {
        // ハイライトを削除
        const highlights = document.querySelectorAll(`.${this.highlightClass}`);
        highlights.forEach(highlight => {
            const parent = highlight.parentNode;
            parent.replaceChild(document.createTextNode(highlight.textContent), highlight);
            parent.normalize();
        });

        // ナビゲーションを削除
        const nav = document.getElementById('highlight-navigation');
        if (nav) {
            nav.remove();
        }

        // URLパラメータを削除
        const url = new URL(window.location);
        url.searchParams.delete('q');
        window.history.replaceState({}, '', url);

        // 変数をリセット
        this.searchQuery = '';
        this.currentHighlight = 0;
        this.totalHighlights = 0;
    }

    escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// スタイルを追加
const highlightStyles = `
    <style>
    .search-highlight {
        background-color: #ffeb3b;
        color: #000;
        padding: 2px 0;
        border-radius: 2px;
    }
    
    .search-highlight.current-highlight {
        background-color: #ff9800;
        color: #fff;
    }
    
    .highlight-navigation {
        position: fixed;
        top: 70px;
        right: 20px;
        background-color: var(--background-secondary, #262626);
        border: 1px solid var(--background-modifier-border, #333);
        border-radius: 8px;
        padding: 1rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        min-width: 200px;
    }
    
    .highlight-close {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        background: none;
        border: none;
        color: var(--text-muted, #999);
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0.25rem;
        line-height: 1;
    }
    
    .highlight-close:hover {
        color: var(--text-normal, #dcddde);
    }
    
    .highlight-info {
        text-align: center;
        font-size: 1.1rem;
        color: var(--text-normal, #dcddde);
    }
    
    .highlight-controls {
        display: flex;
        gap: 0.5rem;
        justify-content: center;
    }
    
    .highlight-nav-btn {
        padding: 0.5rem 1rem;
        background-color: var(--background-primary, #202020);
        border: 1px solid var(--background-modifier-border, #333);
        border-radius: 4px;
        color: var(--text-normal, #dcddde);
        cursor: pointer;
        font-size: 1rem;
        transition: all 0.2s;
    }
    
    .highlight-nav-btn:hover {
        background-color: var(--background-modifier-hover, rgba(255, 255, 255, 0.05));
        border-color: var(--text-accent, #7f6df2);
    }
    
    .highlight-query {
        text-align: center;
        font-size: 0.85rem;
        color: var(--text-muted, #999);
        margin-top: 0.5rem;
        padding-top: 0.75rem;
        border-top: 1px solid var(--background-modifier-border, #333);
    }
    
    @media (max-width: 768px) {
        .highlight-navigation {
            top: auto;
            bottom: 20px;
            right: 20px;
            left: 20px;
            max-width: 300px;
            margin: 0 auto;
        }
    }
    </style>
`;

document.head.insertAdjacentHTML('beforeend', highlightStyles);

// 初期化
new HighlightSearch();