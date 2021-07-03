import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../ppc-commons/page-not-found/page-not-found.component';
import { AddOwnerComponent } from './component/add-owner/add-owner.component';
import { EditOwnerComponent } from './component/edit-owner/edit-owner.component';
import { ListOwnerComponent } from './component/list-owner/list-owner.component';

const routes: Routes = [
  { path: '', redirectTo: 'owners', pathMatch: 'full'},
  { path: 'owners', component: ListOwnerComponent },
  { path: 'addOwner', component: AddOwnerComponent},
  { path: 'editOwner', component: EditOwnerComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
