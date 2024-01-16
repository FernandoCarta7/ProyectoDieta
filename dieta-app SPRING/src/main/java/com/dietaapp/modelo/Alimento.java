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
public class Alimento {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  int idAlimento;
  String categoriaAlimento; /*Fruta, verdura u hortaliza, proteina, tubérculo, cereales y derivados, legumbres, grasas*/
  String descripcion;
  double porcion;
  String unidadPorcion;
}
