import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment83';
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  onIntervalFired(fireedNumber: number) {
    if(fireedNumber %2 === 0){
      this.evenNumbers.push(fireedNumber);
    }else{
      this.oddNumbers.push(fireedNumber);
    }
  }
}
