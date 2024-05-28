/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.edu.utfpr.pb.pw25s.server.dto;

import br.edu.utfpr.pb.pw25s.server.model.PaymentTypes;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.validation.constraints.NotNull;
import java.util.Date;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *
 * @author mathe
 */
@Data
@NoArgsConstructor
@AllArgsConstructor

public class OrderDTO {

    private Long id;

    @JsonFormat(pattern = "dd/MM/yyyy")
    private Date data;
    
    private UserViewDTO user;
    @NotNull
    private PaymentTypes paymentTypes;
    private List<OrderItensDTO> requestItens;

}
