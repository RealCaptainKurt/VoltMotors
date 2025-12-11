import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import './Cars.css';

interface Car {
  id: string;
  model: string;
  tagline?: string;
  description?: string;
  imageUrl?: string;
  horsepower?: number;
  range?: number;
  topSpeed?: number;
  zeroToSixty?: number;
  price?: number;
}

export default function Cars() {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  useEffect(() => {
    api.getCars()
      .then(setCars)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const openModal = (car: Car) => {
    setSelectedCar(car);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCar(null);
    document.body.style.overflow = 'unset';
  };

  if (loading) {
    return (
      <div className="cars-page">
        <div className="cars-background">
          <div className="cars-neon-grid"></div>
        </div>
        <div className="cars-content">
          <div className="loading-container">
            <div className="loading-spinner">⚡</div>
            <div className="loading-text">LOADING VEHICLES...</div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="cars-page">
        <div className="cars-background">
          <div className="cars-neon-grid"></div>
        </div>
        <div className="cars-content">
          <div className="error-container">
            <div className="error-text">ERROR: {error}</div>
          </div>
        </div>
      </div>
    );
  }

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
                <p className="car-tagline">
                  {car.tagline || car.description || 'Pure Electric Performance'}
                </p>
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
              <p className="modal-tagline">
                {selectedCar.tagline || 'Pure Electric Performance'}
              </p>

              <div className="modal-specs">
                {selectedCar.horsepower && (
                  <div className="spec-item">
                    <div className="spec-label">Horsepower</div>
                    <div className="spec-value">{selectedCar.horsepower} HP</div>
                  </div>
                )}
                {selectedCar.range && (
                  <div className="spec-item">
                    <div className="spec-label">Range</div>
                    <div className="spec-value">{selectedCar.range} mi</div>
                  </div>
                )}
                {selectedCar.zeroToSixty && (
                  <div className="spec-item">
                    <div className="spec-label">0-60 MPH</div>
                    <div className="spec-value">{selectedCar.zeroToSixty}s</div>
                  </div>
                )}
                {selectedCar.topSpeed && (
                  <div className="spec-item">
                    <div className="spec-label">Top Speed</div>
                    <div className="spec-value">{selectedCar.topSpeed} mph</div>
                  </div>
                )}
                {selectedCar.price && (
                  <div className="spec-item">
                    <div className="spec-label">Starting Price</div>
                    <div className="spec-value">
                      ${(selectedCar.price / 1000).toFixed(0)}K
                    </div>
                  </div>
                )}
              </div>

              {selectedCar.description && (
                <p className="modal-description">{selectedCar.description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}