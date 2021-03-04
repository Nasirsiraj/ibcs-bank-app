import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Client} from "../../model/client.model";
import {ClientService} from "../../service/client.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-send-money',
  templateUrl: './send-money.component.html',
  styleUrls: ['./send-money.component.scss']
})
export class SendMoneyComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService,
    private snackBar: MatSnackBar
  ) { }
  senderClient: Client | null = null
  receiverClient: Client | null = null
  isSubmitted = false
  isSucceed = false
  isFailed = false
  feedbackMessage = ""

  sendMoneyForm = this.formBuilder.group({
    nid: [null, [Validators.required, Validators.min(10000), Validators.max(9999999999)]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
    receiverNid: [null, [Validators.required, Validators.min(10000), Validators.max(9999999999)]],
    balance: [null, [Validators.required, Validators.min(100), Validators.max(100000000)]]
  })

  ngOnInit(): void {
  }
  onSubmit(value: any): void{
    this.isSubmitted = true
    try {
      this.clientService.getClientByNid(value.nid).subscribe(
        (response) => {
          this.senderClient = response
          if(this.senderClient == null){
            this.isFailed = true
            this.isSucceed = false
            this.feedbackMessage = "Sender Account not found!"
            this.showSnackBar(this.feedbackMessage)
          } else if(this.senderClient != null && this.senderClient.password != value.password){
            this.isFailed = true
            this.isSucceed = false
            this.feedbackMessage = "Wrong Password!"
            this.showSnackBar(this.feedbackMessage)

          } else if((this.senderClient != null && this.senderClient.password == value.password) && (this.senderClient.balance < value.balance)){
            this.isFailed = true
            this.isSucceed = false
            this.feedbackMessage = "Insufficient Balance!"
            this.showSnackBar(this.feedbackMessage)

          } else if((this.senderClient != null && this.senderClient.password == value.password) && (this.senderClient.balance >= value.balance)){
            this.clientService.getClientByNid(value.receiverNid).subscribe(
              (response1) => {
                this.receiverClient = response1
                if(this.receiverClient == null){
                  this.isFailed = true
                  this.isSucceed = false
                  this.feedbackMessage = "Receiver Account not found!"
                  this.showSnackBar(this.feedbackMessage)

                } else if(this.receiverClient != null){
                  // @ts-ignore
                  this.senderClient?.balance = this.senderClient?.balance - value.balance
                  this.receiverClient.balance = this.receiverClient.balance + value.balance
                  // @ts-ignore
                  this.clientService.updateClientByObj(this.senderClient).subscribe(
                    (response) => {
                      if(this.senderClient?.balance == response?.balance){
                        // @ts-ignore
                        this.clientService.updateClientByObj(this.receiverClient).subscribe(
                          (response) => {
                            if(this.receiverClient?.balance == response?.balance){
                              this.isSucceed = true
                              this.isFailed = false
                              this.feedbackMessage = "Sending Successful"
                              this.showSnackBar(this.feedbackMessage)
                            }else {
                              this.isFailed = true
                              this.isSucceed = false
                              this.feedbackMessage = "Error Occurred!"
                              this.showSnackBar(this.feedbackMessage)
                            }
                          },
                          (error) => {
                            this.isFailed = true
                            this.isSucceed = false
                            this.feedbackMessage = "Error Occurred!"
                            this.showSnackBar(this.feedbackMessage)
                          }
                        )
                      } else{
                        this.isFailed = true
                        this.isSucceed = false
                        this.feedbackMessage = "Error Occurred!"
                        this.showSnackBar(this.feedbackMessage)
                      }
                    },
                    (error) => {
                      this.isFailed = true
                      this.isSucceed = false
                      this.feedbackMessage = "Error Occurred!"
                      this.showSnackBar(this.feedbackMessage)
                    }
                  )
                }
              },
              (error) => {
                this.isFailed = true
                this.isSucceed = false
                this.feedbackMessage = "Error Occurred!"
                this.showSnackBar(this.feedbackMessage)
              }
            )
          }
        },
        (error) => {
          this.isFailed = true
          this.isSucceed = false
          this.feedbackMessage = "Error Occurred!"
          this.showSnackBar(this.feedbackMessage)
        }
      )
    }catch (e){
      console.log(e.message)
    }
    this.sendMoneyForm.reset()
  }
  refreshPage(): void{
    window.location.reload()
  }
  showSnackBar(message: string): void{
    this.snackBar.open(message, 'Close', {duration: 5000})
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
