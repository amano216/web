#!/usr/bin/env python3
import os
import re

# 新しいナビゲーション構造
new_navigation = '''            <div class="nav-dropdown">
                <a href="#">HTML</a>
                <div class="dropdown-menu">
                    <a href="index.html">HTMLタグ一覧</a>
                    <a href="html-cheatsheet.html">HTML記法チート</a>
                    <a href="html-history.html">HTMLの歴史</a>
                </div>
            </div>
            <div class="nav-dropdown">
                <a href="#">CSS</a>
                <div class="dropdown-menu">
                    <a href="css-reference.html">CSSプロパティ</a>
                    <a href="css-cheatsheet.html">CSS記法チート</a>
                    <a href="css-history.html">CSSの歴史</a>
                </div>
            </div>
            <div class="nav-dropdown">
                <a href="#">JavaScript</a>
                <div class="dropdown-menu">
                    <a href="javascript-reference.html">JSメソッド一覧</a>
                    <a href="javascript-cheatsheet.html">JS記法チート</a>
                    <a href="javascript-history.html">JavaScriptの歴史</a>
                </div>
            </div>
            <div class="nav-dropdown">
                <a href="#">SQL</a>
                <div class="dropdown-menu">
                    <a href="sql-reference.html">SQLコマンド一覧</a>
                    <a href="sql-cheatsheet.html">SQL記法チート</a>
                </div>
            </div>
            <div class="nav-dropdown">
                <a href="#">Ruby</a>
                <div class="dropdown-menu">
                    <a href="ruby-reference.html">Rubyメソッド一覧</a>
                    <a href="ruby-cheatsheet.html">Ruby記法チート</a>
                </div>
            </div>
            <div class="nav-dropdown">
                <a href="#">HTTP</a>
                <div class="dropdown-menu">
                    <a href="http-reference.html">HTTPメソッド一覧</a>
                    <a href="http-cheatsheet.html">HTTP記法チート</a>
                    <a href="http-history.html">HTTPの歴史</a>
                </div>
            </div>
            <div class="nav-dropdown">
                <a href="#">その他</a>
                <div class="dropdown-menu">
                    <a href="symbols-reference.html">記号の読み方</a>
                    <a href="git-commands.html">Git/GitHub</a>
                    <a href="git-cheatsheet.html">Git記法チート</a>
                    <a href="git-history.html">Gitの歴史</a>
                    <a href="linux-commands.html">Linuxコマンド</a>
                    <a href="linux-cheatsheet.html">Linux記法チート</a>
                    <a href="naming-conventions.html">命名規則</a>
                    <a href="naming-examples.html">命名例一覧</a>
                </div>
            </div>'''

# 更新対象のHTMLファイル（歴史ページ自体は既に正しいナビゲーションを持っている）
files_to_update = [
    'index.html',
    'css-reference.html',
    'css-cheatsheet.html',
    'javascript-reference.html',
    'javascript-cheatsheet.html',
    'sql-reference.html',
    'sql-cheatsheet.html',
    'symbols-reference.html',
    'git-commands.html',
    'git-cheatsheet.html',
    'linux-commands.html',
    'linux-cheatsheet.html',
    'ruby-reference.html',
    'ruby-cheatsheet.html',
    'http-reference.html',
    'http-cheatsheet.html',
    'html-cheatsheet.html',
    'html-history.html',
    'css-history.html',
    'javascript-history.html',
    'http-history.html',
    'git-history.html',
    'modern-cli-tools.html',
    'shortcuts.html'
]

def update_navigation(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # ナビゲーションメニューの部分を探す
    # パターン: <div class="nav-menu">から</div>の前まで
    pattern = r'(<div class="nav-menu">)(.*?)(</div>\s*</div>\s*</nav>)'
    
    # 新しいナビゲーションに置き換え
    replacement = r'\1\n' + new_navigation + r'\n        \3'
    
    updated_content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(updated_content)
    
    print(f"Updated: {filepath}")

# すべてのファイルを更新
for filename in files_to_update:
    if os.path.exists(filename):
        update_navigation(filename)
    else:
        print(f"File not found: {filename}")

print("\nNavigation update complete!")