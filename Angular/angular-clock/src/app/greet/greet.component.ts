import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent {

  
  person={
    id:'P001', 
    name:'James', 
    age:20,
    address:'Hyderabad'
  }

  displayPerson(){
    return JSON.stringify(this.person);
  }
  

}
