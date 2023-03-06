import { NgModule } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import {NgbModule} from"@ng-bootstrap/ng-bootstrap"; 
import { AppComponent } from './app.component';
import { EvenComponent } from './even/even.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';

@NgModule({
  declarations: [
    AppComponent,
    EvenComponent,
    GameControlComponent,
    OddComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
