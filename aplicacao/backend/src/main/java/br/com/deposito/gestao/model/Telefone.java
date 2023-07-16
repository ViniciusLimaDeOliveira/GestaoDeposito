package br.com.deposito.gestao.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Telefone {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Cliente cliente;

    private String contato;
}
