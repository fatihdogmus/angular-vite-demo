import {Component, Input} from '@angular/core';
import {MenuItem} from "./MenuItems";

@Component({
  selector: 'angular-vite-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'vite-demo';
  @Input() item?: MenuItem;
}
