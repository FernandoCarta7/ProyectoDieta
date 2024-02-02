package com.dietaapp.servicio;

import com.dietaapp.modelo.Turno;
import com.dietaapp.modelo.Turno_Paciente;
import com.dietaapp.repositorio.NutricionistaRepositorio;
import com.dietaapp.repositorio.TurnoRepositorio;
import com.dietaapp.repositorio.Turno_PacienteRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TurnoServicio implements  ITurnoServicio{
    @Autowired
    private TurnoRepositorio turnoRepositorio;
    @Autowired
    private Turno_PacienteRepositorio turno_pacienteRepositorio;
    @Override
    public List<Turno> getTurno() {
        return turnoRepositorio.findAll();
    }

    @Override
    public Turno buscarPorId(Integer id) {
        return turnoRepositorio.findById(id).orElse(null);
    }

    @Override
    public Turno guardar(Turno turno) {
        return this.turnoRepositorio.save(turno);
    }

    @Override
    public void eliminar(Integer id) {
        this.turnoRepositorio.deleteById(id);
    }


    public Turno turnoByIdPaciente(int id_paciente){
        Turno_Paciente turnoPaciente = this.turno_pacienteRepositorio.idPaciente(id_paciente);
        return this.turnoRepositorio.findById(turnoPaciente.getIdPaciente()).orElse(null);
    }
}
