import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountHttpService } from '../account-http.service';
import { Account } from '../account.model';

@Component({
  selector: 'app-list-http-account',
  templateUrl: './list-http-account.component.html',
  styleUrls: ['./list-http-account.component.css']
})
export class ListHttpAccountComponent implements OnInit {

  allAccount: Account[] = [];
  toggleAdd: boolean = false;

  newAccount: Account = {
    userId: 0,
    username: '',
    password: '',
    fullName: '',
    email: '',
    roleId: 0,
    role: ''
  }

  constructor(private accountHttpService: AccountHttpService,private router: Router) { }

  ngOnInit(): void {
this.loadAllAccount
  }
  
  toggleAddForm() {
    if(this.toggleAdd) {
      this.toggleAdd = false;
    } else {
      this.toggleAdd = true;
    }
  }
  loadAllAccount(){
    this.accountHttpService.fetchAllAccount().subscribe((response)=>{
      // the response that we receive here is an array of Book
      console.log(response);
      this.allAccount = response;
    });

  }
    
  deleteAccount(userId: number) {
     this.accountHttpService.deleteAccount(userId).subscribe((response)=>{
      console.log(response);
     
      this.loadAllAccount();
  })
  
}
  
}

