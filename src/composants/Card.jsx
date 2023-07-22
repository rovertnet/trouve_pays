import React from 'react'

const Card = ({country}) => {
  return (
    <li className="card">
          <img src={country.flag.svg} alt={country.translations.fra.common } />
        <div className="infos">
              <h2>{country.translations.fra.common}</h2>
              
        </div>
    </li>
  )
}

export default Card