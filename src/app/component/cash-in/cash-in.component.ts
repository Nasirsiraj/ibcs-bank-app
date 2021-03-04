import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ClientService} from "../../service/client.service";
import {Client} from "../../model/client.model";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-cash-in',
  templateUrl: './cash-in.component.html',
  styleUrls: ['./cash-in.component.scss']
})
export class CashInComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService,
    private snackBar: MatSnackBar
  ) { }
  isSubmitted = false
  isFailed = false
  isSucceed = false
  feedbackMessage = ""

  client: Client | null = null

  cashInForm = this.formBuilder.group({
    nid: [null, [Validators.required, Validators.min(10000), Validators.max(9999999999)]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
    balance: [null, [Validators.required, Validators.min(100), Validators.max(100000000)]]
  })

  ngOnInit(): void {
  }

  onSubmit(value: any): void{
    this.isSubmitted = true
    this.clientService.getClientByNid(value.nid).subscribe(
      (response)=> {
        this.client = response
        if(this.client == null){
          this.isFailed = true
          this.isSucceed = false
          this.feedbackMessage = "Account not found"
          this.showSnackBar(this.feedbackMessage)

        }else if(this.client != null && this.client.password != value.password){
          this.feedbackMessage = "Wrong Password"
          this.isSucceed = false
          this.isFailed = true
          this.showSnackBar(this.feedbackMessage)

        }else if(this.client != null && this.client.password == value.password){
          this.client.balance = this.client.balance + value.balance
          this.clientService.updateClientByObj(this.client).subscribe(
            (response) => {
              if(this.client?.balance == response?.balance){
                this.feedbackMessage = "CashIn successful!"
                this.isSucceed = true
                this.isFailed = false
                this.showSnackBar(this.feedbackMessage)

              }
            },(error) => {
              this.feedbackMessage = "Error occurred!"
              this.isSucceed = false
              this.isFailed = true
              this.showSnackBar(this.feedbackMessage)

            }
          )
        }
      },
      (error) => {
        this.isSucceed = false
        this.isFailed = true
        this.feedbackMessage = "Error occurred!"
        this.showSnackBar(this.feedbackMessage)

      }
    )
    this.cashInForm.reset()
  }
  refreshPage(): void{
    window.location.reload()
  }
  showSnackBar(message: string): void{
    this.snackBar.open(message, 'Close', {duration: 5000})
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
