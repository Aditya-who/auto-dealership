import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API + "/cars")
      .then(res => res.json())
      .then(setCars);
  }, []);

  return (
    <div className="container">
      <h1>Premium Auto Dealership</h1>

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