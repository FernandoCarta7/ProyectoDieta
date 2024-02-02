package com.dietaapp.servicio;


import com.dietaapp.modelo.Turno_Paciente;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ITurno_PacienteServicio  {
    public List<Turno_Paciente> getTurno();
    public Turno_Paciente buscarPorId(Integer id);
    public Turno_Paciente guardar(Turno_Paciente turnoPaciente);
    public void eliminar (Integer idPaciente);
}
