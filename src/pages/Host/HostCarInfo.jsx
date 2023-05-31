
import { useOutletContext } from "react-router-dom";

export default function HostCarInfo() {

    const car = useOutletContext();

    return (
      <div>
        <p><strong>Name: </strong>{ car.name }</p>
        <p><strong>Category: </strong>{ car.type }</p>
        <p style={{maxWidth: 500}}><strong>Description: </strong>{ car.description }</p>
        <p><strong>Visibilty: </strong>Public</p>
      </div>
    );
};