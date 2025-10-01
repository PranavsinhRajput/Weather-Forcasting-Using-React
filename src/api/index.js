const baseURL = "https://api.weatherapi.com/v1/current.json?key="
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
console.log(apiKey);
export const getWeatherDataForCity = async(city) =>{
    const responce = await fetch(`${baseURL}${apiKey}&q=${city}&aqi=no`);
    return await responce.json()

}


export const getWeatherDataForLocation = async(lat, lon) =>{
    const responce = await fetch(`${baseURL}${apiKey}&q=${lat},${lon}&aqi=no`);
    return await responce.json()

}
