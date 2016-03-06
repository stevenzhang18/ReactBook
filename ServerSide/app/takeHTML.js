var fs= require("fs")
var cheerio = require("cheerio")
var Firebase = require("firebase");
var ref = new Firebase("https://twiliotest.firebaseio.com/");
var sumOfLikes = 0;
var sumOfWows = 0;
var sumOfLoves = 0;
var sumOfSads = 0;
var sumOfAngrys = 0;
var sumOfHahas = 0;


var text = fs.readFileSync('test.html','utf8')
// console.log(text)
var $ = cheerio.load(text)
$(".like._2p78._2p7a._4-op").each(function(){
  sumOfLikes += parseInt($(this).next('span._3chu').html());
})

$(".wow._2p78._2p7a._4-op").each(function(){
  sumOfWows += parseInt($(this).next('span._3chu').html());
})

$(".love._2p78._2p7a._4-op").each(function(){
  sumOfLoves += parseInt($(this).next('span._3chu').html());
})

$(".haha._2p78._2p7a._4-op").each(function(){
  sumOfHahas += parseInt($(this).next('span._3chu').html());
})

$(".anger._2p78._2p7a._4-op").each(function(){
  sumOfAngrys += parseInt($(this).next('span._3chu').html());
})

$(".sorry._2p78._2p7a._4-op").each(function(){
  sumOfSads += parseInt($(this).next('span._3chu').html());
})

ref.child('likes').push(sumOfLikes);
ref.child('wows').push(sumOfWows);
ref.child('loves').push(sumOfLoves);
ref.child('hahas').push(sumOfHahas);
ref.child('angers').push(sumOfAngrys);
ref.child('sorrys').push(sumOfSads);
