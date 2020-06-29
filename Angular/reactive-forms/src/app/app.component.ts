import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

class CustomValidations {
  static ssnValidator(ssn): any {
    console.log('=====> <=========');
    console.log(ssn.value);


    const SSN_EXP = /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/;
    if (SSN_EXP.test(ssn.value)) {
      return null;
    } else {
      return {
        invalidSSN: true
      }
    }



  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactive-forms';

  // step 1
  //Define FormGroup element name

  productForm: FormGroup;
  products = [];

  constructor(private fb: FormBuilder) { }

  get fc() {
    return this.productForm.controls;
  }

  handleSubmit() {
    console.log('submited');
    console.log(this.productForm.value);
    this.products.push(this.productForm.value);


  }


  mycustomValidations() {
    return true;
  }
  ngOnInit() {
    this.productForm = this.fb.group(
      {
        id: ['', Validators.required],
        name: [''],
        price: [''],
        description: [''],
        ssn: ['', [Validators.required,CustomValidations.ssnValidator]]
      }
    );
  }









}
