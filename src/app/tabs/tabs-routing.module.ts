//mport { AuthGuardService } from './../services/auth-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule),
        //canActivate: [AuthGuardService]
      },
      
      {
        path: 'profile-client',
        loadChildren: () => import('../pages/profile-client/profile-client.module').then(m => m.ProfileClientPageModule),
        //canActivate: [AuthGuardService]
      },
      {
        path: 'comments',
        loadChildren: () => import('../pages/comments/comments.module').then(m => m.CommentsPageModule),
        //canActivate: [AuthGuardService]
      },
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
