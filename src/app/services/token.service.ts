import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TokenService {

  private issuer = {
    login: 'http://127.0.0.1:8000/api/login',
    register: 'http://127.0.0.1:8000/api/register'
  }

  constructor() { }

  handleData(token: string){
    localStorage.setItem('auth_token', token);
  }

  getToken(){
    return localStorage.getItem('auth_token');
  }

  // Verify the token
  isValidToken(){
     const token = this.getToken();
     var respuesta: boolean=false;

     if(token){
       const payload = this.payload(token);
       if(payload){
         respuesta= Object.values(this.issuer).indexOf(payload.iss) > -1 ? true : false;
       }
     } else {
        respuesta= false;
     }

     return respuesta;
  }

  payload(token: string) {
    const jwtPayload = token.split('.')[1];
    return JSON.parse(atob(jwtPayload));
  }

  // User state based on valid token
  isLoggedIn() {
    return this.isValidToken();
  }

  // Remove token
  removeToken(){
    localStorage.removeItem('auth_token');
  }

}
