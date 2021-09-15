import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { NavController } from '@ionic/angular';
import { GestionuserService } from 'src/app/services/gestion-users.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {
  validations_form: FormGroup;
  errorMessage: string = '';

  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    public gestionSvc: GestionuserService,
  ) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      dano: new FormControl(
        '',
        Validators.compose([
          Validators.required,
        ])
      ),
      descripcionPC: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(100),
        ])
      ),
      descripcion: new FormControl(
        '',
        Validators.compose([
          Validators.maxLength(100), 
          Validators.required])
      ),
      estado: new FormControl(
        'Sin asignar',
        Validators.compose([
          Validators.required])
      ),
    });

  }

  validation_messages = {
    dano: [
      { type: 'required', message: 'Seleccione el tipo de daño' },
      { type: 'pattern', message: 'Este campo es requerido.' },
    ],
    descripcionPC: [
      { type: 'required', message: 'Describa las caracteristicas del equipo.' },
      { type: 'pattern', message: 'Este campo es requerido.' },
    ],
    descripcion: [
      { type: 'required', message: 'Describa el problema que tiene con su equipo.' },
      { type: 'pattern', message: 'Este campo es requerido.' },
    ],
    estado: [
      { type: 'required', message: 'Campo generado automaticamente' },
      { type: 'pattern', message: 'Este campo es requerido.' },
    ],
  };

  postSolicitud(){
    
    this.gestionSvc.solicitarServicio(this.validations_form.value).subscribe(
      result=>{
        console.log(result);
        this.validations_form.reset();
        
      }
    )
  }


}