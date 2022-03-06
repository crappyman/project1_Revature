import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { HeaderComponent } from './header/header.component';
import { LogoutComponent } from './user/logout/logout.component';
import { ListAccountComponent } from './account/list-account/list-account.component';
import { ListRequestComponent } from './reimbursement/list-request/list-request.component';
import { ListHttpAccountComponent } from './account/list-http-account/list-http-account.component';
import { ListHttpRequestComponent } from './reimbursement/list-http-request/list-http-request.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    LogoutComponent,
    ListAccountComponent,
    ListRequestComponent,
    ListHttpAccountComponent,
    ListHttpRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  FormsModule,
  HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
