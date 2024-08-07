import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent {
  user : User = new User()
  constructor() {}

  ngOnInit() {
    console.log('User Login Component Initiated');
  }

  userLogin(){
    console.log("userLoggedIn");
    console.log(this.user);
    
    
  }
}
