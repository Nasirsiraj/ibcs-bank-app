import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { ErrorPageComponent } from "./component/error-page/error-page.component";
import {CreateBankAccountComponent} from "./component/create-bank-account/create-bank-account.component";
import {ContactComponent} from "./component/contact/contact.component";
import {HelpComponent} from "./component/help/help.component";

const routes: Routes = [
  {path: "", redirectTo: "dashboard", pathMatch: "full"},
  {path: "dashboard", component: DashboardComponent, children: [
      {path: '', redirectTo: 'create-account', pathMatch: 'full'},
      {path: 'create-account', component: CreateBankAccountComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'help', component: HelpComponent},
      {path: '**', redirectTo: 'create-account'}
    ]},
  {path: "error", component: ErrorPageComponent},
  {path: "**", redirectTo: "error"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [
  DashboardComponent,
  ErrorPageComponent,
  CreateBankAccountComponent,
  ContactComponent,
  HelpComponent
]
