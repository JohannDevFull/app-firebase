import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }                  from './modules/site/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  { 
    path: 'auth', 
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) 
  },
  { 
    path: 'app', 
    loadChildren: () => import('./modules/app/app.module').then(m => m.AppModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
