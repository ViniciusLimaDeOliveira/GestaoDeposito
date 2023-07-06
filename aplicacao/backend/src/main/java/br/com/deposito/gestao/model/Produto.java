package br.com.deposito.gestao.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Entity
@Data
public class Produto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Campo Obrigatório")
    private String nome;

    @NotBlank(message = "Campo Obrigatório")
    private Double quantidade;

    @NotBlank(message = "Campo Obrigatório")
    private Double precoDeCompra;

    @NotBlank(message = "Campo Obrigatório")
    private Double porcentagenVenda;

    private Double precoDeVenda;

    private String barcode;



}
