import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

declare var AFRAME: any;
declare namespace AFrame{
  interface Coordinate{}
}




platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
