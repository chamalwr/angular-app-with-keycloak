import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddAdminComponent } from './component/add-admin/add-admin.component';
import { ListAdminComponent } from './component/list-admin/list-admin.component';
import { EditAdminComponent } from './component/edit-admin/edit-admin.component';


@NgModule({
  declarations: [
    AddAdminComponent,
    ListAdminComponent,
    EditAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
