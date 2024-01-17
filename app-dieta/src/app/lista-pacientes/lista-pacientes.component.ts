import { Component } from '@angular/core';
import { Paciente } from '../clases/Paciente';
import { PacienteService } from '../clases/Paciente.service';
import { Router } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'lista-pacientes',
  standalone: true,
  imports: [TableModule, ButtonModule, InputTextModule,FormsModule],
  providers : [  ],
  templateUrl: './lista-pacientes.component.html',
  styleUrl: './lista-pacientes.component.css'
})
export class ListaPacientesComponent {
  pacientes: Paciente[];
  
  pacientesFiltrado: Paciente[];
  value : string;
  p : Paciente ;



  constructor(private pacienteServicio: PacienteService,
    private enrutador: Router) { };
  private documento: Document = new Document;
  

  loading: boolean = true;
  ngOnInit() {
    //Cargamos los productos
    this.getPacientes();
    
  }

  private getPacientes() {    
      this.pacienteServicio.getListPaciente().subscribe(
        datos => {
          this.pacientes = datos;
        }
      )
    
  }
  public filterByName(){
    console.log("Metodo filtrar por nombre: " + this.value)
    this.pacientes = null;
    
    this.pacienteServicio.getListPacienteByFirstName(this.value).subscribe(
      datos => {
        this.pacientes = datos;
      }
    )
    
  }

  public imprimirInput(){
    
    console.log(this.value)
  }

  

  

  }


