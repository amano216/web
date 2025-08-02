// グローバル検索機能
class GlobalSearch {
    constructor() {
        this.searchInput = null;
        this.resultsContainer = null;
        this.searchModal = null;
        this.isOpen = false;
        this.searchTimeout = null;
        this.currentPageContent = null;
        this.searchMode = 'global'; // 'global' or 'page'
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
                        <div class="search-mode-toggle">
                            <button class="mode-btn active" data-mode="global">すべてのページ</button>
                            <button class="mode-btn" data-mode="page">現在のページ</button>
                        </div>
                        <input type="text" id="global-search-input" class="global-search-input" 
                               placeholder="検索... (Ctrl+K または Cmd+K)">
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
        // グローバル検索ボタンのクリックイベント
        const globalSearchBtns = document.querySelectorAll('.global-search-btn');
        globalSearchBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.openSearch();
            });
        });

        // 検索モード切り替え
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('mode-btn')) {
                document.querySelectorAll('.mode-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                e.target.classList.add('active');
                this.searchMode = e.target.dataset.mode;
                this.updatePlaceholder();
                if (this.searchInput.value) {
                    this.performSearch();
                }
            }
        });

        // キーボードショートカット (Ctrl+K または Cmd+K)
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                this.toggleSearch();
            }
            
            // Ctrl+F または Cmd+F でページ内検索
            if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
                e.preventDefault();
                this.openSearch('page');
            }
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
                this.performSearch();
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
            if (resultItem && !resultItem.classList.contains('page-result')) {
                const url = resultItem.dataset.url;
                if (url) {
                    // 検索クエリをURLパラメータに追加
                    const query = this.searchInput.value.trim();
                    if (query) {
                        window.location.href = url + '?q=' + encodeURIComponent(query);
                    } else {
                        window.location.href = url;
                    }
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

    openSearch(mode = 'global') {
        this.searchModal.classList.add('active');
        this.searchMode = mode;
        
        // モードボタンを更新
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.mode === mode);
        });
        
        this.updatePlaceholder();
        this.searchInput.focus();
        this.searchInput.select();
        this.isOpen = true;
        document.body.style.overflow = 'hidden';
        
        // 現在のページのコンテンツを取得
        this.currentPageContent = this.extractCurrentPageContent();
    }

    closeSearch() {
        this.searchModal.classList.remove('active');
        this.searchInput.value = '';
        this.resultsContainer.innerHTML = '';
        this.isOpen = false;
        document.body.style.overflow = '';
    }

    performSearch() {
        const query = this.searchInput.value.trim().toLowerCase();

        if (!query) {
            this.resultsContainer.innerHTML = '';
            return;
        }

        if (this.searchMode === 'global') {
            const results = this.searchInIndex(query);
            this.displayResults(results, query);
        } else {
            const results = this.searchInCurrentPage(query);
            this.displayPageResults(results, query);
        }
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

    updatePlaceholder() {
        if (this.searchMode === 'global') {
            this.searchInput.placeholder = 'すべてのページから検索... (Ctrl+K)';
        } else {
            this.searchInput.placeholder = '現在のページ内を検索... (Ctrl+F)';
        }
    }

    extractCurrentPageContent() {
        const tables = document.querySelectorAll('table');
        const content = [];
        
        tables.forEach(table => {
            const rows = table.querySelectorAll('tr');
            rows.forEach((row, index) => {
                const cells = row.querySelectorAll('td, th');
                const rowContent = Array.from(cells).map(cell => cell.textContent.trim()).join(' ');
                if (rowContent) {
                    content.push({
                        text: rowContent,
                        element: row,
                        index: index
                    });
                }
            });
        });
        
        return content;
    }

    searchInCurrentPage(query) {
        if (!this.currentPageContent) return [];
        
        const results = [];
        const queryWords = query.split(/\s+/);
        
        this.currentPageContent.forEach(item => {
            const text = item.text.toLowerCase();
            let matches = 0;
            
            queryWords.forEach(word => {
                if (text.includes(word)) {
                    matches++;
                }
            });
            
            if (matches > 0) {
                results.push({
                    ...item,
                    score: matches
                });
            }
        });
        
        return results.sort((a, b) => b.score - a.score);
    }

    displayPageResults(results, query) {
        if (results.length === 0) {
            this.resultsContainer.innerHTML = `
                <div class="no-results">
                    <p>「${this.escapeHtml(query)}」に一致する結果がこのページ内で見つかりませんでした</p>
                </div>
            `;
            return;
        }

        const resultsHTML = results.map((result, index) => {
            const highlightedText = this.highlightQuery(result.text, query);
            return `
                <div class="search-result-item page-result" data-index="${index}">
                    <div class="result-text">${highlightedText}</div>
                </div>
            `;
        }).join('');

        this.resultsContainer.innerHTML = resultsHTML;
        
        // ページ内結果のクリックイベント
        document.querySelectorAll('.page-result').forEach((elem, index) => {
            elem.addEventListener('click', () => {
                const result = results[index];
                if (result.element) {
                    this.closeSearch();
                    result.element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    result.element.style.backgroundColor = 'rgba(127, 109, 242, 0.2)';
                    setTimeout(() => {
                        result.element.style.backgroundColor = '';
                    }, 2000);
                }
            });
        });
    }
}

// DOMContentLoadedで初期化
document.addEventListener('DOMContentLoaded', () => {
    window.globalSearch = new GlobalSearch();
});