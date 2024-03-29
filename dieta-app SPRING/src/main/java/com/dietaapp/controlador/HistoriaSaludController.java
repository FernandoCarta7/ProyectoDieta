package com.dietaapp.controlador;

import com.dietaapp.modelo.HistoriaSalud;
import com.dietaapp.servicio.HistoriaServicio;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("dieta-app/historia")
@CrossOrigin(value = "http://localhost:4200")
public class HistoriaSaludController {

    private static final Logger logger =
            LoggerFactory.getLogger(HistoriaSaludController.class);

    @Autowired
    private HistoriaServicio historiaServicio;

    //DeleteMaping("/historia/{id}")

    @GetMapping("/historia-paciente/{id_paciente}")
    public HistoriaSalud getHistoria(@PathVariable int id_paciente){
        HistoriaSalud historiaPaciente = this.historiaServicio.buscarPorIdPaciente(id_paciente); //MODIFICAR
        logger.info("Retornando historia");
        return historiaPaciente;
    }


    //GetMapping("/historia/editar/{id}")

    //PostMapping("historia")
    @PostMapping("/historia-paciente")
    public HistoriaSalud  agregarHistoria(@RequestBody HistoriaSalud historia){
        logger.info("Guardando historia del paciente");
        return this.historiaServicio.guardar(historia);
    }

    @PutMapping("/historia-paciente/{id}")
    public ResponseEntity<HistoriaSalud> actualizarHistoria(
            @RequestBody HistoriaSalud historiaSaludRecibida){

        HistoriaSalud historiaSalud = this.historiaServicio.buscarPorId(historiaSaludRecibida.getIdHistoriaSalud());

        if (historiaSalud == null){
            throw new RuntimeException("Historia salud con id : " + historiaSaludRecibida.getIdHistoriaSalud() + ", no existe");
        }

        historiaSalud.setEnfermedades(historiaSaludRecibida.getEnfermedades());
        historiaSalud.setPeso(historiaSaludRecibida.getPeso());
        historiaSalud.setImc(historiaSaludRecibida.getImc());
        historiaSalud.setEstatura(historiaSaludRecibida.getEstatura());
        historiaSalud.setIdPaciente(historiaSaludRecibida.getIdPaciente());

        this.historiaServicio.guardar(historiaSalud);

        return ResponseEntity.ok(historiaSaludRecibida);
    }
}
