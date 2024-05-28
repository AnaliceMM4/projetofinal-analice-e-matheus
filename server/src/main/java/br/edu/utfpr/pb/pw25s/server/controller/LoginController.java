package br.edu.utfpr.pb.pw25s.server.controller;

import br.edu.utfpr.pb.pw25s.server.service.AuthService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/login")
public class LoginController {

    private final AuthService authService;

    public LoginController(AuthService authService) {
        this.authService = authService;
    }
/*
    @GetMapping("/user-info")
    public ResponseEntity<UserDTO> getUserInfo(Principal principal) {
        if (principal != null) {
            String username = principal.getName();
            User userRepo = (User) authService.loadUserByUsername(username);
            UserDTO userDTO = new UserDTO(userRepo); 
            userDTO.setDisplayName(userRepo.getDisplayName());
            return ResponseEntity.ok(userDTO);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }
    }
*/
}
