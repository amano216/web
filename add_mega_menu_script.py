#!/usr/bin/env python3
"""
すべてのHTMLファイルにmega-menu.jsスクリプトタグを追加する
"""

import os
import re

# 処理対象のHTMLファイル
html_files = [
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
    'http-cheatsheet.html'
]

def add_mega_menu_script(file_path):
    """HTMLファイルにmega-menu.jsスクリプトタグを追加"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # すでにmega-menu.jsが含まれているかチェック
    if 'mega-menu.js' in content:
        print(f"✓ {file_path} - すでにmega-menu.jsが含まれています")
        return False
    
    # </body>タグの前に追加
    pattern = r'(</body>)'
    replacement = r'<script src="mega-menu.js"></script>\n\1'
    
    updated_content = re.sub(pattern, replacement, content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(updated_content)
    
    print(f"✓ {file_path} - mega-menu.jsを追加しました")
    return True

# メイン処理
updated_count = 0
for html_file in html_files:
    if os.path.exists(html_file):
        if add_mega_menu_script(html_file):
            updated_count += 1
    else:
        print(f"✗ {html_file} - ファイルが見つかりません")

print(f"\n合計 {updated_count} ファイルを更新しました")