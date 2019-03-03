import requests
from bs4 import BeautifulSoup


def fetchHtml(url):
    response = requests.get(url)
    html = response.content
    return BeautifulSoup(html, features="html.parser")


# Rescue Me! - California
rescueMeCAUrl = 'http://pomeranian.rescueme.org/California'
parsedHtml = fetchHtml(rescueMeCAUrl)
datePostedElements = parsedHtml.findAll('span', attrs={'class': '_aid'})
dogProfileUrls = []

for date in datePostedElements:
    dogProfileUrls.append('http://post.rescueme.org/' + date.text[1:])

for profile in dogProfileUrls:
    html = fetchHtml(profile)
    blah = html.find_all('div', attrs={'class': 'summary-detail'})
    if 'Female' in blah[len(blah) - 1].text:
        print('IT WORKS')
