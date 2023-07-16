package br.com.deposito.gestao.repository;

import br.com.deposito.gestao.model.Compra;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompraRepository  extends JpaRepository<Compra,Long> {
}
