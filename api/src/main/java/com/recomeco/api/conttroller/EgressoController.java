package com.recomeco.api.controller;

import com.recomeco.api.model.Egresso;
import com.recomeco.api.repository.EgressoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/egressos")
@CrossOrigin(origins = "*")
public class EgressoController {

    @Autowired
    private EgressoRepository repository;

    @GetMapping
    public List<Egresso> listar() {
        return repository.findAll();
    }

    @PostMapping
    public Egresso criar(@RequestBody Egresso egresso) {
        return repository.save(egresso);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Egresso> atualizar(@PathVariable Long id, @RequestBody Egresso dadosAtualizados) {
        return repository.findById(id).map(egresso -> {
            egresso.setNome(dadosAtualizados.getNome());
            egresso.setEmail(dadosAtualizados.getEmail());
            egresso.setTelefone(dadosAtualizados.getTelefone());
            egresso.setHabilidades(dadosAtualizados.getHabilidades());
            return ResponseEntity.ok(repository.save(egresso));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        if (!repository.existsById(id)) return ResponseEntity.notFound().build();
        repository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}