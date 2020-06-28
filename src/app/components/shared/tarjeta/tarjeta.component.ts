import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyServiceService } from '../../../services/my-service.service';
import { PeopleResponse, Person } from '../../../models/people.model';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input() personaje: Person;
  @Input() tipo = '';
  @Input() urlElemento = '';
  @Output() personSeleccionado = new EventEmitter<object>();
  titulo = '';
  urlImagen = '';

  constructor(private ms: MyServiceService) {
  }

  ngOnInit() {
    if (this.tipo) {
      if (this.tipo === 'people') {
        this.titulo = this.personaje.name;
        this.urlImagen = this.ms.getImagen(this.tipo, this.urlElemento);
      }
    }
  }

  mostrarInfo() {
    this.personSeleccionado.emit(this.personaje);
  }

}
