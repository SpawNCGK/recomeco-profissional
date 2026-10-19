package com.recomeco.api.repository;

import com.recomeco.api.model.Oficina;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OficinaRepository extends JpaRepository<Oficina, Long> {
}