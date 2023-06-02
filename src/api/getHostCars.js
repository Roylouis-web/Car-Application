export default async function getHostCars(id) {
    const url = id ? `/api/host/cars/${id}`: "/api/host/cars";
    const res = await fetch(url);
    if (!res.ok) {
        throw {
            message: "Failed to fetch cars",
            statusText: res.statusText,
            status: res.status
        };
    }

    const data = await res.json();
    return data.cars;
}