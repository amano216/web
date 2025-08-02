// ナビゲーションバーの検索機能
class NavSearch {
    constructor() {
        this.searchInput = null;
        this.suggestionsContainer = null;
        this.searchTimeout = null;
        this.selectedIndex = -1;
        this.suggestions = [];
        this.init();
    }

    init() {
        this.createSearchElements();
        this.bindEvents();
    }

    createSearchElements() {
        // 検索バーのHTML構造を各ページのナビゲーションに追加
        const navContainers = document.querySelectorAll('.nav-container');
        
        navContainers.forEach(container => {
            // モバイルメニューボタンの前に検索バーを挿入
            const mobileMenuBtn = container.querySelector('.mobile-menu-button');
            
            const searchHTML = `
                <div class="nav-search-wrapper">
                    <input type="text" class="nav-search-input" placeholder="検索..." autocomplete="off">
                    <span class="nav-search-icon">🔍</span>
                    <div class="search-suggestions" id="search-suggestions"></div>
                </div>
            `;
            
            if (mobileMenuBtn) {
                mobileMenuBtn.insertAdjacentHTML('beforebegin', searchHTML);
            } else {
                container.insertAdjacentHTML('beforeend', searchHTML);
            }
        });

        this.searchInput = document.querySelector('.nav-search-input');
        this.suggestionsContainer = document.getElementById('search-suggestions');
    }

    bindEvents() {
        if (!this.searchInput) return;

        // 入力イベント
        this.searchInput.addEventListener('input', () => {
            clearTimeout(this.searchTimeout);
            this.searchTimeout = setTimeout(() => {
                this.performSearch();
            }, 150); // より速いレスポンス
        });

        // フォーカスイベント
        this.searchInput.addEventListener('focus', () => {
            if (this.searchInput.value.trim()) {
                this.performSearch();
            }
        });

        // キーボード操作
        this.searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                this.navigateSuggestions(1);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                this.navigateSuggestions(-1);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                this.selectSuggestion();
            } else if (e.key === 'Escape') {
                this.closeSuggestions();
                this.searchInput.blur();
            }
        });

        // 外側クリックで閉じる
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-search-wrapper')) {
                this.closeSuggestions();
            }
        });
    }

    performSearch() {
        const query = this.searchInput.value.trim().toLowerCase();

        if (!query) {
            this.closeSuggestions();
            return;
        }

        const results = this.searchInIndex(query);
        this.displaySuggestions(results, query);
    }

    searchInIndex(query) {
        const results = [];
        const queryWords = query.split(/\s+/);

        searchIndex.forEach(page => {
            let score = 0;
            const matches = [];

            // ページタイトルでの一致
            const titleLower = page.title.toLowerCase();
            if (titleLower.includes(query)) {
                score += 10;
                matches.push({ type: 'title', text: page.title });
            }

            // キーワードでの一致
            queryWords.forEach(word => {
                page.keywords.forEach(keyword => {
                    if (keyword.toLowerCase().includes(word)) {
                        score += 3;
                    }
                });
            });

            // セクションでの一致
            page.sections.forEach(section => {
                const sectionLower = section.heading.toLowerCase();
                if (sectionLower.includes(query)) {
                    score += 2;
                    matches.push({ type: 'section', text: section.heading });
                }

                queryWords.forEach(word => {
                    section.keywords.forEach(keyword => {
                        if (keyword.toLowerCase().includes(word)) {
                            score += 1;
                            if (!matches.find(m => m.text === section.heading)) {
                                matches.push({ type: 'section', text: section.heading });
                            }
                        }
                    });
                });
            });

            if (score > 0) {
                results.push({
                    page: page,
                    score: score,
                    matches: matches.slice(0, 2) // 最初の2つのマッチのみ
                });
            }
        });

        // スコアの高い順にソート
        results.sort((a, b) => b.score - a.score);

        return results.slice(0, 5); // 上位5件まで
    }

    displaySuggestions(results, query) {
        if (results.length === 0) {
            this.suggestionsContainer.innerHTML = `
                <div class="no-suggestions">
                    「${this.escapeHtml(query)}」に一致する結果が見つかりませんでした
                </div>
            `;
            this.suggestionsContainer.classList.add('active');
            this.suggestions = [];
            return;
        }

        const suggestionsHTML = results.map((result, index) => {
            const icon = result.page.category === 'HTML' ? 'H' : 
                        result.page.category === 'CSS' ? 'C' : 
                        result.page.category === 'その他' ? '他' : '?';

            const matchText = result.matches[0] ? 
                this.highlightQuery(result.matches[0].text, query) : '';

            return `
                <div class="suggestion-item" data-index="${index}" data-url="${result.page.url}">
                    <div class="suggestion-icon">${icon}</div>
                    <div class="suggestion-content">
                        <div class="suggestion-title">${this.highlightQuery(result.page.title, query)}</div>
                        ${matchText ? `<div class="suggestion-match">${matchText}</div>` : ''}
                    </div>
                    <div class="suggestion-category">${result.page.category}</div>
                </div>
            `;
        }).join('');

        // すべての結果を見るオプション
        const viewAllHTML = `
            <div class="view-all-results" data-action="view-all">
                すべての検索結果を見る →
            </div>
        `;

        this.suggestionsContainer.innerHTML = suggestionsHTML + viewAllHTML;
        this.suggestionsContainer.classList.add('active');
        this.suggestions = results;
        this.selectedIndex = -1;

        // クリックイベントを設定
        this.suggestionsContainer.querySelectorAll('.suggestion-item').forEach(item => {
            item.addEventListener('click', () => {
                const url = item.dataset.url;
                if (url) {
                    window.location.href = url;
                }
            });
        });

        // すべての結果を見るボタン
        const viewAllBtn = this.suggestionsContainer.querySelector('[data-action="view-all"]');
        if (viewAllBtn) {
            viewAllBtn.addEventListener('click', () => {
                // グローバル検索モーダルを開く
                if (window.globalSearch) {
                    window.globalSearch.openSearch();
                    window.globalSearch.searchInput.value = query;
                    window.globalSearch.performSearch();
                }
            });
        }
    }

    navigateSuggestions(direction) {
        const items = this.suggestionsContainer.querySelectorAll('.suggestion-item');
        if (items.length === 0) return;

        // 現在の選択を解除
        if (this.selectedIndex >= 0 && items[this.selectedIndex]) {
            items[this.selectedIndex].classList.remove('active');
        }

        // 新しい選択
        this.selectedIndex += direction;
        if (this.selectedIndex < 0) this.selectedIndex = items.length - 1;
        if (this.selectedIndex >= items.length) this.selectedIndex = 0;

        items[this.selectedIndex].classList.add('active');
        items[this.selectedIndex].scrollIntoView({ block: 'nearest' });
    }

    selectSuggestion() {
        if (this.selectedIndex >= 0 && this.suggestions[this.selectedIndex]) {
            const url = this.suggestions[this.selectedIndex].page.url;
            window.location.href = url;
        } else if (this.searchInput.value.trim()) {
            // 選択がない場合は全検索を開く
            if (window.globalSearch) {
                window.globalSearch.openSearch();
                window.globalSearch.searchInput.value = this.searchInput.value;
                window.globalSearch.performSearch();
            }
        }
    }

    closeSuggestions() {
        this.suggestionsContainer.classList.remove('active');
        this.selectedIndex = -1;
    }

    highlightQuery(text, query) {
        const escaped = this.escapeHtml(text);
        const queryWords = query.split(/\s+/).filter(word => word.length > 0);
        let highlighted = escaped;

        queryWords.forEach(word => {
            const regex = new RegExp(`(${this.escapeRegExp(word)})`, 'gi');
            highlighted = highlighted.replace(regex, '<mark>$1</mark>');
        });

        return highlighted;
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
}

// グローバル検索の参照を保存
window.globalSearch = null;

// DOMContentLoadedで初期化
document.addEventListener('DOMContentLoaded', () => {
    new NavSearch();
});