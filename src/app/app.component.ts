import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  interval: ReturnType<typeof setTimeout>;
  counter: number;
  oddArr = [];
  evenArr = [];

  onGameStarted(event: { counter: number}) {
    this.interval = setInterval(() => {
      this.counter = event.counter++
      if (this.counter % 2 === 0) {
        this.evenArr.push(this.counter)
      } else {
        this.oddArr.push(this.counter)
      }
    }, 1000)
  }

  onGameStopped() {
      clearInterval(this.interval)
  }
}