import { Component,HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PacienteService } from './clases/Paciente.service';
import { provideHttpClient } from '@angular/common/http';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import { NgModel } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { trigger,state,style,  } from '@angular/animations';
import bootstrap from '../main.server';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HistoriaSaludService } from './clases/HistoriaSaludServicio.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ListaPacientesComponent],
  providers : [PacienteService, HistoriaSaludService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor (private primengConfig : PrimeNGConfig){}

  ngOnInit(){
    this.primengConfig.ripple = true;
  }
}

