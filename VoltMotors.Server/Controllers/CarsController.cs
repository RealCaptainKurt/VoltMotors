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
            Model = "NEXUS X1",
            Tagline = "Raw power meets neon streets",
            Description = "The NEXUS X1 redefines electric performance with its quantum-core drivetrain and reactive armor plating. Built for the urban sprawl, engineered for tomorrow's drivers.",
            ImageUrl = "/src/assets/photos/Gemini_Air.png",
            Horsepower = 1000,
            Range = 500,
            TopSpeed = 200,
            ZeroToSixty = 2.1,
            Price = 89000,
            Year = 2025
        },
        new Car
        {
            Id = Guid.NewGuid(),
            Model = "CIPHER GT",
            Tagline = "Stealth in motion",
            Description = "The CIPHER GT combines sleek aerodynamics with military-grade tech. Silent running mode and AI-assisted handling make this the ultimate night runner.",
            ImageUrl = "/src/assets/photos/Gemini_Sedan_1.png",
            Horsepower = 850,
            Range = 450,
            TopSpeed = 185,
            ZeroToSixty = 2.8,
            Price = 72000,
            Year = 2025
        },
        new Car
        {
            Id = Guid.NewGuid(),
            Model = "VOLT CRUISER",
            Tagline = "Command the highway",
            Description = "Engineered for long-haul dominance, the VOLT CRUISER features extended-range quantum batteries and adaptive suspension for maximum comfort at maximum velocity.",
            ImageUrl = "/src/assets/photos/Gemini_SUV_1.png",
            Horsepower = 650,
            Range = 600,
            TopSpeed = 160,
            ZeroToSixty = 3.5,
            Price = 65000,
            Year = 2025
        },
        new Car
        {
            Id = Guid.NewGuid(),
            Model = "APEX RUNNER",
            Tagline = "Velocity unleashed",
            Description = "Track-ready performance meets street legality. The APEX RUNNER's neural-link control system responds to your thoughts before your hands move.",
            ImageUrl = "/src/assets/photos/Gemini_Sedan_2.png",
            Horsepower = 1200,
            Range = 400,
            TopSpeed = 220,
            ZeroToSixty = 1.9,
            Price = 125000,
            Year = 2025
        },
        new Car
        {
            Id = Guid.NewGuid(),
            Model = "TITAN HAULER",
            Tagline = "Unstoppable force",
            Description = "The TITAN HAULER brings electric power to the working class. With massive torque and unbreakable cyber-steel construction, nothing stands in your way.",
            ImageUrl = "/src/assets/photos/Gemini_Truck.png",
            Horsepower = 800,
            Range = 550,
            TopSpeed = 140,
            ZeroToSixty = 4.2,
            Price = 78000,
            Year = 2025
        },
        new Car
        {
            Id = Guid.NewGuid(),
            Model = "PHANTOM SUV",
            Tagline = "Luxury meets rebellion",
            Description = "The PHANTOM SUV delivers executive comfort with street warrior capabilities. Adaptive terrain systems and reinforced chassis make every journey an adventure.",
            ImageUrl = "/src/assets/photos/Gemini_SUV_2.png",
            Horsepower = 720,
            Range = 520,
            TopSpeed = 170,
            ZeroToSixty = 3.8,
            Price = 95000,
            Year = 2025
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
            Tagline = dto.Tagline,
            Description = dto.Description,
            ImageUrl = dto.ImageUrl,
            Horsepower = dto.Horsepower,
            Range = dto.Range,
            TopSpeed = dto.TopSpeed,
            ZeroToSixty = dto.ZeroToSixty,
            Price = dto.Price,
            Year = dto.Year
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
        car.Tagline = dto.Tagline;
        car.Description = dto.Description;
        car.ImageUrl = dto.ImageUrl;
        car.Horsepower = dto.Horsepower;
        car.Range = dto.Range;
        car.TopSpeed = dto.TopSpeed;
        car.ZeroToSixty = dto.ZeroToSixty;
        car.Price = dto.Price;
        car.Year = dto.Year;

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
