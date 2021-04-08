import React, { useState, useEffect } from 'react';
import { getCustomerById,deleteCustomer } from '../../modules/CustomerManager';
import '../../css/detail.css';
import { useParams, useHistory } from "react-router-dom"

export const CustomerDetail = () => {
    const [cust, setCust] = useState({ name: "", address: "", pets: [], location: "" });
    const { customerId } = useParams();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);
    const handleDelete = () =>{
        setIsLoading(true);
        deleteCustomer(customerId).then(() =>{
            history.push('./customers');
        })
    }
    useEffect(() => {
        getCustomerById(customerId)
            .then(customer => {
                setCust({
                    name: customer.name,
                    address: customer.address,
                    pets: [...customer.animals, `${customer.animals.length}`]
                });
                setIsLoading(false);
            });
    }, [cust.Id]
    );

    return (
        <section className="animal">
            <h3 className="animal__name">{cust.name}</h3>
            <div className="animal__breed">{cust.address}</div>
            <ul>
                {
                    cust.pets.map(animal =>{
                        <li>{animal.name}</li>
                    })
                }
            </ul> 
            <button type="button" disabled={isLoading} onClick={handleDelete}>
                Remove Customer
       </button>
        </section>

    )


}