import { Component, OnInit,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {


  product = {
    id: '',
    name: '',
    price: '',
    description: ''
  }

  products=[];
  newProducts = new Array();

  @Output()
  parentData=new EventEmitter();

  handleSubmit(s1,s2,s3,s4) {
    this.product.id=s1;
    this.product.name=s2;
    this.product.price=s3;
    this.product.description=s4;
    
    this.products.push(this.product);
    this.newProducts.push(this.product); // immutability
    console.log(this.products);
    //this.resetForm();
    this.parentData.emit(this.products);
  }

}
