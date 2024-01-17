import { Routes } from '@angular/router';
import path from 'path';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';

export const routes: Routes = [
    { path: 'lista-pacientes', component: ListaPacientesComponent, title : 'Pacientes' },
    { path: '', redirectTo: 'lista-pacientes', pathMatch: 'full', title : 'Pacientes' }
];
