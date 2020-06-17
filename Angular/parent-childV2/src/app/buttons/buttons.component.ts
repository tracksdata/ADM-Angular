import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {

  total: number = 0;
  totalHits() {
    console.log('Clicked');
    this.total = this.total + 1

  }

  @Input()
  genButtons: any

}
