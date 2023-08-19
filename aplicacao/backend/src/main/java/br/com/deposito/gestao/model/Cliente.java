package br.com.deposito.gestao.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    @OneToMany(mappedBy = "cliente", cascade = CascadeType.REMOVE, orphanRemoval = true)
    private List<Telefone> contatos;

    private String endereco;

    private String notas;

    @OneToMany(mappedBy = "cliente", cascade = CascadeType.REFRESH, orphanRemoval = true)
    private List<Compra> historico;

}
