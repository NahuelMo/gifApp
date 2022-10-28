import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';

//CustomModules
import { SharedModule } from '../shared/shared.module';
import { LayoutsModule } from '../layouts/layouts.module';
import { GifsModule } from '../gifs/gifs.module';

//DepndencieModules
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    //CustomModules
    SharedModule,
    LayoutsModule,
    GifsModule,
    //DependecieModules
    FontAwesomeModule
  ]
})
export class PagesModule { }
