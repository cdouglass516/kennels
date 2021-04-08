import React from "react";
import { Link } from "react-router-dom";
import "../animal/Animal.css"

export const LocationCard = ({location, handleDeleteLocation}) => {
    return(
<section className = "animal" >
        <h3 className="animal__name">{location.id} - {location.name}</h3>
        <div className="animal__breed">{location.address}</div>
        <Link to={`/locations/${location.id}`}>
          <button>Details</button>
        </Link>
        <button type="button" onClick={() => handleDeleteLocation(location.id)}>Remove Location</button>
    </section>
    );
}