import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

const routes: Routes = [

  {path:'',component:LayoutComponent},
  {path:'dashboard', component: DashboardComponent},
  {path: 'profile', component: MyProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
