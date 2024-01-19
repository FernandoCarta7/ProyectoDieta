import { Component } from '@angular/core';
import { Paciente } from '../clases/Paciente';
import { PacienteService } from '../clases/Paciente.service';
import { Router } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';


@Component({
  selector: 'lista-pacientes',
  standalone: true,
  imports: [TableModule, ButtonModule, InputTextModule, FormsModule, ConfirmPopupModule, ConfirmPopupModule, ToastModule],
  providers: [ConfirmationService, MessageService],
  templateUrl: './lista-pacientes.component.html',
  styleUrl: './lista-pacientes.component.css'
})
export class ListaPacientesComponent {
  pacientes: Paciente[];

  pacientesFiltrado: Paciente[];
  value: string;
  p: Paciente;



  constructor(private pacienteServicio: PacienteService,
    private enrutador: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) { };

  nombre: string;
  ngOnInit() {
    //Cargamos los productos
    this.getPacientes();

    this.nombre = "";
  }

  private getPacientes() {
    this.pacienteServicio.getListPaciente().subscribe(
      datos => {
        this.pacientes = datos;
      }
    )

  }
  public filterByName() {
    console.log("Metodo filtrar por nombre: " + this.value)
    this.pacientes = null;

    this.pacienteServicio.getListPacienteByFirstName(this.value).subscribe(
      datos => {
        this.pacientes = datos;
      }
    )

  }


  goToRegistrarPaciente() {
    this.enrutador.navigate(['registrar-paciente']);
  }
  goToeditarPaciente(id: number) {
    this.enrutador.navigate(['editar-paciente', id]);
  }
  confirm2(event: Event, idPaciente: number) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: '¿Está seguro de borrar este paciente?',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-sm',
      accept: () => {

        this.pacienteServicio.deletePaciente(idPaciente).subscribe({ next: (datos) => this.getPacientes(), error: (errores) => console.error(errores) })
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Confirmación: Paciente borrado', life: 3000 });
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'Cancelado, paciente NO borrado', life: 3000 });
      }
    });
  }

}


