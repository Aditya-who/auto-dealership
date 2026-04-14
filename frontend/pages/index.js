import { useEffect, useState } from "react";
import Link from "next/link";

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
          <Link key={car.id} href={`/car/${car.id}`}>
            <div className="card">
              <img src={car.image_url} alt={car.name} />
              <h3>{car.name}</h3>
              <p>₹{car.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}