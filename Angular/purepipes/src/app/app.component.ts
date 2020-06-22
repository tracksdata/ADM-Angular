import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Welcome to Angular 9 Training !';
  todayDate = new Date();

  product = {
    id: 'P001',
    name: 'Laptop',
    price: 84957495,
    description: 'Apple Mac Book Pro'
  }

  // load data from any api server
  // function for calculations

  

  searchText:string;

  cities = [
    'Chennai',
    'Bangalore',
    'Hyderabad',
    'Goa',
    'Pune',
    'Mangalore',
    'Patna',
    'Kolkata',
    'Delhi',
    'Mumbai'
  ]


  get getProduct(): any {
    return JSON.stringify(this.product);
  }



}
