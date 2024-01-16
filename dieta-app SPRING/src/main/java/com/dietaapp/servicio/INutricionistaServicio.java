package com.dietaapp.servicio;



import com.dietaapp.modelo.Nutricionista;

import java.util.List;

public interface INutricionistaServicio {
  public List<Nutricionista> listar();
  public Nutricionista buscarPorId(Integer id);
  public Nutricionista guardar(Nutricionista nutricionista);
  public void eliminar (Integer id);
}
