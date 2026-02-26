import { useState } from 'react';
import { cars } from '../../data/cars';
import type { Car } from '../../types';
import './Customize.css';

interface ColorOption {
  name: string;
  hex: string;
  adder: number;
}

interface PackageOption {
  name: string;
  description: string;
  adder: number;
}

const COLORS: ColorOption[] = [
  { name: 'MIDNIGHT BLACK', hex: '#1a1a1a', adder: 0 },
  { name: 'ARCTIC WHITE',   hex: '#e8e8e8', adder: 1000 },
  { name: 'PLASMA BLUE',    hex: '#0066cc', adder: 1500 },
  { name: 'NEON CYAN',      hex: '#00ffff', adder: 2000 },
  { name: 'CRIMSON RED',    hex: '#cc1111', adder: 1500 },
  { name: 'STEALTH GREY',   hex: '#555566', adder: 0 },
];

const ENGINES: PackageOption[] = [
  { name: 'STANDARD',    description: '650 HP — 400 mi range',  adder: 0 },
  { name: 'SPORT',       description: '850 HP — 450 mi range',  adder: 5000 },
  { name: 'PERFORMANCE', description: '1000 HP — 480 mi range', adder: 12000 },
  { name: 'HYPERCHARGE', description: '1200 HP — 500 mi range', adder: 25000 },
];

const WHEELS: PackageOption[] = [
  { name: 'STANDARD', description: '20" Alloy',          adder: 0 },
  { name: 'SPORT',    description: '21" Carbon Sport',   adder: 2000 },
  { name: 'AERO',     description: '22" Aero Flow',      adder: 3500 },
  { name: 'STEALTH',  description: '22" Matte Stealth',  adder: 5000 },
];

const INTERIORS: PackageOption[] = [
  { name: 'STANDARD',  description: 'Synthetic leather, 10" display',   adder: 0 },
  { name: 'PREMIUM',   description: 'Nappa leather, 15" display',        adder: 4000 },
  { name: 'EXECUTIVE', description: 'Full Alcantara, 18" display',       adder: 8000 },
];

function fmt(n: number) {
  return '$' + n.toLocaleString('en-US');
}

export default function Customize() {
  const [selectedCar, setSelectedCar] = useState<Car>(cars[0]);
  const [selectedColor, setSelectedColor] = useState<ColorOption>(COLORS[0]);
  const [selectedEngine, setSelectedEngine] = useState<PackageOption>(ENGINES[0]);
  const [selectedWheels, setSelectedWheels] = useState<PackageOption>(WHEELS[0]);
  const [selectedInterior, setSelectedInterior] = useState<PackageOption>(INTERIORS[0]);
  const [ordered, setOrdered] = useState(false);

  const basePrice = selectedCar.price;
  const totalPrice =
    basePrice +
    selectedColor.adder +
    selectedEngine.adder +
    selectedWheels.adder +
    selectedInterior.adder;

  if (ordered) {
    return (
      <div className="customize-page">
        <div className="customize-background"><div className="customize-neon-grid"></div></div>
        <div className="customize-content">
          <div className="order-confirmation">
            <div className="confirm-icon">⚡</div>
            <h2 className="confirm-title">ORDER CONFIRMED</h2>
            <p className="confirm-subtitle">YOUR VOLT IS BEING FORGED</p>
            <div className="confirm-details">
              <div className="confirm-row">
                <span className="confirm-label">MODEL</span>
                <span className="confirm-value">{selectedCar.model}</span>
              </div>
              <div className="confirm-row">
                <span className="confirm-label">COLOR</span>
                <span className="confirm-value">{selectedColor.name}</span>
              </div>
              <div className="confirm-row">
                <span className="confirm-label">ENGINE</span>
                <span className="confirm-value">{selectedEngine.name}</span>
              </div>
              <div className="confirm-row">
                <span className="confirm-label">WHEELS</span>
                <span className="confirm-value">{selectedWheels.name}</span>
              </div>
              <div className="confirm-row">
                <span className="confirm-label">INTERIOR</span>
                <span className="confirm-value">{selectedInterior.name}</span>
              </div>
              <div className="confirm-row total-row">
                <span className="confirm-label">TOTAL</span>
                <span className="confirm-value">{fmt(totalPrice)}</span>
              </div>
            </div>
            <button className="order-btn" onClick={() => setOrdered(false)}>
              CONFIGURE ANOTHER
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="customize-page">
      <div className="customize-background">
        <div className="customize-neon-grid"></div>
      </div>

      <div className="customize-content">
        <div className="customize-header">
          <h1 className="customize-title">CONFIGURE YOUR VEHICLE</h1>
          <p className="customize-subtitle">BUILD IT YOUR WAY</p>
        </div>

        <div className="configure-layout">
          {/* Left: options */}
          <div className="options-panel">

            {/* Step 1 – Model */}
            <section className="option-section">
              <h2 className="section-heading"><span className="step-num">01</span> SELECT MODEL</h2>
              <div className="model-grid">
                {cars.map((car) => (
                  <button
                    key={car.id}
                    className={`model-card ${selectedCar.id === car.id ? 'selected' : ''}`}
                    onClick={() => setSelectedCar(car)}
                  >
                    {car.imageUrl && (
                      <img src={car.imageUrl} alt={car.model} className="model-card-img" />
                    )}
                    <div className="model-card-info">
                      <span className="model-card-name">{car.model}</span>
                      <span className="model-card-price">FROM {fmt(car.price)}</span>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            {/* Step 2 – Color */}
            <section className="option-section">
              <h2 className="section-heading"><span className="step-num">02</span> EXTERIOR COLOR</h2>
              <div className="color-grid">
                {COLORS.map((c) => (
                  <button
                    key={c.name}
                    className={`color-swatch ${selectedColor.name === c.name ? 'selected' : ''}`}
                    onClick={() => setSelectedColor(c)}
                    title={c.name}
                  >
                    <span
                      className="swatch-circle"
                      style={{ background: c.hex, border: c.hex === '#e8e8e8' ? '2px solid #444' : undefined }}
                    />
                    <span className="swatch-name">{c.name}</span>
                    <span className="swatch-price">
                      {c.adder === 0 ? 'INCLUDED' : `+${fmt(c.adder)}`}
                    </span>
                  </button>
                ))}
              </div>
            </section>

            {/* Step 3 – Engine */}
            <section className="option-section">
              <h2 className="section-heading"><span className="step-num">03</span> ENGINE PACKAGE</h2>
              <div className="pkg-grid">
                {ENGINES.map((e) => (
                  <button
                    key={e.name}
                    className={`pkg-card ${selectedEngine.name === e.name ? 'selected' : ''}`}
                    onClick={() => setSelectedEngine(e)}
                  >
                    <span className="pkg-name">{e.name}</span>
                    <span className="pkg-desc">{e.description}</span>
                    <span className="pkg-price">
                      {e.adder === 0 ? 'INCLUDED' : `+${fmt(e.adder)}`}
                    </span>
                  </button>
                ))}
              </div>
            </section>

            {/* Step 4 – Wheels */}
            <section className="option-section">
              <h2 className="section-heading"><span className="step-num">04</span> WHEEL DESIGN</h2>
              <div className="pkg-grid">
                {WHEELS.map((w) => (
                  <button
                    key={w.name}
                    className={`pkg-card ${selectedWheels.name === w.name ? 'selected' : ''}`}
                    onClick={() => setSelectedWheels(w)}
                  >
                    <span className="pkg-name">{w.name}</span>
                    <span className="pkg-desc">{w.description}</span>
                    <span className="pkg-price">
                      {w.adder === 0 ? 'INCLUDED' : `+${fmt(w.adder)}`}
                    </span>
                  </button>
                ))}
              </div>
            </section>

            {/* Step 5 – Interior */}
            <section className="option-section">
              <h2 className="section-heading"><span className="step-num">05</span> INTERIOR</h2>
              <div className="pkg-grid">
                {INTERIORS.map((i) => (
                  <button
                    key={i.name}
                    className={`pkg-card ${selectedInterior.name === i.name ? 'selected' : ''}`}
                    onClick={() => setSelectedInterior(i)}
                  >
                    <span className="pkg-name">{i.name}</span>
                    <span className="pkg-desc">{i.description}</span>
                    <span className="pkg-price">
                      {i.adder === 0 ? 'INCLUDED' : `+${fmt(i.adder)}`}
                    </span>
                  </button>
                ))}
              </div>
            </section>

          </div>

          {/* Right: summary */}
          <aside className="summary-panel">
            <h2 className="summary-title">YOUR BUILD</h2>

            {selectedCar.imageUrl && (
              <img
                src={selectedCar.imageUrl}
                alt={selectedCar.model}
                className="summary-car-img"
                style={{ filter: `drop-shadow(0 0 12px ${selectedColor.hex})` }}
              />
            )}

            <div className="summary-color-bar" style={{ background: selectedColor.hex }} />

            <div className="summary-rows">
              <div className="summary-row">
                <span className="summary-label">MODEL</span>
                <span className="summary-value">{selectedCar.model}</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">BASE</span>
                <span className="summary-value">{fmt(basePrice)}</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">COLOR</span>
                <span className="summary-value">
                  {selectedColor.name}
                  {selectedColor.adder > 0 && (
                    <span className="adder"> +{fmt(selectedColor.adder)}</span>
                  )}
                </span>
              </div>
              <div className="summary-row">
                <span className="summary-label">ENGINE</span>
                <span className="summary-value">
                  {selectedEngine.name}
                  {selectedEngine.adder > 0 && (
                    <span className="adder"> +{fmt(selectedEngine.adder)}</span>
                  )}
                </span>
              </div>
              <div className="summary-row">
                <span className="summary-label">WHEELS</span>
                <span className="summary-value">
                  {selectedWheels.name}
                  {selectedWheels.adder > 0 && (
                    <span className="adder"> +{fmt(selectedWheels.adder)}</span>
                  )}
                </span>
              </div>
              <div className="summary-row">
                <span className="summary-label">INTERIOR</span>
                <span className="summary-value">
                  {selectedInterior.name}
                  {selectedInterior.adder > 0 && (
                    <span className="adder"> +{fmt(selectedInterior.adder)}</span>
                  )}
                </span>
              </div>
            </div>

            <div className="summary-total">
              <span className="total-label">TOTAL</span>
              <span className="total-value">{fmt(totalPrice)}</span>
            </div>

            <button className="order-btn" onClick={() => setOrdered(true)}>
              <span className="btn-glow"></span>
              CONFIRM ORDER
            </button>
          </aside>
        </div>
      </div>
    </div>
  );
}
