import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AtestadoService } from './_modelos/atestado.service';

import { AppComponent } from './app.component';
import { MenuTopComponent } from './menu-top/menu-top.component';
import { AtestadoComponent } from './atestado/atestado.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuTopComponent,
    AtestadoComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    FormsModule,
    HttpModule
  ],
  providers: [AtestadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
