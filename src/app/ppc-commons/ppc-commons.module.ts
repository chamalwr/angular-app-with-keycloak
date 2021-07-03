import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PpcCommonsRoutingModule } from './ppc-commons-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PpcCommonsRoutingModule
  ]
})
export class PpcCommonsModule { }
