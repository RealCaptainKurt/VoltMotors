using Microsoft.AspNetCore.Mvc;
using VoltMotors.Server.Models;

namespace VoltMotors.Server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CarsController : ControllerBase
{
    // Temporary in-memory storage (replace with database later)
    private static readonly List<Car> _cars = new()
    {
        new Car
        {
            Id = Guid.NewGuid(),
            Model = "VoltSport X1",
            Year = 2024,
            Price = 45000,
            Description = "High-performance electric sports car"
        },
        new Car
        {
            Id = Guid.NewGuid(),
            Model = "VoltSedan S3",
            Year = 2024,
            Price = 35000,
            Description = "Luxury electric sedan"
        }
    };

    [HttpGet]
    public ActionResult<IEnumerable<Car>> GetAll()
    {
        return Ok(_cars);
    }

    [HttpGet("{id}")]
    public ActionResult<Car> GetById(Guid id)
    {
        var car = _cars.FirstOrDefault(c => c.Id == id);
        if (car == null)
            return NotFound();
        
        return Ok(car);
    }

    [HttpPost]
    public ActionResult<Car> Create(CreateCarDto dto)
    {
        var car = new Car
        {
            Id = Guid.NewGuid(),
            Model = dto.Model,
            Year = dto.Year,
            Price = dto.Price,
            Description = dto.Description
        };

        _cars.Add(car);
        return CreatedAtAction(nameof(GetById), new { id = car.Id }, car);
    }

    [HttpPut("{id}")]
    public IActionResult Update(Guid id, CreateCarDto dto)
    {
        var car = _cars.FirstOrDefault(c => c.Id == id);
        if (car == null)
            return NotFound();

        car.Model = dto.Model;
        car.Year = dto.Year;
        car.Price = dto.Price;
        car.Description = dto.Description;

        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(Guid id)
    {
        var car = _cars.FirstOrDefault(c => c.Id == id);
        if (car == null)
            return NotFound();

        _cars.Remove(car);
        return NoContent();
    }
}