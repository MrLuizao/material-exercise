import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormDataI } from 'src/app/interfaces/form-data.interface';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {

  @Output() titleParam: string = 'Formulario';

  formGroup: any;
  bookRead: boolean = false;
  loading: boolean = false;
  value = '';
  listBooks: any = []

  civilState: any[] = [
    {value: 12, viewValue: 'Soltero'},
    {value: 13, viewValue: 'Casado'},
    {value: 14, viewValue: 'Unión Libre'},
  ];

  errorNames: boolean = false;

  constructor(  private formBuilder: FormBuilder, 
                private _snackBar: MatSnackBar,
                private service: LoginService ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      nombres: [undefined, Validators.required],
      apellidos: [undefined, Validators.required],
      fumas: [undefined, Validators.required],
      practicasLectura: [undefined, Validators.required],
      librosLeidos: [undefined, Validators.required],
      estadoCivil: [undefined]
    });
    this.formGroup.librosLeidos = [];

  }

  changesRadioButton(evt: any, param: string){
    console.log(param);
    
    if(param === 'lectura'){
      evt.value === 'si' ? this.formGroup.practicasLectura = true : this.formGroup.practicasLectura = false;
      this.bookRead = this.formGroup.practicasLectura
    }

    if (param === 'fumas') {
      evt.value === 'si' ? this.formGroup.fumas = true : this.formGroup.fumas = false;
    }

  }

  saveBookList(){
    this.formGroup.librosLeidos.push(this.value)
    this.listBooks.push({'name': this.value});
    this.value = ' '
  }

  sendDataSubmit(){
    this.loading = true;

    let formDataInterface: FormDataI = {
      nombres: this.formGroup.value.nombres,
      apellidos: this.formGroup.value.apellidos,
      fumas: this.formGroup.fumas,
      actualmentePracticasLectura: this.formGroup.practicasLectura,
      librosLeidosUltimosTresMeses: this.formGroup.librosLeidos,
      estadoCivil: this.value
    }
    
    if( formDataInterface.nombres.substr(-1) === ' ' || 
        formDataInterface.nombres.charAt(0) === ' ' || 
        formDataInterface.apellidos.substr(-1) === ' ' || 
        formDataInterface.apellidos.charAt(0) === ' ' ){
      this.loading = false;

      this._snackBar.open('Los campos NOMBRES y APELLIDOS no puede tener espacios al princio y al final', 'ok', {
        duration: 3500
      })
      return

    }else{

      setTimeout( ()=>{
        this.loading = false;

        this.formGroup.setValue({
          nombres: [undefined],
          apellidos: [undefined],
          fumas: [undefined],
          practicasLectura: [undefined],
          librosLeidos: [undefined],
          estadoCivil: [undefined]

        });

        this._snackBar.open('Se guardaron los datos correctamente', 'Cerrar', {
          duration: 2500
        })
      },3000)
    }

  }

}
