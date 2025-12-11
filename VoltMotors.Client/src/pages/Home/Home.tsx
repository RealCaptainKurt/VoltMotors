import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="neon-grid"></div>
        <div className="hero-content">
          <div className="logo-container">
            <div className="volt-symbol">⚡</div>
            <h1 className="brand-title">
              <span className="volt">VOLT</span>
              <span className="motors">MOTORS</span>
            </h1>
          </div>
          <p className="tagline">THE FUTURE OF ELECTRIC VELOCITY</p>
          <div className="hero-stats">
            <div className="stat-box">
              <div className="stat-value">0-60</div>
              <div className="stat-label">IN 2.1s</div>
            </div>
            <div className="stat-box">
              <div className="stat-value">500+</div>
              <div className="stat-label">MILE RANGE</div>
            </div>
            <div className="stat-box">
              <div className="stat-value">1000</div>
              <div className="stat-label">HP PEAK</div>
            </div>
          </div>
          <div className="cta-container">
            <Link to="/cars" className="cta-button primary">
              <span className="button-glow"></span>
              EXPLORE VEHICLES
            </Link>
            <Link to="/cars" className="cta-button secondary">
              CONFIGURE YOURS
            </Link>
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>INSTANT TORQUE</h3>
          <p>Raw electric power delivered to all wheels simultaneously</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🔋</div>
          <h3>QUANTUM BATTERY</h3>
          <p>Next-gen solid-state cells with 15-minute fast charging</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🤖</div>
          <h3>AI AUTOPILOT</h3>
          <p>Neural network-powered autonomous driving system</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🛡️</div>
          <h3>CYBER ARMOR</h3>
          <p>Military-grade exoskeleton with reactive protection</p>
        </div>
      </div>

      <div className="about-section">
        <h2 className="section-title">ENGINEERED FOR TOMORROW</h2>
        <p className="section-description">
          VoltMotors doesn't just build electric vehicles. We forge machines that redefine
          the relationship between driver and road. Every angle, every surface, every electron
          is precision-engineered for maximum performance in the urban sprawl of tomorrow.
        </p>
      </div>
    </div>
  );
}