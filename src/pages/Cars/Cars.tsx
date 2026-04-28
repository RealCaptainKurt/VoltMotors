import { useState } from 'react';
import { cars } from '../../data/cars';
import type { Car } from '../../types';
import './Cars.css';

export default function Cars() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const openModal = (car: Car) => {
    setSelectedCar(car);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCar(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="cars-page">
      {/* Animated Background */}
      <div className="cars-background">
        <div className="cars-neon-grid"></div>
      </div>

      {/* Page Content */}
      <div className="cars-content">
        <div className="cars-header">
          <h1 className="cars-title">ELECTRIC FLEET</h1>
          <p className="cars-subtitle">THE FUTURE IS NOW</p>
        </div>

        <div className="cars-grid">
          {cars.map((car) => (
            <div
              key={car.id}
              className="car-card"
              onClick={() => openModal(car)}
            >
              <div className="car-card-glow"></div>

              <div className="car-image-container">
                {car.imageUrl ? (
                  <img src={car.imageUrl} alt={car.model} className="car-image" />
                ) : (
                  <div className="car-image-placeholder">🚗</div>
                )}
              </div>

              <div className="car-info">
                <h3 className="car-model">{car.model}</h3>
                <p className="car-tagline">{car.tagline}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCar && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ✕
            </button>

            <div className="modal-image-container">
              {selectedCar.imageUrl ? (
                <img src={selectedCar.imageUrl} alt={selectedCar.model} className="modal-image" />
              ) : (
                <div className="car-image-placeholder">🚗</div>
              )}
            </div>

            <div className="modal-body">
              <h2 className="modal-model">{selectedCar.model}</h2>
              <p className="modal-tagline">{selectedCar.tagline}</p>

              <div className="modal-specs">
                <div className="spec-item">
                  <div className="spec-label">Horsepower</div>
                  <div className="spec-value">{selectedCar.horsepower} HP</div>
                </div>
                <div className="spec-item">
                  <div className="spec-label">Range</div>
                  <div className="spec-value">{selectedCar.range} mi</div>
                </div>
                <div className="spec-item">
                  <div className="spec-label">0-60 MPH</div>
                  <div className="spec-value">{selectedCar.zeroToSixty}s</div>
                </div>
                <div className="spec-item">
                  <div className="spec-label">Top Speed</div>
                  <div className="spec-value">{selectedCar.topSpeed} mph</div>
                </div>
                <div className="spec-item">
                  <div className="spec-label">Starting Price</div>
                  <div className="spec-value">
                    ${(selectedCar.price / 1000).toFixed(0)}K
                  </div>
                </div>
              </div>

              <p className="modal-description">{selectedCar.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
