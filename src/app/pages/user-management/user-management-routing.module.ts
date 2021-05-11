import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserManagementComponent } from './user-management.component';

const routes: Routes = [
  {
    path: '', component: UserManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
