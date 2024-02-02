import { Component } from '@angular/core';
import { LayoutNavComponent } from '../layout/layout-nav/layout-nav.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ActivatedRoute, Router } from '@angular/router';
import { TurnoServicio } from '../clases/TurnoServicio.service';
import { Turno } from '../clases/Turno';
import { Paciente } from '../clases/Paciente';

@Component({
  selector: 'agendar-cita',
  standalone: true,
  imports: [LayoutNavComponent,
    CalendarModule,
    FormsModule,
    InputTextareaModule
  ],
  templateUrl: './agendar-cita.component.html',
  styleUrl: './agendar-cita.component.css'
})
export class AgendarCitaComponent {

  date: Date | undefined;
  descripcionTurno: string;
  turno: Turno;
  paciente : Paciente;
  id_paciente : number;
  
  constructor(private turnoService: TurnoServicio,
    private enrutador: Router,
    private ruta : ActivatedRoute
  ) { };

  ngOnInit(){
    this.id_paciente = this.ruta.snapshot.params['id'];
  }


  crearTurno() {
    this.turno = new Turno();
    this.turno.descripcion = this.descripcionTurno;
    this.turno.fechaTurno = this.date;

    this.turnoService.agendarTurno(this.turno, this.id_paciente).subscribe(
      {
        next: (datos) => {
          console.log('Turno generado');
          this.irListaPacientes();

        },
        error: (error: any) => {
          console.log('Problemas al guardar el turno');
          console.log(error);
        }
      }
    )

  }
  irListaPacientes() {
    this.enrutador.navigate(['/lista-pacientes']);
  }
}
