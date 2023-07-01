package br.com.produto.produto.facade;

import java.util.List;

import org.springframework.http.ResponseEntity;

import br.com.produto.produto.model.ProdutoModel;
import br.com.produto.produto.model.ResponseModel;

public interface IProdutoFacade {
    
    public abstract List<ProdutoModel> allProducts();
    public abstract ResponseEntity<?> saveUpdateProduct(ProdutoModel produtoModel, String acao);
    public ResponseEntity<ResponseModel> remover(Long id);

}
