/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package br.edu.utfpr.pb.pw25s.server.service;

import br.edu.utfpr.pb.pw25s.server.model.Product;
import java.util.List;

/**
 *
 * @author mathe
 */
public interface IProductService extends ICrudService<Product, Long>{
    List<Product> findByCategory(Long categoryId);
}
