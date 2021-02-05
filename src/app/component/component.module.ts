import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import {AppRoutingModule, RoutingComponents} from "../app-routing.module";
import {MaterialModule} from "../material/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CashInComponent } from './cash-in/cash-in.component';


@NgModule({
  declarations: [
    FooterComponent,
    RoutingComponents,
    CashInComponent,
  ],
  exports: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class ComponentModule { }
