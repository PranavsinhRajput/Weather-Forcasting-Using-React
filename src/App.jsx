import { isValidElement, useState } from 'react'

import './App.css'
import Card from './components/card'
import Button from './components/Button'
import Input from './components/Input'
import { useWeather } from './context/weather'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const weather = useWeather();
  console.log("weather",weather);

useEffect(()=>{
  weather.fetchCurrentUserLocationData()
  weather.fetchData()

},[])

  return (
    <>
    <div className="App">

      <h1>Weather Forcasting</h1>
      <Input/>
      <Button onClick={weather.fetchData} value = "Search" />
      <Card/>
      <Button value = "Refresh"/>

    </div>

      
    </>
  )
}

export default App
