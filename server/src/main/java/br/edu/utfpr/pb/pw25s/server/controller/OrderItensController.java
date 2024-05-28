/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.edu.utfpr.pb.pw25s.server.controller;

import br.edu.utfpr.pb.pw25s.server.dto.OrderDTO;
import br.edu.utfpr.pb.pw25s.server.dto.OrderItensDTO;
import br.edu.utfpr.pb.pw25s.server.dto.UserDTO;
import br.edu.utfpr.pb.pw25s.server.model.Order;
import br.edu.utfpr.pb.pw25s.server.model.OrderItens;
import br.edu.utfpr.pb.pw25s.server.service.ICrudService;
import br.edu.utfpr.pb.pw25s.server.service.impl.OrderItensServiceImpl;
import br.edu.utfpr.pb.pw25s.server.service.impl.OrderServiceImpl;
import br.edu.utfpr.pb.pw25s.server.shared.GenericResponse;
import jakarta.validation.Valid;
import java.io.Serializable;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author mathe
 */
@RestController
@RequestMapping("/orderItens")
public class OrderItensController extends CrudController<OrderItens, OrderItensDTO, Long> {

    private final OrderItensServiceImpl orderItensService;
    private final ModelMapper modelMapper;

    public OrderItensController(OrderItensServiceImpl orderItensService, ModelMapper modelMapper) {
        super(OrderItens.class, OrderItensDTO.class);
        this.orderItensService = orderItensService;
        this.modelMapper = modelMapper;
    }

    @Override
    protected ICrudService<OrderItens, Long> getService() {
        return orderItensService;
    }

    @Override
    protected ModelMapper getModelMapper() {
        return modelMapper;
    }

    /*@PostMapping("/adicionarNoCarrinho")
    public ResponseEntity<GenericResponse> add(@Valid @RequestBody OrderItensDTO requestItens) {

        OrderItens requestItensEntity = modelMapper.map(requestItens, OrderItens.class);
        
        System.out.println("Order entity mapped: " + requestItensEntity);
        if (requestItensEntity != null) {
            requestItensService.save(requestItensEntity);
            GenericResponse genericResponse = new GenericResponse();
            genericResponse.setMessage("Order saved.");

            return ResponseEntity.status(HttpStatus.CREATED).body(genericResponse);
        } else {
            return ResponseEntity.noContent().build();
        }
    }
*/
    
    
    @GetMapping("/listarDetalhesDoPedido")
    public ResponseEntity<?> listarCarrinho() {
        List<OrderItens> requestItens = orderItensService.findAll();
        List<OrderItensDTO> requestItensDTOList = requestItens.stream()
                .map(requestItem -> modelMapper.map(requestItem, OrderItensDTO.class))
                .collect(Collectors.toList());
        if (requestItensDTOList != null) {
            return ResponseEntity.ok(requestItensDTOList);
        } else {
            return ResponseEntity.noContent().build();
        }
    }
    
   

}
