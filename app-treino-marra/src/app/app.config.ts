import { ApplicationConfig, NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { FormsModule } from '@angular/forms';//importação do modulo de formulários

@NgModule({
  imports: [FormsModule],//importação do modulo de formulários
})
export class AppModule {}// configuração do modulo principal da aplicação

import { routes } from './app.routes';



export const appConfig: ApplicationConfig = {
  providers: [ 
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};
