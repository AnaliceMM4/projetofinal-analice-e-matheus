/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.edu.utfpr.pb.pw25s.server.dto;

import br.edu.utfpr.pb.pw25s.server.annotation.UniqueUsername;
import br.edu.utfpr.pb.pw25s.server.model.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
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
public class UserViewDTO {

    private Long id;

    @UniqueUsername
    @NotNull
    @Size(min = 4, max = 50)
    private String username;

    @JsonIgnore
    @Size(min = 4, max = 50)
    private String displayName;

    @JsonIgnore
    @Size(min = 6)
    private String password;

    public UserViewDTO(User user) {
        this.username = user.getUsername();

    }

}
