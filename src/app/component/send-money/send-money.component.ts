import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-send-money',
  templateUrl: './send-money.component.html',
  styleUrls: ['./send-money.component.scss']
})
export class SendMoneyComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }
  sendMoneyForm = this.formBuilder.group({
    nid: [null, [Validators.required]],
    password: [null, [Validators.required]],
    receiverNid: [null, [Validators.required]],
    balance: [null, [Validators.required]]
  })

  ngOnInit(): void {
  }
  onSubmit(value: any): void{
    console.log(value)
  }

  // getters
  get nid(){
    return this.sendMoneyForm.get('nid')
  }
  get password(){
    return this.sendMoneyForm.get('password')
  }
  get receiverNid(){
    return this.sendMoneyForm.get('receiverNid')
  }
  get balance(){
    return this.sendMoneyForm.get('balance')
  }
}
