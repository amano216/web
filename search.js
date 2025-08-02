let searchResults = [];
let currentIndex = 0;
let originalContent = new Map();

const searchInput = document.getElementById('searchInput');
const searchInfo = document.getElementById('searchInfo');
const searchNav = document.getElementById('searchNav');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const currentMatch = document.getElementById('currentMatch');

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function highlightText(element, searchTerm) {
    if (!searchTerm || element.classList.contains('search-box')) return;
    
    const textNodes = [];
    const walker = document.createTreeWalker(
        element,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );
    
    let node;
    while (node = walker.nextNode()) {
        if (node.nodeValue.trim()) {
            textNodes.push(node);
        }
    }
    
    textNodes.forEach(node => {
        const text = node.nodeValue;
        const regex = new RegExp(`(${escapeRegExp(searchTerm)})`, 'gi');
        
        if (regex.test(text)) {
            const span = document.createElement('span');
            span.innerHTML = text.replace(regex, '<span class="highlight">$1</span>');
            node.parentNode.replaceChild(span, node);
        }
    });
}

function removeHighlights() {
    document.querySelectorAll('.highlight').forEach(el => {
        const parent = el.parentNode;
        parent.replaceChild(document.createTextNode(el.textContent), el);
        parent.normalize();
    });
}

function performSearch() {
    const searchTerm = searchInput.value.trim();
    
    removeHighlights();
    searchResults = [];
    currentIndex = 0;
    
    if (!searchTerm) {
        searchInfo.textContent = '';
        searchNav.style.display = 'none';
        return;
    }
    
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
        highlightText(table, searchTerm);
    });
    
    searchResults = document.querySelectorAll('.highlight');
    
    if (searchResults.length > 0) {
        searchInfo.textContent = `${searchResults.length}件の検索結果`;
        searchNav.style.display = 'flex';
        updateNavigation();
        scrollToResult(0);
    } else {
        searchInfo.textContent = '検索結果が見つかりませんでした';
        searchNav.style.display = 'none';
    }
}

function updateNavigation() {
    if (searchResults.length === 0) return;
    
    currentMatch.textContent = `${currentIndex + 1} / ${searchResults.length}`;
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === searchResults.length - 1;
}

function scrollToResult(index) {
    if (searchResults[index]) {
        searchResults[index].scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
        
        // 現在のハイライトをより目立たせる
        searchResults.forEach((el, i) => {
            if (i === index) {
                el.style.backgroundColor = 'rgba(127, 109, 242, 0.5)';
            } else {
                el.style.backgroundColor = 'rgba(127, 109, 242, 0.3)';
            }
        });
    }
}

function navigateSearch(direction) {
    if (direction === 'next' && currentIndex < searchResults.length - 1) {
        currentIndex++;
    } else if (direction === 'prev' && currentIndex > 0) {
        currentIndex--;
    }
    
    updateNavigation();
    scrollToResult(currentIndex);
}

// イベントリスナー
searchInput.addEventListener('input', debounce(performSearch, 300));

// キーボードショートカット
searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        if (searchResults.length > 0) {
            if (e.shiftKey) {
                navigateSearch('prev');
            } else {
                navigateSearch('next');
            }
        }
    }
});

// デバウンス関数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Ctrl+F または Cmd+F で検索ボックスにフォーカス
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        searchInput.focus();
        searchInput.select();
    }
});