import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponentComponent } from '../common/page-not-found-component/page-not-found-component.component';
import { AddAdminComponent } from './component/add-admin/add-admin.component';
import { EditAdminComponent } from './component/edit-admin/edit-admin.component';
import { ListAdminComponent } from './component/list-admin/list-admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'admins', pathMatch: 'full' },
  { path: 'admins', component: ListAdminComponent },
  { path: 'addadmin', component: AddAdminComponent },
  { path: 'editadmin', component: EditAdminComponent },
  { path: '**', component: PageNotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
