package com.recomeco.api.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "oficinas")
@Data
public class Oficina {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titulo;

    @Column(columnDefinition = "TEXT")
    private String descricao;

    private Integer cargaHoraria;
    private String instrutor;
}