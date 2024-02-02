package com.dietaapp.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Turno_Paciente {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  int id;
  int idTurno;
  int idPaciente;

}
