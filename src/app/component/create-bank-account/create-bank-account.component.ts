import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ClientService} from "../../service/client.service";
import {Client} from "../../model/client.model";

@Component({
  selector: 'app-create-bank-account',
  templateUrl: './create-bank-account.component.html',
  styleUrls: ['./create-bank-account.component.scss']
})
export class CreateBankAccountComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService
  ) { }

  clientForm = this.formBuilder.group({
    id: [null],
    name: ['', [Validators.required]],
    nid: [null, [Validators.required]],
    address: ['', [Validators.required]],
    age: [null, [Validators.required]],
    gender: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    balance: [null, [Validators.required]]
  })

  onSubmit(client: Client): void{
    console.log(client)
    this.clientForm.reset()
  }
  ngOnInit(): void {
  }

  // getters
  get id(){
    return this.clientForm.get('id')
  }
  get name(){
    return this.clientForm.get('name')
  }
  get nid(){
    return this.clientForm.get('nid')
  }
  get address(){
    return this.clientForm.get('address')
  }
  get age(){
    return this.clientForm.get('age')
  }
  get gender(){
    return this.clientForm.get('gender')
  }
  get email(){
    return this.clientForm.get('email')
  }
  get password(){
    return this.clientForm.get('password')
  }
  get balance(){
    return this.clientForm.get('balance')
  }
}
