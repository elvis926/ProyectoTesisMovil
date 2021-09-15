import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Storage } from '@ionic/storage';


//ROLES
export class Role{
  cliente!: String;
  tecnico!: String;
}
// User interface
export class User {
  name!: String;
  email!: String;
  password!: String;
  password_confirmation!: String;
  role!: Role;
}

// Solicitud interface
export class Solicitud {
  descripcionPC!:String;
  dano!:String;
  descripcion!:String;
  estado!: String
}

// Solicitud interface
export class Postulacion {
  estado!:String;
  solicitud_id!:Number;
}

@Injectable({
  providedIn: 'root'
})
export class GestionuserService {

  headers = new HttpHeaders();
  token = String;
  URL:string="http://127.0.0.1:8000/api";


  constructor( 
    public http: HttpClient,
    public storage: Storage
    ) {
      this.storage.create();
      this.headers.append("Authorization", "Bearer"+ storage.get('auth_token'));      
    }

// Access user profile
userAuth(): Observable<any> {
  return this.http.get(`${this.URL}/user`, {headers: this.headers});
}
//Nuevo token 

registerTecnico(user: User): Observable<any> {
  return this.http.post(`${this.URL}/register`, user,{headers: this.headers});
}

getAllComents():Observable<any>{
  return this.http.get(`${this.URL}/comments`,{headers: this.headers});
}

solicitarServicio(solicitud: Solicitud):Observable<any>{
  
  return this.http.post(`${this.URL}/solicitudes`, solicitud, {headers: this.headers}); 
}

soliSinAsignar():Observable<any>{
  return this.http.get(`${this.URL}/solicitudes`, {headers: this.headers})
}

postularSolicitud(id:Number):Observable<any>{
  const postulacion= new Postulacion();
  postulacion.estado= "Espera";
  postulacion.solicitud_id = id;
  return this.http.post(`${this.URL}/postulaciones`, postulacion, {headers: this.headers})
}


}


