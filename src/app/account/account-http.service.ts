import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Account} from './account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountHttpService {

  constructor(private http: HttpClient) { }

  fetchAllAccount():Observable<Account[]> {
    return this.http.get<Account[]>("http://localhost:4040/api/books");
   
  }
  deleteAccount(userId: number): Observable<Account[]> {
    return this.http.delete<Account[]>("http://localhost:4040/api/books/"+userId);
      }
      addAccount(accountModel: Account) :Observable<Account> {
        return this.http.post<Account>("http://localhost:4040/api/books", JSON.stringify(accountModel));
  }
  updateAccount(accountModel: Account): Observable<Account> {
    return this.http.put<Account>("http://localhost:4040/api/books", JSON.stringify(accountModel));
      }
    
      fetchAAccount(userId: number):Observable<Account> {
        return this.http.get<Account>("http://localhost:4040/api/books/"+userId);
        
    
      }
  
      }
  
  



