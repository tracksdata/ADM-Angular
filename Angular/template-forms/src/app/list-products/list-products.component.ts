import { Component, OnInit, Input ,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent  {

  @Input()
  products:any;

  @Output()
  formData=new EventEmitter();


  hello(data){
    console.log(data);
    this.formData.emit(data);
    
  }



}
