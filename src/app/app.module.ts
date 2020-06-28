import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SearchComponent } from './components/shared/search/search.component';
import { PersonajesComponent } from './components/pages/personajes/personajes.component';
import { PeliculasComponent } from './components/pages/peliculas/peliculas.component';

import { TarjetaComponent } from './components/shared/tarjeta/tarjeta.component';
import { MainComponent } from './components/main/main.component';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';
import { AlertComponent } from './components/shared/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SearchComponent,
    PersonajesComponent,
    PeliculasComponent,
    TarjetaComponent,
    MainComponent,
    SpinnerComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
