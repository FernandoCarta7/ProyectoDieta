package com.dietaapp.controlador;

import com.dietaapp.modelo.Turno;
import com.dietaapp.modelo.Turno_Paciente;
import com.dietaapp.servicio.TurnoServicio;
import com.dietaapp.servicio.Turno_PacienteServicio;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
//http://locahost:8080/dieta-app
@RequestMapping("dieta-app/pacientes")
@CrossOrigin(value = "http://localhost:4200")
public class AgendarTurnoController {
    private static final Logger logger =
            LoggerFactory.getLogger(AgendarTurnoController.class);

    @Autowired
    private TurnoServicio turnoServicio;
    @Autowired
    private Turno_PacienteServicio turnoPacienteServicio;

    @GetMapping("/agendar-turno/{id}")
    public Turno agendarTurno(@PathVariable int id_paciente){
        Turno turno = new Turno();
        turno = this.turnoServicio.turnoByIdPaciente(id_paciente);
        return turno;
    }
    @PostMapping("/guardar/agendar-turno/{id_paciente}")
    public Turno agendarTurno (@RequestBody Turno turno, @PathVariable int id_paciente){
        logger.info("Agendando turno");
        this.turnoServicio.guardar(turno);
        Turno_Paciente turnoPaciente = new Turno_Paciente();
        turnoPaciente.setIdTurno(turno.getIdTurno());
        turnoPaciente.setIdPaciente(id_paciente);
        this.turnoPacienteServicio.guardar(turnoPaciente);

        return this.turnoServicio.guardar(turno);
    }
}
