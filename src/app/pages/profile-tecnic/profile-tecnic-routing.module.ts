import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileTecnicPage } from './profile-tecnic.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileTecnicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileTecnicPageRoutingModule {}
