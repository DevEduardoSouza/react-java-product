package br.com.produto.produto.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.produto.produto.facade.IProdutoFacade;
import br.com.produto.produto.model.ProdutoModel;
import br.com.produto.produto.model.ResponseModel;

@RestController
@RequestMapping("/")
// @CrossOrigin(origins = "http://localhost:3000") //exclusivo
@CrossOrigin(origins = "*") //todos
public class ProdutoController {

    @Autowired
    private IProdutoFacade produtoFacade;

    @DeleteMapping("remover/{id}")
    public ResponseEntity<ResponseModel> remover (@PathVariable Long id){
        return produtoFacade.remover(id);
    }


    @PutMapping("alterar")
    public ResponseEntity<?> alterar(@RequestBody ProdutoModel pm){
        return produtoFacade.saveUpdateProduct(pm, "alterar");
    }


    @PostMapping("cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody ProdutoModel pm){
        return produtoFacade.saveUpdateProduct(pm, "cadastrar");
    }

    @GetMapping("listar")
    public List<ProdutoModel> get(){
        return produtoFacade.allProducts();
    }

    @GetMapping("/")
    public String api(){
        return "API funcionando";
    }



}
