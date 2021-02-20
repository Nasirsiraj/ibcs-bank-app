import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, ValidationErrors, Validators} from "@angular/forms";

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
    nid: [null, [Validators.required, Validators.min(10000), Validators.max(9999999999)]],
    password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
  })
  ngOnInit(): void {
  }
  onSubmit(value: any): void{
    console.log(value)
  }


  validate(control: AbstractControl): ValidationErrors | null {
    const validator = Validators.min(5);
    return validator(control);
  }
  // getters
  get nid(){
    return this.checkBalanceForm.get('nid')
  }
  get password(){
    return this.checkBalanceForm.get('password')
  }
}
