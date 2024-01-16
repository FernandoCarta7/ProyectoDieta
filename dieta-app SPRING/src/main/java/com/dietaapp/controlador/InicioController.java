package com.dietaapp.controlador;

import com.dietaapp.modelo.Paciente;
import com.dietaapp.servicio.PacienteServicio;
import org.slf4j.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
        if (listaPacientes.size() == 0 || listaPacientes.isEmpty()){
            logger.info("Saludos desde el controlador");
            return null;
        }
        logger.info("Saludos desde el controlador");
        return pacienteServicio.listar();
    }
}
