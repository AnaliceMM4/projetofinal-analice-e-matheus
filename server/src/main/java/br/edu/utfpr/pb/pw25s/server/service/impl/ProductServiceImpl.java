/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.edu.utfpr.pb.pw25s.server.service.impl;

import br.edu.utfpr.pb.pw25s.server.dto.CategoryDTO;
import br.edu.utfpr.pb.pw25s.server.dto.ProductDTO;
import br.edu.utfpr.pb.pw25s.server.model.Category;
import br.edu.utfpr.pb.pw25s.server.model.Product;
import br.edu.utfpr.pb.pw25s.server.repository.ProductRepository;
import br.edu.utfpr.pb.pw25s.server.service.IProductService;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

/**
 *
 * @author mathe
 */
@Service
public class ProductServiceImpl extends CrudServiceImpl<Product, Long> implements IProductService {

    private final ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    protected JpaRepository<Product, Long> getRepository() {
        return productRepository;
    }

    public List<ProductDTO> findAllProducts() {

        List<Product> productsList = productRepository.findAll();   
        List<ProductDTO> productsDTOList = new ArrayList<>();
        for (Product product : productsList) {
            CategoryDTO category = new CategoryDTO();
            ProductDTO productDTO = new ProductDTO();
            productDTO.setId(product.getId());
            productDTO.setName(product.getName());
            productDTO.setPrice(product.getPrice());
            productDTO.setUrlImage(product.getUrlImage());
            category.setId(product.getCategory().getId());
            category.setName(product.getCategory().getName());
            productDTO.setCategory(category);
            productDTO.setDescription(product.getDescription());
            productsDTOList.add(productDTO);
        }

        return productsDTOList;

    }

    @Override
    public Product findOne(Long id) {

        return super.findOne(id);
    }

}
