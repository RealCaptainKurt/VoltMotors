namespace VoltMotors.Server.Models;

public class Car
{
    public Guid Id { get; set; }
    public required string Model { get; set; }
    public int Year { get; set; }
    public decimal Price { get; set; }
    public string? Description { get; set; }
}

public class CreateCarDto
{
    public required string Model { get; set; }
    public int Year { get; set; }
    public decimal Price { get; set; }
    public string? Description { get; set; }
}
