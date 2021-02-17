import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-check-balance',
  templateUrl: './check-balance.component.html',
  styleUrls: ['./check-balance.component.scss']
})
export class CheckBalanceComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  checkBalanceForm = this.formBuilder.group({
    nid: [null, [Validators.required]],
    password: [null, [Validators.required]]
  })
  ngOnInit(): void {
  }
  onSubmit(value: any): void{
    console.log(value)
  }

  // getters
  get nid(){
    return this.checkBalanceForm.get('nid')
  }
  get password(){
    return this.checkBalanceForm.get('password')
  }
}
