import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { interval } from 'rxjs';
@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval;
  lastNumber = 0;
  @Output() intervalFired = new EventEmitter<number>();



  ngOnInit(): void {
  }

  onStartGame() {
    this.interval = setInterval(() => { 

      this.intervalFired.emit(this.lastNumber+1);
      this.lastNumber++;
    }, 100);

  }

  onPuseGame() {

    clearInterval(this.interval);
  }

}
