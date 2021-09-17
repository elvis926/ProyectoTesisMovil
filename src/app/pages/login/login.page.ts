import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
//import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  errors=null;
  validations_form: FormGroup;
  errorMessage: string = '';

  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    public authSvc: AuthService,
    //public storage: Storage 
  ) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ])
      ),
      password: new FormControl(
        '',
        Validators.compose([Validators.minLength(5), Validators.required])
      ),

    });
  }

  validation_messages = {
    
    email: [
      { type: 'required', message: 'Ingrese un correo electrónico.' },
      { type: 'pattern', message: 'Ingrese un correo electronico válido.' },
    ],
    password: [
      { type: 'required', message: 'Ingrese su contraseña.' },
      {
        type: 'minlength',
        message: 'Su contraseña debe tener con mínimo 6 caracteres.',
      },
    ],
    
  };

  loginUser(){
    this.authSvc.signin(this.validations_form.value).subscribe(
      result=>{
        localStorage.setItem('auth_token', result.token)
        console.log(localStorage);
      },
      error => {
        this.errors = error.error;
      },
      ()=>{
        this.navCtrl.navigateForward('/home');
      }
    )
    
  }

  goToRegisterPage() {
    this.navCtrl.navigateForward('/register');
  }

}
