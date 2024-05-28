/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.edu.utfpr.pb.pw25s.server.service.impl;

import br.edu.utfpr.pb.pw25s.server.dto.ProductDTO;
import br.edu.utfpr.pb.pw25s.server.dto.OrderDTO;
import br.edu.utfpr.pb.pw25s.server.dto.OrderItensDTO;
import br.edu.utfpr.pb.pw25s.server.dto.UserDTO;
import br.edu.utfpr.pb.pw25s.server.dto.UserViewDTO;
import br.edu.utfpr.pb.pw25s.server.model.Category;
import br.edu.utfpr.pb.pw25s.server.model.Order;
import br.edu.utfpr.pb.pw25s.server.model.OrderItens;
import br.edu.utfpr.pb.pw25s.server.model.Product;
import br.edu.utfpr.pb.pw25s.server.model.User;
import br.edu.utfpr.pb.pw25s.server.repository.OrderItensRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import br.edu.utfpr.pb.pw25s.server.service.IOrderService;
import br.edu.utfpr.pb.pw25s.server.repository.OrderRepository;
import br.edu.utfpr.pb.pw25s.server.service.AuthService;
import java.security.Principal;
import static org.springframework.web.server.ServerWebExchangeExtensionsKt.principal;
import java.security.Principal;
import org.springframework.beans.factory.annotation.Autowired;

/**
 *
 * @author mathe
 */
@Service
public class OrderServiceImpl extends CrudServiceImpl<Order, Long> implements IOrderService {

    private OrderRepository orderRepository;
    @Autowired
    private OrderItensServiceImpl orderItensServiceImpl;
    @Autowired
    private AuthService authService;

    public OrderServiceImpl(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    protected JpaRepository<Order, Long> getRepository() {
        return orderRepository;
    }

    public Order saveOrder(Principal principal, OrderDTO orderDTO) {

        Order entity = new Order();
        OrderItens itemsEntity = new OrderItens();

        //constroi o user a partir da autenticação
        String username = principal.getName();
        User user = (User) authService.loadUserByUsername(username);

        //seta uma data a partir do momento
        LocalDate localDate = LocalDate.now();
        ZoneId zoneId = ZoneId.systemDefault();
        Instant instant = localDate.atStartOfDay(zoneId).toInstant();
        Date date = Date.from(instant);

        entity.setUser(user);
        entity.setData(date);
        entity.setPaymentTypes(orderDTO.getPaymentTypes());
        Order orderId = orderRepository.save(entity);
        
        
        List<OrderItensDTO> orderItensDTOList = new ArrayList<>();
        orderItensDTOList.addAll(orderDTO.getRequestItens());
        
        for (OrderItensDTO orderItens : orderItensDTOList) {
           orderItens.setRequest(orderId);
           orderItensServiceImpl.saveOrderItems(orderItens);
        }

        return entity;
    }

    public List<OrderDTO> findRequestsByUser(User user) {
        List<Order> requests = orderRepository.findByUser(user);
        List<OrderDTO> requestDTOs = new ArrayList<>();

        for (Order request : requests) {
            OrderDTO requestDTO = new OrderDTO();
            UserViewDTO userViewDTO = new UserViewDTO();
            requestDTO.setId(request.getId());
            requestDTO.setData(request.getData());
            userViewDTO.setUsername(request.getUser().getUsername());
            userViewDTO.setId(request.getUser().getId());
            requestDTO.setUser(userViewDTO);
            requestDTO.setPaymentTypes(request.getPaymentTypes());
            requestDTOs.add(requestDTO);
        }

        return requestDTOs;
    }

}
