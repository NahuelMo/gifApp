//AngularModules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//RoutingModule
import { AppRoutingModule } from './app-routing.module';

//CustomsModules
import { LayoutsModule } from './layouts/layouts.module';

//Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    //Components
    AppComponent
  ],
  imports: [
    //AngularModules
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    //RoutingModule
    AppRoutingModule,
    //CustomsModules
    LayoutsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
