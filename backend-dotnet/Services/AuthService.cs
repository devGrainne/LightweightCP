using backend_dotnet.Data;
using backend_dotnet.DTOs;
using backend_dotnet.Models;
using Microsoft.EntityFrameworkCore;

namespace backend_dotnet.Services;

public class AuthService
{
    private readonly ApplicationDbContext _context;
    public AuthService(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<AuthResponse> Register(RegistrationRequest registrationRequest)
    {
        User? existingUser = await _context.Users.SingleOrDefaultAsync(u => u.Username == registrationRequest.Username);

        if (existingUser != null)
        {
            return new AuthResponse(registrationRequest.Username + " already exists.", false);
        }

        var user = new User
        {
            Username = registrationRequest.Username,
            PasswordHash = BCrypt.Net.BCrypt.HashPassword(
                registrationRequest.Password
            )
        };

        _context.Users.Add(user);
        await _context.SaveChangesAsync();

        return new AuthResponse("Registration for " + registrationRequest.Username + " successful.", true);
    }

    public async Task<AuthResponse> Login(LoginRequest loginRequest)
    {
        User? user = await _context.Users.SingleOrDefaultAsync(u => 
            u.Username == loginRequest.Username);

        if(user == null)
        {
            return new AuthResponse("Invalid username or password.", false);
        }

        if(! BCrypt.Net.BCrypt.Verify(loginRequest.Password, user.PasswordHash))
        {
            return new AuthResponse("Invalid username or password.", false);
        }
        
        return new AuthResponse("Login succeeded.", true);
    }
}   