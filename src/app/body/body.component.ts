import { Component, OnInit, AfterViewInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  animations: [
    trigger('changeState', [
      state('state1', style({
        backgroundColor: 'green',
        transform: 'scale(1)',
        opacity: 0.3
      })),
      state('state2', style({
        backgroundColor: 'red',
        transform: 'scale(1.5)',
        opacity: 0.9

      })),
      transition('*=>state1', animate('1000ms cubic-bezier(.65,.08,.42,.92)')),
      transition('*=>state2', animate('1000ms cubic-bezier(.65,.08,.42,.92)'))
    ])
  ]
})
export class BodyComponent implements OnInit, AfterViewInit {

  toState = 'state1';
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
  }

  changeState(stato: any) {
    this.toState = stato;
  }

}
