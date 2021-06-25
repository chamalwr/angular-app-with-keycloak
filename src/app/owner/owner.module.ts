import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { EditOwnerComponent } from './component/edit-owner/edit-owner.component';
import { ListOwnerComponent } from './component/list-owner/list-owner.component';
import { AddOwnerComponent } from './component/add-owner/add-owner.component';


@NgModule({
  declarations: [
    EditOwnerComponent,
    ListOwnerComponent,
    AddOwnerComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule
  ]
})
export class OwnerModule { }
