var  BingoCaller  = require('./src/model/BingoCaller');

var express = require('express');
var app = express();


//var Bingo = require('./src/model/Bingo');

app.get('/', function (req, res) {
  res.send('Hello World!');

  
  var bingoCaller = new BingoCaller();
  var array = [1,2,2,3,3,3,4,5,1,7]
  
  //console.log(bingoCaller.isUnique(array,7));
  //console.log();
  //var random1 = bingoCaller.getRandomNumber();
  //if(bingoCaller.isUnique(random1)) bingoCaller.shoutNumber(random1)
  
  /* var random0 = bingoCaller.getRandomNumber();
   if(bingoCaller.numbersToShout.length == 0) bingoCaller.shoutNumber(random0);
   console.log('imprimiendo', bingoCaller.numbersToShout.length)
   //console.log('random', bingoCaller.getRandomNumber());
   
   
   for(var i=0;i<10;i++){
    var random1 = 63;
    console.log('valor de random1', random1);
      console.log
    console.log(bingoCaller.existInArray(random1));

    if(!bingoCaller.existInArray(random1)){ bingoCaller.shoutNumber(random1) ;  }
    //console.log(random1);
    //console.log(bingoCaller.counter)
    console.log(bingoCaller.numbersToShout.length);
    console.log(random1);
   }


*/


//bingoCaller.initNumbers();

   // var random2 = bingoCaller.getRandomNumber;
   // if(bingoCaller.isUnique(random2)) bingoCaller.shoutNumber(random2)


    
  //var random2 = bingoCaller.getRandomNumber();

  //console.log(bingoCaller.shoutNumber());



});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});