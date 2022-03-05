import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAccountComponent } from './account/list-account/list-account.component';
import { ListHttpAccountComponent } from './account/list-http-account/list-http-account.component';
import { ListRequestComponent } from './reimbursement/list-request/list-request.component';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';

const routes: Routes = [
 
 
  { path: "login", component: LoginComponent },
  
  { path: "logout", component: LogoutComponent },
  { path: "account", component: ListAccountComponent },
  {path: "account.http",component:ListHttpAccountComponent },
  {path: "Reimbursement",component:ListRequestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
