class NumberProvider {
    constructor(min=-100,max=100){
        // 1. Validation
        // !!! Nu vad sensul la conditia cu validare prin Number.isInteger()
        // in acest caz, cind este aplicata metoda Math.round ce intoarce deja numere intregi
        this.min = min
        this.max = max
        this.start()
        
    }

    // 2. arrow notation
   generate = () => Math.round(Math.random() * (this.max - this.min) + this.min)
   //1. /pentru validare in caz de numere intregi/         
                 //(Math.random() * (this.max - this.min) + this.min).toFixed(1)

   

    
      
    whenPositive(positiveCB) {
        this.positiveCB = positiveCB
    }

    whenNegative(negativeCB) {
        this.negativeCB = negativeCB
    }

    start() {
        setInterval(()=>{
            let number = this.generate()
            // 1. metoda Number.isInteger()
            if(Number.isInteger(number)){
            if(number>=0) {
                this.positiveCB(number)
            }
            else {
                this.negativeCB(number) 
            }
            // 1. console.error() in caz de numere 
    } else{ console.error(`error ${number}`)}
   
          
        },1000)
    }

}

let provider = new NumberProvider()

// Eroarea aparea in consola din motiv ca nu era declarata functia

function positiveAction(number) {
    console.log("got a positive random number >>>", number)
}

function negativeAction(number) {
    console.log("got a negative random number >>>", number)
}

provider.whenPositive(positiveAction)
provider.whenNegative(negativeAction)
