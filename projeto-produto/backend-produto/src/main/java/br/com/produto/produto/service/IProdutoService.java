package br.com.produto.produto.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import br.com.produto.produto.model.ProdutoModel;
import br.com.produto.produto.model.ResponseModel;

public interface IProdutoService {
    
    public abstract List<ProdutoModel> allProducts();
    public abstract ResponseEntity<?> saveUpdateProduct(ProdutoModel produtoModel, String acao);
    public ResponseEntity<ResponseModel> remover(Long id);
    
}
