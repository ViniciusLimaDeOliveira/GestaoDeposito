package br.com.deposito.gestao.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Entity
@Data
public class VendaProduto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message = "Campo Obrigatório")
    @ManyToOne
    private Compra compra;

    @ManyToOne
    private Produto produto;

    @NotBlank(message = "Campo Obrigatório")
    private Double quantidade;
    
    @NotBlank(message = "Campo Obrigatório")
    private Double valor;
}
