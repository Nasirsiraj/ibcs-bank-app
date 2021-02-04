import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  sidenavOpened = true;
  navLinkList = [
    'Create Account',
    'Cash In',
    'Cash Out',
    'Send Money',
    'Contact',
    'Help',
    'Share',
    'Settings'
  ];


  ngOnInit(): void {
  }
  toogleSidenav(): void{
      this.sidenavOpened = !this.sidenavOpened;
  }
}
