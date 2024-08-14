import { Component } from '@angular/core';
import { UserReg } from '../user-reg';
import { LoginUserService } from '../login-user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent {
  constructor(private loginService : LoginUserService){

  }

  userReg : UserReg = new UserReg();

  ngOnInit() {
    console.log('User Registration Component Initiated');
  }

  userRegistration(){
    console.log("userReg",this.userReg);
      this.loginService.register(this.userReg).subscribe((data)=>{
        console.log(data);
        alert("User Registered Successfully");
      },error =>{
        alert("User Registered Failed");
      })
  }


}
