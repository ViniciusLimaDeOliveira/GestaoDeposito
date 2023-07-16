package br.com.deposito.gestao.repository;

import br.com.deposito.gestao.model.VendaProduto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VendaProdutoRepository  extends JpaRepository<VendaProduto,Long> {
}
