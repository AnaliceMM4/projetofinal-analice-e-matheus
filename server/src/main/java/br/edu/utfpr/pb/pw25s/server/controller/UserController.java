/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.edu.utfpr.pb.pw25s.server.controller;

/**
 *
 * @author mathe
 */
import br.edu.utfpr.pb.pw25s.server.dto.UserDTO;
import br.edu.utfpr.pb.pw25s.server.model.User;
import br.edu.utfpr.pb.pw25s.server.service.IUserService;
import br.edu.utfpr.pb.pw25s.server.service.impl.UserServiceImpl;
import br.edu.utfpr.pb.pw25s.server.shared.GenericResponse;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserServiceImpl userService;
    private final ModelMapper modelMapper;

    public UserController(UserServiceImpl userService,
            ModelMapper modelMapper) {
        this.userService = userService;
        this.modelMapper = modelMapper;
    }

    @PostMapping("/create")
    public ResponseEntity<GenericResponse> createUser(@Valid @RequestBody UserDTO user) {
 
        User userEntity = modelMapper.map(user, User.class);
        System.out.println("User entity mapped: " + userEntity);
        if (userEntity.isEnabled()) {

            userService.save(userEntity);

            GenericResponse genericResponse = new GenericResponse();
            genericResponse.setMessage("User saved.");

            return ResponseEntity.status(HttpStatus.CREATED).body(genericResponse);
        } else {
            return ResponseEntity.noContent().build();
        }
    }

}
