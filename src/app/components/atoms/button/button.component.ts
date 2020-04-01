import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() typeButton = 'default';
  @Input() textButton = 'Default text';
  @Input() otherClass = '';
  @Input() parametersEventDefault = {};

  constructor() { }

  ngOnInit() {
  }

  btnEventDefault() {
  }

}
