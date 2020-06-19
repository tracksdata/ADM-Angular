import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parent-childv3';
  userName:string;
  logedUser = false;

  handleSubmit(e) {
    e.preventDefault();
   //this.fname=
    console.log(e);
    if(this.userName=="admin"){
      this.logedUser=true
    }else{
      this.logedUser=false;
    }
    
    
   
  }
}
