import { Injectable } from '@angular/core';
import { User } from './user.modle';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
//}
loggedIn: boolean = false;

  storeUser(User: User): void{
   sessionStorage.setItem("userInfo", JSON.stringify(User));
  }

  retrieveUser(): User{
   let data: any = sessionStorage.getItem("userInfo");
    return JSON.parse(data);
  }

  destroyUser(): void{
    sessionStorage.removeItem("userInfo");

  }
  }