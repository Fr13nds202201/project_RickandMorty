import React from 'react'
import './styles/locationinfo.css'

const LocationInfo = ({location}) => {

  return (
    <article className={'location'}>
        <h2 className="location__name">{location?.name}</h2>
        <h2 className="location__me">Jose Gonzales <span className="location__acad">Academlo</span></h2>
        <ul className="location__list">
            <li className="location__item">
            <span  className="location__label">type:</span>{location?.type}</li>
            <li className="location__item">
            <span  className="location__label">Dimension: </span>{location?.dimension}</li>
            <li className="location__item">
            <span  className="location__label">Population: </span>{location?.residents.length}</li>
        </ul>
    </article>
  )
}




export default LocationInfo