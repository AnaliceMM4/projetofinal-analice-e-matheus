package br.edu.utfpr.pb.pw25s.server.controller;

import br.edu.utfpr.pb.pw25s.server.dto.ProductDTO;
import br.edu.utfpr.pb.pw25s.server.model.Product;
import br.edu.utfpr.pb.pw25s.server.service.ICrudService;
import br.edu.utfpr.pb.pw25s.server.service.IProductService;
import br.edu.utfpr.pb.pw25s.server.service.impl.ProductServiceImpl;
import java.util.List;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/products")
public class ProductController extends CrudController<Product, ProductDTO, Long> {

    private final ProductServiceImpl productService;

    private final ModelMapper modelMapper;

    public ProductController(ProductServiceImpl productService, ModelMapper modelMapper) {
        super(Product.class, ProductDTO.class);
        this.productService = productService;
        this.modelMapper = modelMapper;
    }

    @Override
    protected ICrudService<Product, Long> getService() {
        return productService;
    }

    @Override
    protected ModelMapper getModelMapper() {
        return modelMapper;
    }

    @GetMapping("/searchProducts")
    public ResponseEntity<?> searchProducts() {

        List<ProductDTO> productsList = productService.findAllProducts();
        if (productsList != null) {
            return ResponseEntity.ok(productsList);
        } else {
            return ResponseEntity.noContent().build();
        }
    }

    @GetMapping("/products/{id}")
    ResponseEntity<?> searchOneProduct(@PathVariable Long id) {
        Product product = productService.findOne(id);
        return ResponseEntity.ok(product);
    }
}