import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from '../common/header/header.component';
import { SideBarComponent } from '../common/side-bar/side-bar.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  exports: [
    HeaderComponent,
    SideBarComponent
  ]
})
export class SharedModule { }
