import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllapplicationsPage } from './allapplications.page';

const routes: Routes = [
  {
    path: '',
    component: AllapplicationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllapplicationsPageRoutingModule {}
