import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddAdminComponent } from './component/add-admin/add-admin.component';
import { ListAdminComponent } from './component/list-admin/list-admin.component';
import { EditAdminComponent } from './component/edit-admin/edit-admin.component';
import {AdminService} from './service/admin.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AddAdminComponent,
    ListAdminComponent,
    EditAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [AdminService]
})
export class AdminModule { }
