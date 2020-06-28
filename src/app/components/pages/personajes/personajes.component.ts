import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../../../services/my-service.service';

import { PeopleResponse, Person } from '../../../models/people.model';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
})
export class PersonajesComponent implements OnInit {
  people: Person[] = [];
  siguientePag = '';
  anteriorPag = '';
  cantidad = '';
  cantidadTotal = 0;
  esperar = true;
  personSeleccionado: Person;

  constructor(private ms: MyServiceService) {
    this.consultarPersonajes('/people');
  }

  ngOnInit() {}

  consultarPersonajes(parametro: string) {
    this.ms
      .getPeople(parametro)
      .toPromise()
      .then((peopleRes: PeopleResponse) => {
        setTimeout(() => {
          this.people = peopleRes.results;
          this.siguientePag = peopleRes.next;
          this.anteriorPag = peopleRes.previous;
          this.cantidadTotal = peopleRes.count;
          this.cantidad = this.calcularCantidad();
          this.esperar = false;
        }, 1000);
      });
  }

  cambiarPagina(direccion: string) {
    let pag = '';
    this.esperar = true;
    this.people = [];
    window.scroll(0, 0);
    if (direccion === 'anterior') {
      pag = this.anteriorPag;
    }
    if (direccion === 'siguiente') {
      pag = this.siguientePag;
    }
    setTimeout(() => {
      this.consultarPersonajes(
        pag
          .split(`${this.ms.urlBase}`)
          .filter((el) => el !== '')
          .toString()
      );
    }, 1000);
  }

  verAnterior() {
    this.cambiarPagina('anterior');
  }

  verSiguiente() {
    this.cambiarPagina('siguiente');
  }

  calcularCantidad() {
    let vistaActual = '';
    let cantidadActual = 0;
    if (this.siguientePag) {
      // http://swapi.dev/api/people/?page=1
      vistaActual = this.siguientePag.split('=')[1];
      cantidadActual = (parseInt(vistaActual, 10) - 1) * this.people.length;
    } else {
      vistaActual = `${this.cantidadTotal}`;
      cantidadActual = parseInt(vistaActual, 10);
    }
    return `${cantidadActual} / ${this.cantidadTotal}`;
  }

  personajeSeleccionado(personaje: Person) {
    this.personSeleccionado = personaje;
  }

  imagenPersonaje(){
    return this.ms.getImagen('people', this.personSeleccionado.url)
  }

  personajeBuscado(valor: string) {
    this.people = [];
    this.esperar = true;
    this.consultarPersonajes(`/people/?search=${valor}`);
  }
}
