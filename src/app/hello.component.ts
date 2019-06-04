import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  // template: `<h1>Hello {{name}}!</h1>`,
  template: '<h1>Hello Angular 7</h1>',
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
