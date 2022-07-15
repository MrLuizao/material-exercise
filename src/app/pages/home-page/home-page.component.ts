import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InputNameComponent } from 'src/app/components/dialogs/input-name/input-name.component';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  @Output() titleParam: string = 'Inicio';

  nameInput: string = '';

  constructor( public dialog: MatDialog ) { }


  openDialogInput(){

    const dialogRef = this.dialog.open(InputNameComponent, {
      width: '250px',
      data: {name: this.nameInput},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.nameInput = result;
    });
  }

}
