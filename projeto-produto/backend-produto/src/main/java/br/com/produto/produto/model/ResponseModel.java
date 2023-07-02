package br.com.produto.produto.model;

import org.springframework.stereotype.Component;

import lombok.Data;

/*
 * this class will be used when having problem in CRUD
 * 
 */

@Component
@Data
public class ResponseModel {

    private String field;
    private String message;
    
}
