package br.com.deposito.gestao.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;

public class VendaProduto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message = "Campo Obrigatório")
    private Produto produto;
    @NotBlank(message = "Campo Obrigatório")
    private Double quantidade;
    private Double valor;
}
