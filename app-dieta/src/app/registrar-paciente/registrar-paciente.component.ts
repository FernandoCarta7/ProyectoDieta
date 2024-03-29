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
import { LayoutNavComponent } from '../layout/layout-nav/layout-nav.component';

@Component({
  selector: 'registrar-paciente',
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
    NgIf,
    LayoutNavComponent
    
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
  

  constructor(private pacienteServicio : PacienteService, private enrutador : Router,
  ){}
  
  ngOnInit(){
    this.generos = ['Femenino', 'Masculino', 'Otro'];
    
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
  goToRegistroPaciente(id : number){
    this.enrutador.navigate(['editar-paciente', id]);
  }
 
  
}
