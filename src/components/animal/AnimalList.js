import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
//import the components we will need
import { AnimalCard } from './AnimalCard';
import { getAllAnimals, getAnimalById ,deleteAnimal} from '../../modules/AnimalManager';

export const AnimalList = () => {
  // The initial state is an empty array
  const [animals, setAnimals] = useState([]);
  const history = useHistory();
  const handleDeleteAnimal = id => {
    deleteAnimal(id)
    .then(() => getAllAnimals().then(setAnimals));
};

  const getAnimals = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return getAllAnimals().then(animalsFromAPI => {
      setAnimals(animalsFromAPI)
    });
  };

  // got the animals from the API on the component's first render
  useEffect(() => {
    getAnimals();
  }, []);

  // Finally we use .map() to "loop over" the animals array to show a list of animal cards
  return (  
    <React.Fragment> 
  <div>
    <section className="section-content">
    <button type="button"
        className="btn"
        onClick={() => {history.push("/animals/create")}}>
        Admit Animal
    </button>
  </section>
  </div>

    <div className="container-cards">
      {animals.map(animal =>
        <AnimalCard
          key={animal.id}
          animal={animal}
          handleDeleteAnimal={handleDeleteAnimal} />)}
    </div>
</React.Fragment> 
  )}