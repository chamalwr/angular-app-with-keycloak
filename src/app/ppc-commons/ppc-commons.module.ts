import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PpcCommonsRoutingModule } from './ppc-commons-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    PpcCommonsRoutingModule
  ]
})
export class PpcCommonsModule { }
