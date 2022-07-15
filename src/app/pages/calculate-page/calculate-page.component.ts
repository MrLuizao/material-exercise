import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calculate-page',
  templateUrl: './calculate-page.component.html',
  styleUrls: ['./calculate-page.component.scss']
})
export class CalculatePageComponent implements OnInit {

  @Output() titleParam: string = 'Calcular Fecha';

  constructor() { }

  ngOnInit(): void {
  }

}
