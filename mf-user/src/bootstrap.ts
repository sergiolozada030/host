import { NgZone } from "@angular/core";
import { createApplication } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { routes } from "./app/app.routes";
import { AppComponent } from "./app/app.component";
import { createCustomElement } from "@angular/elements";

(async () => {
  const gThis = globalThis as any;
  const app = await createApplication({
    providers: [
      gThis.ngZone ? { provide: NgZone, useValue: gThis.ngZone } : [],
      provideRouter(routes),
    ],
  });

  const mfUserRoot = createCustomElement(AppComponent, {
    injector: app.injector,
  });

  customElements.define('mf-user-root', mfUserRoot);
})();