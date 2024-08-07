import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  private baseUrl =  'http://localhost:8081/user/login'

  constructor(private httpClient : HttpClient) { }

  loginUser(user : User) : Observable<Object>{
    console.log(user);
    return this.httpClient.post(`${this.baseUrl}`,user);
  }
}
