import { Component } from '@angular/core';
import { fightLogic, Ranger, fights } from "src/app/rangers-buttons/logic"
 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  redrangerName:any;
  redrangerpower:any;

  bluerangerName:any;
  bluerangerpower:any;

  objRangers = new fights("Blue");

  rangerRed(){
    const redRenger = new Ranger('Red')
    redRenger.rangersConfiguration()
    this.redrangerName = redRenger.RedrangerName
    this.redrangerpower = redRenger.Redrangerpower
    
  };
  rangerBlue(){
    const bluedRenger = new Ranger('Blue');
    bluedRenger.rangersConfiguration()
    this.bluerangerName = bluedRenger.RedrangerName
    this.bluerangerpower = bluedRenger.Redrangerpower
  };

rangerFights() {
  this.objRangers.blueRangerFight()
  this.objRangers.redRangerFight()
};

stopFight() {
  setTimeout(()=>{
    clearInterval(this.objRangers.timeoutRed);
    clearInterval(this.objRangers.timeoutBlue);

    if(this.objRangers.redLastNumber < this.objRangers.blueLastNumber) {
      console.log(`blue won  ${this.objRangers.blueLastNumber}%`);

    }else if(this.objRangers.redLastNumber === this.objRangers.blueLastNumber) {

      console.log('drow');
    }else  {
      console.log(`red won ${this.objRangers.redLastNumber}%`);
    }   
  }, 3000)

}

}
