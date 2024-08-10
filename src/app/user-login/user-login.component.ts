import { Component } from '@angular/core';
import { User } from '../user';
import { LoginUserService } from '../login-user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent {
  user : User = new User()
  constructor(private loginService : LoginUserService) {}

  ngOnInit() {
    console.log('User Login Component Initiated');
  }

  userLogin(){
    console.log("userLoggedIn");
    console.log(this.user);
    this.loginService.loginUser(this.user).subscribe((data)=>{
      alert('Success');
    },error => {
      alert('Please Enter Correct UserID or Password');
    })
  }
}
