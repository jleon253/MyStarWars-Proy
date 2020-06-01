import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { PersonajesComponent } from './components/pages/personajes/personajes.component';
import { PeliculasComponent } from './components/pages/peliculas/peliculas.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: 'peliculas', component: PeliculasComponent },
      { path: 'personajes', component: PersonajesComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'personajes' }
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
