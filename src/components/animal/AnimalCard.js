import React from "react"
import "./Animal.css"

export const AnimalCard = ({type,animal}) => (
    <section className="animal" key={animal.id}>
        <h2>{type}</h2>
        <span>{animal.id}</span>
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">{animal.breed}</div>
    </section>
)