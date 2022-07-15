import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bar-menu',
  templateUrl: './bar-menu.component.html',
  styleUrls: ['./bar-menu.component.scss']
})
export class BarMenuComponent implements OnInit {

  @Input() titleParam: string = '';
  
  constructor( private router: Router ) { }

  ngOnInit(): void {    
  }

  logOut(){
    localStorage.clear();
    this.router.navigateByUrl('login');
  }
}
