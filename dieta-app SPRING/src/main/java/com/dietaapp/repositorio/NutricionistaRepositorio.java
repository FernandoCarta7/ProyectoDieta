package com.dietaapp.repositorio;


import com.dietaapp.modelo.Nutricionista;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NutricionistaRepositorio extends JpaRepository<Nutricionista, Integer> {
}
