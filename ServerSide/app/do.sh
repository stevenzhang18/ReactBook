#!/bin/sh
casperjs scraper.js > test.txt
cat test.txt|tr "\n" "@"|sed "s/.*\*\*@//g"|sed "s/\/html.*/\/html>/g"|tr "@" "\n" > test.html
node takeHTML.js
