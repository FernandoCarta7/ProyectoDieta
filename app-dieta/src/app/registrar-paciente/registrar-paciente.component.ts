import { Component, NgModule } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { FormBuilder, FormGroup, FormsModule, NgModel, Validators } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';


import { AppComponent } from '../app.component';
import { Calendar, CalendarModule } from 'primeng/calendar';

import { ListboxModule } from 'primeng/listbox';
import { PacienteService } from '../clases/Paciente.service';
import { Router } from '@angular/router';
import { Paciente } from '../clases/Paciente';

@Component({
  selector: 'app-registrar-paciente',
  standalone: true,
  imports: [DropdownModule,
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
  providers : [Validators],
  templateUrl: './registrar-paciente.component.html',
  styleUrl: './registrar-paciente.component.css'
})
export class RegistrarPacienteComponent {
  values : string[];
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
  pacienteForm : FormGroup;

  constructor(private pacienteServicio : PacienteService, private enrutador : Router,
    private fb : FormBuilder){}
  
  ngOnInit(){
    this.generos = ['Femenino', 'Masculino', 'Otro'];
    this.pacienteForm = this.fb.group({
      primerNombre: ['', Validators.required],
      primerApellido : ['', Validators.required],
      genero : ['', Validators.required],
      fechaNacimiento : ['', Validators.required],
    })
  }
  onSubmitPaciente(){
    this.addPaciente();
  }
  onSubmitHistoria(){

  }
  addPaciente(){
    
    this.paciente = new Paciente(this.primerNombre, this.primerApellido,
      this.segundoNombre = "",
      this.segundoApellido = "",
      this.correo,
      this.genero,
      this.numeroCelular,
      this.fechaNacimiento);

      this.validarNull(this.paciente);
      this.pacienteServicio.agregarPaciente(this.paciente).subscribe(
      {
        next : (datos) => {
          console.log('Paciente guardado');
          this.irListaPacientes();
        },
        error : (error : any) => {console.log("Paciente no guardado: " + error)}
      }
    )
  }

  irListaPacientes(){
    this.enrutador.navigate(['/lista-pacientes']);
  }
  validarNull(paciente : Paciente) : number{
    
    return -1;
  }
  
}
