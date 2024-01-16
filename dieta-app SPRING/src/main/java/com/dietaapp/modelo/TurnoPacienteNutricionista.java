package com.dietaapp.modelo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;


@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class TurnoPacienteNutricionista {

  int idTurno;
  int idPaciente;
  int idNutricionista;
}
