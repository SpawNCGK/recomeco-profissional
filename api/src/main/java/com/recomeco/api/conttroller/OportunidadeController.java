package com.recomeco.api.controller;

import com.recomeco.api.model.Oportunidade;
import com.recomeco.api.repository.OportunidadeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/oportunidades")
@CrossOrigin(origins = "*")
public class OportunidadeController {

    @Autowired
    private OportunidadeRepository repository;

    @GetMapping
    public List<Oportunidade> listar() {
        return repository.findAll();
    }

    @PostMapping
    public Oportunidade criar(@RequestBody Oportunidade oportunidade) {
        return repository.save(oportunidade);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Oportunidade> atualizar(@PathVariable Long id, @RequestBody Oportunidade dadosAtualizados) {
        return repository.findById(id).map(oportunidade -> {
            oportunidade.setTitulo(dadosAtualizados.getTitulo());
            oportunidade.setEmpresa(dadosAtualizados.getEmpresa());
            oportunidade.setDescricao(dadosAtualizados.getDescricao());
            oportunidade.setRequisitos(dadosAtualizados.getRequisitos());
            return ResponseEntity.ok(repository.save(oportunidade));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        if (!repository.existsById(id)) return ResponseEntity.notFound().build();
        repository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}