// モバイルメニューの制御
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const isOpen = navMenu.classList.contains('active');
            this.innerHTML = isOpen ? '✕' : '☰';
        });
    }
    
    // モバイルでのドロップダウン制御
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('a');
        
        toggle.addEventListener('click', function(e) {
            // モバイルビューの場合のみ
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
                
                // 他のドロップダウンを閉じる
                dropdowns.forEach(other => {
                    if (other !== dropdown) {
                        other.classList.remove('active');
                    }
                });
            }
        });
    });
    
    // ウィンドウリサイズ時の処理
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (window.innerWidth > 768) {
                navMenu.classList.remove('active');
                dropdowns.forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
                if (mobileMenuButton) {
                    mobileMenuButton.innerHTML = '☰';
                }
            }
        }, 250);
    });
    
    // 現在のページをアクティブにする
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a[href]');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath) {
            link.classList.add('active');
            // 親のドロップダウンもアクティブにする
            const parentDropdown = link.closest('.nav-dropdown');
            if (parentDropdown) {
                parentDropdown.querySelector('> a').classList.add('active');
            }
        }
    });
});