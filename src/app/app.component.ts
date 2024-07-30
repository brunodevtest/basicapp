import { Component } from '@angular/core';
import { environment as env } from './../environments/environment';

@Component({
  selector: 'app-root',
  template: `
  <div>Hello Bruno</div>
  <div>environment:  {{environmentName}}</div>
  <div>api url:  {{environmentName}}</div>
  `,
})

export class AppComponent {
  constructor() {
    if(!env.production)
      console.log("Prod: "+env.production); // Logs false for development environment
  }

  title = 'app works!';
  environmentName = env.environmentName;
  apiurl = env.apiUrl;
}
