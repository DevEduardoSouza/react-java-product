package br.com.produto.produto.service;

import java.lang.reflect.Field;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.produto.produto.model.ProdutoModel;
import br.com.produto.produto.model.ResponseModel;
import br.com.produto.produto.repository.ProdutoRepository;

@Service
public class ProdutoService implements IProdutoService{    
    @Autowired
    private ProdutoRepository produtoRepository;

    @Override
    public List<ProdutoModel> allProducts() {
        return produtoRepository.findAll();
    }
    
    /*
     * Para cadastrar qualquer produto eu preciso validar as informaçôes
     * Então eu uso esse response model
     */
    @Autowired
    private ResponseModel rm;


    /*
     * O metodo de cadastro e alterar usam o save
     * 
     */
    // Método para cadastrar e atualizar produtos
    @Override
    public ResponseEntity<?> saveUpdateProduct(ProdutoModel pm, String acao) {
        
        if(pm.getName().equals("")){
            rm.setMessage("O nome do produto é obrigatório");
            rm.setField("name");
            return new ResponseEntity<ResponseModel>(rm, HttpStatus.BAD_REQUEST);
        }else if(pm.getMarca().equals("")){
            rm.setMessage("A marca é obrigatória");
            return new ResponseEntity<ResponseModel>(rm, HttpStatus.BAD_REQUEST);
        }else{
            if(acao.equals("cadastrar")){
                return new ResponseEntity<ProdutoModel>(produtoRepository.save(pm), HttpStatus.CREATED);
            }else{
                //Essa é minha forma de update
                return new ResponseEntity<ProdutoModel>(produtoRepository.save(pm), HttpStatus.OK);
            }
        }
    }

    //Método para remover um produto
    public ResponseEntity<ResponseModel> remover(Long id){
        produtoRepository.deleteById(id);
        rm.setMessage("O produto foi removido como sucesso");
        return new ResponseEntity<ResponseModel>(rm, HttpStatus.OK);
    }


    

    
}
