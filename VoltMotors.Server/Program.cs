var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddOpenApi();
builder.Services.AddControllers();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}
else
{
    app.UseHttpsRedirection();
}

// Enable serving static files
app.UseDefaultFiles();
app.UseStaticFiles();

// API routes
app.MapControllers();

// SPA fallback - serve index.html for all non-API routes
app.MapFallbackToFile("index.html");

app.Run();
