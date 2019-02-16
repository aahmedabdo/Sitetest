import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
//component
import { LoginComponent } from '../Layout/login/login.component';
import { ContentComponent } from '../Layout/content/content.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'Sign-in',component:LoginComponent},
  {path:'Content',component:ContentComponent},

  { path: '**', redirectTo: 'Sign-in', pathMatch: 'full' }
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RouteRoutingModule { }
