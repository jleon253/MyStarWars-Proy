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
    this.getPeople();
  }

  getPeople() {
    this.consumeApi('https://swapi.co/api/people/').subscribe( (data: any) => {
      this.people = data.results;
      console.log('people');
      console.log(this.people);
      this.getHomeWorld(this.people);
      this.getFilms(this.people);
      this.respuesta = true;
    });
  }

  getHomeWorld( people: any[]) {
    people.forEach(p => {
      this.consumeApi(p.homeworld).subscribe( (data: any) => {
        this.homeworld.push(data);
      });
    });
    console.log('Homeworlds');
    console.log(this.homeworld);
  }

  getFilms(people: any){
    let d = {};
    people.forEach(p => {
        console.log('Grupo');
        p.films.forEach(film => {
            this.consumeApi(film).subscribe( (data: any) => {
              d = data;
            });
            this.film.push(d);
        });
        this.films.push(this.film);
    });
    console.log(this.films);
  }

  consumeApi(url: string) {
    return this.http.get(url);
  }
}
