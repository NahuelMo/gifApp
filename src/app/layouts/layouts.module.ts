import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//ExternalModules
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//Components
import { NavbarComponent } from './componenets/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    //ExternalModules
    FontAwesomeModule
  ]
})
export class LayoutsModule { }
