package dev.grainne.lightweightcp.dto;

public class AuthResponse {
    
    private String message;

    public AuthResponse() {

    }

    public AuthResponse(String s) {
        this.message = s;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String s) {
        this.message = s;
    }
}
