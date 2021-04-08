import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {addLocation} from '../../modules/LocationManager';
//import {getEmployees} from '../../modules/EmployeeManager';
import '../animal/Animal.css'

export const LocationForm = () => {

    const [location, setLocations] = useState ({
        name: "",
        address: ""
    });
	const [isLoading, setIsLoading] = useState(false);
	const history = useHistory();

    const handleControlledInputChange = (event) => {
            /* When changing a state object or array,
            always create a copy, make changes, and then set state.*/
            const newLoc = { ...location }
            let selectedVal = event.target.value
            // forms always provide values as strings. But we want to save the ids as numbers.

            /*
            Set the property to the new value
            using object bracket notation. */
            newLoc[event.target.id] = selectedVal
            // update state
            setLocations(newLoc)
        }

    const handleClickSaveLocation = (event) => {
            event.preventDefault() //Prevents the browser from submitting the form

                addLocation(location)
                    .then(() => history.push("/locations"))
            }
    return(
        <form className="animalForm">
        <h2 className="animalForm__title">New Location</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="name">Location name:</label>
                <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location" value={location.name} />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Address" value={location.address} />
            </div>
        </fieldset>

        <button className="btn btn-primary"
            onClick={handleClickSaveLocation}>
            Add New Location
      </button>
    </form>
    )


        }//end LocationForm
