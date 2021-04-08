import React, { useState, useEffect } from 'react';
import {CustomerCard} from './CustomerCard.js'
import {getAllCustomers,getCustomerById, deleteCustomer} from '../../modules/CustomerManager'
export const CustomerList = () =>{

    const[custs, setCusts] = useState([]);

    const getCustomers = () =>{
        return getAllCustomers().then(customersFromApi =>{
            setCusts(customersFromApi);
        });
    };
    
    const handleDeleteCustomer = id =>{
        deleteCustomer(id)
        .then(() =>{ getAllCustomers().then(setCusts)} )
    }
    useEffect(() => {
        getCustomers();
    },[])

    return(

    <div className="container-cards" >
        {custs.map(customer => <CustomerCard key={customer.id} customer={customer} handleDeleteCustomer={handleDeleteCustomer}/>)}
    </div>
    )
}
