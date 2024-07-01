/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.edu.utfpr.pb.pw25s.server.service.impl;

import br.edu.utfpr.pb.pw25s.server.dto.OrderDTO;
import br.edu.utfpr.pb.pw25s.server.dto.OrderItensDTO;
import br.edu.utfpr.pb.pw25s.server.model.Product;
import br.edu.utfpr.pb.pw25s.server.model.Order;
import br.edu.utfpr.pb.pw25s.server.model.OrderItens;
import br.edu.utfpr.pb.pw25s.server.repository.ProductRepository;
import java.math.BigDecimal;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import br.edu.utfpr.pb.pw25s.server.service.IOrderItensService;
import br.edu.utfpr.pb.pw25s.server.repository.OrderItensRepository;
import java.util.List;

/**
 *
 * @author mathe
 */
@Service
public class OrderItensServiceImpl extends CrudServiceImpl<OrderItens, Long> implements IOrderItensService {

    private OrderItensRepository orderItensRepository;
    @Autowired
    private ProductRepository productRepository;

    public OrderItensServiceImpl(OrderItensRepository orderItensRepository) {
        this.orderItensRepository = orderItensRepository;
    }

    @Override
    protected JpaRepository<OrderItens, Long> getRepository() {
        return orderItensRepository;
    }

    public OrderItens saveOrderItems(OrderItensDTO orderItemsDTO) {

        Optional<Product> productOptional = productRepository.findById(orderItemsDTO.getProduct().getId());
        Product product = productOptional.get();
        OrderItens entity = new OrderItens();
        Order request = orderItemsDTO.getRequest();

        if (product != null) {
            entity.setId(orderItemsDTO.getId());
            entity.setRequest(request);
            entity.setPreco(product.getPrice().multiply(BigDecimal.valueOf(orderItemsDTO.getQuantidade())));
            entity.setQuantidade(orderItemsDTO.getQuantidade());
            entity.setProduct(product);

        }

        return orderItensRepository.save(entity);
    }

    public List<OrderItens> findItensByOrder(Long orderId) {
        return orderItensRepository.findByRequestId(orderId);
    }
}
