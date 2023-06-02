import { useLoaderData } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import getHostCars from "../../api/getHostCars";
import { requireAuth } from "../../utils";

export async function loader({ params }) {
  await requireAuth();
  return getHostCars(params.id);
};

export default function HostCarsDetails() {
    const car = useLoaderData();
    console.log(car);
    const styles = {
      fontWeight: "bold",
      textDecoration: "underline",
      color: "#161616"
    };
    
    return (
        <div className="top">
            ← <NavLink to=".." relative="path" className="back-link">Back to all cars</NavLink>
            <div className="host-car-details-container">
            <div className="host-car-photo-container">
              <img src={ car[0].imageUrl } alt="car avatar" />
              <div className="host-car-detail-container">
                <div
                className="host-car-detail-type"
                style={{
                  background: car[0].type === 'classic' ?
                  'orange': car[0].type === 'luxury' ?
                  'black': 'indigo'
              }} 
                >
                  { car[0].type }
                </div>
                <h1 className="host-car-name">
                  { car[0].name }
                </h1>
                <p className="host-car-price">
                  <strong>${ car[0].price }</strong>/day
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
    );
  };