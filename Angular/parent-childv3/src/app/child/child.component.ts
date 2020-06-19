import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  message: string;
  private _logedIn: boolean;

  get logedIn(): boolean {
    return this._logedIn;
  }
 
  @Input()
  set logedIn(value: boolean) {
    this._logedIn = value;
    if (value === true) {
      this.message = "Welcome back!";
    } else {
      this.message = "Please login";
    }
  }


}
