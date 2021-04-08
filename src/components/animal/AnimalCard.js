import React from "react";
import { Link } from "react-router-dom";
import "./Animal.css";
import logo from './dog.svg';
export const AnimalCard = ({ animal, handleDeleteAnimal }) => {


  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img className="img-dog" src={logo} alt="My Dog" />
        </picture>
        <h3>Name: <span className="card-petname">
          {animal.name}
        </span></h3>
        <p>Breed: {animal.breed}</p>
        <Link to={`/animals/${animal.id}`}>
          <button>Details</button>
        </Link>
        <button type="button" onClick={() => handleDeleteAnimal(animal.id)}>Discharge</button>
      </div>
    </div>
  );
}