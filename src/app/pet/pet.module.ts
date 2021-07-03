import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { PetRoutingModule } from './pet-routing.module';
import { AddPetComponent } from './component/add-pet/add-pet.component';
import { ListPetComponent } from './component/list-pet/list-pet.component';
import { EditPetComponent } from './component/edit-pet/edit-pet.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    AddPetComponent,
    ListPetComponent,
    EditPetComponent
  ],
  imports: [
    CommonModule,
    PetRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule
  ]
})
export class PetModule { }
