import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { EditOwnerComponent } from './component/edit-owner/edit-owner.component';
import { ListOwnerComponent } from './component/list-owner/list-owner.component';
import { AddOwnerComponent } from './component/add-owner/add-owner.component';
import {OwnerService} from './service/owner.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    EditOwnerComponent,
    ListOwnerComponent,
    AddOwnerComponent
  ],
    imports: [
        CommonModule,
        OwnerRoutingModule,
        MatFormFieldModule,
        MatTableModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
        MatSelectModule
    ],
  providers: [OwnerService]
})
export class OwnerModule { }
