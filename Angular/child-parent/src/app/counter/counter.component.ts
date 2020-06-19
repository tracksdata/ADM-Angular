import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  count = 0;

  @Input()
  btnLable: string;

  @Output()
  noOfHits = new EventEmitter();


  btnCount() {
    this.count = this.count + 1;
    this.noOfHits.emit(this.count);
  }
}
