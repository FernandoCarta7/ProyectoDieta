import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Turno } from "./Turno";


@Injectable({
    providedIn : "root"
})
export class TurnoServicio{
    private urlBaseGuardarTurno = "http://localhost:8080/dieta-app/pacientes/guardar/agendar-turno";

    constructor(private http : HttpClient){}

    agendarTurno( turno : Turno, id_paciente : number) : Observable<Object>{
        return this.http.post(`${this.urlBaseGuardarTurno}/${id_paciente}`, turno)
    }
}