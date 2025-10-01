const baseURL = "https://api.weatherapi.com/v1/current.json?key=885e520abb784ec1a4654321253107"

export const getWeatherDataForCity = async(city) =>{
    const responce = await fetch(`${baseURL}&q=${city}&aqi=yes`);
    return await responce.json()

}


export const getWeatherDataForLocation = async(lat, lon) =>{
    const responce = await fetch(`${baseURL}&q=${lat},${lon}&aqi=no`);
    return await responce.json()

}
