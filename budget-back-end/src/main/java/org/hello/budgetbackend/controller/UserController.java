package org.hello.budgetbackend.controller;

import org.hello.budgetbackend.entities.User;
import org.hello.budgetbackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {

        String username = user.getUsername();
        String password = user.getPassword();

        if (userService.validateUser(username, password)) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {

        if (userService.saveUser(user) != null) {
            return ResponseEntity.ok("Account created.");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Account already created with username and/or email");
        }
    }

}
