package com.dietaapp.repositorio;


import com.dietaapp.modelo.Turno_Paciente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Turno_PacienteRepositorio extends JpaRepository <Turno_Paciente, Integer> {
    Turno_Paciente idPaciente(int id_paciente);
}
