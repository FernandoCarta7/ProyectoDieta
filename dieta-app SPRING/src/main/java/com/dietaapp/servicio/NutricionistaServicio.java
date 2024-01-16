package com.dietaapp.servicio;


import com.dietaapp.modelo.Nutricionista;
import com.dietaapp.repositorio.NutricionistaRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NutricionistaServicio implements INutricionistaServicio{

  @Autowired
  private NutricionistaRepositorio nutricionistaRepositorio;
  @Override
  public List<Nutricionista> listar() {
    return nutricionistaRepositorio.findAll();
  }

  @Override
  public Nutricionista buscarPorId(Integer id) {
    Nutricionista nutricionista = nutricionistaRepositorio.findById(id).orElse(null);
    return nutricionista;
  }

  @Override
  public Nutricionista guardar(Nutricionista nutricionista) {
    return this.nutricionistaRepositorio.save(nutricionista);
  }

  @Override
  public void eliminar(Integer id) {
    this.nutricionistaRepositorio.deleteById(id);
  }
}
