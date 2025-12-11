namespace VoltMotors.Server.Models;

public class Car
{
    public Guid Id { get; set; }
    public required string Model { get; set; }
    public string? Tagline { get; set; }
    public string? Description { get; set; }
    public string? ImageUrl { get; set; }
    public int? Horsepower { get; set; }
    public int? Range { get; set; }
    public int? TopSpeed { get; set; }
    public double? ZeroToSixty { get; set; }
    public decimal? Price { get; set; }
    public int Year { get; set; }
}

public class CreateCarDto
{
    public required string Model { get; set; }
    public string? Tagline { get; set; }
    public string? Description { get; set; }
    public string? ImageUrl { get; set; }
    public int? Horsepower { get; set; }
    public int? Range { get; set; }
    public int? TopSpeed { get; set; }
    public double? ZeroToSixty { get; set; }
    public decimal? Price { get; set; }
    public int Year { get; set; }
}
