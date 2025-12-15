# VoltMotors

A cyberpunk-themed electric vehicle showcase built with React and ASP.NET Core.

## Architecture

The application is configured as a **single-unit deployment** where:
- The backend (ASP.NET Core) serves the built frontend as static files
- No separate frontend dev server required
- Single command to run the entire application
- Ready for single webapp deployment

## Quick Start

### First Time Setup

1. **Build the frontend:**
   ```bash
   # Windows (Command Prompt)
   build-frontend.cmd

   # Or PowerShell
   .\build-frontend.ps1
   ```

2. **Run the backend:**
   ```bash
   cd VoltMotors.Server
   dotnet run
   ```

3. **Open your browser:**
   - Navigate to `http://localhost:5276`
   - The backend serves both API (`/api/*`) and frontend files

### Development Workflow

**When you make frontend changes:**

1. Rebuild the frontend:
   ```bash
   build-frontend.cmd
   ```

2. Refresh your browser (Ctrl+F5)

**When you make backend changes:**

The backend will auto-reload thanks to hot reload.

### Project Structure

```
VoltMotors/
├── VoltMotors.Client/          # React frontend
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home/          # Cyberpunk home page
│   │   │   └── Cars/          # Electric fleet showcase
│   │   ├── assets/photos/     # Car images
│   │   └── App.tsx
│   └── dist/                   # Built files (gitignored)
│
├── VoltMotors.Server/          # ASP.NET Core backend
│   ├── Controllers/            # API endpoints
│   ├── Models/                 # Data models
│   ├── wwwroot/                # Served static files (auto-generated)
│   └── Program.cs
│
├── build-frontend.cmd          # Windows build script
└── build-frontend.ps1          # PowerShell build script
```

## Deployment

### Publishing for Production

```bash
cd VoltMotors.Server
dotnet publish -c Release -o ./publish
```

The publish process will automatically:
1. Install frontend dependencies
2. Build the React app
3. Copy frontend files to wwwroot
4. Create a single deployable package

### Deploy to Azure/IIS

The `publish` folder contains everything needed:
- Upload the entire folder to your hosting service
- Configure to run the VoltMotors.Server.dll
- No additional frontend hosting required

## Features

- **Cyberpunk Design**: Neon blue aesthetics with chunky geometric shapes
- **Electric Fleet**: 6 vehicles with detailed specs
- **Modular Cards**: Click any car for detailed specifications
- **Responsive**: Adapts from mobile to ultra-wide screens
- **Single Deployment**: One webapp instance serves everything

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite, React Router
- **Backend**: ASP.NET Core 9, C#
- **Styling**: Pure CSS with cyberpunk animations

## API Endpoints

- `GET /api/cars` - List all vehicles
- `GET /api/cars/{id}` - Get specific vehicle
- `POST /api/cars` - Add new vehicle
- `PUT /api/cars/{id}` - Update vehicle
- `DELETE /api/cars/{id}` - Remove vehicle

---

⚡ Built with Claude Code
