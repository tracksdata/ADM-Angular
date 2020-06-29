import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { exception } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'http-app';

  exceptionDetails={
    page:'',
    url:'',
    statusCode:0
  };

  // Note:  angular http uses observable streams  at back ground

  users: any;
  constructor(private http: HttpClient) { }

  displayUsers(){
    // users operations
    console.log(this.users);

    fetch('')
    .then(response=>response.json())
    .then(responseData=>{
      this.users=responseData;
    })
    .catch(exception=>{
      console.log('....');

    })




  }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users')
      .subscribe((response => this.users = response));

  }




}
