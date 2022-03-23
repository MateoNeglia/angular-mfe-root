import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-mfe-root';
  elementUrlUser = 'http://localhost:9001/main.js';
  elementUrlUserDetails = 'http://localhost:9002/main.js';
}
