var assert    = require("chai").assert;


var  BingoCaller  = require('../src/model/BingoCaller');
var bingoCaller = new BingoCaller();
var bingoCaller_75 = new BingoCaller();

describe("BingoCaller tests using ASSERT interface from CHAI module: ", function() {
 
   describe("Check Return Call Number : ", function() {
 it("Check the returned value using: assert.equal(value,'value'): ", function() {
    
    result   = bingoCaller.shoutNumber();
   
    assert.equal( result > 76, false);
 });
 it("Check the returned value using: assert.typeOf(value,'value'): ", function() {
   
    result   = bingoCaller.shoutNumber();
    
    assert.equal( result < 1, false);
 });
 it("Check the returned value using: assert.lengthOf(value,'value'): ", function() {
   var j = 0;
   var arrayCopy = [];
   while (  j < 75 ) { arrayCopy[j] = bingoCaller_75.shoutNumber() ; j++;};
   result   = arrayCopy.length;
   
  // Find duplicates 
   var arrayWithCounters = arrayCopy
  .map((name) => {
    return {
      count: 1,
      name: name
    }
  })
  .reduce((a, b) => {
    a[b.name] = (a[b.name] || 0) + b.count
    return a
  }, {})


  var duplicates = Object.keys(arrayWithCounters).filter((a) => arrayWithCounters[a] > 1)


   assert.equal( duplicates.length == 0 , true);

 });
 }); 
});
