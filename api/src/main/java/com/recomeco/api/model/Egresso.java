package com.recomeco.api.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "egressos")
@Data
public class Egresso {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String email;
    private String telefone;

    @Column(columnDefinition = "TEXT")
    private String habilidades;
}