import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ClientService} from "../../service/client.service";
import {Client} from "../../model/client.model";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-create-bank-account',
  templateUrl: './create-bank-account.component.html',
  styleUrls: ['./create-bank-account.component.scss']
})
export class CreateBankAccountComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService,
    private matSnackBar: MatSnackBar
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
    this.clientService.postOneClient(client).subscribe(
      (response => {
        this.matSnackBar.open('Account created', 'Done', {
          duration: 500
        })
      }),
      (error => {
        this.matSnackBar.open('Failed', 'Close', {
          duration: 500
        })
      })
    )
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
