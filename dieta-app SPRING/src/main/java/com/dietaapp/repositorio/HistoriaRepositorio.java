package com.dietaapp.repositorio;

import com.dietaapp.modelo.HistoriaSalud;
import com.dietaapp.modelo.Nutricionista;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HistoriaRepositorio extends JpaRepository<HistoriaSalud, Integer> {
    HistoriaSalud getHistoryaByidPaciente(int id_paciente);
}
