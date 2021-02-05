import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { ErrorPageComponent } from "./component/error-page/error-page.component";
import {CreateBankAccountComponent} from "./component/create-bank-account/create-bank-account.component";
import {ContactComponent} from "./component/contact/contact.component";
import {HelpComponent} from "./component/help/help.component";
import {ShareComponent} from "./component/share/share.component";
import {SettingsComponent} from "./component/settings/settings.component";
import {CheckBalanceComponent} from "./component/check-balance/check-balance.component";
import {CashInComponent} from "./component/cash-in/cash-in.component";
import {CashOutComponent} from "./component/cash-out/cash-out.component";
import {SendMoneyComponent} from "./component/send-money/send-money.component";

const routes: Routes = [
  {path: "", redirectTo: "dashboard", pathMatch: "full"},
  {path: "dashboard", component: DashboardComponent, children: [
      {path: '', redirectTo: 'create-account', pathMatch: 'full'},
      {path: 'create-account', component: CreateBankAccountComponent},
      {path: 'check-balance', component: CheckBalanceComponent},
      {path: 'cash-in', component: CashInComponent},
      {path: 'cash-out', component: CashOutComponent},
      {path: 'send-money', component: SendMoneyComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'help', component: HelpComponent},
      {path: 'share', component: ShareComponent},
      {path: 'settings', component: SettingsComponent},
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
  CheckBalanceComponent,
  CashInComponent,
  CashOutComponent,
  SendMoneyComponent,
  ContactComponent,
  HelpComponent,
  ShareComponent,
  SettingsComponent
]
