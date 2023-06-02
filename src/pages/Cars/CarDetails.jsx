import { useParams, NavLink, useLocation, useLoaderData } from "react-router-dom";
import getCars from "../../api/getCars";

export function loader({ params }) {
    return getCars(params.id);
}

export default function CarDetails() {
    const car = useLoaderData();
    const location = useLocation();
    const back = location.state.search;
    const type = back.split("=")[1];
      return (
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
      );
};