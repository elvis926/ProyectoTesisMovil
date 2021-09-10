import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileTecnicPageRoutingModule } from './profile-tecnic-routing.module';

import { ProfileTecnicPage } from './profile-tecnic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileTecnicPageRoutingModule
  ],
  declarations: [ProfileTecnicPage]
})
export class ProfileTecnicPageModule {}
