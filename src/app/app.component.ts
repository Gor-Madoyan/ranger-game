import { Component } from '@angular/core';
import { Ranger } from "src/app/rangers-buttons/logic"
 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fight-rangers';

  rangerRed(){
    const redRenger = new Ranger('Red')
    redRenger.ranger1()
    redRenger.fight();
    
  }
  rangerBlue(){
    const bluedRenger = new Ranger('Blue');
    bluedRenger.ranger2()
  }
  
  

}
