import { useState, useEffect } from "react";
import { useParams, NavLink, useLocation } from "react-router-dom";

export default function CarDetails() {
    const [car, setCar] = useState(null);
    const location = useLocation();
    const back = location.state.search;
    const type = back.split("=")[1];
    const { id } = useParams();
    useEffect(() => {
        const getCars = async () => {
            try {
                const res = await fetch(`/api/cars/${id}`);
                const data = await res.json();
                setCar(data.cars);
            } catch(err) {
                throw new Error('Something went wrong');
            }
        }
        getCars();
      }, [id]);

      return (
        car ? (
            <div className="car-detail-container">
                <div style={{ marginBottom: 10}}>← <NavLink to={back ? `..?${back}` : '..'} relative="path">{back ? `Back to all ${type} cars` : 'Back to all cars'}</NavLink></div>
                <img src={ car.imageUrl } alt='car avatar' className="car-detail-photo"/>
                <div className="car-detail-details">
                <div 
                    className="car-detail-type"
                    style={{
                        background: car.type === 'classic' ?
                        'orange': car.type === 'luxury' ?
                        'black': 'indigo'
                    }}
                >
                    { car.type }
                </div>
                    <h3 className="car-detail-name">{ car.name }</h3>
                    <p className="car-detail-price">${ car.price }/day</p>
                </div>
                <p className="car-description">
                    { car.description }
                </p>
                <button className="car-detail-button">
                    Rent this car
                </button>
            </div>
      ) : <p>Loading...</p>
      )
};