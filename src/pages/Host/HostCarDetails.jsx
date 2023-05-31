import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function HostCarsDetails() {
    const id = useParams();
    const [car, setCar] = useState(null);
    useEffect(() => {
      const getCar = async () => {
         try {
            const res = await fetch('/api/host/cars/1');
            const data = await res.json();
            setCar(data.cars[0]);
         } catch(err) {
           if (err) {
            throw new Error("Something went wrong...");
           }
         }
      };
      getCar();
    }, [id]);

    const styles = {
      fontWeight: "bold",
      textDecoration: "underline",
      color: "#161616"
    };
    
    return (
      car ? (
        <div className="top">
            ← <NavLink to=".." relative="path" className="back-link">Back to all cars</NavLink>
            <div className="host-car-details-container">
            <div className="host-car-photo-container">
              <img src={ car.imageUrl } alt="car avatar" />
              <div className="host-car-detail-container">
                <div 
                >
                  { car.type }
                </div>
                <h1 className="host-car-name">
                  { car.name }
                </h1>
                <p className="host-car-price">
                  <strong>${ car.price }</strong>/day
                </p>
                </div>
              </div>
              <nav className="host-cars-navbar">
                <NavLink 
                  to='.'
                  end
                  className='nav-link'
                  style={({isActive}) => isActive ? styles : null }
                >
                  Details
                </NavLink>
                <NavLink 
                  to='pricing'
                  className='nav-link'
                  style={({isActive}) => isActive ? styles : null }
                >
                  Pricing
                </NavLink>
                <NavLink 
                  to='photos'
                  className='nav-link'
                  style={({isActive}) => isActive ? styles : null }
                >
                  Photos
                </NavLink>
            </nav>
              <Outlet context={car}/>
            </div>
          </div>
      ) : <p>Loading...</p>
    );
  };