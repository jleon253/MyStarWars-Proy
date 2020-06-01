import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input() dato = {};
  @Input() tipo = '';
  @Input() urlElemento = '';
  titulo = '';
  urlImagen = '';

  constructor() {
  }

  ngOnInit() {
    if (this.tipo) {
      if (this.tipo === 'people') {
        this.titulo = this.dato['name'];
        this.urlImagen = `${this.tipo}/${this.generarId()}`;
      }
    }
  }

  generarId(): string {
    let id = '';
    if (this.urlElemento) {
      const urlArray = this.urlElemento.split('/').filter((el) => el !== '');
      id = urlArray[urlArray.length - 1];
    }
    return id;
  }

}
