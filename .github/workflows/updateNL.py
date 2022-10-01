from bs4 import BeautifulSoup as bs
import os
import re

base = os.path.dirname(os.path.abspath(__file__))

html = open(os.path.join(base, '../includes/header.html'))

soup = bs(html, 'html.parser')

old_text = soup.find("a", {"id":"newsletter-link"})

new_text = old_text.find(text=re.compile('August2022.pdf')).replace_with('October2022.pdf')