namespace backend_dotnet.DTOs;
public class AuthResponse
{
    public string Message { get; private set; } = "";

    public bool Success { get; set; } = false;

    public AuthResponse(string message, bool success)
    {
        Message = message;
        Success = success;
    }
}