package com.recomeco.api.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "oportunidades")
@Data
public class Oportunidade {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titulo;
    private String empresa;

    @Column(columnDefinition = "TEXT")
    private String descricao;

    @Column(columnDefinition = "TEXT")
    private String requisitos;
}