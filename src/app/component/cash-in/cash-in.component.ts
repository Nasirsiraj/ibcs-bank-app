import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-cash-in',
  templateUrl: './cash-in.component.html',
  styleUrls: ['./cash-in.component.scss']
})
export class CashInComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }
  cashInForm = this.formBuilder.group({
    nid: [null, [Validators.required, Validators.min(10000), Validators.max(9999999999)]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
    balance: [null, [Validators.required, Validators.min(100), Validators.max(100000000)]]
  })

  ngOnInit(): void {
  }

  onSubmit(value: any): void{
    console.log(value)
  }

  // getters
  get nid(){
    return this.cashInForm.get('nid')
  }
  get password(){
    return this.cashInForm.get('password')
  }
  get balance(){
    return this.cashInForm.get('balance')
  }
}
