import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroupDirective, FormGroupName, FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { PanelModule } from 'primeng/panel';
import { Paciente } from '../clases/Paciente';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from '../clases/Paciente.service';
import { LayoutNavComponent } from '../layout/layout-nav/layout-nav.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { HistoriaSalud } from '../clases/HistoriaSalud';
import { HistoriaSaludService } from '../clases/HistoriaSaludServicio.service';

@Component({
  selector: 'app-editar-paciente',
  standalone: true,
  imports: [
    DropdownModule,
    InputGroupAddonModule,
    InputGroupModule,
    CardModule,
    ButtonModule,
    PanelModule,
    CommonModule,
    FormsModule,
    CalendarModule,
    InputTextModule,
    ListboxModule,
    NgIf,
    LayoutNavComponent,
    InputTextareaModule
  ],

  templateUrl: './editar-paciente.component.html',
  styleUrl: './editar-paciente.component.css'
})
export class EditarPacienteComponent {
  id: number;
  primerNombre: string;
  segundoNombre: string;
  primerApellido: string;
  segundoApellido: string;
  fechaNacimiento: Date;
  genero: string;
  correo: string;
  numeroCelular: string;
  generos: string[];
  generoSeleccion: string;
  paciente: Paciente;
  historia: HistoriaSalud;

  enfermedades: string;
  imc: number;
  estatura: number;
  peso: number;


  constructor(private enrutador: Router,
    private ruta: ActivatedRoute,
    private pacienteServicio: PacienteService,
    private historiaServicio: HistoriaSaludService
  ) { }

  ngOnInit() {
    this.id = this.ruta.snapshot.params['id'];

    this.generos = ['Femenino', 'Masculino', 'Otro'];
    this.pacienteServicio.getPacienteById(this.id).subscribe(
      {
        next: (datos) => this.paciente = datos,
        error: (errores: any) => console.log(errores)
      }
    )
    this.historiaServicio.getHistoriaSaludByIdPaciente(this.id).subscribe(
      {
        next: (datos) => this.historia = datos,
        error: (errores: any) => console.log(errores)
      }
    );
    if (this.historia !== null && this.historia !== undefined) {

      this.enfermedades = this.historia.enfermedades;
      this.estatura = this.historia.estatura;
      this.peso = this.historia.peso;
    } else {
      this.enfermedades = "Ingrese aquí condiciones médicas del paciente";
      this.estatura = 1;
      this.peso = 1;
    }
  }

  onSubmit() {
    this.guardarPaciente();
  }

  guardarPaciente() {
    this.pacienteServicio.editPaciente(this.id, this.paciente).subscribe(
      {
        next: (datos) => this.irListaPacientes(),
        error: (errores) => console.log(errores)
      }
    );
  }

  irListaPacientes() {
    this.enrutador.navigate(['/lista-pacientes']);
  }
  calcularImc() {
    this.imc = this.historia.estatura * this.historia.peso;
  }

  addHistoria() {
    this.imc = this.peso / (this.estatura * this.estatura / 10000);

    this.historia = new HistoriaSalud(this.id, this.enfermedades, this.imc, this.estatura, this.peso);

    this.historiaServicio.agregarHistoriaSalud(this.historia).subscribe({
      next: (datos) => {
        console.log('Historia guardada')
        this.irListaPacientes();
      }, error: (error: any) => { console.log(error) }
    })
  }

  editarHistoria() {

    this.historiaServicio.editHistoriaSalud(this.id, this.historia).subscribe(
      {
        next: (datos) => this.irListaPacientes(),
        error: (errores) => console.log(errores)
      }
    )
  }
}
