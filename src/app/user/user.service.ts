import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from './user.modle';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private authService: AuthService) { }
  
  validateUser(newUser: User): User{
    if(newUser.role=="admin" && newUser.userName=="admin" && newUser.password=="admin"){
      // user has succesfully logged in as an admin
      // 1. store the user information in the browser storage
      this.authService.storeUser(newUser);
      // 2. mark that we have logged in
      this.authService.loggedIn=true;
    }else if(newUser.role=="customer" && newUser.userName=="customer" && newUser.password=="customer"){
      // user has succesfully logged in as a customer
      // 1. store the user information in the browser storage
      this.authService.storeUser(newUser);
      // 2. mark that we have logged in
      this.authService.loggedIn=true;
    }else{
      // invalid credentials
      newUser = {
        userName: "",
        password: "",
        role: ""
      }
    }
    return newUser;
  }
}
