import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { ErrorPageComponent } from "./component/error-page/error-page.component";

const routes: Routes = [
  {path: "", redirectTo: "dashboard", pathMatch: "full"},
  {path: "dashboard", component: DashboardComponent},
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
  ErrorPageComponent
]
