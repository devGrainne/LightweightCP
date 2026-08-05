package dev.grainne.lightweightcp.service;

import dev.grainne.lightweightcp.dto.LoginRequest;
import dev.grainne.lightweightcp.dto.RegistrationRequest;
import dev.grainne.lightweightcp.dto.AuthResponse;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    public AuthResponse register(RegistrationRequest request) {
        return new AuthResponse("Registration successful for " + request.getUsername());
    }

    public AuthResponse login(LoginRequest request) {

        return new AuthResponse("Login successful for " + request.getUsername());
    }
}
