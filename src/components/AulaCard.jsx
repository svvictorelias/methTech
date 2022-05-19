import React from 'react'
import './AulaCard.css'
import Aula1 from '../assets/aula1.webp'

const AulaCard = () => {
  return (
    
      <div className="wrapper">
        <img src={Aula1} alt="Capa" />
        <div className="techs">
          <h1 class='titleCard'><a href="#">Do Zero ao primeiro Emprego FrontEnd</a></h1>
          <ul>
            <li>Html</li>
            <li>Css</li>
            <li>+2</li>
          </ul>
        </div>
    </div>
  )
}

export default AulaCard