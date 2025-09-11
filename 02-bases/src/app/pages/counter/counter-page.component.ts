import { ChangeDetectionStrategy, Component, signal } from "@angular/core";





@Component({
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class CounterPageComponent {

  counter = 10;
  counterSignal = signal(10);

  constructor() {
    // setInterval(() => {
    //this.counter += 1;
    //this.counterSignal.update((current)=>current+1)
    //   this.increaseByOne(1)
    // }, 2000)

    // setInterval(() => {
    //   console.log("Tick")
    // }, 2000)
  }

  increaseByOne(value: number) {
    this.counter += value;
    this.counterSignal.update(current => current + value);
  }

  decreaseByOne(value: number) {
    this.counter -= value;
    this.counterSignal.update(current => current - value);
  }

  resetCounter10() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
