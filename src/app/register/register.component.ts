import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  users=[]

  addUserData(ref){
    let userobj=ref.value;

    //pushing into users array

    this.users.push(userobj);
    
    //clear form fields
    ref.reset();
  }
  
}
