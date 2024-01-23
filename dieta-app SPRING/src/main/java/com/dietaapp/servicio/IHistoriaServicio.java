package com.dietaapp.servicio;

import com.dietaapp.modelo.HistoriaSalud;

import java.util.List;

public interface IHistoriaServicio {
    public List<HistoriaSalud> listar();
    public HistoriaSalud buscarPorId(Integer id);
    public HistoriaSalud guardar(HistoriaSalud historia);
    public void eliminar (Integer id);
}
