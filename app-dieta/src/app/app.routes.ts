import { Routes } from '@angular/router';
import path from 'path';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import { RegistrarPacienteComponent } from './registrar-paciente/registrar-paciente.component';

export const routes: Routes = [
    { path : 'lista-pacientes', component: ListaPacientesComponent, title : 'Pacientes' },
    { path : 'registrar-paciente' , component : RegistrarPacienteComponent, title : 'Registrar paciente' },
    { path : '', redirectTo: 'lista-pacientes', pathMatch: 'full', title : 'Pacientes' }
];
