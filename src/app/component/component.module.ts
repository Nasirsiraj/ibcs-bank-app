import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CreateBankAccountComponent } from './create-bank-account/create-bank-account.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ErrorPageComponent,
    CreateBankAccountComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentModule { }
