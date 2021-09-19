import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Contáctanos', url: '/contact', icon: 'person' },
    { title: 'Perfil cliente', url: '/profile-client', icon: 'call' },
    { title: 'Perfil técnico', url: '/profile-tecnic', icon: 'hammer' },
    { title: 'Ingresar', url: '/login', icon: 'person' },
    { title: 'Soluciones', url: '/solutions', icon: 'person' },
    { title: 'Requerimientos', url: '/request', icon: 'person' },
    { title: 'Trabaja con nosotros', url: '/work', icon: 'person' },
    { title: 'Slider', url: '/slider', icon: 'briefcase' },
    { title: 'Comentarios', url: '/comments', icon: 'briefcase' },
    { title: 'Potulaciones', url: '/applications', icon: 'list' },
  ];


  constructor() {}
}
