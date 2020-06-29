import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';


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

  products = [];
  newProducts = new Array();

  @Output()
  parentData = new EventEmitter();

  flag = false;
  updateForm = false

  update(data) {
    console.log("<<<<>>>>> <<<>>>>");
    console.log(data);
    this.product = data;
    console.log(this.product);
    this.updateForm = true;
  }

  cancelUpdate() {

    this.updateForm = false;
  }

  updateProduct(prod) {

    // this.todos=this.todos.map(todo=>todo.id==id?Object.assign({},todo,{completed:!todo.completed}):todo)

    console.log("<<<<<< ^^^^ >>>>>>");
    console.log(prod);


    this.products = this.products.map(product => product.id == prod.id ? Object.assign({}, prod) : product);

    console.log("<<<<< === >>>>>");

    console.log(this.products);

    return;
    /*this.products.find((product, index) => {
       if (product.id == prod.id) {
         this.products[index] = prod.value;
         console.log(this.products);

       }
     })*/
  }

  handleSubmit(form: NgForm) {


    console.log("=======>>>>#### <<<<====");
    console.log(form);


    if (this.products.length != 0) {
      this.products.map((prod, idx) => {
        if (prod.id == this.product.id) {
          this.flag = true;
        }
      })
    }
    if (!this.flag)
      this.products.push(form.value)
    console.log(form.value);
    form.resetForm();

    this.parentData.emit(this.products);
  }

}
