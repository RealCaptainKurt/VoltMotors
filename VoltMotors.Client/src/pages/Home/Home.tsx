import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to VoltMotors</h1>
      <p>Your premier destination for electric vehicles</p>
      <Link to="/cars" className="cta-button">
        Browse Our Collection
      </Link>
    </div>
  );
}