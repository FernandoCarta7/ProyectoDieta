package com.dietaapp.controlador;

import com.dietaapp.modelo.HistoriaSalud;
import com.dietaapp.modelo.Paciente;
import com.dietaapp.servicio.HistoriaServicio;
import com.dietaapp.servicio.PacienteServicio;
import org.slf4j.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
//http://locahost:8080/dieta-app
@RequestMapping("dieta-app")
@CrossOrigin(value = "http://localhost:4200")
public class InicioController {

    private static final Logger logger =
            LoggerFactory.getLogger(InicioController.class);
    @Autowired
    private PacienteServicio pacienteServicio;
    @Autowired
    private HistoriaServicio historiaServicio;

    @DeleteMapping("/pacientes/{id}")
    public ResponseEntity<Map<String, Boolean>>
    eliminarProducto(@PathVariable int id){
        Paciente paciente = pacienteServicio.buscarPorId(id);
        HistoriaSalud historiaSalud = historiaServicio.buscarPorIdPaciente(id);

        if (paciente == null) logger.error("No se encontró el paciente con el id: " + id);
        if (historiaSalud == null) {
            logger.warn("El paciente no tenía historia registrada");
        } else {
            this.historiaServicio.eliminar(historiaSalud.getIdHistoriaSalud());
        }


        this.pacienteServicio.eliminar(paciente.getIdPaciente());
        Map<String, Boolean> respuesta = new HashMap<>();
        respuesta.put("Paciente borrado", Boolean.TRUE);
        return ResponseEntity.ok(respuesta);
    }
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
    @GetMapping("/pacientes/editar/{id}")
    public ResponseEntity<Paciente> getPacienteById(
            @PathVariable int id){
        Paciente paciente = this.pacienteServicio.buscarPorId(id);
        if (paciente != null){ return ResponseEntity.ok(paciente); }
        else { logger.error("No se encontró el paciente con el id: " + id);
            return null;
        }
    }
    @PostMapping("/pacientes")
    public Paciente agregarPaciente(@RequestBody Paciente paciente){
        logger.info("Paciente agregado");
        return this.pacienteServicio.guardar(paciente);
    }

    @PutMapping("/pacientes/{id}")
    public ResponseEntity<Paciente> actualizarPaciente(
            @PathVariable int id,
            @RequestBody Paciente pacienteRecibido){
        Paciente paciente = this.pacienteServicio.buscarPorId(id);
        if (paciente == null){
            logger.error("No se encontró el paciente");
        }

        paciente.setPrimerNombre(pacienteRecibido.getPrimerNombre());
        paciente.setPrimerApellido(pacienteRecibido.getPrimerApellido());
        paciente.setSegundoNombre(pacienteRecibido.getSegundoNombre());
        paciente.setSegundoApellido(pacienteRecibido.getSegundoApellido());
        paciente.setGenero(pacienteRecibido.getGenero());
        paciente.setCorreo(pacienteRecibido.getCorreo());
        paciente.setFechaNacimiento(pacienteRecibido.getFechaNacimiento());
        paciente.setNumeroCelular(paciente.getNumeroCelular());

        this.pacienteServicio.guardar(paciente);

        logger.info("Se agregó el paciente");

        return ResponseEntity.ok(paciente);
    }

}
