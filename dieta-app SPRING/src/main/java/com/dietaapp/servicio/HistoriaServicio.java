package com.dietaapp.servicio;

import com.dietaapp.modelo.HistoriaSalud;
import com.dietaapp.repositorio.HistoriaRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HistoriaServicio implements IHistoriaServicio{
    @Autowired
    private HistoriaRepositorio historiaRepositorio;
    @Override
    public List<HistoriaSalud> listar() {
        return historiaRepositorio.findAll();
    }

    @Override
    public HistoriaSalud buscarPorId(Integer id) {
        return historiaRepositorio.findById(id).orElse(null);
    }

    @Override
    public HistoriaSalud guardar(HistoriaSalud historia) {
        return historiaRepositorio.save(historia);
    }

    @Override
    public void eliminar(Integer id) {
        this.historiaRepositorio.deleteById(id);
    }

    public HistoriaSalud buscarPorIdPaciente(int id_paciente){
        return this.historiaRepositorio.getHistoryaByidPaciente(id_paciente);
    }
}
