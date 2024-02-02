package com.dietaapp.servicio;

import com.dietaapp.modelo.Turno_Paciente;

import com.dietaapp.repositorio.Turno_PacienteRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Turno_PacienteServicio implements ITurno_PacienteServicio{

    @Autowired
    private Turno_PacienteRepositorio turno_pacienteRepositorio;
    @Override
    public List<Turno_Paciente> getTurno() {
        return this.turno_pacienteRepositorio.findAll();
    }

    @Override
    public Turno_Paciente buscarPorId(Integer id) {
        return this.turno_pacienteRepositorio.findById(id).orElse(null);
    }

    @Override
    public Turno_Paciente guardar(Turno_Paciente turnoPaciente) {
        return this.turno_pacienteRepositorio.save(turnoPaciente);
    }

    @Override
    public void eliminar(Integer idPaciente) {
        this.turno_pacienteRepositorio.deleteById(idPaciente);
    }

    public Turno_Paciente getTurnoPacienteByIdPaciente(int id_paciente){
        return this.turno_pacienteRepositorio.idPaciente(id_paciente);
    }
}
