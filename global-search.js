// グローバル検索機能
class GlobalSearch {
    constructor() {
        this.searchInput = null;
        this.resultsContainer = null;
        this.searchModal = null;
        this.isOpen = false;
        this.searchTimeout = null;
        this.init();
    }

    init() {
        this.createSearchModal();
        this.bindEvents();
    }

    createSearchModal() {
        // 検索モーダルのHTML構造を作成
        const modalHTML = `
            <div id="global-search-modal" class="global-search-modal">
                <div class="search-modal-content">
                    <div class="search-header">
                        <input type="text" id="global-search-input" class="global-search-input" 
                               placeholder="すべてのページから検索... (Ctrl+K または Cmd+K)">
                        <button class="search-close-btn" id="search-close-btn">✕</button>
                    </div>
                    <div id="global-search-results" class="global-search-results"></div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);

        this.searchModal = document.getElementById('global-search-modal');
        this.searchInput = document.getElementById('global-search-input');
        this.resultsContainer = document.getElementById('global-search-results');
    }

    bindEvents() {
        // キーボードショートカット (Ctrl+K または Cmd+K)
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                this.toggleSearch();
            }
            
            // ESCキーで閉じる
            if (e.key === 'Escape' && this.isOpen) {
                this.closeSearch();
            }
        });

        // 検索入力のイベント
        this.searchInput.addEventListener('input', () => {
            clearTimeout(this.searchTimeout);
            this.searchTimeout = setTimeout(() => {
                this.performGlobalSearch();
            }, 300);
        });

        // 閉じるボタン
        document.getElementById('search-close-btn').addEventListener('click', () => {
            this.closeSearch();
        });

        // モーダル外側をクリックで閉じる
        this.searchModal.addEventListener('click', (e) => {
            if (e.target === this.searchModal) {
                this.closeSearch();
            }
        });

        // 検索結果のクリックイベント（イベント委譲）
        this.resultsContainer.addEventListener('click', (e) => {
            const resultItem = e.target.closest('.search-result-item');
            if (resultItem) {
                const url = resultItem.dataset.url;
                if (url) {
                    window.location.href = url;
                }
            }
        });
    }

    toggleSearch() {
        if (this.isOpen) {
            this.closeSearch();
        } else {
            this.openSearch();
        }
    }

    openSearch() {
        this.searchModal.classList.add('active');
        this.searchInput.focus();
        this.searchInput.select();
        this.isOpen = true;
        document.body.style.overflow = 'hidden';
    }

    closeSearch() {
        this.searchModal.classList.remove('active');
        this.searchInput.value = '';
        this.resultsContainer.innerHTML = '';
        this.isOpen = false;
        document.body.style.overflow = '';
    }

    performGlobalSearch() {
        const query = this.searchInput.value.trim().toLowerCase();

        if (!query) {
            this.resultsContainer.innerHTML = '';
            return;
        }

        const results = this.searchInIndex(query);
        this.displayResults(results, query);
    }

    searchInIndex(query) {
        const results = [];
        const queryWords = query.split(/\s+/);

        searchIndex.forEach(page => {
            let score = 0;
            const matches = [];

            // ページタイトルでの一致
            if (page.title.toLowerCase().includes(query)) {
                score += 10;
                matches.push({ type: 'title', text: page.title });
            }

            // カテゴリでの一致
            if (page.category.toLowerCase().includes(query)) {
                score += 5;
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
                let sectionMatched = false;
                
                if (section.heading.toLowerCase().includes(query)) {
                    score += 2;
                    sectionMatched = true;
                }

                queryWords.forEach(word => {
                    section.keywords.forEach(keyword => {
                        if (keyword.toLowerCase().includes(word)) {
                            score += 1;
                            sectionMatched = true;
                        }
                    });
                });

                if (sectionMatched) {
                    matches.push({ type: 'section', text: section.heading });
                }
            });

            // コンテンツキャッシュでの一致
            if (contentCache[page.url]) {
                const content = contentCache[page.url].toLowerCase();
                queryWords.forEach(word => {
                    if (content.includes(word)) {
                        score += 0.5;
                    }
                });
            }

            if (score > 0) {
                results.push({
                    page: page,
                    score: score,
                    matches: matches
                });
            }
        });

        // スコアの高い順にソート
        results.sort((a, b) => b.score - a.score);

        return results.slice(0, 10); // 上位10件まで
    }

    displayResults(results, query) {
        if (results.length === 0) {
            this.resultsContainer.innerHTML = `
                <div class="no-results">
                    <p>「${this.escapeHtml(query)}」に一致する結果が見つかりませんでした</p>
                </div>
            `;
            return;
        }

        const resultsHTML = results.map(result => {
            const matchesHTML = result.matches
                .slice(0, 3)
                .map(match => {
                    const highlightedText = this.highlightQuery(match.text, query);
                    return `<span class="match-context">${highlightedText}</span>`;
                })
                .join(' • ');

            return `
                <div class="search-result-item" data-url="${result.page.url}">
                    <div class="result-header">
                        <span class="result-category">${result.page.category}</span>
                        <h3 class="result-title">${this.highlightQuery(result.page.title, query)}</h3>
                    </div>
                    <div class="result-matches">
                        ${matchesHTML}
                    </div>
                    <div class="result-url">${result.page.url}</div>
                </div>
            `;
        }).join('');

        this.resultsContainer.innerHTML = resultsHTML;
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

// DOMContentLoadedで初期化
document.addEventListener('DOMContentLoaded', () => {
    new GlobalSearch();
});