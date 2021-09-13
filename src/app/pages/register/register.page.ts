import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  validations_form: FormGroup;
  errorMessage: string = '';

  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    public authSvc: AuthService 
  ) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      name: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(40),
        ])
      ),
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
      password_confirmation: new FormControl(
        '',
        Validators.compose([Validators.minLength(5), Validators.required])
      ),
      role: new FormControl(
        'ROLE_CLIENTE',
        Validators.compose([
          Validators.required,
        ])
      ),
      


    });
  }

  validation_messages = {
    name: [
      { type: 'required', message: 'Ingrese su nombre.' },
      { type: 'pattern', message: 'Este campo es requerido.' },
    ],
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
    password_confirmation: [
      { type: 'required', message: 'Ingrese su contraseña.' },
      {
        type: 'minlength',
        message: 'Su contraseña debe tener con mínimo 6 caracteres.',
      },
    ],
  };

  registerUser(){
    this.authSvc.register(this.validations_form.value).subscribe(
      result=>{
        console.log(result);
      },
      ()=>{
        this.navCtrl.navigateForward('/login');
      }
    )
  }

  goToLoginPage() {
    this.navCtrl.navigateForward('/login');
  }
  


}
