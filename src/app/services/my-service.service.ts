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

  constructor(private http: HttpClient) {
    console.log('Servicio listo');
    // this.getPeople();
  }

  getPeople(): any {
    return this.consumeApi('https://swapi.co/api/people/');
  }

  getHomeWorld( url: string) {
    return this.consumeApi(url);
  }

  getFilms(url: string){
    return this.consumeApi(url);
  }

  consumeApi(url: string) {
    return this.http.get(url);
  }
}
