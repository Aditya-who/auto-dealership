import { useEffect, useState } from "react";
import Link from "next/link";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=900&q=80";

export default function Home() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_API + "/cars");
        if (!response.ok) throw new Error("Failed to fetch cars");
        const data = await response.json();
        setCars(data || []);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching cars:", err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchCars();
  }, []);

  return (
    <div className="container">
      <h1>Premium Auto Dealership</h1>

      {loading && <p>Loading cars...</p>}
      {error && <p style={{color: 'red'}}>Error: {error}. Backend API: {process.env.NEXT_PUBLIC_API}</p>}

      <div className="grid">
        {cars.map(car => (
          <Link key={car.id} href={`/car/${car.id}`} className="card-link">
            <div className="card">
              <img
                src={car.image_url || FALLBACK_IMAGE}
                alt={car.name}
                onError={e => {
                  e.currentTarget.src = FALLBACK_IMAGE;
                }}
              />
              <h3>{car.name}</h3>
              <p>₹{car.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}