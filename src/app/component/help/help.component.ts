import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  constructor() { }
  lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n' +
    'pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. \n' +
    'Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, \n' +
    'in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent\n' +
    'per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut \n' +
    'vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.\n' +
    'Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat \n' +
    'faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. \n' +
    'Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. \n' +
    'Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, \n' +
    'non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.\n'

  helpOption = new Map([
    [1, 'How to create a bank account'],
    [2, 'How to cash In'],
    [3, 'How to cash out'],
    [4, 'How to send money'],
    [5, 'IBCS Bank rules and regulation']
  ])

  ngOnInit(): void {
  }
}
