import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllapplicationsPageRoutingModule } from './allapplications-routing.module';

import { AllapplicationsPage } from './allapplications.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllapplicationsPageRoutingModule
  ],
  declarations: [AllapplicationsPage]
})
export class AllapplicationsPageModule {}
