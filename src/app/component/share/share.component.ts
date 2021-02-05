import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }
  shareForm = this.formBuilder.group({
    message: ['', [Validators.required]]
  })

  ngOnInit(): void {
  }

  get message(){
    return this.shareForm.get('message')
  }
}
