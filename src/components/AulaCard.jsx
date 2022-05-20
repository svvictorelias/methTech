import React from 'react'
import './AulaCard.css'

const AulaCard = ({ titulo, capa, techs }) => {
  const techsArray = techs.split(',')
  const viewArray = techsArray.slice(0,2)
  console.log(viewArray)
  return (
    <div className="wrapper">
      <img src={capa} alt="Capa" />
      <div className="techs">
        <h1 className="titleCard">
          <a href="#">{titulo}</a>
        </h1>
        <ul>
          {viewArray.map(viewTech=>(
            <li>{viewTech}</li>
          ))}
          <li>+{techsArray.length}</li>
        </ul>
      </div>
    </div>
  )
}

export default AulaCard