export class Paciente {
    idPaciente: number;
    primerNombre: string;
    segundoNombre: string;
    primerApellido: string;
    segundoApellido: string;
    correo: string;
    numeroCelular: string;
    genero: string; //Masculino, FemeninoString 
    fechaNacimiento: Date;
    constructor( primerNombre : string, primerApellido : string, 
        segundoNombre: string, segundoApellido : 
        string, correo : string, numeroCelular : string, 
        genero : string, fechaNacimiento : Date){
            this.primerNombre = primerNombre;
            this.primerApellido = primerApellido;
            this.segundoNombre = segundoNombre;
            this.segundoApellido = segundoApellido;
            this.correo = correo;
            this.numeroCelular = numeroCelular;
            this.genero = genero;
            this.fechaNacimiento = fechaNacimiento;
        }
}