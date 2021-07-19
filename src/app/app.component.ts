import { Component } from '@angular/core';
import { Ranger } from "src/app/rangers-buttons/logic"
 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  objRangerRed = new Ranger("Ren Ranger");
  objRangerBlue = new Ranger('Blue Ranger');


  blueRangerConfig() {

    this.objRangerBlue.rangersConfiguration()
  }
  redRangerConfig(){
    this.objRangerRed.rangersConfiguration()
  }

rangerFights() {
  this.objRangerRed.rangerFight('Red Ranger')
  this.objRangerBlue.rangerFight('Blue Ranger')
};

stopFight() {
  setTimeout(()=>{
      this.objRangerRed.finish()
      this.objRangerBlue.finish()
      if(this.objRangerBlue.randomLastNumber > this.objRangerRed.randomLastNumber) {
        console.log('Blue Ranger won');
      } else if(this.objRangerBlue.randomLastNumber === this.objRangerRed.randomLastNumber) {
        console.log('drow');
      }else{
        console.log('Red Ranger won')
      }
  }, 3000)
}

}