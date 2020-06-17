import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  // define a property who receives data from parent

  @Input('isLoged')
  logedIn: boolean;

  @Input()
  personObj: any;



}
