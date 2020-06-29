import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Welcome to my App';

  product = {
    id: '',
    name: '',
    price:'',
    description:''
  }

  products=[];

  handleSubmit(form: NgForm){

    console.log(form);

    console.log(form.value);

    this.products.push(form.value);

    form.resetForm();
  }

  date = new Date().toLocaleTimeString('en-US', { timeZone: 'america/new_york' });
  clock() {
    return this.date;
  }














}
