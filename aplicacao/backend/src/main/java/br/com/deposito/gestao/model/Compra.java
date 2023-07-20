package br.com.deposito.gestao.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Entity
@Data
public class Compra {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Cliente cliente;

    @OneToMany(mappedBy = "compra", cascade = CascadeType.DETACH, orphanRemoval = true)
    private List<VendaProduto> carrinho;

    private Double valorTotal;

    private String notas;

    private LocalDate dataCompra;

}
