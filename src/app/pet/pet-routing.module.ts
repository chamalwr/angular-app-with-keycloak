import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPetComponent } from './component/add-pet/add-pet.component';
import { EditPetComponent } from './component/edit-pet/edit-pet.component';
import { ListPetComponent } from './component/list-pet/list-pet.component';
import {PageNotFoundComponent} from '../ppc-commons/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'pets', pathMatch: 'full'},
  { path: 'pets', component: ListPetComponent },
  { path: 'addpet', component: AddPetComponent },
  { path: 'editpet', component: EditPetComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetRoutingModule { }
