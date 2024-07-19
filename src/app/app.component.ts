import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}} Bruno</div>`,
})
export class AppComponent {
  value = 'World';
}
