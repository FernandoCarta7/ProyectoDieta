package com.dietaapp.repositorio;


import com.dietaapp.modelo.Paciente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PacienteRepositorio extends JpaRepository<Paciente, Integer> {
}
