The news scraper app searches the NY Times website for headlines, article summary and the article URL as well.  Each scraped article will be saved to the app database, and the app can scrape and display the mentioned information for each article.

Users will be able to leave comments on the articles they viewed, and the database will save the comments so the user can visit at a later date.  Users will be able to delete their comments, as well.  All stored comments will be visible by all users.

NPM Packages used:
- express
- express-handlebars
- mongoose
- body-parser
- cheerio
- request

Heroku was used to deploy the app.  Please visit the link: 


Overview
The New York Time Scraper (NYT Scraper for short) is a scraper app which captures the title, summary and image of articles of The New York Times. In this app, users are able to save their preferred articles, add notes and edit notes to one or multiple articles. Besides, app also provides search feature, allowing users to search in titles according to different key words.

In this repository, you can see source code of NYT Scraper. For experiencing, please go to Heroku:

https://desolate-forest-15757.herokuapp.com/

Key Dependencies
request: enables cheerio to get access to front-end code of https://www.nytimes.com/section/world

cheerio: scrapes front-end code from https://www.nytimes.com/section/world

mongoose: be in charge of database of NYT Scraper

express: builds server-side routes and functions

morgan: logs server-side requests, helping debugging

express-handlebars: a powerful front-end builder without requiring multiple html pages
