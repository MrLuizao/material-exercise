import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-convertions-page',
  templateUrl: './convertions-page.component.html',
  styleUrls: ['./convertions-page.component.scss']
})
export class ConvertionsPageComponent implements OnInit {

  @Output() titleParam: string = 'Conversiones';

  constructor() { }

  ngOnInit(): void {
  }

}
