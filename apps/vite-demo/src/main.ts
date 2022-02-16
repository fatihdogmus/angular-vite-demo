import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {MenuItem} from "./app/MenuItems";

if (environment.production) {
  enableProdMode();
}

const menuItems: MenuItem[] = [
  {
    label:"label",
    type:"bis",
    icon:""
  }
]


platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
