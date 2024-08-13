import { Component } from '@angular/core';
import { UserReg } from '../user-reg';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent {

  userReg : UserReg = new UserReg();

  ngOnInit() {
    console.log('User Registration Component Initiated');
  }

  userRegistration(){
    console.log("userReg",this.userReg);
    // console.log(this.user);
    // this.loginService.loginUser(this.user).subscribe((data)=>{
    //   alert('Success');
    // },error => {
    //   alert('Please Enter Correct UserID or Password');
    // })
  }



}
