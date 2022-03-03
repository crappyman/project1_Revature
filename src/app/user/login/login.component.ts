import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.modle';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  newUser: User = {
    userName: "",
    password: "",
    role: ""
  }
  errorMessage: string = "";


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  validateUser(){
    let returnUser: User = this.userService.validateUser(this.newUser);
    if(returnUser.userName == ""){
      // invalid credentials
      this.errorMessage = "Invalid Credentials!!";
    }else{
      // successful login
      if(returnUser.role == "admin"){
        //navigate to book-crud
        this.router.navigate(['book-crud']);
      }else{
        //navigate to display component
        this.router.navigate(['display']);
      }
      console.log("login succesfull!!");
    }
  }

}
