package com.dietaapp.repositorio;


import com.dietaapp.modelo.Paciente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PacienteRepositorio extends JpaRepository<Paciente, Integer> {
    List<Paciente> primerNombre(String primer_nombre);
}
