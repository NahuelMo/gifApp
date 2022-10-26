import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//Components
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './componenets/navbar/navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent
  ],
  exports: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutsModule { }
