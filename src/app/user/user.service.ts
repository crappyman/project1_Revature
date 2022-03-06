import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { User } from './user.modle';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private authService: AuthService, private http: HttpClient ) { }
  


  login(user: User): Observable<User>{
    return this.http.post<any>("http://localhost:4040/api/login", JSON.stringify(user));
  }

  validateUser(newUser: User): User{
    if(newUser.role=="admin" && newUser.username=="admin" && newUser.password=="admin"){
      // user has succesfully logged in as an admin
      // 1. store the user information in the browser storage
      this.authService.storeUser(newUser);
      // 2. mark that we have logged in
      this.authService.loggedIn=true;
    }else if(newUser.role=="customer" && newUser.username=="customer" && newUser.password=="customer"){
      // user has succesfully logged in as a customer
      // 1. store the user information in the browser storage
      this.authService.storeUser(newUser);
      // 2. mark that we have logged in
      this.authService.loggedIn=true;
    }else{
      // invalid credentials
      newUser = {
        username: "",
        password: "",
        role: "",
        role_id:0
      }
    }
    return newUser;
  }
}
