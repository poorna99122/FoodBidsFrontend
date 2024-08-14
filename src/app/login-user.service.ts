import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { UserReg } from './user-reg';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  private baseUrl =  'http://localhost:9091/user'

  constructor(private httpClient : HttpClient) { }

  loginUser(user : User) : Observable<Object>{
    console.log(user);
    return this.httpClient.post(`${this.baseUrl}/login`,user);
  }

  register(userReg : UserReg) : Observable<Object>{
    console.log(userReg);
    return this.httpClient.post(`${this.baseUrl}/register`,userReg);
  }
}
