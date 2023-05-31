import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HostCars() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    const getCars = async () => {
        try {
            const data = JSON.parse(localStorage.getItem("cars"));
            setCars(data);
        } catch(err) {
            throw new Error('Something went wrong');
        }
    }
    getCars();
  }, []);

  const carComponents = cars.map(car => {
    return (
      <Link key={car.id} to={ `${car.id}`}>
        <div className="host-car-container">
            <img src={ car.imageUrl } alt="car avatar" />
            <div className="host-car-info">
              <h2 className="host-car-name">{ car.name }</h2>
              <p className="host-car-price">${ car.price }/day</p>
            </div>
        </div>
      </Link>
    );
  });

  return (
    cars.length > 0 ? (
      <div className="host-car-main-container">
        <h1 className="host-car-h1">Your listed Cars</h1>
        { carComponents }
      </div>
    ) : <p>Loading...</p>
  );
};