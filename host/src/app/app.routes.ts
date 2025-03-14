import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
  startsWith,
} from '@angular-architects/module-federation-tools';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'products',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './AppComponent',
      })
        .then((m) => m.AppComponent)
        .catch((err: any) => {
          console.error('Error loading remote module:', err);
        }),
  },
  {
    matcher: startsWith('users'),
    pathMatch: 'prefix',
    component: WebComponentWrapper,
    data: {
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      remoteName: 'mf-user',
      exposedModule: './AppModule',
      elementName: 'mf-user-root',
    } as WebComponentWrapperOptions,
  },
];
