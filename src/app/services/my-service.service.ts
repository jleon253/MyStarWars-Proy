import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  people: any[] = [];
  homeworld: any[] = [];
  films: any[] = [];
  film: any[] = [];
  respuesta: boolean;
  urlBase = 'http://swapi.dev/api';

  constructor(private http: HttpClient) {
    console.log('Servicio listo');
  }

  getPeople(parametro: string): any {
    return this.consumeApi(parametro);
  }

  getHomeWorld( parametro: string) {
    return this.consumeApi(parametro);
  }

  getFilms(parametro: string){
    return this.consumeApi(parametro);
  }

  consumeApi(parametro: string) {
    return this.http.get(`${this.urlBase}${parametro}`);
  }
}
