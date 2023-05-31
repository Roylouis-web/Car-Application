import { useOutletContext } from "react-router-dom";

export default function HostCarPricing() {
    const car = useOutletContext();
    return (
        <p><strong style={{fontSize: 20}}>${ car.price }.00</strong>/day</p>
    );
};