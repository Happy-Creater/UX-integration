import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementComponent } from './user-management.component';
import { PipesModule } from '../../pipes/pipes.module';


@NgModule({
  declarations: [
    UserManagementComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    PipesModule,
  ],
  exports: [UserManagementComponent]
})
export class UserManagementModule { }
