import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginDialogComponent } from 'src/app/components/dialogs/login-dialog/login-dialog.component';
import { LoginService } from 'src/app/services/login.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  emailFormControl = new FormControl('carlos.oviedo', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('$oyAdmin666', [Validators.required]);

  matcher = new MyErrorStateMatcher();

  loading: boolean = false;

  constructor(  private router: Router, 
                private loginSrv: LoginService,
                private _snackBar: MatSnackBar,
                public dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  loginSession(){    
    
    this.loading = true;

    this.loginSrv.postLoginData(this.emailFormControl.value, this.passwordFormControl.value).subscribe( (resp: any)=>{
      console.log('response', resp);

      if(resp.exito){
        localStorage.setItem('user', 'loged')
        this.loading = false;
        this.router.navigateByUrl('home');
      }else{
        this.loading = false;
        this.openSnackBar( resp.mensaje, 'ok' );
      }

    }, ((error)=>{     
      this.loading = false; 
      this.openSnackBar( error.statusText, 'error' );
    }));
  }

  openSnackBar(message: string, action: string) {
    console.log('action', action);
    this._snackBar.open(message, action, {
      duration: 2500
    });

    setTimeout(()=>{
      if(action == 'ok') {
        this.openDialog();
      }
    }, 3000)
  }

  openDialog(): void {
    this.dialog.open( LoginDialogComponent, {
      width: '250px'
    });
  }
   
}
