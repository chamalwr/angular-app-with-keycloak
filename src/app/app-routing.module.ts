import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/keycloak.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadChildren: () => import('./ppc-commons/ppc-commons.module').then(m => m.PpcCommonsModule) },
  { path: 'pet', loadChildren: () => import('./pet/pet.module').then(m => m.PetModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuard] },
  { path: 'owner', loadChildren: () => import('./owner/owner.module').then(m => m.OwnerModule), canActivate: [AuthGuard]  },
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
