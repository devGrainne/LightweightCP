package dev.grainne.lightweightcp.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.grainne.lightweightcp.dto.AuthResponse;
import dev.grainne.lightweightcp.dto.RegistrationRequest;
import dev.grainne.lightweightcp.dto.LoginRequest;

import dev.grainne.lightweightcp.service.UserService;

@RestController
@RequestMapping("/api")
public class UserController {

    private final UserService userService;

    UserController(UserService service) {
        this.userService = service;
    }
    
    @PostMapping("/register")
    public AuthResponse register(@RequestBody RegistrationRequest request) {
        System.out.println("Registration request received for username " + request.getUsername());

        return userService.register(request);
    }

    @PostMapping("/login")
    public AuthResponse login(@RequestBody LoginRequest request) {
        System.out.println("Login request received for username " + request.getUsername());

        return userService.login(request);
    }

}
