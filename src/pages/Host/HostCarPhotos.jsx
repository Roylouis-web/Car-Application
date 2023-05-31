
import { useOutletContext } from "react-router-dom";

export default function HostCarPhotos() {
    const car = useOutletContext();
    return (
      <img style={{width: 90, height: 90, marginTop: 10, borderRadius: 5}} src={car.imageUrl} alt="car avatar" />
    );
};