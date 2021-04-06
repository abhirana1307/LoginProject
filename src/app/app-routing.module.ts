import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../app/external/login/login.component';
import { SignupComponent } from '../app/external/signup/signup.component';
import { AuthGuard1Guard } from './core/guards/auth-guard1.guard';
import { NoPageFoundComponent } from './external/no-page-found/no-page-found.component';
import { PostsComponent } from './external/posts/posts.component';
import { ViewDataComponent } from './external/view-data/view-data.component';


const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "signup", component: SignupComponent},
  {path: "login", component: LoginComponent,},
  {path: "viewdata", component: ViewDataComponent},
  {path: "posts", component: PostsComponent},
  {path: "layout", loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule), canActivate:[AuthGuard1Guard]},
  {path: "**", component: NoPageFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
