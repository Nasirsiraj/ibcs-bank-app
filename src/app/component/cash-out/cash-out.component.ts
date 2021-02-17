import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-cash-out',
  templateUrl: './cash-out.component.html',
  styleUrls: ['./cash-out.component.scss']
})
export class CashOutComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }
  cashOutForm = this.formBuilder.group({
    nid: [null, [Validators.required]],
    password: [null, [Validators.required]],
    balance: [null, [Validators.required]]
  })

  ngOnInit(): void {
  }
  onSubmit(value: any): void{
    console.log(value)
  }

  // getters
  get nid(){
    return this.cashOutForm.get('nid')
  }
  get password(){
    return this.cashOutForm.get('password')
  }
  get balance(){
    return this.cashOutForm.get('balance')
  }
}
