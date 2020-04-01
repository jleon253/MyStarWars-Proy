import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit, OnChanges {

  @Input() errorForInput = '';

  @Output() emailToEmit = new EventEmitter<string>();
  @Output() passToEmit = new EventEmitter<string>();

  valueEmailInput: string;
  valuePassInput: string;


  constructor() { }

  // ngDoCheck(): void {
  //   console.log(this.errorForInput);
  // }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.errorForInput);
    // throw new Error("Method not implemented.");
  }

  ngOnInit() {
  }

  getValueEmailInput( email: string ) {
    console.log('En padre: ' + email);
    this.valueEmailInput = email;
    this.emailToEmit.emit(this.valueEmailInput);
  }

  getValuePassInput( pass: string ) {
    console.log('En padre: ' + pass);
    this.valuePassInput = pass;
    this.passToEmit.emit(this.valuePassInput);
  }

}
