import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {

  @Output() titleParam: string = 'Formulario';

  constructor() { }

  ngOnInit(): void {
  }

}
