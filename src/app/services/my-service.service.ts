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
  }

  getPeople(url: string): any {
    return this.consumeApi(url);
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
