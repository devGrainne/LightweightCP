namespace backend_dotnet.DTOs;
public class RegistrationRequest
{
    public RegistrationRequest()
    {
        
    }
    public string Username { get; set; } = "";
    public string Password { get; set; } = "";
}