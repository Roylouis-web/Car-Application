import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Cars() {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const [cars, setCars] = useState([]);
  useEffect(() => {
    const getCars = async () => {
        try {
            const res = await fetch('/api/cars');
            const data = await res.json();
            const filteredCars = typeFilter ? data.cars.filter(car => car.type === typeFilter)
            : data.cars;
            setCars(filteredCars);
        } catch(err) {
            throw new Error('Something went wrong');
        }
    }
    getCars();
  }, [typeFilter]);

  localStorage.setItem("cars", JSON.stringify(cars));

  const carComponents = cars.map(car => {
    return (
        <Link key={car.id} to={car.id} state={{ search: searchParams.toString() }} className="car-details-button">
            <img src={ car.imageUrl } alt='car avatar' className="car-photo"/>
            <div className="car-details">
                <h3 className="car-name">{ car.name }</h3>
                <p className="car-price">${ car.price }/day</p>
            </div>
            <div 
                className="car-type"
                style={{
                    background: car.type === 'classic' ?
                    'orange': car.type === 'luxury' ?
                    'black': 'indigo'
                }}
            >
                { car.type }
            </div>
        </Link>
    );
  });
  
  const handleClick = (key, value) => {
    setSearchParams(prev => {
      if(value === null) {
        prev.delete(key);
      } else {
        prev.set(key, value);
      }

      return prev;
    });
  };
 
  return (
    cars.length > 0 ? (
        <div className="car-container">
            <h1 className="car-h1">Explore our car options</h1>
            <nav className="car-type-navbar">
                <button className={`rugged-link ${typeFilter === 'rugged' ? 'rugged-background': ""}`} onClick={()=> handleClick("type", "rugged")}>rugged</button>
                <button className={`luxury-link ${typeFilter === 'luxury' ? 'luxury-background': ""}`}  onClick={()=> handleClick("type", "luxury")}>luxury</button>
                <button className={`classic-link ${typeFilter === 'classic' ? 'classic-background': ""}`} onClick={()=> handleClick("type", "classic")}>classic</button>
                { typeFilter && <button className="clear-filter"  onClick={()=> handleClick("type", "")}>Clear filter</button> }
            </nav>
            <div className="car-photo-container">
            { carComponents }
            </div>
       </div>
    ) : <p>Loading...</p>
  );
};