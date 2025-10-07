import { useState, useEffect } from 'react';
import { api } from '../../services/api';

export default function Cars() {
  const [cars, setCars] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api.getCars()
      .then(setCars)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="cars-page">
      <h1>Our Electric Vehicles</h1>
      <div className="cars-grid">
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            <h3>{car.model}</h3>
            <p>{car.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}