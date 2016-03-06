// spooky.js test

// try {
//     var Spooky = require('spooky');
// } catch (e) {
//     var Spooky = require('../lib/spooky');
// }
// /**
//  * Configuration here
//  */
// var url = "https://www.facebook.com/"
// var cheerio = require('cheerio');
// var likes;
// var spooky = new Spooky({
//     child: {
//         transport: 'http'
//     },
//     casper: {
//         logLevel: 'debug',
//         verbose: true,
//         waitTimeout: 3000,
//         "ignore-ssl-errors": true,
//         "ssl-protocol": "tlsv1",
//            // use these settings
//                userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1229.94 Safari/537.4'
//
//     }
// }, function(err) {
//     if (err) {
//         e = new Error('Failed to initialize SpookyJS');
//         e.details = err;
//         throw e;
//     }
//
//     /**
//      * Everything starts here!
//      * Using regular facebook site.
//      */
//     //fill form for search query. Current testing using 'Bernie Sanders'
//     spooky.start(url);
//     spooky.then(function() {
//         this.capture('first.png')
//         console.log("page is loaded.");
//         login_username = "LOGIN_USERNAME";
//         login_password = "LOGIN_PASSWORD"; //need to input password from webform
//         this.fill('form#login_form', {
//             'email': login_username,
//             'pass': login_password
//         }, true);
//         this.capture('first.jpg')
//         this.emit("hello", "going")
//     });
//
//     var query = "Bernie Sanders"; //test query
//     spooky.thenOpen("https://www.facebook.com/search/top/?q=" +
//         encodeURI(query));
//     spooky.then(function() {
//         this.capture('again.jpg')
//         this.scrollTo(0, 1000);
//         this.waitForSelector('span._3chu', function() {
//                 this.emit("hello", '***************');
//                 this.emit("hello", this.getHTML())
//             });
//     })
//     spooky.run()
// })
//
// spooky.on('error', function(e, stack) {
//     console.error(e);
//     if (stack) {
//         console.log(stack);
//     }
// });
//
// // Uncomment this block to see all of the things Casper has to say.
// // There are a lot.
// // He has opinions.
// spooky.on('console', function(line) {
//     console.log(line);
// });
// spooky.on('hello', function(greeting) {
//     console.log(greeting);
// });
// spooky.on('log', function(log) {
//     if (log.space === 'remote')
//         console.log(log.message.replace(/ \- .*/, ''));
// });
//
// // spooky.run();
