import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ClientService} from "../../service/client.service";
import {Client} from "../../model/client.model";

@Component({
  selector: 'app-cash-out',
  templateUrl: './cash-out.component.html',
  styleUrls: ['./cash-out.component.scss']
})
export class CashOutComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService
  ) { }
  isSubmitted = false
  isFailed = false
  isSucceed = false
  feedbackMessage = ""

  client: Client | null = null

  cashOutForm = this.formBuilder.group({
    nid: [null, [Validators.required, Validators.min(10000), Validators.max(9999999999)]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
    balance: [null, [Validators.required, Validators.min(100), Validators.max(100000000)]]
  })

  ngOnInit(): void {
  }
  onSubmit(value: any): void{
    this.isSubmitted = true
    this.clientService.getClientByNid(value.nid).subscribe(
      (response) => {
        this.client = response
        if(this.client == null){
          this.isSucceed = false
          this.isFailed = true
          this.feedbackMessage = "Account not found!"

        }else if(this.client != null && this.client.password != value.password){
          this.isSucceed = false
          this.isFailed = true
          this.feedbackMessage = "Wrong Password!"

        }else if((this.client != null && this.client.password == value.password) && (this.client.balance < value.balance)){
          this.isSucceed = false
          this.isFailed = true
          this.feedbackMessage = "Insufficient Balance"

        }else if((this.client != null && this.client.password == value.password) && (this.client.balance >= value.balance)){
          this.client.balance = this.client.balance - value.balance
          this.clientService.updateClientByObj(this.client).subscribe(
            (response) => {
              if(this.client?.balance == response?.balance){
                // succeed
                this.isFailed = false
                this.isSucceed = true
                this.feedbackMessage = "CashOut Successful!"
              }else{
                this.isFailed = true
                this.isSucceed = false
                this.feedbackMessage = "Error occurred!"
              }
            },
            (error) => {
              this.isFailed = true
              this.isSucceed = false
              this.feedbackMessage = "Error occurred!"
            }
          )
        }
      },
      (error) => {
        this.isSucceed = false
        this.isFailed = true
        this.feedbackMessage = "Error occurred!"
      }
    )
    this.cashOutForm.reset()
  }

  refreshPage(){
    window.location.reload()
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
