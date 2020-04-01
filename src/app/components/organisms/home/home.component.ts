import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../../../services/my-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mensaje: boolean;

  constructor( private service: MyServiceService) {
    console.log(this.service.respuesta);
    this.mensaje = this.service.respuesta;
   }

  ngOnInit() {
  }

}
