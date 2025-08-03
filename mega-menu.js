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
                        <p class="category-description">JavaScript・SQL・Rubyなどのプログラミング言語</p>
                        <div class="mega-menu-links">
                            <a href="javascript-reference.html">JSメソッド一覧</a>
                            <a href="javascript-cheatsheet.html">JS記法チート</a>
                            <a href="sql-reference.html">SQLコマンド一覧</a>
                            <a href="sql-cheatsheet.html">SQL記法チート</a>
                            <a href="ruby-reference.html">Rubyメソッド一覧</a>
                            <a href="ruby-cheatsheet.html">Ruby記法チート</a>
                        </div>
                    </div>
                    
                    <div class="mega-menu-section">
                        <h3>システム・ツール</h3>
                        <p class="category-description">Linux・Git・開発ツールのコマンド</p>
                        <div class="mega-menu-links">
                            <a href="linux-commands.html">Linuxコマンド</a>
                            <a href="linux-cheatsheet.html">Linux記法チート</a>
                            <a href="git-commands.html">Git/GitHub</a>
                            <a href="git-cheatsheet.html">Git記法チート</a>
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

        // メガメニューボタンを追加（複数の方法を試す）
        console.log('Adding mega menu button...');
        
        // 方法1: 検索バーの後に追加
        const searchWrapper = navContainer.querySelector('.nav-search-wrapper');
        if (searchWrapper) {
            console.log('Found search wrapper, adding button after it');
            searchWrapper.insertAdjacentHTML('afterend', menuButtonHTML);
        } else {
            console.log('Search wrapper not found, trying nav-menu');
            // 方法2: ナビゲーションメニューの後に追加
            const navMenu = navContainer.querySelector('.nav-menu');
            if (navMenu) {
                console.log('Found nav menu, adding button after it');
                navMenu.insertAdjacentHTML('afterend', menuButtonHTML);
            } else {
                console.log('Nav menu not found, adding to nav container directly');
                // 方法3: ナビゲーションコンテナに直接追加
                navContainer.insertAdjacentHTML('beforeend', menuButtonHTML);
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

// 初期化関数
function initMegaMenu() {
    console.log('Initializing mega menu...');
    
    // メガメニューCSSを動的に読み込む
    const megaMenuCSS = document.createElement('link');
    megaMenuCSS.rel = 'stylesheet';
    megaMenuCSS.href = 'mega-menu.css';
    document.head.appendChild(megaMenuCSS);
    
    // CSSが読み込まれた後に初期化
    megaMenuCSS.onload = () => {
        console.log('Mega menu CSS loaded, creating menu');
        new MegaMenu();
    };
}

// DOMContentLoadedで初期化を試みる
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMegaMenu);
} else {
    // 既に読み込まれている場合は即座に実行
    initMegaMenu();
}