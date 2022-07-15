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

  constructor(  private formBuilder: FormBuilder, 
                private _snackBar: MatSnackBar,
                private service: LoginService ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      fumas: [undefined, Validators.required],
      practicasLectura: [undefined, Validators.required],
      librosLeidos: [undefined, Validators.required]
    });
    this.formGroup.librosLeidos = [];

    // this.service.postCivilState().subscribe( (resp)=>{
    //   console.log(resp);
    // })
  }

  changesRadioButton(evt: any, param: string){
    console.log(param);
    
    if(param === 'lectura'){
      evt.value === 'si' ? this.formGroup.practicasLectura = true : this.formGroup.practicasLectura = false;
      this.bookRead = this.formGroup.practicasLectura
      console.log('this.bookRead ',this.bookRead);
    }

    if (param === 'fumas') {
      evt.value === 'si' ? this.formGroup.fumas = true : this.formGroup.fumas = false;
      console.log( this.formGroup.fumas);
    }

  }

  saveBookList(){
    this.formGroup.librosLeidos.push(this.value)
    this.listBooks.push({'name': this.value});
    this.value = ' '
  }

  sendDataSubmit(){
    this.loading = true;

    setTimeout( ()=>{
      this.loading = false;
      this._snackBar.open('Error de conexión', 'Cerrar', {
        duration: 2500
      })

    },3000)
  }

}
