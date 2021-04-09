class BingoCaller {
    constructor() {
        this.numbersToShout = []
        this.counter = 0;
        this.turnNumber = 0;
        this.initRandomNumbers();
    }

    initRandomNumbers(){

        while (this.numbersToShout.length != 75) {
           var valueAnalysis = this.getRandomNumber() ;
            if(!this.numbersToShout.includes(valueAnalysis)){
                this.numbersToShout[this.counter] = valueAnalysis;
                this.counter++;   
            }
          }

      

    }

    compare( a, b ) {
        if ( a < b ){
          return -1;
        }
        if ( a > b ){
          return 1;
        }
        return 0;
      }

    getRandomNumber(){
        return (Math.floor(Math.random() * 75 ) + 1);
    }

    // Depends of the turn to share the random value
    shoutNumber() { 
        var randomNumberTurn = this.numbersToShout[this.turnNumber];
        this.turnNumber++;
        return randomNumberTurn;
    }


     existInArray(value){
        return this.numbersToShout.includes();
     }


}


module.exports = BingoCaller;