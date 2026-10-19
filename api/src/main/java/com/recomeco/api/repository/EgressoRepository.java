package com.recomeco.api.repository;

import com.recomeco.api.model.Egresso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EgressoRepository extends JpaRepository<Egresso, Long> {
}