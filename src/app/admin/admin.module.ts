import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddAdminComponent } from './component/add-admin/add-admin.component';
import { ListAdminComponent } from './component/list-admin/list-admin.component';
import { EditAdminComponent } from './component/edit-admin/edit-admin.component';
import {AdminService} from './service/admin.service';


@NgModule({
  declarations: [
    AddAdminComponent,
    ListAdminComponent,
    EditAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers: [AdminService]
})
export class AdminModule { }
