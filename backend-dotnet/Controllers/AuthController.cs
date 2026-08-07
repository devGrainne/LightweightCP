using Microsoft.AspNetCore.Mvc;

using backend_dotnet.Services;
using backend_dotnet.DTOs;

namespace backend_dotnet.Controllers;

[ApiController]
[Route("api")]
public class AuthController : ControllerBase
{
    private AuthService _authService;

    public AuthController(AuthService authService)
    {
        _authService = authService;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register(RegistrationRequest registrationRequest)
    {
        var response = await _authService.Register(registrationRequest);

        if (response.Success)
        {
            return Created ("", response);
        }
        
        return Conflict (response);
    }
    
    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginRequest loginRequest)
    {
        var response = await _authService.Login(loginRequest);
        
        if (response.Success)
        {
            return Ok (response);
        }
        
        return Unauthorized (response);
    }
}