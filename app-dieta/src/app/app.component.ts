import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PacienteService } from './clases/Paciente.service';
import { provideHttpClient } from '@angular/common/http';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ListaPacientesComponent],
  providers : [PacienteService, NgModel],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-dieta';
}
