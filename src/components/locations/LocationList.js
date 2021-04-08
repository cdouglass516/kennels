import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import { LocationCard } from './LocationCard.js'
import { deleteLocation, getAllLocations, getLocationById } from '../../modules/LocationManager';
import { getAllAnimals } from '../../modules/AnimalManager.js';

export const LocationList = () => {

    const [locations, setLocations] = useState([]);
    const history = useHistory();
    const getLocations = () => {
        return getAllLocations().then(LocationsFromApi => {
            setLocations(LocationsFromApi)
        });
    };

    const handleDeleteLocation = id => {
        deleteLocation(id).then(() => getAllLocations().then(setLocations));
    }

    useEffect(() => {
        getLocations();
    }, []);


    return (
        <React.Fragment>
            <div>
                <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { history.push("/Locations/create") }}>
                        Add Location
                    </button>
                </section>
            </div>
            <div className="container-cards">
                {locations.map(location => <LocationCard key={location.id} location={location} handleDeleteLocation={handleDeleteLocation} />)};
            </div>
        </React.Fragment>
    );
}
