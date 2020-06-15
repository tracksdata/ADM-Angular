import { Component } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  display() {
    console.log('-- clicked ')
    this.pname = 'James';
    this.hideDiv = true;
  }

  displayV1() {
    this.hideDiv = false;
  }

  displayV2() {
    this.hideDiv = !this.hideDiv;
  }

changeText(s1){
  console.log(s1);
}



  hideDiv = false;
  pname = 'Praveen somireddy';
  person = {
    name: 'James',
    age: 87,
    address: 'Hyderabad'
  }
  numbers = [10, 20, 30, 40, 50];

  imagePath = "assets/images/tj1.png";
  heading_position = "left"








}


