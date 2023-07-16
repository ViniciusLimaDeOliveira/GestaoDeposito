package br.com.deposito.gestao.repository;

import br.com.deposito.gestao.model.Telefone;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TelefoneRepository  extends JpaRepository<Telefone,Long> {
}
