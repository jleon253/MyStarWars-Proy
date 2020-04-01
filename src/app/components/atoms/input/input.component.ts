import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {

  @Input() label = 'Label input default';
  @Input() type = 'text';
  @Input() placeholder = 'Default placeholder';
  @Input() helpMessage = '';
  @Input() hasError: string;

  @Output() valueToEmit = new EventEmitter<string>();

  showPass = false;

  constructor() { }

  // ngDoCheck(): void {
  //   console.log(this.hasError);
  // }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.hasError);
  }

  ngOnInit() {
  }

  changeValue( event: any ) {
    console.log('En change: ' + event.target.value);
    this.valueToEmit.emit(event.target.value);
  }

}
