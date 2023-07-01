package br.com.produto.produto.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="produtos")
@Data
public class ProdutoModel extends AbstractEntity {

    private String name;
    private String src_image;
    private Long qty;
    private String marca;
    private String description;
    private double price;
    private boolean active;
    
}
