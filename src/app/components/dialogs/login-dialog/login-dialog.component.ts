import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  constructor( public router:  Router) { }

  ngOnInit(): void {
  }

  loginAsGuest(){
    localStorage.setItem('user', 'loged')
    this.router.navigateByUrl('home')
  }

}
