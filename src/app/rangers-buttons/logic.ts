export class Ranger{
    name:string;
    power:number
    constructor(name:string) {
      this.name = name
      this.power = 100
     };

     ranger1() {
        console.log('ranger1')    
      }
      ranger2() {
          console.log('ranger2')
          
        }

        fight() {
           this.power = this.power - Math.trunc(Math.random()*100)
           if(this.power <= 0) {
               console.log('you lose');
               
           }
           console.log(this.power);
           
        }
}

const redRenger = new Ranger('Red')