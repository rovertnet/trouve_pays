import React from 'react'

const Card = ({country}) => {
  return (
    <li className="card">
        <img src={country.flags.svg} alt={"Drapeau" + country.translations.fra.common } />
        <div className="infos">
            <h2>Nom du pays</h2>
        </div>
    </li>
  )
}

export default Card