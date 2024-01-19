package com.dietaapp.servicio;


import com.dietaapp.modelo.Paciente;
import com.dietaapp.repositorio.PacienteRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class PacienteServicio implements  IPacienteServicio{

  @Autowired
  private PacienteRepositorio pacienteRepositorio;
  @Override
  public List<Paciente> listar() {
    return pacienteRepositorio.findAll();
  }

  public List<Paciente> listarprimerNombre(String primer_nombre){
    return pacienteRepositorio.primerNombre(primer_nombre);
  }

  @Override
  public Paciente buscarPorId(Integer id) {


    return pacienteRepositorio.findById(id).orElse(null);
  }

  @Override
  public Paciente guardar(Paciente paciente) {
    return this.pacienteRepositorio.save(paciente);
  }

  @Override
  public void eliminar(Integer id) {
    this.pacienteRepositorio.deleteById(id);
  }



}
