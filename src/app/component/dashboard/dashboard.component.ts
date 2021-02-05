import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  sidenavOpened = true
  navLinkList = new Map([
    [1, {title: 'Create Account', link: '/dashboard/create-account'}],
    [2, {title: 'Check Balance', link: '/dashboard/check-balance'}],
    [3, {title: 'Cash In', link: '/dashboard/cash-in'}],
    [4, {title: 'Cash Out', link: '/dashboard/cash-out'}],
    [5, {title: 'Send Money', link: '/dashboard/send-money'}],
    [6, {title: 'Contact', link: '/dashboard/contact'}],
    [7, {title: 'Help', link: '/dashboard/help'}],
    [8, {title: 'Share', link: '/dashboard/share'}],
    [9, {title: 'Settings', link: '/dashboard/settings'}]
  ])

  ngOnInit(): void {
  }
  toogleSidenav(): void{
      this.sidenavOpened = !this.sidenavOpened
  }
}
