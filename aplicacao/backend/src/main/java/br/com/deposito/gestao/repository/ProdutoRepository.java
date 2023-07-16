package br.com.deposito.gestao.repository;

import br.com.deposito.gestao.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository  extends JpaRepository<Produto,Long> {
}
