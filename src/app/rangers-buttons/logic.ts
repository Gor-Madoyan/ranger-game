import { stringify } from "@angular/compiler/src/util";

export class Ranger{
    name:string;
    power:number;
    constructor(name:string) {
      this.name = name;
      this.power = 100
     };

     RedrangerName:any;
     Redrangerpower:any;
   
     rangersConfiguration () {
        this.RedrangerName = `Ranger name - ${this.name} `
        this.Redrangerpower = `Ranger power - ${this.power}%`
      }
    
};

export class fightLogic extends Ranger{ 
    constructor(name:string) {
        super(name)
    };

    blueLastNumber:number = 100;
    blueRandomNumber() {
    this.blueLastNumber = this.blueLastNumber - Math.trunc( Math.random() * 5)
    };
    
    redLastNumber:number = 100;
    redRandomNuber() {
      this.redLastNumber = this.redLastNumber - Math.trunc( Math.random() * 5)
    };
}


export class fights extends fightLogic {

  constructor(name:string) {
    super(name)
  };

  timeoutBlue:any;
  timeoutRed:any;

  blueRangerFight() {
    this.timeoutBlue = setInterval(()=>{
      this.blueRandomNumber();
      if(this.blueLastNumber > 0) {
        console.log(this.blueLastNumber, 'blue ranger');
      }else {
        clearInterval(this.timeoutBlue);
        clearInterval(this.timeoutRed);
        alert(`Blue Ranger lose`)
      }
    }, 500)
  };

  redRangerFight() {
    this.timeoutRed = setInterval(()=>{
     this.redRandomNuber();
     if(this.redLastNumber > 0) {
       console.log(this.redLastNumber, 'red ranger');
     }else {
        clearInterval(this.timeoutRed);
        clearInterval(this.timeoutBlue);
        alert(`Red Ranger lose`)        
        }
    }, 500);
  }
}



