import { Component, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-calculate-page',
  templateUrl: './calculate-page.component.html',
  styleUrls: ['./calculate-page.component.scss']
})

export class CalculatePageComponent implements OnInit {

  @Output() titleParam: string = 'Calcular Fecha';
  dateSelected: any = null;
  dateTransformed: any = null;
  calculateParam: string = '';
  quantity: number = 0;

  dateArray: any[] = [
    { metric: 'DIA'},
    { metric: 'MES'},
    { metric: 'AÑO'},
  ];

  constructor( private _snackBar: MatSnackBar ) { }

  ngOnInit(): void {
  }

  calculateDate(){

    if(this.dateSelected === null){
      this._snackBar.open('Selecciona una fecha', 'ok', {
        duration: 1500
      });
      
    }else{
      
      switch(this.calculateParam){
        case 'DIA':
          this.dateTransformed = this.dateSelected.setDate(this.dateSelected.getDate() + this.quantity)
        break;

        case 'MES':
          this.dateTransformed = this.dateSelected.setMonth(this.dateSelected.getMonth() + this.quantity)   
        break;

        case 'AÑO':
          this.dateTransformed = this.dateSelected.setMonth(this.dateSelected.getMonth() + 12 * this.quantity)   
        break;
      }
      
    }
    
  }

  detectSelectOpt(evt: any){
    this.calculateParam = evt.value;
  }


}
