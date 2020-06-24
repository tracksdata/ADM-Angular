import { Component } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-forms';

  finalproducts=[];
  fun(data){
    
    this.finalproducts.push(data);
    console.log('fun');
    console.log(data);
    
    console.log(this.finalproducts);
    
    
  }
/*
  products = [];

  resetForm = () => {
    this.product.id='';
    this.product.name='';
    this.product.price='';
    this.product.description='';

  }

  */
 /*

  handleSubmit(product) {
   // this.products.push(product);
   this.products=this.products.concat(product); // immutability
    console.log(this.products);
    //this.resetForm();

    
  }

  constructor(private ps: ProductService) {

  }

  /*
  displayProduct() {
    this.product = this.ps.productData();
    console.log(this.product.id);
    console.log(this.product.name);
    
    
  }*/










}
