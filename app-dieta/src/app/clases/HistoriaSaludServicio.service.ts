import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HistoriaSalud } from "./HistoriaSalud";
import { Observable } from "rxjs";


@Injectable({
    providedIn: "root"
})
export class HistoriaSaludService {
    private urlBase = "http://localhost:8080/dieta-app/historia";
    private urlAgregarHistoria = "http://localhost:8080/dieta-app/historia/historia-paciente";
    constructor(private http: HttpClient) { }

    getListHistoriaSalud(): Observable<HistoriaSalud[]> {
        return this.http.get<HistoriaSalud[]>(this.urlBase);
    }

    getListHistoriaSaludByIdPaciente(id_paciente: number): Observable<HistoriaSalud[]> {

        return this.http.get<HistoriaSalud[]>(`${this.urlBase}/${id_paciente}`);
    }

    agregarHistoriaSalud(historiaSalud: HistoriaSalud): Observable<Object> {
        return this.http.post(this.urlAgregarHistoria, historiaSalud);
    }

    getHistoriaSaludById(id: number) {
        return this.http.get<HistoriaSalud>(`${this.urlBase}/${'editar'}/${id}`);
    }

    editHistoriaSalud(id: number, historiaSalud: HistoriaSalud): Observable<Object> {
        return this.http.put(`${this.urlBase}/${id}`, historiaSalud);
    }

    deleteHistoriaSalud(idHistoriaSalud: number): Observable<Object> {
        return this.http.delete(`${this.urlBase}/${idHistoriaSalud}`);
    }
}