package com.recomeco.api.controller;

import com.recomeco.api.model.Oficina;
import com.recomeco.api.repository.OficinaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/oficinas")
@CrossOrigin(origins = "*")
public class OficinaController {

    @Autowired
    private OficinaRepository repository;

    @GetMapping
    public List<Oficina> listar() {
        return repository.findAll();
    }

    @PostMapping
    public Oficina criar(@RequestBody Oficina oficina) {
        return repository.save(oficina);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Oficina> atualizar(@PathVariable Long id, @RequestBody Oficina dadosAtualizados) {
        return repository.findById(id).map(oficina -> {
            oficina.setTitulo(dadosAtualizados.getTitulo());
            oficina.setDescricao(dadosAtualizados.getDescricao());
            oficina.setCargaHoraria(dadosAtualizados.getCargaHoraria());
            oficina.setInstrutor(dadosAtualizados.getInstrutor());
            return ResponseEntity.ok(repository.save(oficina));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        if (!repository.existsById(id)) return ResponseEntity.notFound().build();
        repository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}