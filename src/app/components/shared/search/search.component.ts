import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  myFormSearch: FormGroup;
  @Input() placeholder = '';
  @Output() busqueda = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.myFormSearch = this.fb.group({
      busqueda: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  buscar() {
    console.log('Busqueda...', this.myFormSearch);
    if (!this.myFormSearch.invalid) {
      this.busqueda.emit(Object.values(this.myFormSearch.controls)[0].value);
    }
  }

}
