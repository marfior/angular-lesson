import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Output() onIncrement : EventEmitter<number> = new EventEmitter();

  counter: number = 0;

  constructor() { }

  ngOnInit() {
  }

  public increment()
  {
    this.counter++;
    this.onIncrement.emit(this.counter);
  }

}
