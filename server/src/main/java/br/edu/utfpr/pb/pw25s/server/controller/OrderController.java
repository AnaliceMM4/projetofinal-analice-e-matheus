/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.edu.utfpr.pb.pw25s.server.controller;

import br.edu.utfpr.pb.pw25s.server.dto.OrderDTO;
import br.edu.utfpr.pb.pw25s.server.dto.OrderItensDTO;
import br.edu.utfpr.pb.pw25s.server.model.Order;
import br.edu.utfpr.pb.pw25s.server.model.User;
import br.edu.utfpr.pb.pw25s.server.service.AuthService;
import br.edu.utfpr.pb.pw25s.server.service.ICrudService;
import br.edu.utfpr.pb.pw25s.server.service.impl.OrderServiceImpl;
import br.edu.utfpr.pb.pw25s.server.shared.GenericResponse;
import java.security.Principal;
import java.util.List;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 *
 * @author mathe
 */
@RestController
@RequestMapping("/orders")
public class OrderController extends CrudController<Order, OrderDTO, Long> {

    private final OrderServiceImpl orderService;
    @Autowired
    private final AuthService authService;
    private final ModelMapper modelMapper;

    public OrderController(OrderServiceImpl orderService, ModelMapper modelMapper, AuthService authService) {
        super(Order.class, OrderDTO.class);
        this.orderService = orderService;
        this.modelMapper = modelMapper;
        this.authService = authService;
    }

    @Override
    protected ICrudService<Order, Long> getService() {
        return orderService;
    }

    @Override
    protected ModelMapper getModelMapper() {
        return modelMapper;
    }

    //mudar esse metodo conforme aula 29/04 sobre controller e sobre o carrinho
    @PostMapping("/add")
    public ResponseEntity<GenericResponse> add(Principal principal, @RequestBody OrderDTO order) {
        GenericResponse genericResponse = new GenericResponse();
        if (principal != null) {

            orderService.saveOrder(principal, order);
            genericResponse.setMessage("Request saved.");

            return ResponseEntity.status(HttpStatus.CREATED).body(genericResponse);

        } else {
            genericResponse.setMessage("Erro na autenticação");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(genericResponse);
        }
    }

    @GetMapping("/list")
    public ResponseEntity<?> listarDetalhesPedido(Principal principal) {

        if (principal != null) {
            String username = principal.getName();
            User user = (User) authService.loadUserByUsername(username);
            List<OrderDTO> pedidos = orderService.findRequestsByUser(user);

            return ResponseEntity.ok(pedidos);
        } else {
            GenericResponse genericResponse = new GenericResponse();
            genericResponse.setMessage("Erro na autenticação");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(genericResponse);
        }
    }
}
