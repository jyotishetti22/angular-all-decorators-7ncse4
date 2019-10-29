import { Component } from '@angular/core';

@Component({
  selector: `my-car-list`,
  template: `<div>{{desc}}</div>
  <div> Below is Child component</div>
  <my-car parentName="car list component" (clickHappen)="receiveClick($event)"></my-car>`,
  styles: [`div {background-color: lightblue;}`]
})
export class CarListComponent {
  desc = 'Car list comp';

  receiveClick(x: string) {
    this.desc += ' got click from child component '+x;
  }
}