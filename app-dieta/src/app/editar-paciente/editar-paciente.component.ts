import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    FormsModule,
    NgIf
  ],
  templateUrl: './editar-paciente.component.html',
  styleUrl: './editar-paciente.component.css'
})
export class EditarPacienteComponent {
  id : number;
  primerNombre : string;
  segundoNombre : string;
  primerApellido : string;
  segundoApellido : string;
  fechaNacimiento : Date;
  genero : string ; 
  correo : string;
  numeroCelular : string;

  generos : string [];
  generoSeleccion : string;
  paciente : Paciente;

  constructor(private enrutador : Router,
    private ruta : ActivatedRoute,
    private pacienteServicio : PacienteService){

  }

  ngOnInit(){
    this.id = this.ruta.snapshot.params['id'];
    console.log(this.id);
    this.generos = ['Femenino', 'Masculino', 'Otro'];
    this.pacienteServicio.getPacienteById(this.id).subscribe(
      {
        next : (datos) => this.paciente = datos,
        error : (errores : any) => console.log(errores)
      }
    )
  }

  onSubmit(){
    this.guardarPaciente();
  }

  guardarPaciente(){
    this.pacienteServicio.editPaciente(this.id,this.paciente).subscribe(
      {
        next : (datos) => this.irListaPacientes() ,
        error : (errores) => console.log(errores)
      }
    );
  }
  
  irListaPacientes(){
    this.enrutador.navigate(['/lista-pacientes']);
  }
}
