package com.dietaapp.servicio;



import com.dietaapp.modelo.Paciente;

import java.util.List;

public interface IPacienteServicio {
  public List<Paciente> listar();
  public Paciente buscarPorId(Integer id);
  public Paciente guardar(Paciente paciente);
  public void eliminar (Integer id);
}
