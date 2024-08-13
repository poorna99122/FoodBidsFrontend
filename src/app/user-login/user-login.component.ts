import { Component } from '@angular/core';
import { User } from '../user';
import { LoginUserService } from '../login-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent {
  
  user : User = new User()
  constructor(private loginService : LoginUserService,private router: Router) {}

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

  goToRegister(){
    console.log("InsideGoToRegisterMethod");
    this.router.navigate(['/register']);
  }
}
