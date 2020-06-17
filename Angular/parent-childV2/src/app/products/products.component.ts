import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products = [
    { id: 'P001', name: 'Pen', price: 34, description: 'Red Ink' },
    { id: 'P002', name: 'Book', price: 750, description: 'White Pages' },
    { id: 'P003', name: 'Mobile', price: 95000, description: 'Iphone11' },
    { id: 'P004', name: 'Mouse', price: 3500, description: 'Dell Wireless' },
    { id: 'P005', name: 'Bag', price: 650000, description: 'Guchi Gold Bag' },
  ]



}
