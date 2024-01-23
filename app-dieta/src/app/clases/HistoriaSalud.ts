export class HistoriaSalud{
    idHistoria : number;
    idPaciente : number;
    enfermedades : string;    
    imc :number;
    estatura : number;
    peso : number;

    constructor(idPaciente : number,
        enfermedades : string,
        imc : number,
        estatura : number,
        peso : number
        ){
            this.idPaciente = idPaciente;
            this.enfermedades = enfermedades;
            this.imc = imc;
            this.estatura = estatura;
            this.peso = peso;

        }

}