//dependencies
var casper = require('casper').create({
  verbose : true,
	logLevel : 'info',
  pageSettings : {
         loadImages:  false,         // The WebPage instance used by Casper will
         loadPlugins: false,         // use these settings
         userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1229.94 Safari/537.4'
    }
});
/**
 * Configuration here
 */
var login_username = "LOGIN_USERNAME";
var login_password = "LOGIN_PASSWORD"; //need to input password from webform
var query = "zoe saldana nina simone"; //test query
var url = "http://www.facebook.com/"
var likes;



// var nodelist = this.evaluate(function() {
//     return Array.prototype.slice.call(document.querySelectorAll('span._3chu'));
// });

//helper functions
function getLikes(casper, doc) {
    console.log('***************');
    console.log(casper.getHTML());
    //likes= document.querySelectorAll('span._3chu')
    //var spansLikes = doc.querySelectorAll('span._3chu');
    var array = [];

    //var love =
    // var wow =
    // var sad =
    // var angry =
    // var haha

    //console.log(('div[data-reactroot]'));
  };

/**
 * Everything starts here!
 * Using regular facebook site.
 */

 //fill form for search query. Current testing using 'Bernie Sanders'
casper.start(url, function() {
  console.log("page is loaded.");
	this.fill('form#login_form', {
		'email': login_username,
		'pass':  login_password
	}, true);
});

casper.waitForResource(url, function() {
  console.log("Wait a bit, then do a search");
  this.fill('div[role="search"] form', {
    q: query
  }, true);
});

//parse likes of articles from public posts of the search

casper.then(function()
{
  console.log('Scrolling!');
  this.scrollTo(0, 10000);
  this.waitForSelector('span._3chu', function() {
    getLikes(this, document);
  })
})
//find the likes counts of each of the reactions of the facebook group

//upload results to firebase

// echo results in some pretty fashion
casper.run(function() {
    this.echo(likes.length + ' likes found:');
    this.echo(' - ' + likes.join('\n - ')).exit();
});
