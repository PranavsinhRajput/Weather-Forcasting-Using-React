import React from "react";
import { useWeather } from "../context/weather";

const Card = () =>{

    const weather = useWeather()

    const Last_updated = weather.data?.current?.last_updated;
    const [date, time] = Last_updated ? Last_updated.split(" ") : ["", ""];

    return(
        <div className="card">
            <img src={weather.data?.current?.condition?.icon} />
            <h5>{weather.data?.current?.condition?.text}</h5>
            <h2>{weather.data?.current?.temp_c}.C</h2>
            <h6>Date : {date} , Time:{time}</h6>
            <h5>{weather.data?.location?.name},{weather.data?.location?.region} {weather.data?.location?.country}</h5>
        </div>
    )
}

export default Card;

