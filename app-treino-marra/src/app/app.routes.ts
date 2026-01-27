import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

import { Formulario } from './pages/formulario/formulario';

export const routes: Routes = [

    {path: '', component: Home },
    {path: 'formulario', component: Formulario } //  Rota para a página de contato
];
