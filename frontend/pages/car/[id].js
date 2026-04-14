import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CarViewer from "../../components/CarViewer";

export default function CarPage() {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(process.env.NEXT_PUBLIC_API + "/cars/" + id)
        .then(res => res.json())
        .then(setData);
    }
  }, [id]);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="layout">
      <div className="left">
        <h2>{data.car.name}</h2>
        <p>{data.car.description}</p>
        <h3>₹{data.car.price}</h3>

        <ul>
          <li>Engine: {data.specs.engine}</li>
          <li>Mileage: {data.specs.mileage}</li>
          <li>Power: {data.specs.power}</li>
        </ul>

        <div>
          {data.colors.map(c => (
            <span
              key={c.id}
              style={{
                background: c.color_hex,
                width: 30,
                height: 30,
                display: "inline-block",
                borderRadius: "50%"
              }}
            />
          ))}
        </div>
      </div>

      <div className="right">
        <CarViewer model={data.car.model_3d_url} />
      </div>
    </div>
  );
}