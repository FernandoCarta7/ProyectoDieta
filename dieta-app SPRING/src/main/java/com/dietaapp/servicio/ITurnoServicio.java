package com.dietaapp.servicio;

import com.dietaapp.modelo.Turno;

import java.util.List;

public interface ITurnoServicio {
    public List<Turno> getTurno();
    public Turno buscarPorId(Integer id);
    public Turno guardar(Turno turno);
    public void eliminar (Integer id);
}
