package br.edu.utfpr.pb.pw25s.server.dto;

import br.edu.utfpr.pb.pw25s.server.annotation.UniqueUsername;
import br.edu.utfpr.pb.pw25s.server.model.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {

    
    private Long id;

    @UniqueUsername
    @NotNull
    @Size(min = 4, max = 50)
    private String username;

    @NotNull
    @Size(min = 4, max = 50)
    private String displayName;
    
    @NotNull(message = "{br.edu.utfpr.pb.pw26s.server.user.password.constraints.NotNull.message}")
    @Size(min = 6)
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*$", message = "{br.edu.utfpr.pb.pw26s.server.user.password.constraints.Pattern.message}")
    private String password;

    public UserDTO(User user) {
        this.username = user.getUsername();

    }

}
