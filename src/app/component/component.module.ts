import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBankAccountComponent } from './create-bank-account/create-bank-account.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import {RoutingComponents} from "../app-routing.module";
import {MaterialModule} from "../material/material.module";

@NgModule({
  declarations: [
    CreateBankAccountComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    RoutingComponents
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
    exports: [
        FooterComponent
    ]
})
export class ComponentModule { }
