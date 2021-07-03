import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminComponent } from './component/add-admin/add-admin.component';
import { EditAdminComponent } from './component/edit-admin/edit-admin.component';
import { ListAdminComponent } from './component/list-admin/list-admin.component';
import {PageNotFoundComponent} from '../ppc-commons/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'admins', pathMatch: 'full' },
  { path: 'admins', component: ListAdminComponent },
  { path: 'addadmin', component: AddAdminComponent },
  { path: 'editadmin', component: EditAdminComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
