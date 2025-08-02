// メガメニューナビゲーション機能
class MegaMenu {
    constructor() {
        this.isOpen = false;
        this.menuButton = null;
        this.menuContainer = null;
        this.overlay = null;
        this.init();
    }

    init() {
        this.createMegaMenu();
        this.bindEvents();
        this.highlightCurrentPage();
    }

    createMegaMenu() {
        // 既存のナビゲーションメニューを取得
        const navContainer = document.querySelector('.nav-container');
        if (!navContainer) return;

        // bodyにメガメニュー有効クラスを追加
        document.body.classList.add('mega-menu-enabled');

        // メガメニューボタンを作成
        const menuButtonHTML = `
            <button class="mega-menu-button" id="mega-menu-button">
                <span>メニュー</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </button>
        `;

        // メガメニューコンテナを作成
        const menuContainerHTML = `
            <div class="mega-menu-container" id="mega-menu-container">
                <div class="mega-menu-content">
                    <div class="mega-menu-section">
                        <h3>Web基礎</h3>
                        <p class="category-description">HTML・CSSの基本的な要素とスタイリング</p>
                        <div class="mega-menu-links">
                            <a href="index.html">HTMLタグ一覧</a>
                            <a href="html-cheatsheet.html">HTML記法チート</a>
                            <a href="css-reference.html">CSSプロパティ</a>
                            <a href="css-cheatsheet.html">CSS記法チート</a>
                        </div>
                    </div>
                    
                    <div class="mega-menu-section">
                        <h3>プログラミング</h3>
                        <p class="category-description">JavaScript・SQLなどのプログラミング言語</p>
                        <div class="mega-menu-links">
                            <a href="javascript-reference.html">JSメソッド一覧</a>
                            <a href="javascript-cheatsheet.html">JS記法チート</a>
                            <a href="sql-reference.html">SQLコマンド一覧</a>
                            <a href="sql-cheatsheet.html">SQL記法チート</a>
                        </div>
                    </div>
                    
                    <div class="mega-menu-section">
                        <h3>システム・ツール</h3>
                        <p class="category-description">Linux・Git・開発ツールのコマンド</p>
                        <div class="mega-menu-links">
                            <a href="linux-commands.html">Linuxコマンド</a>
                            <a href="linux-cheatsheet.html">Linux記法チート</a>
                            <a href="git-commands.html">Git/GitHub</a>
                        </div>
                    </div>
                    
                    <div class="mega-menu-section">
                        <h3>その他のリソース</h3>
                        <p class="category-description">記号の読み方など補助的な情報</p>
                        <div class="mega-menu-links">
                            <a href="symbols-reference.html">記号の読み方</a>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // オーバーレイを作成
        const overlayHTML = `<div class="mega-menu-overlay" id="mega-menu-overlay"></div>`;

        // 検索バーの後、またはナビゲーションメニューの後にメガメニューボタンを追加
        const searchWrapper = navContainer.querySelector('.nav-search-wrapper');
        if (searchWrapper) {
            searchWrapper.insertAdjacentHTML('afterend', menuButtonHTML);
        } else {
            const navMenu = navContainer.querySelector('.nav-menu');
            if (navMenu) {
                navMenu.insertAdjacentHTML('afterend', menuButtonHTML);
            }
        }

        // メガメニューコンテナとオーバーレイをbodyに追加
        document.body.insertAdjacentHTML('beforeend', menuContainerHTML);
        document.body.insertAdjacentHTML('beforeend', overlayHTML);

        // 要素を取得
        this.menuButton = document.getElementById('mega-menu-button');
        this.menuContainer = document.getElementById('mega-menu-container');
        this.overlay = document.getElementById('mega-menu-overlay');
    }

    bindEvents() {
        if (!this.menuButton || !this.menuContainer || !this.overlay) return;

        // メニューボタンのクリックイベント
        this.menuButton.addEventListener('click', () => {
            this.toggleMenu();
        });

        // オーバーレイのクリックでメニューを閉じる
        this.overlay.addEventListener('click', () => {
            this.closeMenu();
        });

        // ESCキーでメニューを閉じる
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.closeMenu();
            }
        });

        // メニュー内のリンククリックでメニューを閉じる
        const links = this.menuContainer.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMenu();
            });
        });

        // ウィンドウリサイズ時の処理
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                if (this.isOpen && window.innerWidth > 768) {
                    this.positionMenu();
                }
            }, 250);
        });
    }

    toggleMenu() {
        if (this.isOpen) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }

    openMenu() {
        this.isOpen = true;
        this.menuButton.classList.add('active');
        this.menuContainer.classList.add('active');
        this.overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        this.positionMenu();
    }

    closeMenu() {
        this.isOpen = false;
        this.menuButton.classList.remove('active');
        this.menuContainer.classList.remove('active');
        this.overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    positionMenu() {
        // ナビゲーションバーの高さを取得
        const navBar = document.querySelector('.nav-bar');
        if (navBar) {
            const navHeight = navBar.offsetHeight;
            this.menuContainer.style.top = `${navHeight}px`;
        }
    }

    highlightCurrentPage() {
        // 現在のページのURLを取得
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        // メガメニュー内の対応するリンクをハイライト
        const links = this.menuContainer.querySelectorAll('a');
        links.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage) {
                link.classList.add('active');
            }
        });
    }
}

// DOMContentLoadedで初期化
document.addEventListener('DOMContentLoaded', () => {
    console.log('Mega menu script loaded');
    
    // メガメニューCSSを動的に読み込む
    const megaMenuCSS = document.createElement('link');
    megaMenuCSS.rel = 'stylesheet';
    megaMenuCSS.href = 'mega-menu.css';
    document.head.appendChild(megaMenuCSS);

    // 少し遅延させてメガメニューを初期化（検索バーなどの要素が確実に読み込まれるように）
    setTimeout(() => {
        console.log('Initializing mega menu');
        new MegaMenu();
    }, 100);
});