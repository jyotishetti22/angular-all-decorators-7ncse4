import { Component, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: `my-car`,
  template: `<div>{{desc}}</div><div>@Input {{parent}}</div>`,
  styles: [`div {background-color: red}`]
})
export class CarComponent {
  desc = 'car component'
  @Input('parentName') parent: string;
  @Output('clickHappen') clickHappen: EventEmitter<string> = new EventEmitter<string>();

  @HostListener('click')
  onClick(){
    this.desc += ' clicked!'
    this.clickHappen.emit('click happened!');
  }
}