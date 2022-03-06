import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user.modle';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  newUser: User = {
    username: "",
    password: "",
    role: "",
    role_id: 0
  }
  errorMessage: string = "";


  constructor(private userService: UserService, private router: Router, private authService:AuthService) { }

  ngOnInit(): void {
  }



  validateUser(){
    // Call the service and check on that user in the backend
    this.userService.login(this.newUser).subscribe((response)=>{
        let receivedUser: User = response;
        // if I received am empty user 
        console.log(receivedUser)
        if( receivedUser.username == null ){
          // do the stuff for an empty user
          this.errorMessage = "Invalid Credentials!!";
          console.log("BAD CREDENTIAL")
        }
        else if (receivedUser.role_id == 1  ){
          //navigate to book-crud
          this.authService.storeUser(receivedUser);
          // 2. mark that we have logged in
          this.authService.loggedIn=true;

          this.router.navigate(['Reimbursement']);
        }
       
    
    });
  }
/*{
    "userID": 0,
    "username": null,
    "password": null,
    "fullName": null,
    "email": null,
    "role_id": 0,
    "role": null
}*/

  validateUserFake(){
    let returnUser: User = this.userService.validateUser(this.newUser);
    if(returnUser.username == ""){
      // invalid credentials
      this.errorMessage = "Invalid Credentials!!";
    }else{
      // successful login
      if(returnUser.role == "' associate'","'manager'"){
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
