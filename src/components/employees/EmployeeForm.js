import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import {addEmployee} from '../../modules/EmployeeManager';
import {getAllLocations} from '../../modules/LocationManager';
import '../animal/Animal.css' ;

export const EmployeeForm = () => {
    const history = useHistory();
    const[employee, setEmployees] = useState ({
        namw: "",
        locationId: 0
    })
    const [locations, setLocations] = useState ([]);
    const getLocations = () => {
        return getAllLocations().then(LocationsFromApi =>{
            setLocations(LocationsFromApi)
        });
    }
    useEffect(() => {
		getLocations();
	}, []);

    const handleControlledInputChange = (event) => {
        const newEmployee = {...employee};
        let selectedVal = event.target.value;
        if(event.target.id.includes("Id")){
            selectedVal = parseInt(selectedVal);
        }
        newEmployee[event.target.id] = selectedVal;
        setEmployees(newEmployee);
    }

    const handleSavedEmployee = (event) =>{

        event.preventDefault() //Prevents the browser from submitting the form

		const locationId = employee.locationId;
        if (locationId === 0) {
			window.alert("Please select a location")
		} else {

            addEmployee(employee)
            .then(() => history.push("/employees"))
        }
    }

    return (
        <form className="animalForm">
			<h2 className="animalForm__title">Employee Add Screeen</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Name:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee name" value={employee.name} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="location">Assign to location: </label>
					<select value={employee.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a location</option>
						{locations.map(l => (
							<option key={l.id} value={l.id}>
								{l.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
			<button className="btn btn-primary"
				onClick={handleSavedEmployee}>
				Add Employee
          </button>
		</form>
    )

}