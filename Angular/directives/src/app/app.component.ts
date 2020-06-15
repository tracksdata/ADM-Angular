import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showData=false;

  products = [
    { id: 'P001', name: 'Pen', price: 65, description: 'Red Ink' },
    { id: 'P002', name: 'Book', price: 65, description: 'White Pages' },
    { id: 'P003', name: 'Laptop', price: 65, description: 'Dell Laptop' },
    { id: 'P004', name: 'Mouse', price: 65, description: 'Wireless Mouse' },
    { id: 'P005', name: 'Mobile', price: 65, description: 'One Plus 8' },
  ]


}
