import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {}

  prod = new Product();
    productData(){
    this.prod.id = 101;
    this.prod.name = 'Pen';
    this.prod.price = 34;
    this.prod.description = "Red Ink";
    return this.prod;
  }
}
