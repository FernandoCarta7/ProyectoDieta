import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Paciente } from "./Paciente";

@Injectable({
    providedIn : "root"
})
export class PacienteService{
    
    private urlBase = "http://localhost:8080/dieta-app/pacientes";


    constructor(private http : HttpClient){}

    getListPaciente() : Observable<Paciente[]>{
        return this.http.get<Paciente[]>(this.urlBase);
    }

    getListPacienteByFirstName(primer_nombre : string) : Observable<Paciente[]>{
        
        return this.http.get<Paciente[]>(`${this.urlBase}/${primer_nombre}`);
    }

    addPaciente(paciente : Paciente) : Observable<Object>{
        return this.http.post(this.urlBase,paciente);
    }

    getPacienteById(id : number){
        return this.http.get<Paciente>(`${this.urlBase}/${id}`);
    }

    editPaciente(idPaciente: number, 
        paciente : Paciente
        ) : Observable<Object>
        {
            return this.http.put(`${this.urlBase}/${idPaciente}`, paciente);
        }

    deletePaciente( idPaciente : number ) : Observable< Object >{
        return this.http.delete(`${this.urlBase}/${idPaciente}`);
    }

}