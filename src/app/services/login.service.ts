import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient) { }

  postLoginData(user: any, password: string){

    const OBJECT = {
      username: user,
      password: password,
    };

    return this.http.post('https://desa.ies-webcontent.com.mx/login', OBJECT);
    
  }
}
