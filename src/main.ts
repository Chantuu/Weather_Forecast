import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/root/root.config';
import { AppComponent } from './app/root/root.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
