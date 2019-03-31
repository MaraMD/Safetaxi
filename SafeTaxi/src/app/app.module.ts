import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformacionComponent } from './informacion/informacion.component';
import { PrincipalComponent } from './principal/principal.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { RegistroConductorComponent } from './registro-conductor/registro-conductor.component';

@NgModule({
  declarations: [
    AppComponent,
    InformacionComponent,
    PrincipalComponent,
    RegistroUsuarioComponent,
    RegistroConductorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
