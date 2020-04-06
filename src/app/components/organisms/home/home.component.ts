import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../../../services/my-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  personajes: any[] = [];
  planeta: any = {};
  peliculas: any[] = [];
  mensaje: boolean;

  constructor( private service: MyServiceService) {
   }

  ngOnInit() {
    this.service.getPeople().subscribe(
      (data) => {
        this.personajes = data.results;
        console.log(this.personajes);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  homeworld(url: string) {
    console.log('url:' + url);
    this.planeta = {};
    this.service.getHomeWorld(url).subscribe(
      (data) => {
        console.log(data);
        this.planeta = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  films(urls: string[]) {
    this.peliculas = [];
    for (const url of urls) {
      console.log('url:' + url);
      this.service.getFilms(url).subscribe(
        (data) => {
          this.peliculas.push(data);
        },
        (error) => {
          console.log(error);
        }
      );
    }
    console.log(this.peliculas);
  }

}
