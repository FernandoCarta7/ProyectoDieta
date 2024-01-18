package com.dietaapp.controlador;

import com.dietaapp.modelo.Paciente;
import com.dietaapp.servicio.PacienteServicio;
import org.slf4j.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//http://locahost:8080/dieta-app
@RequestMapping("dieta-app")
@CrossOrigin(value = "http://localhost:4200")
public class InicioController {

    private static final Logger logger =
            LoggerFactory.getLogger(InicioController.class);
    @Autowired
    private PacienteServicio pacienteServicio;
    @GetMapping("/pacientes")
    public List<Paciente> getPaciente(){
        List<Paciente> listaPacientes = this.pacienteServicio.listar();

        logger.info("Se lista a pacientes");
        return listaPacientes;
    }
    @GetMapping("/pacientes/{primer_nombre}")
    public List<Paciente> getPacienteByName(@PathVariable String primer_nombre){
        List<Paciente> listaPacientes = this.pacienteServicio.listarprimerNombre(primer_nombre);
        logger.info("Lista de pacientes filtrado por el primer nombre");
        return listaPacientes;
    }
    @PostMapping("/pacientes")
    public Paciente agregarPaciente(@RequestBody Paciente paciente){
        logger.info("Paciente agregado");
        return this.pacienteServicio.guardar(paciente);
    }
}
