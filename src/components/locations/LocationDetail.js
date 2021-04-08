import React, { useState, useEffect } from 'react';
import { getLocationById, deleteLocation } from '../../modules/LocationManager';
import '../../css/detail.css';
import { useParams, useHistory } from "react-router-dom"

export const LocationDetail = () => {
    const [location, setLocation] = useState({ name: "", address: "", employees: [] });
    const [isLoading, setIsLoading] = useState(true);
    const { locationId } = useParams();
    const history = useHistory();

    const handleDelete = () => {
        setIsLoading(true);
        deleteLocation(locationId).then(() =>
            history.push("/locations")
        );
    };

    useEffect(() => {
        getLocationById(locationId)
            .then(location => {
                setLocation({
                    name: location.name,
                    address: location.address
                });
                setIsLoading(false);
            });
    }, [locationId]);

    return(
        <section className="animal">
        <h3 className="animal__name">{location.name}</h3>
        <div className="animal__breed">Address: {location.address}</div>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Remove Location
         </button>
      </section>
    )
    
}