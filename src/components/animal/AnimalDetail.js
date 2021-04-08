import React, { useState, useEffect } from 'react';
import { getAnimalById, deleteAnimal } from '../../modules/AnimalManager';
import '../../css/detail.css';
import { useParams, useHistory } from "react-router-dom"


export const AnimalDetail = () => {
  const [animal, setAnimal] = useState({ name: "", breed: "", customer: "", location: "" });
  const [isLoading, setIsLoading] = useState(true);
  const { animalId } = useParams();
  const history = useHistory();
  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    deleteAnimal(animalId).then(() =>
      history.push("/animals")
    );
  };
  useEffect(() => {
    //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
    console.log("useEffect", animalId)
    getAnimalById(animalId)
      .then(animal => {
        setAnimal({
          name: animal.name,
          breed: animal.breed,
          customer: animal.customer?.name,
          location: animal.location?.name
        });
        setIsLoading(false);
      });
  }, [animalId]);

  return (
    <section className="animal">
      <h3 className="animal__name">{animal.name}</h3>
      <div className="animal__breed">{animal.breed}</div>
      {/* What's up with the question mark???? See below.*/}
      <div className="animal__location">Location: {animal.location}</div>
      <div className="animal__owner">Customer: {animal.customer}</div>
      <button type="button" disabled={isLoading} onClick={handleDelete}>
        Discharge
       </button>
    </section>
  );
}