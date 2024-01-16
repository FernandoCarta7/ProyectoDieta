package com.dietaapp.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.ArrayList;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class HistoriaSalud {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  int idHistoriaSalud;
  int idPaciente;
  ArrayList<String> enfermedades;
  double imc;
  int estatura;
}
