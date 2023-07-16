package br.com.deposito.gestao.repository;

import br.com.deposito.gestao.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente,Long> {
}
