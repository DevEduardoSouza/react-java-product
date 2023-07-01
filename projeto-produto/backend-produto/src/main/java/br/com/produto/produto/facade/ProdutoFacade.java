package br.com.produto.produto.facade;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.produto.produto.model.ProdutoModel;
import br.com.produto.produto.model.ResponseModel;
import br.com.produto.produto.service.IProdutoService;

@Service
public class ProdutoFacade implements IProdutoFacade{

    @Autowired
    private IProdutoService produtoService;

    @Override
    public List<ProdutoModel> allProducts() {
        return produtoService.allProducts();
    }

    @Override
    public ResponseEntity<?> saveUpdateProduct(ProdutoModel produtoModel, String acao) {
        return produtoService.saveUpdateProduct(produtoModel, acao);
    }

    @Override
    public ResponseEntity<ResponseModel> remover(Long id) {
        return produtoService.remover(id);
    }
    
}
