import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card';

const Countries = () => {
  const [data, setData] = useState([])
  const [rangeValue, setRangeValue] = useState(36)
  const radios = ["Afrique", "Amerique", "Asie", "Europe", "Océannie"]
  const [selectedRadio, setSelectedRadio] = useState("")
  useEffect(() => {
      axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data))
  }, []);

  return (
    <div className="countries">
        <ul className="radio-container">
            <input 
                type="range" 
                min="1" 
                defaultValue={rangeValue}  
                max="250" 
                onClick={(e) => setRangeValue(e.target.value)} 
            />
            {radios.map((continent) => (
                <li>
                    <input 
                        type="radio" 
                        id={continent} 
                        name='continentRadio' 
                        onChange={(e) => setSelectedRadio(e.target.id)} 
                    />
                    <label htmlFor={continent}> {continent} </label>
                </li>
            ))}
        </ul>
        <ul>
            {
                data.slice(0, rangeValue).map((country, index) => (
                    <Card key={index} country={country} />
                ))
            }
        </ul>
    </div>
  )
}

export default Countries