#!/usr/bin/env python3
"""
歴史ページにmega-menu.jsスクリプトタグを追加する
"""

import os
import re

# 処理対象の歴史ページ
history_files = [
    'html-history.html',
    'css-history.html',
    'javascript-history.html',
    'http-history.html',
    'git-history.html'
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
for html_file in history_files:
    if os.path.exists(html_file):
        if add_mega_menu_script(html_file):
            updated_count += 1
    else:
        print(f"✗ {html_file} - ファイルが見つかりません")

print(f"\n合計 {updated_count} ファイルを更新しました")