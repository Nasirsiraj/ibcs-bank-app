import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, ValidationErrors, Validators} from "@angular/forms";
import {ClientService} from "../../service/client.service";
import {Client} from "../../model/client.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-check-balance',
  templateUrl: './check-balance.component.html',
  styleUrls: ['./check-balance.component.scss']
})
export class CheckBalanceComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private clientService: ClientService
  ) { }
  client: Client | null = null
  isFailed = false
  isSucceed = false
  isSubmitted = false
  feedbackMessage = ""

  checkBalanceForm = this.formBuilder.group({
    nid: [null, [Validators.required, Validators.min(10000), Validators.max(9999999999)]],
    password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
  })
  ngOnInit(): void {
  }
  onSubmit(value: any): void{
    this.isSubmitted = true
    this.clientService.getClientByNid(value.nid).subscribe(
      (response) => {
        this.client  = response
        if(this.client == null){
          this.isFailed = true
          this.isSucceed = false
          this.feedbackMessage = "Account not found!"

        } else if(this.client != null && this.client.password != value.password){
          this.isFailed = true
          this.isSucceed = false
          this.feedbackMessage = "Wrong Password"

        } else if(this.client != null && this.client.password == value.password){
          this.isFailed = false
          this.isSucceed = true
          this.feedbackMessage = "(-_-)"
        }
      },
      (error) => {
        this.isSucceed = false
        this.isFailed = true
        this.feedbackMessage = "Error occurred!"
      }
    )
    this.checkBalanceForm.reset()
  }
  refreshPage(): void{}
  goToCashOut (): void{
    this.router.navigate(['/dashboard/cash-out'])
  }
  // getters
  get nid(){
    return this.checkBalanceForm.get('nid')
  }
  get password(){
    return this.checkBalanceForm.get('password')
  }
}
