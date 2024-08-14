import { Component } from '@angular/core';
import { User } from '../user';
import { LoginUserService } from '../login-user.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent {
  
  user : User = new User()
  userForm!: FormGroup;
  constructor(private loginService : LoginUserService,private router: Router) {
    this.userForm = new FormGroup({
      userId: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    console.log('User Login Component Initiated');
  }

  userLogin(){
    console.log("userLoggedIn");
    console.log('formData',this.userForm.value);

    this.loginService.loginUser(this.userForm.value).subscribe((data)=>{
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
