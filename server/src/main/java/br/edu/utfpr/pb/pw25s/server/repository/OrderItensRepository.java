/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package br.edu.utfpr.pb.pw25s.server.repository;

import br.edu.utfpr.pb.pw25s.server.model.OrderItens;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author mathe
 */
public interface OrderItensRepository extends JpaRepository<OrderItens, Long>  {

    OrderItens findByProductId(Long id);
    OrderItens findByRequestId(Long id);
    
}
